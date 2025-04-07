import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#fdfaf6] py-20 px-6 md:px-16 lg:px-24 text-center flex flex-col items-center justify-center gap-6">
        {/* Background illustration or image */}
        <div className="absolute inset-0 z-10 opacity-30">
          <Image
            src="/hero-bg.jpg"
            alt="Estudantes felizes usando a KumiClass"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold text-[#244E4A]">
            Aumente seu desempenho acadêmico com a KumiClass
          </h1>
          <p className="mt-4 text-lg md:text-xl text-[#3b5e5a]">
            Acesso a conteúdos educativos de qualidade, desafios práticos e uma
            comunidade de aprendizagem para te ajudar a alcançar o sucesso
            acadêmico.
          </p>
          <div className="mt-6">
            <Button className="bg-[#F4A300] text-white hover:bg-[#db9200] text-lg px-6 py-3">
              Comece Agora
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
