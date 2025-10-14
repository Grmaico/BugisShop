"use client"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import { Pagination } from "swiper/modules";
import "swiper/css"
import "swiper/css/autoplay"

export default function FeedbackCarousel() {
  const feedbacks = [
    {
      name: "Renata Peixoto — Instagram (13/10/2025)",
      text: "Oi! Comprei e já estou imprimindo — meus filhos adoraram!",
      image: "/images/feedb2.png"
    },
    {
      name: "Aluno Beta — WhatsApp (12/10/2025)",
      text: "Material fácil de usar, ideal para atividades em casa.",
      image: "/images/feedb3.png"
    },
    {
      name: "Prof. Carlos — Instagram (11/10/2025)",
      text: "Uso em sala e as crianças ficaram engajadas.",
      image: "/images/feedb4.png"
    },
    {
      name: "Lígia — Direct (10/10/2025)",
      text: "Recebi o link e em 10 minutos já estava imprimindo.",
      image: "/images/feedb5.png"
    },
    
  ]

  return (
  <section className="flex flex-col items-center justify-center relative py-12 w-full">
      <div className="absolute inset-0 -z-10">
        <div className="w-full h-full opacity-90" style={{background: 'radial-gradient(800px 400px at 10% 0%, rgba(124,92,255,0.08), transparent 5%), radial-gradient(700px 300px at 90% 100%, rgba(78,224,255,0.06), transparent 5%)'}}></div>
        <div className="absolute top-0 left-0 w-2/3 h-1/3 bg-gradient-to-br from-indigo-700 to-indigo-500 blur-3xl opacity-25 rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/4 bg-gradient-to-br from-cyan-600 to-blue-400 blur-2xl opacity-18 rounded-full"></div>
      </div>
  <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 drop-shadow tracking-wide font-sans text-center">Feedbacks</h2>
      <div className="flex flex-col items-center justify-center w-full z-10">
  <div className="w-full max-w-4xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop
            autoplay={{ delay: 2000 }}
            pagination={{ clickable: true }}
            className="w-full"
          >
            {feedbacks.map((f, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col items-center justify-center">
                  {f.image && (
                    <div className="w-full max-w-[420px] rounded-xl overflow-hidden mb-4 relative">
                      <img 
                        src={f.image} 
                        alt={`Foto de ${f.name}`} 
                        className="w-full h-auto max-h-[360px] sm:max-h-[420px] md:max-h-[420px] lg:max-h-[560px] object-contain bg-transparent" 
                        style={{display: 'block'}} 
                      />
                      {/* overlay removed as requested; image keeps rounded container */}
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}