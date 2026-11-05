import Image from "next/image";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { pixelPattern, type PatternName } from "@/components/ui/pixel-pattern";
import { galeria, secciones } from "@/content/sitio";

// Forma del mosaico: cuántas columnas/filas ocupa cada pieza (se repite cada 6)
const TILES = [
  "col-span-2 row-span-2",
  "",
  "",
  "col-span-2",
  "",
  "col-span-3 max-laptop:col-span-1",
];
// Relleno mientras no haya fotos: violeta, tinta y rosa sobre fondo claro
const PATTERNS: PatternName[] = [0, 1, 3];

const gridClass = "grid auto-rows-[130px] grid-cols-4 gap-3 max-laptop:grid-cols-2";
const tileClass = "border-2 border-niot-ink";

export function Galeria() {
  const { fotos } = galeria;

  return (
    <Section id="galeria" alt>
      <SectionHeading {...secciones.galeria} />
      {fotos.length > 0 ? (
        <div className={gridClass}>
          {fotos.map((f, i) => (
            <div key={f.src} className={`relative overflow-hidden ${tileClass} ${TILES[i % 6]}`}>
              <Image
                src={f.src}
                alt={f.alt}
                fill
                sizes="(max-width: 900px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      ) : (
        <>
          <div role="img" aria-label={galeria.etiquetaVacio} className={gridClass}>
            {TILES.map((span, i) => (
              <div
                key={i}
                className={`${tileClass} ${span}`}
                style={pixelPattern(PATTERNS[i % 3], 26)}
              />
            ))}
          </div>
          <p className="mt-4 text-[.95rem] text-niot-muted">{galeria.vacio}</p>
        </>
      )}
    </Section>
  );
}
