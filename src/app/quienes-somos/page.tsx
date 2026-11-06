import type { Metadata } from "next";
import { Areas } from "@/components/sections/areas";
import { Directiva } from "@/components/sections/directiva";
import { Nosotros } from "@/components/sections/nosotros";
import { secciones, sitio } from "@/content/sitio";

export const metadata: Metadata = {
  title: secciones.nosotros.titulo,
  description: sitio.descripcion,
};

/** Quiénes somos: el club, lo que hacemos y el equipo en una sola página. */
export default function Page() {
  return (
    <main>
      <Nosotros mode="full" />
      <Areas />
      <Directiva />
    </main>
  );
}
