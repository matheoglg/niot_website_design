import { etiquetas } from "@/content/sitio";

type TagProps = {
  children: React.ReactNode;
  /** Variante blanca, para la etiqueta de categoría. */
  soft?: boolean;
};

export function Tag({ children, soft = false }: TagProps) {
  return (
    <span
      className={`mr-1.5 inline-block border-2 border-niot-ink px-2 text-[.82rem] leading-normal font-semibold text-niot-ink ${
        soft ? "bg-niot-white" : "bg-niot-lilac"
      }`}
    >
      {children}
    </span>
  );
}

/** Etiqueta "Ejemplo" para el contenido que aún no es real. */
export function ExampleTag({ show }: { show?: boolean }) {
  return show ? <Tag>{etiquetas.ejemplo}</Tag> : null;
}
