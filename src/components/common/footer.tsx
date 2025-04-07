import Image from "next/image";
import Link from "next/link";

import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-10 px-6 md:px-16 lg:px-24 text-[#3b5e5a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Informações e logo */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/original-logo.png"
                alt="KumiClass Logo"
                width={40}
                height={40}
              />
              <span className="text-lg font-bold text-[#244E4A]">
                KumiClass
              </span>
            </div>
            <p className="text-sm">
              Educação online para estudantes do ensino médio em Angola.
            </p>
          </div>

          {/* Links úteis */}
          <div className="space-y-2">
            <h4 className="font-semibold text-[#244E4A]">Links Úteis</h4>
            <ul className="text-sm space-y-1">
              <li>
                <Link href="#sobre" className="hover:underline">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Termos de Serviço
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Redes sociais */}
          <div>
            <h4 className="font-semibold text-[#244E4A] mb-2">Redes Sociais</h4>
            <div className="flex gap-4 text-[#F4A300]">
              <a href="#" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 mt-10">
          © {new Date().getFullYear()} KumiClass. Todos os direitos reservados.
        </div>
      </footer>
    </>
  );
}
