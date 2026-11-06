import Link from "next/link";
import { PageSection, type SectionMode } from "@/components/ui/section";
import { ExampleTag, Tag } from "@/components/ui/tag";
import { posts } from "@/content/blog";
import { etiquetas, secciones } from "@/content/sitio";

const PREVIEW = 2;

export function Blog({ mode }: { mode: SectionMode }) {
  const items = mode === "preview" ? posts.slice(0, PREVIEW) : posts;
  return (
    <PageSection id="blog" alt mode={mode} seccion={secciones.blog}>
      <div className="grid grid-cols-2 gap-8 max-laptop:grid-cols-1">
        {items.map((p) => (
          <article
            key={p.titulo}
            className="border-2 border-niot-ink bg-niot-mist p-[26px] shadow-card"
          >
            <ExampleTag show={p.ejemplo} />
            <Tag soft>{p.categoria}</Tag>
            <h3 className="mt-3 mb-2.5 text-[1.45rem]">{p.titulo}</h3>
            <p className="text-niot-muted">{p.resumen}</p>
            <Link href={p.href} className="mt-4 inline-block font-bold">
              {etiquetas.leerArticulo}
            </Link>
          </article>
        ))}
      </div>
    </PageSection>
  );
}
