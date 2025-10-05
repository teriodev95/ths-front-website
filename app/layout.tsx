import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Treasure Hunt Store | Tienda de Coleccionables Vintage y Figuras de Acción México",
  description: "Especialistas en coleccionables vintage, figuras de acción clásicas, autos a escala y juguetes retro. Hot Wheels RLC, Marvel Legends, Funko Pop, DC Comics. Si no encuentras una pieza en nuestro catálogo, te ayudamos a conseguirla.",
  keywords: [
    "tienda de coleccionables",
    "figuras de colección",
    "juguetes de colección",
    "autos a escala",
    "figuras de acción",
    "tienda geek",
    "coleccionables vintage",
    "juguetes retro",
    "figuras Marvel",
    "figuras DC Comics",
    "Funko Pop originales",
    "Hot Wheels edición especial",
    "tienda de coleccionables México",
    "Hot Wheels RLC México",
    "figuras Marvel Legends",
    "figuras Hasbro originales",
    "figuras Bandai Caballeros del Zodiaco",
    "comprar figuras Marvel Legends en México",
    "tienda online de Hot Wheels edición limitada",
    "dónde comprar Funko Pop exclusivos en México"
  ],
  authors: [{ name: "Treasure Hunt Store" }],
  openGraph: {
    title: "Treasure Hunt Store | Coleccionables Vintage México",
    description: "Especialistas en coleccionables vintage, figuras de acción, autos a escala y juguetes retro. Caza de tesoros para verdaderos coleccionistas.",
    type: "website",
    locale: "es_MX",
  },
  alternates: {
    canonical: "https://treasurehuntstore.com"
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body className="antialiased bg-[--color-background] text-[--color-text]">
        {children}
      </body>
    </html>
  );
}
