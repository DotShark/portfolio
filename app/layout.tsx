import type { Metadata, Viewport } from "next";
import "./globals.css";
import { lato } from "./lib/fonts";

export const metadata: Metadata = {
  title: "Portfolio Arnaud Petit",
  description: "Le site qui vous permet de voir les projets qui m'ont fait progresser",
};

export const viewport: Viewport = {
  themeColor: "#2C2848"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
