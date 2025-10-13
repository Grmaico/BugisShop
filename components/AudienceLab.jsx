import React from "react"
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { PiTiktokLogoLight, PiThumbsDownLight, PiCurrencyCircleDollarLight, PiUsersLight, PiChartBarLight, PiDeviceMobileLight } from "react-icons/pi";

export default function AudienceLab() {
  return (
    <section className="flex flex-col items-center py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Para quem é este produto?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <div className="flex flex-col items-center text-center p-4">
          <PiTiktokLogoLight className="text-3xl mb-2 icon-animate delay-0" />
          <p className="text-center text-sm">Pessoas que querem uma solução prática para transformar habilidades em renda.</p>
        </div>
        <div className="flex flex-col items-center text-center p-4">
          <PiThumbsDownLight className="text-3xl mb-2 icon-animate delay-1" />
          <p className="text-center text-sm">Quem tenta vender online mas precisa de um passo a passo para aumentar conversões.</p>
        </div>
        <div className="flex flex-col items-center text-center p-4">
          <PiCurrencyCircleDollarLight className="text-3xl mb-2 icon-animate delay-2" />
          <p className="text-center text-sm">Empreendedores e criadores que querem transformar audiência em clientes pagantes.</p>
        </div>
        <div className="flex flex-col items-center text-center p-4">
          <PiUsersLight className="text-3xl mb-2 icon-animate delay-3" />
          <p className="text-center text-sm">Times e profissionais que precisam de processos para vender consistentemente.</p>
        </div>
        <div className="flex flex-col items-center text-center p-4">
          <PiChartBarLight className="text-3xl mb-2 icon-animate delay-4" />
          <p className="text-center text-sm">Quem quer aproveitar potencial de canais digitais para lançar produtos de alto valor.</p>
        </div>
        <div className="flex flex-col items-center text-center p-4">
          <PiDeviceMobileLight className="text-3xl mb-2 icon-animate delay-5" />
          <p className="text-center text-sm">Quem busca economia de tempo usando processos testados para lançar ofertas.</p>
        </div>
      </div>
      <div id="socials" className="flex gap-8 justify-center mt-10 mb-6">
        <a href="#" aria-label="Instagram" className="text-white hover:text-pink-500 text-2xl icon-pop delay-0 focus:outline-none focus:ring-2 focus:ring-pink-400 rounded"><FaInstagram /></a>
        <a href="#" aria-label="Facebook" className="text-white hover:text-blue-600 text-2xl icon-pop delay-1 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded"><FaFacebookF /></a>
        <a href="#" aria-label="Twitter" className="text-white hover:text-blue-400 text-2xl icon-pop delay-2 focus:outline-none focus:ring-2 focus:ring-sky-400 rounded"><FaTwitter /></a>
      </div>
  <button className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg shadow-lg transition">QUERO SER AVISADO</button>
    </section>
  )
}
