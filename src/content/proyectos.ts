import type { Proyecto } from "@/types";

const resumenEjemplo =
  "Una o dos frases sobre qué resuelve, con qué tecnología se hizo y quiénes participaron.";

// EDITAR: reemplaza estos tres ejemplos por los proyectos reales.
// Para la foto, añade `imagen: { src: "/images/archivo.jpg", alt: "..." }`.
export const proyectos: Proyecto[] = [
  { titulo: "Nombre del proyecto", area: "IoT", resumen: resumenEjemplo, ejemplo: true },
  { titulo: "Nombre del proyecto", area: "Networking", resumen: resumenEjemplo, ejemplo: true },
  { titulo: "Nombre del proyecto", area: "Web y móvil", resumen: resumenEjemplo, ejemplo: true },
];
