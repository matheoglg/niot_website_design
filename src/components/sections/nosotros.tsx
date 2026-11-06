import { PageSection, type SectionMode } from "@/components/ui/section";
import { nosotros, secciones } from "@/content/sitio";

export function Nosotros({ mode }: { mode: SectionMode }) {
  // En el inicio basta el primer párrafo; la página muestra todo
  const parrafos = mode === "preview" ? nosotros.parrafos.slice(0, 1) : nosotros.parrafos;
  return (
    <PageSection id="nosotros" alt mode={mode} seccion={secciones.nosotros}>
      <div className="grid grid-cols-2 items-start gap-12 max-laptop:grid-cols-1">
        <p className="font-pixel text-[clamp(1.4rem,2.6vw,1.9rem)] leading-[1.25]">
          {nosotros.destacado}
        </p>
        <div className="space-y-4">
          {parrafos.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </PageSection>
  );
}
