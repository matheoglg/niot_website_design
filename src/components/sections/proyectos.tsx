import Image from "next/image";
import { PageSection, type SectionMode } from "@/components/ui/section";
import { ExampleTag, Tag } from "@/components/ui/tag";
import { pixelPattern, type PatternName } from "@/components/ui/pixel-pattern";
import { proyectos } from "@/content/proyectos";
import { etiquetas, secciones } from "@/content/sitio";

const PREVIEW = 2;
const thumbClass = "relative aspect-[4/3] border-2 border-niot-ink max-phone:max-w-60";

export function Proyectos({ mode }: { mode: SectionMode }) {
  const items = mode === "preview" ? proyectos.slice(0, PREVIEW) : proyectos;
  return (
    <PageSection id="proyectos" mode={mode} seccion={secciones.proyectos}>
      <div>
        {items.map((p, i) => (
          <article
            key={`${p.titulo}-${i}`}
            className="grid grid-cols-[220px_1fr] gap-7 border-t-2 border-niot-lilac py-[26px] last:border-b-2 max-phone:grid-cols-1 max-phone:gap-3.5"
          >
            {p.imagen ? (
              <div className={`${thumbClass} overflow-hidden`}>
                <Image
                  src={p.imagen.src}
                  alt={p.imagen.alt}
                  fill
                  sizes="220px"
                  className="object-cover"
                />
              </div>
            ) : (
              <div
                role="img"
                aria-label={etiquetas.imagenProyecto}
                className={thumbClass}
                style={pixelPattern((i % 3) as PatternName, 28)}
              />
            )}
            <div>
              <ExampleTag show={p.ejemplo} />
              <Tag soft>{p.area}</Tag>
              <h3 className="mt-2.5 mb-2 text-[1.5rem]">{p.titulo}</h3>
              <p className="max-w-[58ch] text-niot-muted">{p.resumen}</p>
            </div>
          </article>
        ))}
      </div>
    </PageSection>
  );
}
