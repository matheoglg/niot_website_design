import type { Metadata, Viewport } from "next";
import { Figtree, Pixelify_Sans } from "next/font/google";
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

export const metadata: Metadata = {
  title: sitio.titulo,
  description: sitio.descripcion,
};

export const viewport: Viewport = {
  themeColor: "#2A1450", // niot-ink (aquí no hay acceso a los tokens CSS)
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${figtree.variable} ${pixelify.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
