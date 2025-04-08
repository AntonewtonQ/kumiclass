import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Facebook, Mail } from "lucide-react";
import GoogleLoginButton from "@/components/common/GoogleLoginButton";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fdfaf6] px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold text-[#244E4A] text-center mb-2">
          Entrar na KumiClass
        </h1>
        <p className="text-center text-[#3b5e5a] mb-6">
          Acesse sua conta para continuar seus estudos.
        </p>

        <div className="mt-6 space-y-3">
          <div className="flex flex-col gap-3">
            <GoogleLoginButton />
          </div>
        </div>

        <div className="text-center text-sm mt-2">
          <span className="text-[#3b5e5a]">Aproveite o máximo de tudo</span>
        </div>
      </div>
    </div>
  );
}
