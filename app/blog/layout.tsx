import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - DECORD Museo de Arte Moderno",
  description:
    "Lee nuestras últimas publicaciones sobre arte moderno, tendencias, artistas destacados y noticias del mundo del arte contemporáneo.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
