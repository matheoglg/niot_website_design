import type { Metadata } from "next";
import { Proyectos } from "@/components/sections/proyectos";
import { secciones } from "@/content/sitio";

export const metadata: Metadata = {
  title: secciones.proyectos.titulo,
  description: secciones.proyectos.intro,
};

export default function Page() {
  return (
    <main>
      <Proyectos mode="full" />
    </main>
  );
}
