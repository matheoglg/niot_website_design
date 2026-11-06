import { Blog } from "@/components/sections/blog";
import { Eventos } from "@/components/sections/eventos";
import { Galeria } from "@/components/sections/galeria";
import { Hero } from "@/components/sections/hero";
import { Nosotros } from "@/components/sections/nosotros";
import { Proyectos } from "@/components/sections/proyectos";
import { Sumate } from "@/components/sections/sumate";

/** Inicio: vista previa de cada sección, con su botón hacia la página completa. */
export default function Home() {
  return (
    <main>
      <Hero />
      <Nosotros mode="preview" />
      <Proyectos mode="preview" />
      <Eventos mode="preview" />
      <Galeria mode="preview" />
      <Blog mode="preview" />
      <Sumate mode="preview" />
    </main>
  );
}
