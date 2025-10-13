import React from "react"

export default function Header() {
  return (
    <header className="w-full">
      <nav className="w-full max-w-6xl mx-auto flex items-center justify-between py-6 px-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center shadow-lg">⚡</div>
          <span className="font-bold tracking-widest text-xl">BUGISSHOP</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm text-white/80">
          
        </div>
        <div className="hidden md:block">
          <a href="#socials" className="btn-ghost">Contate-nos</a>
        </div>
      </nav>

      <section className="flex flex-col items-center text-center py-16 px-6">
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-cyan-200 tracking-widest">
          BUGISSHOP
        </h1>
        <div className="glow-bar mb-6" />
        <p className="text-white/80 max-w-3xl mb-8 text-lg">
          Pré-venda especial: garanta acesso antecipado ao nosso produto com desconto de lançamento, bônus exclusivos e garantia de 7 dias.
        </p>
        <div className="flex gap-4">
          <a className="btn-ghost" href="#audience">Nosso produto</a>
          <a className="btn-primary" href="#products">Comprar</a>
        </div>
      </section>
    </header>
  )
}