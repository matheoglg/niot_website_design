"use client";

import Link from "next/link";
import { useState } from "react";
import { Nayo } from "@/components/nayo";
import { Button } from "@/components/ui/button";
import { navegacion, sitio } from "@/content/sitio";

const linkClass =
  "font-medium text-niot-ink no-underline hover:text-niot-violet hover:underline hover:decoration-2 hover:underline-offset-[6px] max-tablet:border-t-2 max-tablet:border-niot-lilac max-tablet:px-5 max-tablet:py-4";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-10 border-b-2 border-niot-ink bg-niot-mist">
      <div className="wrap flex min-h-[68px] items-center justify-between gap-4">
        {/* EDITAR: cuando tengan el logo oficial, reemplaza a NaYO y el texto por la imagen */}
        <Link
          href="#inicio"
          aria-label={`${sitio.nombre}, inicio`}
          className="flex items-center gap-2.5 font-pixel text-[1.6rem] font-bold text-niot-ink no-underline"
        >
          <Nayo decorative />
          NIoT
        </Link>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((o) => !o)}
          className="hidden cursor-pointer border-2 border-niot-ink bg-niot-white px-3 py-2 text-[.95rem] font-semibold text-niot-ink max-tablet:block"
        >
          {navegacion.botonMenu}
        </button>

        <nav
          id="menu"
          aria-label="Principal"
          className={`flex items-center gap-7 max-tablet:absolute max-tablet:inset-x-0 max-tablet:top-full max-tablet:flex-col max-tablet:items-stretch max-tablet:gap-0 max-tablet:border-b-2 max-tablet:border-niot-ink max-tablet:bg-niot-mist ${
            open ? "" : "max-tablet:hidden"
          }`}
        >
          {navegacion.enlaces.map((l) => (
            <Link key={l.href} href={l.href} onClick={close} className={linkClass}>
              {l.etiqueta}
            </Link>
          ))}
          <Button
            href={navegacion.accion.href}
            onClick={close}
            className="max-tablet:mx-5 max-tablet:my-4 max-tablet:text-center"
          >
            {navegacion.accion.etiqueta}
          </Button>
        </nav>
      </div>
    </header>
  );
}
