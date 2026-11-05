import { Nayo } from "@/components/nayo";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { redes } from "@/content/redes";
import { unete } from "@/content/sitio";

export function Sumate() {
  return (
    <Section
      id="unete"
      className="border-t-2 border-niot-ink bg-niot-ink text-niot-white"
      innerClassName="grid grid-cols-[1fr_auto] items-center gap-10 max-laptop:grid-cols-1"
    >
      <div>
        <h2 className="text-[clamp(2rem,4.4vw,3.2rem)]">{unete.titulo}</h2>
        <p className="mt-4 max-w-[52ch] text-niot-lilac">{unete.texto}</p>
        <div className="mt-7 flex flex-wrap gap-4">
          {redes.map((r) => (
            <Button key={r.nombre} href={r.url} variant="light">
              {r.nombre}
            </Button>
          ))}
        </div>
      </div>
      <Nayo expression="wink" scale={6} className="max-laptop:hidden" />
    </Section>
  );
}
