import { Nayo } from "@/components/nayo";
import { Button } from "@/components/ui/button";
import { BrandIcon, MailIcon } from "@/components/ui/icons";
import { Section, type SectionMode } from "@/components/ui/section";
import { correo, redes } from "@/content/redes";
import { unete } from "@/content/sitio";

/* El bloque es igual en el inicio y en /sumate (ya muestra todas las formas de
   contacto), así que no lleva "Ver todo"; solo cambia el nivel del título. */
export function Sumate({ mode }: { mode: SectionMode }) {
  const Title = mode === "full" ? "h1" : "h2";
  const subTitle = "font-pixel text-[1.2rem] font-semibold text-niot-white";

  return (
    <Section
      id="unete"
      className="border-t-2 border-niot-ink bg-niot-ink text-niot-white"
      innerClassName="grid grid-cols-[1fr_auto] items-center gap-10 max-laptop:grid-cols-1"
    >
      <div>
        <Title className="text-[clamp(2rem,4.4vw,3.2rem)]">{unete.titulo}</Title>
        <p className="mt-4 max-w-[52ch] text-niot-lilac">{unete.texto}</p>

        <h3 className={`mt-8 ${subTitle}`}>{unete.redesTitulo}</h3>
        <div className="mt-4 flex flex-wrap gap-4">
          {redes.map((r) => (
            <Button key={r.nombre} href={r.url} variant="light" icon={<BrandIcon name={r.icono} />}>
              {r.nombre}
            </Button>
          ))}
        </div>

        <h3 className={`mt-8 ${subTitle}`}>{unete.correoTitulo}</h3>
        <div className="mt-4">
          <Button href={`mailto:${correo}`} variant="light" icon={<MailIcon />}>
            {correo}
          </Button>
        </div>
      </div>
      <Nayo expression="wink" scale={10} className="max-laptop:hidden" />
    </Section>
  );
}
