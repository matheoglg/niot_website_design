"use client";

/* NaYO, la mascota del Club NIoT: sprite pixel art de 16 bits (29x31 px) en <canvas>.
   Lógica de dibujo portada sin cambios desde docs/prototipo/chip.js.
   No redibujar, no cambiar la paleta ni añadir efectos sin que lo pida el usuario. */

import { useEffect, useRef } from "react";

export type NayoExpression = "neutral" | "happy" | "surprised" | "wink" | "blink";

type NayoProps = {
  /** Expresión fija, o "auto" para que rote entre ellas sola. */
  expression?: NayoExpression | "auto";
  /** Escala entera (x2, x4, x6, x8, x10) para que los píxeles no se vean borrosos. */
  scale?: number;
  className?: string;
  /** Si está dentro de un enlace o botón que ya la describe, ocúltala a lectores de pantalla. */
  decorative?: boolean;
};

const WIDTH = 29;
const HEIGHT = 31;
const TICK_MS = 160;
const ALT = "NaYO, la mascota del Club NIoT";

/* Paleta del sprite. Son datos de píxel del dibujo original, no colores de interfaz:
   el canvas necesita valores literales. Coinciden con los tokens --color-niot-outline,
   -body, -soft, -violet, -lilac, -pink y -white; el resto son tonos internos del sprite. */
const O = "#1E0F3D"; // contorno (niot-outline)
const B = "#8A4FD6"; // cuerpo (niot-body)
const BL = "#A874F0"; // luz del cuerpo (niot-soft)
const BS = "#7B3FC4"; // sombra del cuerpo
const BD = "#6E37B8"; // borde oscuro (niot-violet)
const GL = "#D9B8FF"; // brillo
const PL = "#C79BFF"; // pin (niot-lilac)
const PH = "#E4CCFF"; // luz del pin
const PD = "#8E6BC9"; // sombra del pin
const CK = "#F06FC8"; // mejillas (niot-pink)
const W = "#FFFFFF"; // brillo de ojos (niot-white)
const FLOOR = "rgba(30,15,61,.22)"; // sombra en el piso (niot-outline translúcido)

const PIN_COLORS: Record<string, string> = { K: O, L: PL, H: PH, D: PD };
const PIN_TOP = [".KKK.", "KHLDK", "KHLDK"];
const PIN_BOTTOM = ["KHLDK", "KHLDK", ".KKK."];
const PIN_BOTTOM_STEP = ["KHLDK", ".KKK."];
const PIN_LEFT = [".KK", "KHH", "KLL", "KDD", ".KK"];
const PIN_RIGHT = ["KK.", "HHK", "LLK", "DDK", "KK."];

function inBody(x: number, y: number) {
  if (x < 6 || x > 22 || y < 6 || y > 22) return false;
  const cx = Math.min(Math.max(x, 10), 18);
  const cy = Math.min(Math.max(y, 10), 18);
  return (x - cx) ** 2 + (y - cy) ** 2 <= 17;
}

function isEdge(x: number, y: number) {
  return (
    inBody(x, y) &&
    (!inBody(x - 1, y) || !inBody(x + 1, y) || !inBody(x, y - 1) || !inBody(x, y + 1))
  );
}

function autoExpression(t: number): NayoExpression {
  const k = t % 60;
  if (k === 20) return "blink";
  if (k >= 32 && k <= 43) return "happy";
  if (k === 44) return "wink";
  if (k >= 52 && k <= 56) return "surprised";
  return "neutral";
}

