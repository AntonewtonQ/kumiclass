import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between shadow-md bg-white">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/original-logo.png"
            alt="KumiClass Logo"
            width={48}
            height={48}
            className="h-auto w-auto"
          />
          <span className="text-xl font-bold text-[#244E4A]">KumiClass</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex gap-6 items-center text-[#244E4A] font-medium">
        <Link href="#sobre">Sobre</Link>
        <Link href="#como-funciona">Como Funciona</Link>
        <Link href="#testemunhos">Testemunhos</Link>
        <Link href="/login" className="hover:underline">
          Entrar/Criar Conta
        </Link>
      </nav>

      {/* Call to Action */}
      <div className="ml-4">
        <Button className="bg-[#F4A300] text-white hover:bg-[#db9200] transition-colors">
          Comece Agora
        </Button>
      </div>
    </header>
  );
}
