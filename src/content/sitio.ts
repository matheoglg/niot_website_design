import type { CabeceraSeccion, Enlace, SeccionConPagina } from "@/types";

export const sitio = {
  nombre: "Club NIoT",
  titulo: "Club NIoT | Networking e Internet of Things en la ESPOL",
  descripcion:
    "Club NIoT: club de investigación, innovación y desarrollo tecnológico en las áreas ICT de la ESPOL. Networking e Internet of Things.",
  pie: "Club NIoT, Networking e Internet of Things. Escuela Superior Politécnica del Litoral, Guayaquil, Ecuador.",
  logoAlt: "Club NIoT: Research. Create. Develop. Ir al inicio",
};

/* Cada sección tiene su página propia. `menu` es el nombre en el header;
   se usan nombres propios del club en lugar de los habituales (Nosotros, Proyectos…). */
export const secciones = {
  nosotros: {
    menu: "Quiénes somos",
    titulo: "Quiénes somos",
    href: "/quienes-somos",
    verTodo: "Conoce más del club",
  },
  proyectos: {
    menu: "Creaciones",
    titulo: "Creaciones",
    intro: "Lo que los miembros del club construyen y publican.",
    href: "/creaciones",
    verTodo: "Ver todas las creaciones",
  },
  eventos: {
    menu: "Agenda",
    titulo: "Agenda",
    intro: "Talleres, charlas y encuentros del club.",
    href: "/agenda",
    verTodo: "Ver la agenda completa",
  },
  galeria: {
    menu: "Galería",
    titulo: "Galería",
    intro: "Fotos de los eventos del club. Elige uno para verlas.",
    href: "/galeria",
    verTodo: "Ver toda la galería",
  },
  blog: {
    menu: "Bitácora",
    titulo: "Bitácora",
    intro: "Tutoriales y apuntes de lo que vamos aprendiendo.",
    href: "/bitacora",
    verTodo: "Ver toda la bitácora",
  },
} satisfies Record<string, SeccionConPagina>;

/* Bloques que viven dentro de la página "Quiénes somos" (no tienen página propia). */
export const bloquesNosotros = {
  areas: {
    titulo: "Qué hacemos",
    intro: "Cada proyecto del club se mueve en una o más de estas áreas.",
  },
  equipo: {
    titulo: "Equipo",
    intro: "Estudiantes que dedican parte de su semestre al club.",
  },
} satisfies Record<string, CabeceraSeccion>;

export const unete: CabeceraSeccion & {
  href: string;
  texto: string;
  redesTitulo: string;
  correoTitulo: string;
} = {
  titulo: "Súmate al club",
  href: "/sumate",
  texto:
    "Si te interesan las redes, el IoT o simplemente quieres aprender con gente que construye cosas, escríbenos por nuestras redes o por correo.",
  redesTitulo: "Síguenos",
  correoTitulo: "Escríbenos",
};

export const navegacion: { enlaces: Enlace[]; accion: Enlace; botonMenu: string } = {
  enlaces: Object.values(secciones).map((s) => ({ etiqueta: s.menu, href: s.href })),
  accion: { etiqueta: "Súmate", href: unete.href },
  botonMenu: "Menú",
};

export const hero = {
  titulo: ["Investigamos.", "Creamos.", "Desarrollamos."],
  entrada:
    "Somos el club de investigación, innovación y desarrollo tecnológico en las áreas ICT de la ESPOL. Redes, Internet of Things y mucho, muuucho código.",
  acciones: [
    { etiqueta: "Conoce el club", href: secciones.nosotros.href },
    { etiqueta: "Súmate", href: unete.href },
  ] satisfies Enlace[],
  mascotaEtiqueta: "NaYO, la mascota del Club NIoT. Pulsa para cambiar su expresión.",
  mascotaPista: "Te presentamos a NaYO. Pulsa para cambiarle la cara.",
};

export const nosotros = {
  destacado: "Un club donde las redes y los dispositivos conectados se aprenden construyéndolos.",
  parrafos: [
    "Cooperamos con la sociedad del conocimiento en el desarrollo de aplicaciones web y móviles integradas con servicios telemáticos, Internet of Things y tecnologías de la información y la comunicación.",
    "Lo hacemos para la formación académica de estudiantes e investigadores: se aprende investigando, probando y compartiendo lo que sale.",
  ],
};

export const etiquetas = {
  ejemplo: "Ejemplo",
  leerArticulo: "Leer artículo",
  imagenProyecto: "Imagen del proyecto",
  pestanaNueva: "(se abre en una pestaña nueva)",
  navegacion: "Principal",
  // Visor de la galería
  fotos: (n: number) => (n === 1 ? "1 foto" : `${n} fotos`),
  abrirAlbum: (titulo: string) => `Ver las fotos de ${titulo}`,
  fotoAnterior: "Foto anterior",
  fotoSiguiente: "Foto siguiente",
  cerrarVisor: "Cerrar",
  irAFoto: (n: number) => `Ver la foto ${n}`,
  fotoEjemplo: "Foto de ejemplo",
  sinFotos: "Este álbum aún no tiene fotos.",
};
