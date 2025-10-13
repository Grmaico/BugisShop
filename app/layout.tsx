import "./globals.css";

export const metadata = {
  title: "Produto em Breve — Pré-venda",
  description: "Página de apresentação para lançamento de produto. Em breve: oferta, bônus e pré-venda.",
};

import { ReactNode } from "react";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-gradient-to-br from-[#181824] via-[#23243a] to-[#181824] text-white font-sans relative overflow-x-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="w-full h-full bg-gradient-to-br from-[#23243a] via-[#181824] to-[#23243a] opacity-90"></div>
          <div className="absolute top-0 left-0 w-2/3 h-1/3 bg-indigo-500 blur-3xl opacity-30 rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-1/4 bg-blue-400 blur-2xl opacity-20 rounded-full"></div>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}