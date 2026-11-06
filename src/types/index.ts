/** Contenido marcado como ejemplo: se muestra con la etiqueta "Ejemplo" hasta tener el dato real. */
type Editable = { ejemplo?: boolean };

export type Enlace = { etiqueta: string; href: string };

export type IconoRed = "instagram" | "x" | "facebook" | "linkedin";

export type RedSocial = { nombre: string; url: string; icono: IconoRed };

export type Foto = { src: string; alt: string };

/** Foto de un álbum. Sin `src` se muestra un relleno pixelado (contenido de ejemplo). */
export type FotoGaleria = { src?: string; alt: string };

/** Álbum de la galería: las fotos de un evento. */
export type Album = Editable & {
  /** Identificador único, en minúsculas y con guiones (p. ej. "taller-de-redes"). */
  id: string;
  titulo: string;
  fecha: string;
  fotos: FotoGaleria[];
};

export type CabeceraSeccion = { titulo: string; intro?: string };

/** Sección con página propia: se previsualiza en el inicio y enlaza a su ruta. */
export type SeccionConPagina = CabeceraSeccion & {
  /** Nombre corto para el menú. */
  menu: string;
  href: string;
  /** Texto del botón que lleva desde la vista previa a la página completa. */
  verTodo: string;
};

export type Area = { titulo: string; descripcion: string };

export type Proyecto = Editable & {
  titulo: string;
  resumen: string;
  area: string;
  /** Sin imagen se muestra un patrón pixelado de relleno. */
  imagen?: Foto;
};

export type Evento = Editable & {
  fecha: string;
  titulo: string;
  lugar: string;
};

export type Post = Editable & {
  titulo: string;
  categoria: string;
  resumen: string;
  href: string;
};

export type Miembro = Editable & {
  nombre: string;
  cargo: string;
};
