import React from "react"
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { PiTiktokLogoLight, PiThumbsDownLight, PiCurrencyCircleDollarLight, PiUsersLight, PiChartBarLight, PiDeviceMobileLight } from "react-icons/pi";
import { FaChurch, FaBook, FaPlayCircle, FaPeopleCarry, FaHandsHelping, FaClock } from "react-icons/fa";

export default function AudienceLab() {
  return (
  <section id="audience" className="flex flex-col items-center py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">Para quem é a coleção BoobieGoods Cristão</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <div className="flex flex-col items-center text-center p-4">
          <FaChurch className="text-3xl mb-2 icon-animate delay-0 animate-float text-white/90" aria-hidden="true" />
          <p className="text-center text-sm">Líderes e pastores que precisam de materiais prontos para estudos, devocionais e eventos.</p>
        </div>
        <div className="flex flex-col items-center text-center p-4">
          <FaBook className="text-3xl mb-2 icon-animate delay-1 animate-float text-white/90" aria-hidden="true" />
          <p className="text-center text-sm">Professores da escola dominical que buscam atividades e folhas de apoio organizadas em PDF.</p>
        </div>
        <div className="flex flex-col items-center text-center p-4">
          <FaPlayCircle className="text-3xl mb-2 icon-animate delay-2 animate-float text-white/90" aria-hidden="true" />
          <p className="text-center text-sm">Criadores de conteúdo cristão que querem material visual e textos prontos para compartilhar.</p>
        </div>
        <div className="flex flex-col items-center text-center p-4">
          <FaPeopleCarry className="text-3xl mb-2 icon-animate delay-3 animate-float text-white/90" aria-hidden="true" />
          <p className="text-center text-sm">Organizadores de ministérios e equipes que precisam de modelos e fluxos para eventos e arrecadação.</p>
        </div>
        <div className="flex flex-col items-center text-center p-4">
          <FaHandsHelping className="text-3xl mb-2 icon-animate delay-4 animate-float text-white/90" aria-hidden="true" />
          <p className="text-center text-sm">Empreendedores cristãos que vendem produtos digitais ou imprimíveis para suas comunidades.</p>
        </div>
        <div className="flex flex-col items-center text-center p-4">
          <FaClock className="text-3xl mb-2 icon-animate delay-5 animate-float text-white/90" aria-hidden="true" />
          <p className="text-center text-sm">Quem precisa economizar tempo com materiais prontos, editáveis e de alta qualidade.</p>
        </div>
      </div>
      <div id="socials" className="flex gap-8 justify-center mt-10 mb-6">
        <a href="https://wa.me/5511988540723" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 text-2xl icon-pop delay-0 focus:outline-none focus:ring-2 focus:ring-green-400 rounded" title="Contato via WhatsApp"><FaWhatsapp /></a>
        <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 text-2xl icon-pop delay-1 focus:outline-none focus:ring-2 focus:ring-pink-400 rounded" title="Instagram"><FaInstagram /></a>
        <a href="https://www.facebook.com/" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 text-2xl icon-pop delay-2 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded" title="Facebook"><FaFacebookF /></a>
      </div>
      <a href="https://wa.me/5511988540723" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg shadow-lg transition inline-block">Entre em contato com a gente</a>
    </section>
  )
}
