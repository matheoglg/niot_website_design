import Link from "next/link";
import { etiquetas } from "@/content/sitio";

export type ButtonVariant = "primary" | "ghost" | "light";

/* Estados de hover y active sin transición: las animaciones las decide el usuario (AGENTS.md). */
const base =
  "inline-flex items-center gap-2.5 border-2 px-[22px] py-3 font-bold no-underline hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-[3px] active:translate-y-[3px] active:shadow-btn-active";

const variants: Record<ButtonVariant, string> = {
  primary: "border-niot-ink bg-niot-violet text-niot-white shadow-btn hover:shadow-btn-hover",
  ghost: "border-niot-ink bg-niot-white text-niot-ink shadow-btn hover:shadow-btn-hover",
  light:
    "border-niot-lilac bg-niot-lilac text-niot-ink shadow-btn-light hover:shadow-btn-light-hover",
};

type ButtonProps = {
  href: string;
  variant?: ButtonVariant;
  className?: string;
  /** Ícono antes del texto (decorativo). */
  icon?: React.ReactNode;
  /** Ícono después del texto (decorativo). */
  iconAfter?: React.ReactNode;
  onClick?: () => void;
  children: React.ReactNode;
};

export const isExternal = (href: string) => /^https?:\/\//.test(href);

/** Enlace con forma de botón.
 *  - Otras páginas (http/https): pestaña nueva, con aviso para lectores de pantalla.
 *  - mailto:/tel:: <a> normal (abre la app de correo).
 *  - Rutas internas: next/link. */
export function Button({
  href,
  variant = "primary",
  className = "",
  icon,
  iconAfter,
  onClick,
  children,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      {icon}
      <span>{children}</span>
      {iconAfter}
    </>
  );

  if (isExternal(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={onClick}
      >
        {content}
        <span className="sr-only">{etiquetas.pestanaNueva}</span>
      </a>
    );
  }
  if (/^(mailto|tel):/.test(href)) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} onClick={onClick}>
      {content}
    </Link>
  );
}
