import {
  LayoutDashboard,
  BookOpenCheck,
  GraduationCap,
  BarChart4,
} from "lucide-react";
import Link from "next/link";

export default function Exercicios() {
  return (
    <section className="p-6 md:p-12 lg:p-20 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-[#244E4A] mb-6">
        📝 Pratique com Exercícios e Avaliações
      </h1>
      <p className="text-[#3b5e5a] mb-12 text-lg max-w-3xl">
        Reforce seus conhecimentos com quizzes, avaliações completas e simulados
        especialmente desenvolvidos para ajudar você a se preparar para os
        exames nacionais.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <Link
          href="/exercicios/quizzes"
          className="bg-white shadow-md rounded-3xl p-8 hover:shadow-xl transition"
        >
          <BookOpenCheck className="text-[#F4A300] w-12 h-12 mb-6" />
          <h3 className="text-xl font-semibold text-[#244E4A] mb-3">
            Quizzes por Tema
          </h3>
          <p className="text-[#3b5e5a]">
            Teste seu conhecimento com perguntas rápidas organizadas por tema e
            disciplina.
          </p>
        </Link>

        <Link
          href="/exercicios/avaliacoes"
          className="bg-white shadow-md rounded-3xl p-8 hover:shadow-xl transition"
        >
          <GraduationCap className="text-[#F4A300] w-12 h-12 mb-6" />
          <h3 className="text-xl font-semibold text-[#244E4A] mb-3">
            Avaliações por Disciplina
          </h3>
          <p className="text-[#3b5e5a]">
            Realize avaliações completas e veja seu desempenho por matéria.
          </p>
        </Link>

        <Link
          href="/exercicios/simulados"
          className="bg-white shadow-md rounded-3xl p-8 hover:shadow-xl transition"
        >
          <LayoutDashboard className="text-[#F4A300] w-12 h-12 mb-6" />
          <h3 className="text-xl font-semibold text-[#244E4A] mb-3">
            Simulados do Exame Nacional
          </h3>
          <p className="text-[#3b5e5a]">
            Enfrente simulados realistas baseados nos exames nacionais de
            Angola.
          </p>
        </Link>
      </div>

      <div className="mt-24">
        <h2 className="text-2xl font-bold text-[#244E4A] mb-4">
          📊 Histórico e Desempenho
        </h2>
        <p className="text-[#3b5e5a] mb-6 max-w-2xl">
          Acompanhe seu progresso ao longo do tempo com estatísticas de
          desempenho e histórico de tentativas.
        </p>
        <Link
          href="/exercicios/historico"
          className="inline-flex items-center gap-2 text-[#F4A300] font-medium hover:underline"
        >
          <BarChart4 className="w-5 h-5" /> Ver meu histórico de tentativas
        </Link>
      </div>
    </section>
  );
}
