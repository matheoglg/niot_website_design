import { Nayo, type NayoExpression } from "@/components/nayo";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ExampleTag } from "@/components/ui/tag";
import { directiva } from "@/content/directiva";
import { secciones } from "@/content/sitio";

// Cada tarjeta lleva una cara distinta de NaYO
const FACES: NayoExpression[] = ["neutral", "happy", "wink", "surprised"];

export function Directiva() {
  return (
    <Section id="directiva" alt>
      <SectionHeading {...secciones.directiva} />
      <div className="grid grid-cols-4 gap-5 max-laptop:grid-cols-2 max-phone:grid-cols-1">
        {directiva.map((m, i) => (
          <article
            key={`${m.cargo}-${i}`}
            className="border-2 border-niot-ink bg-niot-mist p-[22px]"
          >
            <Nayo expression={FACES[i % FACES.length]} scale={2} decorative className="mb-3.5" />
            <ExampleTag show={m.ejemplo} />
            <h3 className="mt-2 text-[1.25rem]">{m.nombre}</h3>
            <p className="mt-1 text-[1rem] text-niot-muted">{m.cargo}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
