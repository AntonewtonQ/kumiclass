"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Facebook, Mail } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdfaf6] px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold text-[#244E4A] text-center mb-2">
          Entrar na KumiClass
        </h1>
        <p className="text-center text-[#3b5e5a] mb-6">
          Acesse sua conta para continuar seus estudos.
        </p>

        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#244E4A] mb-1"
            >
              E-mail
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Digite seu e-mail"
              className="bg-[#f9f9f9]"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[#244E4A] mb-1"
            >
              Senha
            </label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Digite sua senha"
                className="bg-[#f9f9f9] pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-2 flex items-center text-gray-500"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5" />
                ) : (
                  <Eye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <Button className="w-full bg-[#F4A300] text-white hover:bg-[#db9200]">
            Entrar
          </Button>
        </form>

        <div className="mt-6 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <span className="text-sm text-[#3b5e5a]">Ou entre com</span>
          </div>
          <div className="flex flex-col gap-3">
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
            >
              <Mail className="h-5 w-5 text-[#DB4437]" />
              Entrar com Google
            </Button>
            <Button
              variant="outline"
              className="w-full flex items-center justify-center gap-2"
            >
              <Facebook className="h-5 w-5 text-[#1877F2]" />
              Entrar com Facebook
            </Button>
          </div>
        </div>

        <div className="mt-6 text-center text-sm">
          <a href="#" className="text-[#244E4A] hover:underline">
            Esqueceu sua senha? Clique aqui.
          </a>
        </div>
        <div className="text-center text-sm mt-2">
          <span className="text-[#3b5e5a]">Ainda não tem uma conta? </span>
          <a
            href="/register"
            className="text-[#244E4A] font-semibold hover:underline"
          >
            Crie uma agora.
          </a>
        </div>
      </div>
    </div>
  );
}
