"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowIcon, CloseIcon } from "@/components/ui/icons";
import { pixelPattern, type PatternName } from "@/components/ui/pixel-pattern";
import { ExampleTag } from "@/components/ui/tag";
import { etiquetas } from "@/content/sitio";
import type { Album, FotoGaleria } from "@/types";

// Relleno de las fotos de ejemplo: violeta, tinta, rosa
const PATTERNS: PatternName[] = [0, 1, 3];
const pattern = (i: number, size: number) => pixelPattern(PATTERNS[i % PATTERNS.length], size);

/** Foto o, si aún no hay archivo, su relleno pixelado. */
function Foto({
  foto,
  index,
  sizes,
  patternSize,
  fit = "cover",
}: {
  foto: FotoGaleria;
  index: number;
  sizes: string;
  patternSize: number;
  fit?: "cover" | "contain";
}) {
  if (foto.src) {
    return (
      <Image
        src={foto.src}
        alt={foto.alt}
        fill
        sizes={sizes}
        className={fit === "cover" ? "object-cover" : "object-contain"}
      />
    );
  }
  return (
    <span aria-hidden="true" className="absolute inset-0" style={pattern(index, patternSize)} />
  );
}

const squareButton =
  "grid size-12 shrink-0 cursor-pointer place-items-center border-2 border-niot-ink bg-niot-white text-niot-ink shadow-btn hover:shadow-btn-hover active:shadow-btn-active";

export function GaleriaVisor({ albumes }: { albumes: Album[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [abierto, setAbierto] = useState<number | null>(null);
  const [actual, setActual] = useState(0);

  const album = abierto === null ? null : albumes[abierto];
  const total = album?.fotos.length ?? 0;
  const foto = album?.fotos[actual];

  // <dialog> nativo en modo modal: oscurece el fondo, atrapa el foco y cierra con Esc
  useEffect(() => {
    const dialog = dialogRef.current;
    if (album && dialog && !dialog.open) dialog.showModal();
  }, [album]);

  const abrir = (i: number) => {
    setActual(0);
    setAbierto(i);
  };
  const cerrar = () => dialogRef.current?.close();
  const mover = (paso: number) => {
    if (total > 0) setActual((a) => (a + paso + total) % total);
  };

  return (
    <>
      <ul className="grid grid-cols-3 gap-6 max-laptop:grid-cols-2 max-phone:grid-cols-1">
        {albumes.map((a, i) => (
          <li key={a.id} className="flex">
            <button
              type="button"
              aria-haspopup="dialog"
              aria-label={etiquetas.abrirAlbum(a.titulo)}
              onClick={() => abrir(i)}
              className="flex w-full cursor-pointer flex-col border-2 border-niot-ink bg-niot-white text-left text-niot-ink shadow-card hover:-translate-x-[3px] hover:-translate-y-[3px]"
            >
              <span className="relative block aspect-[4/3] overflow-hidden border-b-2 border-niot-ink">
                {a.fotos[0] && (
                  <Foto
                    foto={a.fotos[0]}
                    index={i}
                    sizes="(max-width: 620px) 100vw, 360px"
                    patternSize={26}
                  />
                )}
              </span>
              <span className="block p-5">
                <ExampleTag show={a.ejemplo} />
                <span className="mt-2.5 block font-pixel text-[1.35rem] leading-[1.1] font-semibold">
                  {a.titulo}
                </span>
                <span className="mt-2 block text-[.95rem] text-niot-muted">
                  {a.fecha} · {etiquetas.fotos(a.fotos.length)}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {/* El clic en el fondo oscuro (fuera del contenido) cierra el visor */}
      <dialog
        ref={dialogRef}
        aria-labelledby="visor-titulo"
        onClose={() => setAbierto(null)}
        onClick={(e) => {
          if (e.target === dialogRef.current) cerrar();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") mover(-1);
          if (e.key === "ArrowRight") mover(1);
        }}
        className="m-auto w-[min(1040px,calc(100%-32px))] max-w-none overflow-visible bg-transparent p-0 text-niot-white backdrop:bg-niot-ink/85"
      >
        {album && (
          <div className="flex flex-col gap-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 id="visor-titulo" className="text-[clamp(1.4rem,3vw,2rem)]">
                  {album.titulo}
                </h2>
                <p className="mt-1 text-niot-lilac">
                  {album.fecha}
                  {total > 0 && (
                    <span aria-live="polite">
                      {" "}
                      · {actual + 1} / {total}
                    </span>
                  )}
                </p>
              </div>
              <button
                type="button"
                onClick={cerrar}
                aria-label={etiquetas.cerrarVisor}
                className={squareButton}
              >
                <CloseIcon />
              </button>
            </div>

            {foto ? (
              <>
                <div className="relative">
                  <div className="relative aspect-[3/2] max-h-[62dvh] w-full overflow-hidden border-2 border-niot-white bg-niot-ink">
                    <Foto
                      foto={foto}
                      index={actual}
                      sizes="(max-width: 1040px) 100vw, 1040px"
                      patternSize={40}
                      fit="contain"
                    />
                    {!foto.src && (
                      <span className="absolute bottom-3 left-1/2 -translate-x-1/2 border-2 border-niot-ink bg-niot-white px-3 py-1 text-[.9rem] font-semibold whitespace-nowrap text-niot-ink">
                        {foto.alt}
                      </span>
                    )}
                  </div>
                  {total > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() => mover(-1)}
                        aria-label={etiquetas.fotoAnterior}
                        className={`${squareButton} absolute top-1/2 left-3 -translate-y-1/2`}
                      >
                        <ArrowIcon className="size-5 rotate-180" />
                      </button>
                      <button
                        type="button"
                        onClick={() => mover(1)}
                        aria-label={etiquetas.fotoSiguiente}
                        className={`${squareButton} absolute top-1/2 right-3 -translate-y-1/2`}
                      >
                        <ArrowIcon className="size-5" />
                      </button>
                    </>
                  )}
                </div>
                {foto.src && <p className="text-niot-lilac">{foto.alt}</p>}

                {/* Miniaturas: saltar directo a una foto */}
                <ul className="flex gap-2 overflow-x-auto p-1">
                  {album.fotos.map((f, i) => (
                    <li key={i} className="shrink-0">
                      <button
                        type="button"
                        onClick={() => setActual(i)}
                        aria-label={etiquetas.irAFoto(i + 1)}
                        aria-current={i === actual ? "true" : undefined}
                        className="relative block size-16 cursor-pointer overflow-hidden border-2 border-niot-lilac opacity-60 hover:opacity-100 aria-[current=true]:border-niot-pink aria-[current=true]:opacity-100"
                      >
                        <Foto foto={f} index={i} sizes="64px" patternSize={12} />
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="text-niot-lilac">{etiquetas.sinFotos}</p>
            )}
          </div>
        )}
      </dialog>
    </>
  );
}
