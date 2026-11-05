import { Button } from "@/components/ui/button";
import { hero } from "@/content/sitio";
import { HeroStage } from "./hero-stage";

export function Hero() {
  const [primary, secondary] = hero.acciones;
  return (
    <section className="pt-[clamp(40px,7vw,88px)] pb-[clamp(56px,8vw,96px)]">
      <div className="wrap grid grid-cols-[1.1fr_.9fr] items-center gap-12 max-laptop:grid-cols-1">
        <div>
          <h1 className="text-[clamp(2.5rem,6.2vw,4.6rem)] tracking-[-.01em]">
            {hero.titulo.map((linea) => (
              <span key={linea} className="block">
                {linea}
              </span>
            ))}
          </h1>
          <p className="mt-6 max-w-[46ch] text-[1.2rem] text-niot-muted">{hero.entrada}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href={primary.href}>{primary.etiqueta}</Button>
            <Button href={secondary.href} variant="ghost">
              {secondary.etiqueta}
            </Button>
          </div>
        </div>

        <HeroStage />
      </div>
    </section>
  );
}
