import { Lightbulb, Video, HelpCircle } from "lucide-react";
import Link from "next/link";

const progressData = [
  { name: "Matemática", progresso: 80 },
  { name: "Física", progresso: 65 },
  { name: "Química", progresso: 70 },
  { name: "Biologia", progresso: 55 },
  { name: "Português", progresso: 90 },
];

export default function ConteudosExtras() {
  return (
    <section className="p-6 md:p-12 lg:p-20 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-[#244E4A] mb-6">
        📖 Conteúdos Extras
      </h1>
      <p className="text-[#3b5e5a] mb-12 text-lg max-w-3xl">
        Explore materiais adicionais que vão turbinar seus estudos: dicas,
        técnicas, vídeos e respostas para suas dúvidas mais comuns.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link href="extras/dicas-de-estudo">
          <div className="bg-white rounded-3xl shadow-md p-6">
            <Lightbulb className="text-[#F4A300] w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold text-[#244E4A] mb-2">
              Dicas de Estudo
            </h3>
            <p className="text-[#3b5e5a]">
              Descubra métodos eficientes para aprender mais em menos tempo.
            </p>
          </div>
        </Link>

        <Link href="extras/tecnicas-de-concentracao">
          <div className="bg-white rounded-3xl shadow-md p-6">
            <Lightbulb className="text-[#F4A300] w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold text-[#244E4A] mb-2">
              Técnicas de Concentração
            </h3>
            <p className="text-[#3b5e5a]">
              Aprenda como manter o foco e a produtividade nos estudos.
            </p>
          </div>
        </Link>

        <Link href="extras/tecnicas-de-memorizacao">
          <div className="bg-white rounded-3xl shadow-md p-6">
            <Lightbulb className="text-[#F4A300] w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold text-[#244E4A] mb-2">
              Técnicas de Memorização
            </h3>
            <p className="text-[#3b5e5a]">
              Melhore sua capacidade de lembrar o que aprendeu.
            </p>
          </div>
        </Link>
        <Link href="extras/tecnicas-de-redacao">
          <div className="bg-white rounded-3xl shadow-md p-6">
            <Video className="text-[#F4A300] w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold text-[#244E4A] mb-2">
              Vídeos Motivacionais
            </h3>
            <p className="text-[#3b5e5a]">
              Encontre inspiração com vídeos que vão te motivar a continuar
              estudando.
            </p>
          </div>
        </Link>
        <Link href="extras/duvidas-sobre-os-exames">
          <div className="bg-white rounded-3xl shadow-md p-6">
            <HelpCircle className="text-[#F4A300] w-10 h-10 mb-4" />
            <h3 className="text-xl font-semibold text-[#244E4A] mb-2">
              Dúvidas sobre os Exames
            </h3>
            <p className="text-[#3b5e5a]">
              Respostas para as perguntas mais frequentes sobre os exames
              nacionais.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
