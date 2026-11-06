import type { Metadata } from "next";
import { Eventos } from "@/components/sections/eventos";
import { secciones } from "@/content/sitio";

export const metadata: Metadata = {
  title: secciones.eventos.titulo,
  description: secciones.eventos.intro,
};

export default function Page() {
  return (
    <main>
      <Eventos mode="full" />
    </main>
  );
}
