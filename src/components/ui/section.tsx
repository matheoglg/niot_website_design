import type { SeccionConPagina } from "@/types";
import { Button } from "./button";
import { ArrowIcon } from "./icons";
import { SectionHeading } from "./section-heading";

/** Cómo se muestra una sección: vista previa en el inicio o completa en su página. */
export type SectionMode = "preview" | "full";

type SectionProps = {
  id: string;
  /** Fondo blanco con bordes, para alternar con el fondo claro. */
  alt?: boolean;
  className?: string;
  /** Clases para el contenedor interno (.wrap), p. ej. una rejilla. */
  innerClassName?: string;
  children: React.ReactNode;
};

export function Section({
  id,
  alt = false,
  className = "",
  innerClassName = "",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-[clamp(56px,8vw,104px)] ${
        alt ? "border-y-2 border-niot-ink bg-niot-white" : ""
      } ${className}`}
    >
      <div className={`wrap ${innerClassName}`}>{children}</div>
    </section>
  );
}

type PageSectionProps = Omit<SectionProps, "innerClassName"> & {
  mode: SectionMode;
  seccion: SeccionConPagina;
};

/** Sección con página propia: en el inicio lleva h2 y botón "Ver todo"; en su página, h1. */
export function PageSection({ mode, seccion, children, ...rest }: PageSectionProps) {
  return (
    <Section {...rest}>
      <SectionHeading
        titulo={seccion.titulo}
        intro={seccion.intro}
        level={mode === "full" ? 1 : 2}
      />
      {children}
      {mode === "preview" && (
        <div className="mt-10">
          <Button href={seccion.href} variant="ghost" iconAfter={<ArrowIcon />}>
            {seccion.verTodo}
          </Button>
        </div>
      )}
    </Section>
  );
}
