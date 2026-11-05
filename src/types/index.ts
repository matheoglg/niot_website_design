/** Contenido marcado como ejemplo: se muestra con la etiqueta "Ejemplo" hasta tener el dato real. */
type Editable = { ejemplo?: boolean };

export type Enlace = { etiqueta: string; href: string };

export type RedSocial = { nombre: string; url: string };

export type Foto = { src: string; alt: string };

export type CabeceraSeccion = { titulo: string; intro?: string };

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
