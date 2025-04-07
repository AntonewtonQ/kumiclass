import { BookOpen, HelpCircle, LineChart } from "lucide-react";

export default function About() {
  return (
    <>
      {/* Sobre a KumiClass */}
      <section
        id="sobre"
        className="bg-white py-20 px-6 md:px-16 lg:px-24 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#244E4A] mb-6">
          O que é a KumiClass?
        </h2>
        <p className="max-w-3xl mx-auto text-[#3b5e5a] text-lg mb-12">
          A KumiClass é uma plataforma de educação online que oferece conteúdos
          de estudo, quizzes e ferramentas de aprendizado para estudantes do
          ensino médio em Angola. Ajudamos você a melhorar seu desempenho
          acadêmico e a se preparar para os exames nacionais.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="flex flex-col items-center">
            <BookOpen className="h-12 w-12 text-[#F4A300] mb-4" />
            <h3 className="font-semibold text-xl text-[#244E4A] mb-2">
              Conteúdos de Estudo
            </h3>
            <p className="text-[#3b5e5a] text-center">
              Acesso a materiais organizados por disciplinas e níveis.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <HelpCircle className="h-12 w-12 text-[#F4A300] mb-4" />
            <h3 className="font-semibold text-xl text-[#244E4A] mb-2">
              Quizzes Interativos
            </h3>
            <p className="text-[#3b5e5a] text-center">
              Teste seus conhecimentos com desafios práticos e divertidos.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <LineChart className="h-12 w-12 text-[#F4A300] mb-4" />
            <h3 className="font-semibold text-xl text-[#244E4A] mb-2">
              Acompanhamento de Progresso
            </h3>
            <p className="text-[#3b5e5a] text-center">
              Veja sua evolução ao longo do tempo e identifique pontos de
              melhoria.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
