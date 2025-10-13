import React from 'react'
import { FaLock, FaShieldAlt } from 'react-icons/fa'

const YEAR = new Date().getFullYear()

export default function Footer(){
  return (
    <footer className="w-full bg-gradient-to-b from-gray-900 to-gray-800 text-gray-200 py-8 mt-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <FaLock className="text-green-400 text-xl" />
            <div>
              <div className="font-medium">Pagamento Seguro</div>
              <div className="text-sm text-gray-400">Transações protegidas</div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaShieldAlt className="text-green-400 text-xl" />
            <div>
              <div className="font-medium">SSL Protegido</div>
              <div className="text-sm text-gray-400">Certificado ativo</div>
            </div>
          </div>

                  <div className="text-center text-sm text-gray-400" suppressHydrationWarning={true}>
                    © {YEAR} BugisShop. Todos os direitos reservados.
                  </div>
        </div>
      </div>
    </footer>
  )
}
