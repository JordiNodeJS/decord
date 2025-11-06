import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre Nosotros - DECORD Museo de Arte Moderno",
  description:
    "Conoce la historia y misión de DECORD, galería dedicada a exhibir obras de arte moderno y contemporáneo de artistas emergentes y establecidos.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
