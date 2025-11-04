import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

// Note: Using system font fallbacks instead of Google Fonts due to environment restrictions
// The design tokens already define the font families with proper fallbacks:
// --font-family-primary: 'Playfair Display', 'Georgia', serif (for headings)
// --font-family-secondary: 'Inter', 'system-ui', sans-serif (for body text)

export const metadata: Metadata = {
  title: "DECORD - Museo de Arte Moderno",
  description:
    "Galería de arte moderno dedicada a exhibir obras contemporáneas de artistas emergentes y establecidos.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
