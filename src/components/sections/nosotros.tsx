import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { nosotros } from "@/content/sitio";

export function Nosotros() {
  return (
    <Section id="nosotros" alt>
      <SectionHeading titulo={nosotros.titulo} />
      <div className="grid grid-cols-2 items-start gap-12 max-laptop:grid-cols-1">
        <p className="font-pixel text-[clamp(1.4rem,2.6vw,1.9rem)] leading-[1.25]">
          {nosotros.destacado}
        </p>
        <div className="space-y-4">
          {nosotros.parrafos.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
