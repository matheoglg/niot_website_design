import type { Album, FotoGaleria } from "@/types";

const ejemplo = (n: number): FotoGaleria[] =>
  Array.from({ length: n }, (_, i) => ({ alt: `Foto de ejemplo ${i + 1}` }));

// EDITAR: un álbum por evento. Sube las fotos a public/images/galeria/<id>/ y lístalas así:
// fotos: [{ src: "/images/galeria/taller-de-redes/01.jpg", alt: "Qué se ve en la foto" }]
// La primera foto del álbum se usa como portada.
export const albumes: Album[] = [
  {
    id: "taller-de-redes",
    titulo: "Taller de redes",
    fecha: "Fecha por confirmar",
    fotos: ejemplo(6),
    ejemplo: true,
  },
  {
    id: "charla-iot",
    titulo: "Charla sobre Internet of Things",
    fecha: "Fecha por confirmar",
    fotos: ejemplo(4),
    ejemplo: true,
  },
  {
    id: "noche-de-proyectos",
    titulo: "Noche de proyectos",
    fecha: "Fecha por confirmar",
    fotos: ejemplo(5),
    ejemplo: true,
  },
];
