import type { CabeceraSeccion, Enlace, Foto } from "@/types";

export const sitio = {
  nombre: "Club NIoT",
  titulo: "Club NIoT | Networking e Internet of Things en la ESPOL",
  descripcion:
    "Club NIoT: club de investigación, innovación y desarrollo tecnológico en las áreas ICT de la ESPOL. Networking e Internet of Things.",
  pie: "Club NIoT, Networking e Internet of Things. Escuela Superior Politécnica del Litoral, Guayaquil, Ecuador.",
};

export const navegacion: { enlaces: Enlace[]; accion: Enlace; botonMenu: string } = {
  enlaces: [
    { etiqueta: "Nosotros", href: "#nosotros" },
    { etiqueta: "Proyectos", href: "#proyectos" },
    { etiqueta: "Eventos", href: "#eventos" },
    { etiqueta: "Galería", href: "#galeria" },
    { etiqueta: "Blog", href: "#blog" },
  ],
  accion: { etiqueta: "Súmate", href: "#unete" },
  botonMenu: "Menú",
};

export const hero = {
  titulo: ["Investigamos.", "Creamos.", "Desarrollamos."],
  entrada:
    "Somos el club de investigación, innovación y desarrollo tecnológico en las áreas ICT de la ESPOL. Redes, Internet of Things y mucho código.",
  acciones: [
    { etiqueta: "Conoce el club", href: "#nosotros" },
    { etiqueta: "Súmate", href: "#unete" },
  ] satisfies Enlace[],
  mascotaEtiqueta: "NaYO, la mascota del Club NIoT. Pulsa para cambiar su expresión.",
  mascotaPista: "Te presentamos a NaYO. Pulsa para cambiarle la cara.",
};

export const nosotros = {
  titulo: "Nosotros",
  destacado: "Un club donde las redes y los dispositivos conectados se aprenden construyéndolos.",
  parrafos: [
    "Cooperamos con la sociedad del conocimiento en el desarrollo de aplicaciones web y móviles integradas con servicios telemáticos, Internet of Things y tecnologías de la información y la comunicación.",
    "Lo hacemos para la formación académica de estudiantes e investigadores: se aprende investigando, probando y compartiendo lo que sale.",
  ],
};

export const secciones = {
  areas: {
    titulo: "Áreas del club",
    intro: "Cada proyecto del club se mueve en una o más de estas áreas.",
  },
  proyectos: { titulo: "Proyectos", intro: "Lo que los miembros del club construyen y publican." },
  eventos: { titulo: "Eventos", intro: "Talleres, charlas y encuentros del club." },
  galeria: { titulo: "Galería", intro: "Momentos del club." },
  blog: { titulo: "Blog", intro: "Tutoriales y apuntes de lo que vamos aprendiendo." },
  directiva: {
    titulo: "Directiva",
    intro: "Estudiantes que dedican parte de su semestre al club.",
  },
} satisfies Record<string, CabeceraSeccion>;

export const galeria: { fotos: Foto[]; vacio: string; etiquetaVacio: string } = {
  // EDITAR: añade las fotos en public/images/ y lístalas aquí, p. ej.
  // { src: "/images/taller-redes.jpg", alt: "Estudiantes armando una red en el laboratorio" }
  fotos: [],
  vacio: "Aquí van las fotos del club.",
  etiquetaVacio: "Espacio reservado para las fotos del club",
};

export const unete = {
  titulo: "Súmate al club",
  texto:
    "Si te interesan las redes, el IoT o simplemente quieres aprender con gente que construye cosas, escríbenos por nuestras redes.",
};

export const etiquetas = {
  ejemplo: "Ejemplo",
  leerArticulo: "Leer artículo",
  imagenProyecto: "Imagen del proyecto",
};
