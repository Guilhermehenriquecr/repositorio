import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Guilherme Henrique Cardoso — Portfólio",
  description:
    "Portfólio de Guilherme Henrique Cardoso — Engenheiro de Dados & Especialista em Otimização. Projetos em Python, VRP, Machine Learning e Full-Stack.",
  keywords: [
    "portfólio",
    "data engineer",
    "otimização",
    "VRP",
    "Python",
    "machine learning",
    "Guilherme Cardoso",
  ],
  authors: [{ name: "Guilherme Henrique Cardoso" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#050A14] text-white antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
