import React from "react"

export default function Benefits() {
  const benefits = [
    {
      title: "Coleção BoobieGoods Cristão (PDF)",
      desc: "Pacote de PDFs com devocionais, estudos, artes e materiais cristãos prontos para uso ou distribuição.",
    },
    {
      title: "Entrega imediata (Download)",
      desc: "Receba os PDFs imediatamente após a confirmação do pagamento — pronto para baixar e usar.",
    },
    {
      title: "Garantia de 7 dias",
      desc: "Se não ficar satisfeito, devolvemos seu dinheiro sem perguntas.",
      icon: "guarantee",
    },
  ]

  return (
    <section className="section-regular text-center relative">
      <h2 className="text-3xl font-extrabold mb-8 text-white drop-shadow tracking-wide font-sans">O que está incluído</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="card-glass rounded-2xl p-6 transition-transform hover:-translate-y-2 flex flex-col items-center"
          >
            {item.icon === "guarantee" && (
              <div className="w-16 h-16 mb-3 flex items-center justify-center rounded-full bg-green-500/10 icon-guard">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" fill="#10B981"/>
                  <path d="M9.3 11.3l1.4 1.4 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            )}
            <h3 className="font-bold text-xl mb-3 text-indigo-300 drop-shadow">{item.title}</h3>
            <p className="text-white/80 text-base font-light">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}