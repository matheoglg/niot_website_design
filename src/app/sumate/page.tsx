import type { Metadata } from "next";
import { Sumate } from "@/components/sections/sumate";
import { unete } from "@/content/sitio";

export const metadata: Metadata = {
  title: unete.titulo,
  description: unete.texto,
};

export default function Page() {
  return (
    <main>
      <Sumate mode="full" />
    </main>
  );
}
