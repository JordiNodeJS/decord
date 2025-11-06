import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eventos - DECORD Museo de Arte Moderno",
  description:
    "Descubre nuestros próximos eventos, exposiciones y actividades en DECORD. Talleres, conferencias y exhibiciones de arte contemporáneo.",
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
