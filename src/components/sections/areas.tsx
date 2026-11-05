import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { areas } from "@/content/areas";
import { secciones } from "@/content/sitio";

export function Areas() {
  return (
    <Section id="areas">
      <SectionHeading {...secciones.areas} />
      <div className="grid grid-cols-3 gap-5 max-laptop:grid-cols-2 max-phone:grid-cols-1">
        {areas.map((a) => (
          <article
            key={a.titulo}
            className="border-2 border-niot-ink bg-niot-white p-[22px] hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-card-hover"
          >
            <h3 className="text-[1.4rem]">{a.titulo}</h3>
            <p className="mt-2.5 text-[1rem] text-niot-muted">{a.descripcion}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
