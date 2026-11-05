"use client";

import { useState } from "react";
import { Nayo, type NayoExpression } from "@/components/nayo";
import { hero } from "@/content/sitio";

const SEQUENCE: (NayoExpression | "auto")[] = ["auto", "happy", "surprised", "wink"];

/** Escenario del hero: al pulsar a NaYO cambia de expresión. */
export function HeroStage() {
  const [index, setIndex] = useState(0);

  return (
    <div className="w-full max-w-[420px] justify-self-center text-center">
      <button
        type="button"
        aria-label={hero.mascotaEtiqueta}
        onClick={() => setIndex((i) => (i + 1) % SEQUENCE.length)}
        className="grid aspect-square w-full cursor-pointer place-items-center border-2 border-niot-ink bg-niot-white bg-[radial-gradient(var(--color-niot-lilac)_1.5px,transparent_1.5px)] bg-size-[20px_20px] p-0 shadow-hard active:translate-x-[3px] active:translate-y-[3px] active:shadow-hard-active"
      >
        <Nayo expression={SEQUENCE[index]} scale={10} decorative />
      </button>
      <p className="mt-[22px] text-[.95rem] text-niot-muted">{hero.mascotaPista}</p>
    </div>
  );
}
