import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galería - DECORD Museo de Arte Moderno",
  description:
    "Explora nuestra colección de arte moderno: anamorfosis, fotorrealismo, surrealismo, hiperrealismo, arte performático y obras abstractas.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