function draw(ctx: CanvasRenderingContext2D, t: number, expr: NayoExpression) {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);

  const rect = (x: number, y: number, w: number, h: number, c: string) => {
    ctx.fillStyle = c;
    ctx.fillRect(x, y, w, h);
  };
  // rebote: todo menos la sombra sube 1 px cada 5 tics
  const oy = Math.floor(t / 5) % 2 === 0 ? 0 : -1;
  const A = (x: number, y: number, w: number, h: number, c: string) => rect(x, y + oy, w, h, c);
  const P = (x: number, y: number, c: string) => A(x, y, 1, 1, c);
  const stamp = (x0: number, y0: number, rows: string[]) => {
    rows.forEach((row, r) => {
      [...row].forEach((ch, c) => {
        if (ch !== ".") P(x0 + c, y0 + r, PIN_COLORS[ch]);
      });
    });
  };

  // sombra en el piso
  const sw = 15 + 2 * oy;
  rect(14 - (sw >> 1), 28, sw, 1, FLOOR);
  const s2 = sw - 6;
  rect(14 - (s2 >> 1), 29, s2, 1, FLOOR);

  // pines (los de abajo se turnan, como pasitos)
  const step = Math.floor(t / 6) % 2;
  [9, 15].forEach((x0, i) => {
    stamp(x0, 3, PIN_TOP);
    stamp(x0, 23, step === i ? PIN_BOTTOM_STEP : PIN_BOTTOM);
  });
  [9, 15].forEach((y0) => {
    stamp(3, y0, PIN_LEFT);
    stamp(23, y0, PIN_RIGHT);
  });

  // cuerpo
  for (let y = 6; y <= 22; y++) {
    for (let x = 6; x <= 22; x++) {
      if (!inBody(x, y)) continue;
      if (isEdge(x, y)) {
        P(x, y, O);
        continue;
      }
      const rim = isEdge(x - 1, y) || isEdge(x + 1, y) || isEdge(x, y - 1) || isEdge(x, y + 1);
      let c = B;
      if (rim) {
        if (x <= 14 && y <= 14) c = BL;
        else if (x >= 14 && y >= 14) c = BD;
      } else if (x - 14 + (y - 14) >= 9) {
        c = BS;
      }
      P(x, y, c);
    }
  }

  // brillo, pin 1 y detalles de circuito
  for (const [gx, gy] of [
    [8, 9],
    [9, 8],
  ]) {
    if (inBody(gx, gy) && !isEdge(gx, gy)) P(gx, gy, GL);
  }
  A(9, 9, 2, 2, BD);
  A(9, 20, 3, 1, BL);
  A(17, 20, 3, 1, BL);
  P(9, 19, BL);
  P(19, 19, BL);
  A(9, 15, 2, 1, CK);
  A(18, 15, 2, 1, CK);

  // ojos
  const eye = (x: number) => {
    A(x, 11, 2, 3, O);
    P(x, 11, W);
  };
  const closed = (x: number) => A(x, 13, 2, 1, O);

  if (expr === "blink") {
    closed(11);
    closed(16);
  } else if (expr === "wink") {
    closed(11);
    eye(16);
  } else if (expr === "happy") {
    for (const x of [10, 16]) {
      P(x, 13, O);
      P(x + 1, 12, O);
      P(x + 2, 13, O);
    }
  } else if (expr === "surprised") {
    A(10, 10, 4, 4, W);
    A(15, 10, 4, 4, W);
    A(11, 11, 2, 2, O);
    A(16, 11, 2, 2, O);
  } else {
    eye(11);
    eye(16);
  }

  // boca
  if (expr === "happy") {
    A(12, 16, 5, 1, O);
    A(13, 17, 3, 1, O);
    P(14, 17, CK);
  } else if (expr === "surprised") {
    A(13, 16, 3, 2, O);
  } else {
    P(12, 16, O);
    A(13, 17, 3, 1, O);
    P(16, 16, O);
  }
}

/* Reloj compartido: todas las NaYO de la página avanzan con el mismo tic, como el
   setInterval único del prototipo. Corre solo mientras haya alguna montada y se
   detiene con prefers-reduced-motion. */
type Listener = (t: number, reduced: boolean) => void;
const listeners = new Set<Listener>();
let tick = 0;
let timer: ReturnType<typeof setInterval> | null = null;
let motionQuery: MediaQueryList | null = null;
let instances = 0;

const isReduced = () => motionQuery?.matches ?? false;

function syncTimer() {
  const run = listeners.size > 0 && !isReduced();
  if (run && !timer) {
    timer = setInterval(() => {
      tick++;
      listeners.forEach((fn) => fn(tick, false));
    }, TICK_MS);
  } else if (!run && timer) {
    clearInterval(timer);
    timer = null;
  }
}

function subscribe(fn: Listener) {
  if (!motionQuery) {
    motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    motionQuery.addEventListener("change", () => {
      syncTimer();
      listeners.forEach((l) => l(tick, isReduced()));
    });
  }
  listeners.add(fn);
  fn(tick, isReduced());
  syncTimer();
  return () => {
    listeners.delete(fn);
    syncTimer();
  };
}

export function Nayo({
  expression = "auto",
  scale = 1,
  className = "",
  decorative = false,
}: NayoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // desfase por instancia para que no se muevan todas al unísono (como en el prototipo)
  const offsetRef = useRef<number | null>(null);
  const s = Math.max(1, Math.round(scale));

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    if (offsetRef.current === null) offsetRef.current = instances++ * 9;
    const offset = offsetRef.current;

    // subscribe() dibuja al instante: un cambio de expresión se ve sin esperar al tic
    return subscribe((t, reduced) => {
      const tt = reduced ? 0 : t + offset;
      const expr = expression === "auto" ? (reduced ? "neutral" : autoExpression(tt)) : expression;
      draw(ctx, tt, expr);
    });
  }, [expression]);

  return (
    <canvas
      ref={canvasRef}
      width={WIDTH}
      height={HEIGHT}
      {...(decorative ? { "aria-hidden": true } : { role: "img", "aria-label": ALT })}
      style={{ width: WIDTH * s, height: HEIGHT * s }}
      className={`block [image-rendering:pixelated] ${className}`}
    />
  );
}
