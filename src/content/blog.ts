import type { Post } from "@/types";

// EDITAR: artículos reales. Cambia `href` por la página del artículo cuando exista.
export const posts: Post[] = [
  {
    titulo: "Tu primera red en Cisco Packet Tracer",
    categoria: "Tutorial",
    resumen: "Resumen corto del artículo en dos líneas.",
    href: "/bitacora",
    ejemplo: true,
  },
  {
    titulo: "Qué es un protocolo y por qué importa",
    categoria: "Apuntes",
    resumen: "Resumen corto del artículo en dos líneas.",
    href: "/bitacora",
    ejemplo: true,
  },
];
