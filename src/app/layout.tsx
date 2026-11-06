import type { Metadata, Viewport } from "next";
import { Figtree, Pixelify_Sans } from "next/font/google";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { sitio } from "@/content/sitio";
import "./globals.css";

// Expuestas como --font-figtree y --font-pixelify; globals.css las mapea a --font-sans y --font-pixel
const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const pixelify = Pixelify_Sans({
  variable: "--font-pixelify",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

// El ícono de la pestaña sale de app/icon.png y app/apple-icon.png (convención de Next)
export const metadata: Metadata = {
  title: { default: sitio.titulo, template: `%s | ${sitio.nombre}` },
  description: sitio.descripcion,
};

export const viewport: Viewport = {
  themeColor: "#2A1450", // niot-ink (aquí no hay acceso a los tokens CSS)
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${figtree.variable} ${pixelify.variable} antialiased`}>
      {/* Columna a pantalla completa: en páginas cortas el pie se estira y no deja franja clara */}
      <body className="flex min-h-dvh flex-col">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
