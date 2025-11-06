import type { Metadata } from "next";
import { Oswald, Roboto } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

// Fonts from original site
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "DECORD - Museo de Arte Moderno",
  description:
    "Galería de arte moderno dedicada a exhibir obras contemporáneas de artistas emergentes y establecidos.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml", sizes: "any" },
    ],
    apple: "/icon.svg",
  },
  openGraph: {
    title: "DECORD - Museo de Arte Moderno",
    description:
      "Galería de arte moderno dedicada a exhibir obras contemporáneas de artistas emergentes y establecidos.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${oswald.variable} ${roboto.variable}`}>
      <body>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
