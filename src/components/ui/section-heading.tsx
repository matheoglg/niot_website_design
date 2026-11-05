import type { CabeceraSeccion } from "@/types";

/** Título con la línea de "pista de circuito" que termina en un pad cuadrado. */
export function SectionHeading({ titulo, intro }: CabeceraSeccion) {
  return (
    <div className="mb-10 max-w-[62ch]">
      <h2 className="flex items-center gap-[18px] text-[clamp(1.9rem,4vw,2.8rem)]">
        {titulo}
        <span aria-hidden="true" className="flex min-w-10 flex-1 items-center gap-0.5">
          <span className="h-0.5 flex-1 bg-niot-lilac" />
          <span className="size-2.5 bg-niot-violet" />
        </span>
      </h2>
      {intro && <p className="mt-3.5 text-niot-muted">{intro}</p>}
    </div>
  );
}
