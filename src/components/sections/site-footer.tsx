import { redes } from "@/content/redes";
import { sitio } from "@/content/sitio";

export function SiteFooter() {
  return (
    <footer className="bg-niot-ink pb-10 text-niot-lilac">
      <div className="wrap flex flex-wrap justify-between gap-4 border-t-2 border-niot-violet pt-7 text-[.98rem]">
        <p>{sitio.pie}</p>
        <p>
          {redes.map((r) => (
            <a key={r.nombre} href={r.url} rel="noopener" className="mr-[18px] text-niot-white">
              {r.nombre}
            </a>
          ))}
        </p>
      </div>
    </footer>
  );
}
