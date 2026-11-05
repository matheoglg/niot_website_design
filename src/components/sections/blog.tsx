import Link from "next/link";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ExampleTag, Tag } from "@/components/ui/tag";
import { posts } from "@/content/blog";
import { etiquetas, secciones } from "@/content/sitio";

export function Blog() {
  return (
    <Section id="blog">
      <SectionHeading {...secciones.blog} />
      <div className="grid grid-cols-2 gap-8 max-laptop:grid-cols-1">
        {posts.map((p) => (
          <article
            key={p.titulo}
            className="border-2 border-niot-ink bg-niot-white p-[26px] shadow-card"
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
    </Section>
  );
}
