import type { CabeceraSeccion } from "@/types";

type SectionHeadingProps = CabeceraSeccion & {
  /** h1 en la página propia de la sección; h2 en la vista previa del inicio. */
  level?: 1 | 2;
};

/** Título con la línea de "pista de circuito" que termina en un pad cuadrado. */
export function SectionHeading({ titulo, intro, level = 2 }: SectionHeadingProps) {
  const Tag = level === 1 ? "h1" : "h2";
  return (
    <div className="mb-10 max-w-[62ch]">
      <Tag
        className={`flex items-center gap-[18px] ${
          level === 1 ? "text-[clamp(2.2rem,5vw,3.4rem)]" : "text-[clamp(1.9rem,4vw,2.8rem)]"
        }`}
      >
        {titulo}
        <span aria-hidden="true" className="flex min-w-10 flex-1 items-center gap-0.5">
          <span className="h-0.5 flex-1 bg-niot-lilac" />
          <span className="size-2.5 bg-niot-violet" />
        </span>
      </Tag>
      {intro && <p className="mt-3.5 text-niot-muted">{intro}</p>}
    </div>
  );
}
