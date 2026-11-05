import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ExampleTag } from "@/components/ui/tag";
import { eventos } from "@/content/eventos";
import { secciones } from "@/content/sitio";

export function Eventos() {
  return (
    <Section id="eventos">
      <SectionHeading {...secciones.eventos} />
      <div>
        {eventos.map((e) => (
          <article
            key={e.titulo}
            className="grid grid-cols-[200px_1fr] items-baseline gap-7 border-t-2 border-niot-ink py-6 last:border-b-2 max-phone:grid-cols-1 max-phone:gap-3.5"
          >
            <div className="font-pixel text-[1.5rem] font-semibold text-niot-violet">{e.fecha}</div>
            <div>
              <ExampleTag show={e.ejemplo} />
              <h3 className="text-[1.4rem]">{e.titulo}</h3>
              <p className="mt-1.5 text-niot-muted">{e.lugar}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
