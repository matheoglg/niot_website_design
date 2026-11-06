import { BrandIcon, MailIcon } from "@/components/ui/icons";
import { correo, redes } from "@/content/redes";
import { etiquetas, sitio } from "@/content/sitio";

const linkClass = "inline-flex items-center gap-1.5 text-niot-white";

export function SiteFooter() {
  return (
    <footer className="grow bg-niot-ink pb-10 text-niot-lilac">
      <div className="wrap flex flex-wrap justify-between gap-4 border-t-2 border-niot-violet pt-7 text-[.98rem]">
        <p className="max-w-[60ch]">{sitio.pie}</p>
        <ul className="flex flex-wrap gap-x-[18px] gap-y-2">
          {redes.map((r) => (
            <li key={r.nombre}>
              <a href={r.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
                <BrandIcon name={r.icono} className="size-4" />
                {r.nombre}
                <span className="sr-only">{etiquetas.pestanaNueva}</span>
              </a>
            </li>
          ))}
          <li>
            <a href={`mailto:${correo}`} className={linkClass}>
              <MailIcon className="size-4" />
              {correo}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
