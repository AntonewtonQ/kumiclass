import Image from "next/image";
import Link from "next/link";
import { Menu, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";

export default function StudentHeader() {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between shadow-md bg-white">
      {/* Logo */}
      <Link href="/dashboard" className="flex items-center gap-2">
        <Image
          src="/original-logo.png"
          alt="KumiClass Logo"
          width={40}
          height={40}
        />
        <span className="text-xl font-bold text-[#244E4A]">KumiClass</span>
      </Link>

      {/* Navigation - Desktop */}
      <nav className="hidden md:flex gap-6 items-center text-[#244E4A] font-medium">
        <Link href="/dashboard">Início</Link>
        <Link href="/disciplinas">Disciplinas</Link>
        <Link href="/exercicios">Exercícios</Link>
        <Link href="/progresso">Progresso</Link>
        <Link href="/extras">Extras</Link>
      </nav>

      {/* Mobile Menu Icon */}
      <div className="md:hidden text-[#244E4A]">
        <Menu className="w-6 h-6" />
      </div>

      {/* User Menu */}
      <div className="ml-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <User className="h-6 w-6 text-[#244E4A] cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-2">
            <DropdownMenuItem>
              <Link href="/perfil">Perfil</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <form>
                <Button variant="destructive" className="w-full cursor-pointer">
                  Sair
                </Button>
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
