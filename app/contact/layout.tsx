import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto - DECORD Museo de Arte Moderno",
  description:
    "Ponte en contacto con DECORD. Visita nuestra galería o envíanos un mensaje. Horario: Lunes-Viernes 8AM-6PM, Sábado-Domingo 8AM-2PM.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
