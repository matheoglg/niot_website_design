import Link from "next/link";

export type ButtonVariant = "primary" | "ghost" | "light";

/* Estados de hover y active sin transición: las animaciones las decide el usuario (AGENTS.md). */
const base =
  "inline-block border-2 px-[22px] py-3 font-bold no-underline hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-[3px] active:translate-y-[3px] active:shadow-btn-active";

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
  onClick?: () => void;
  children: React.ReactNode;
};

/** Enlace con forma de botón. Internos con next/link; externos con <a>. */
export function Button({
  href,
  variant = "primary",
  className = "",
  onClick,
  children,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;
  if (/^https?:\/\//.test(href)) {
    return (
      <a href={href} rel="noopener" className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} onClick={onClick}>
      {children}
    </Link>
  );
}
