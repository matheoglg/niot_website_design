import type { Metadata } from "next";
import { Galeria } from "@/components/sections/galeria";
import { secciones } from "@/content/sitio";

export const metadata: Metadata = {
  title: secciones.galeria.titulo,
  description: secciones.galeria.intro,
};

export default function Page() {
  return (
    <main>
      <Galeria mode="full" />
    </main>
  );
}
