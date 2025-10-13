import React from "react"

export default function Benefits() {
  const benefits = [
    {
      title: "Entrega rápida",
      desc: "Receba acesso imediato ao produto digital assim que for lançado.",
    },
    {
      title: "Garantia de satisfação",
      desc: "30 dias de garantia ou seu dinheiro de volta na compra oficial.",
    },
    {
      title: "Bônus exclusivos",
      desc: "Materiais extras e sessões ao vivo incluídas na pré-venda.",
    },
  ]

  return (
    <section className="section-regular text-center relative">
      <h2 className="text-3xl font-extrabold mb-8 text-white drop-shadow tracking-wide font-sans">Vantagens da Oferta</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="card-glass rounded-2xl p-6 transition-transform hover:-translate-y-2"
          >
            <h3 className="font-bold text-xl mb-3 text-indigo-300 drop-shadow">{item.title}</h3>
            <p className="text-white/80 text-base font-light">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}