import type { Metadata } from "next";
import { Blog } from "@/components/sections/blog";
import { secciones } from "@/content/sitio";

export const metadata: Metadata = {
  title: secciones.blog.titulo,
  description: secciones.blog.intro,
};

export default function Page() {
  return (
    <main>
      <Blog mode="full" />
    </main>
  );
}
