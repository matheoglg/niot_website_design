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
