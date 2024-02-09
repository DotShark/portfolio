import type { Metadata } from "next";
import "./globals.css";
import { lato } from "./lib/fonts";

export const metadata: Metadata = {
  title: "Portfolio Arnaud Petit",
  description: "Le site qui vous permet de voir les projets qui m'ont fait progresser",
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
