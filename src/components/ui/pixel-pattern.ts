import type { CSSProperties } from "react";

/* Tablero pixelado que hace de relleno mientras no haya foto. Solo usa tokens. */
const PAIRS = [
  ["var(--color-niot-body)", "var(--color-niot-lilac)"],
  ["var(--color-niot-ink)", "var(--color-niot-violet)"],
  ["var(--color-niot-pink)", "var(--color-niot-lilac)"],
  ["var(--color-niot-pink)", "var(--color-niot-mist)"],
] as const;

export type PatternName = 0 | 1 | 2 | 3;

export function pixelPattern(name: PatternName, size: number): CSSProperties {
  const [a, b] = PAIRS[name];
  return {
    background: `conic-gradient(${a} 25%, ${b} 0 50%, ${a} 0 75%, ${b} 0) 0 0 / ${size}px ${size}px`,
  };
}
