import { PageSection, type SectionMode } from "@/components/ui/section";
import { albumes } from "@/content/galeria";
import { secciones } from "@/content/sitio";
import { GaleriaVisor } from "./galeria-visor";

const PREVIEW = 3;

/** Galería dividida por evento: cada álbum abre un visor con sus fotos. */
export function Galeria({ mode }: { mode: SectionMode }) {
  const items = mode === "preview" ? albumes.slice(0, PREVIEW) : albumes;
  return (
    <PageSection id="galeria" mode={mode} seccion={secciones.galeria}>
      <GaleriaVisor albumes={items} />
    </PageSection>
  );
}
