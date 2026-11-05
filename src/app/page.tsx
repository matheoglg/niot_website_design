import { Areas } from "@/components/sections/areas";
import { Blog } from "@/components/sections/blog";
import { Directiva } from "@/components/sections/directiva";
import { Eventos } from "@/components/sections/eventos";
import { Galeria } from "@/components/sections/galeria";
import { Hero } from "@/components/sections/hero";
import { Nosotros } from "@/components/sections/nosotros";
import { Proyectos } from "@/components/sections/proyectos";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { Sumate } from "@/components/sections/sumate";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="inicio">
        <Hero />
        <Nosotros />
        <Areas />
        <Proyectos />
        <Eventos />
        <Galeria />
        <Blog />
        <Directiva />
        <Sumate />
      </main>
      <SiteFooter />
    </>
  );
}
