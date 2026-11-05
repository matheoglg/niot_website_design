import Image from "next/image";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ExampleTag, Tag } from "@/components/ui/tag";
import { pixelPattern, type PatternName } from "@/components/ui/pixel-pattern";
import { proyectos } from "@/content/proyectos";
import { etiquetas, secciones } from "@/content/sitio";

const thumbClass = "relative aspect-[4/3] border-2 border-niot-ink max-phone:max-w-60";

export function Proyectos() {
  return (
    <Section id="proyectos" alt>
      <SectionHeading {...secciones.proyectos} />
      <div>
        {proyectos.map((p, i) => (
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
    </Section>
  );
}
