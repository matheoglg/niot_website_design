"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { etiquetas, navegacion, sitio } from "@/content/sitio";

// El menú se pliega por debajo de "nav" (1000px), donde el logo grande y las páginas ya no caben.
const linkClass =
  "font-medium whitespace-nowrap text-niot-ink no-underline hover:text-niot-violet hover:underline hover:decoration-2 hover:underline-offset-[6px] aria-[current=page]:text-niot-violet aria-[current=page]:underline aria-[current=page]:decoration-2 aria-[current=page]:underline-offset-[6px] max-nav:border-t-2 max-nav:border-niot-lilac max-nav:px-5 max-nav:py-4";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-10 border-b-2 border-niot-ink bg-niot-mist">
      <div className="wrap flex min-h-[68px] items-center justify-between gap-6 py-2">
        <Link href="/" onClick={close} className="shrink-0">
          {/* Logo oficial: chip + NIoT + lema. Ancho suficiente para que el lema se lea. */}
          <Image
            src="/images/logo-niot.png"
            alt={sitio.logoAlt}
            width={2185}
            height={787}
            preload
            sizes="240px"
            className="h-auto w-[240px] max-tablet:w-[170px]"
          />
        </Link>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((o) => !o)}
          className="hidden cursor-pointer border-2 border-niot-ink bg-niot-white px-3 py-2 text-[.95rem] font-semibold text-niot-ink max-nav:block"
        >
          {navegacion.botonMenu}
        </button>

        <nav
          id="menu"
          aria-label={etiquetas.navegacion}
          className={`flex items-center gap-6 max-nav:absolute max-nav:inset-x-0 max-nav:top-full max-nav:flex-col max-nav:items-stretch max-nav:gap-0 max-nav:border-b-2 max-nav:border-niot-ink max-nav:bg-niot-mist ${
            open ? "" : "max-nav:hidden"
          }`}
        >
          {navegacion.enlaces.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={close}
              aria-current={pathname === l.href ? "page" : undefined}
              className={linkClass}
            >
              {l.etiqueta}
            </Link>
          ))}
          <Button
            href={navegacion.accion.href}
            onClick={close}
            className="max-nav:mx-5 max-nav:my-4 max-nav:justify-center"
          >
            {navegacion.accion.etiqueta}
          </Button>
        </nav>
      </div>
    </header>
  );
}
