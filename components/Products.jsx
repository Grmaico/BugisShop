import React from 'react'

export default function Products(){
  const products = [
    {
      id: 'basic',
      title: 'Pacote Básico',
      price: 'R$ 9,97',
      oldPrice: 'R$ 47,00',
      discount: '-79%',
      savings: 'Você economiza R$ 37,00',
      items: ['2 Livros com 30 ','Temas Bíblicos Variados','Acesso Vitalício','Suporte por WhatsApp','Garantia de 7 dias'],
      img: '/images/Cristão.png',
    },
    {
      id: 'premium',
      title: 'Pacote Premium',
      price: 'R$ 17,00',
      oldPrice: 'R$ 256,00',
      discount: '-93%',
      savings: 'Você economiza R$ 239,00',
      items: ['Tudo do Pacote Básico','Pacote de canetinha com 24 Cores','Bônus: 3 livros com 30 paginas',],
      img: '/images/CristãoCanetinha1.png',
      locked: true,
    }
  ]

  return (
  <section id="products" className="py-12 w-full flex justify-center">
      <div className="w-full max-w-5xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Nossos Pacotes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map(p => (
            <div key={p.id} className="relative bg-white/5 rounded-lg p-6 flex flex-col items-center text-center">
              {p.locked && (
                <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center z-20">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-2">🔒</div>
                    <div className="font-bold">Em breve</div>
                  </div>
                </div>
              )}
              <div className="w-full h-40 mb-4 bg-white/3 rounded overflow-hidden flex items-center justify-center">
                {p.id === 'premium' ? (
                  <div className="relative w-full h-full flex items-center justify-center px-2 overflow-visible">
                      <img src={p.img} alt={p.title} className="max-h-full object-contain w-full z-10" />
                  </div>
                ) : (
                  <img src={p.img} alt={p.title} className="max-h-full object-contain" />
                )}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{p.title}</h3>
              <div className="flex items-center gap-3 mb-1">
                {p.oldPrice && <div className="text-sm text-red-500 line-through">{p.oldPrice}</div>}
                {p.discount && <div className="text-xs bg-red-600 text-white px-2 py-1 rounded">{p.discount}</div>}
              </div>
              <div className="text-2xl text-green-400 font-bold mb-1">{p.price}</div>
              <div className="text-sm text-gray-300 mb-4">{p.savings}</div>
              <ul className="text-left mb-6 space-y-2 w-full max-w-[320px]">
                {p.items.map((it, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-200"><span className="text-green-400">✔</span>{it}</li>
                ))}
              </ul>
              {p.locked ? (
                <button disabled className="mt-auto inline-block w-full max-w-[320px] bg-gray-700 text-gray-400 font-bold py-3 rounded cursor-not-allowed">EM BREVE</button>
              ) : (
                <a
                  href="https://pay.cakto.com.br/3fouwb7_605864"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-block w-full max-w-[320px] bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded btn-flash animate-pulse"
                  style={{ animation: 'flashPulse 1.4s ease-in-out infinite' }}
                >
                  QUERO O {p.title.toUpperCase()}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
