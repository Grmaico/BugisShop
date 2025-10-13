"use client"

import React, { useState } from 'react'

export default function FAQ() {
  const faqs = [
    { q: 'Qual é o prazo de recebimento após a compra dos PDFs?', a: 'Os arquivos são disponibilizados para download imediatamente após a confirmação do pagamento. Você receberá um link na tela e por e-mail.' },
    { q: 'Posso editar os PDFs?', a: 'Sim. Os materiais são entregues em formatos editáveis (quando aplicável) e também em PDF prontos para impressão.' },
    { q: 'Existe suporte para dúvidas sobre o conteúdo?', a: 'Sim — oferecemos suporte via WhatsApp para clientes durante o período de lançamento e um guia rápido de uso junto com os PDFs.' },
    { q: 'A compra inclui direitos de revenda?', a: 'A licença padrão permite uso pessoal e para ministério. Para revenda ou redistribuição comercial, entre em contato para opção de licença estendida.' },
    { q: 'Como funciona a garantia de 7 dias?', a: 'Se por qualquer motivo você não ficar satisfeito, solicite reembolso em até 7 dias após a compra e devolveremos o valor sem perguntas.' },
    { q: 'Posso acessar os materiais em dispositivos móveis?', a: 'Sim. Os PDFs são compatíveis com leitores e apps de PDF em celulares e tablets.' },
    { q: 'Vocês oferecem atualizações futuras?', a: 'Algumas atualizações e novos pacotes serão oferecidos como bônus para quem adquirir na pré-venda. Fique atento às comunicações por e-mail.' },
    { q: 'Há limite de downloads?', a: 'Não — após a compra você terá acesso para baixar os arquivos conforme necessário. Em caso de problema, entre em contato que reemitimos o link.' },
  ]

  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-12 bg-transparent w-full flex justify-center">
      <div className="w-full max-w-4xl px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Perguntas frequentes</h2>
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} className="bg-white/5 rounded shadow-sm overflow-hidden">
                <button
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none"
                >
                  <span className="font-medium text-gray-100">{f.q}</span>
                  <svg
                    className={`w-5 h-5 text-gray-300 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <div
                  className={`px-6 text-sm text-gray-200 bg-white/3 overflow-hidden transition-all duration-300 ease ${isOpen ? 'max-h-96 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}
                >
                  {f.a}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
