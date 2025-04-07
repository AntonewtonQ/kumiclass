import { BookOpen, LineChart, Clock, GraduationCap, Users } from "lucide-react";

export default function Benefits() {
  return (
    <>
      {/* Benefícios */}
      <section className="bg-[#fdfaf6] py-20 px-6 md:px-16 lg:px-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#244E4A] mb-12">
          Por que escolher a KumiClass?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto text-left">
          <div className="flex items-start gap-4">
            <BookOpen className="h-8 w-8 text-[#F4A300] mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-[#244E4A]">
                Acesso a conteúdo de qualidade
              </h3>
              <p className="text-[#3b5e5a]">
                Materiais de estudo elaborados para facilitar o aprendizado.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Clock className="h-8 w-8 text-[#F4A300] mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-[#244E4A]">
                Estudo no seu ritmo
              </h3>
              <p className="text-[#3b5e5a]">
                Estude quando e onde quiser, sem pressa.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <GraduationCap className="h-8 w-8 text-[#F4A300] mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-[#244E4A]">
                Preparação para os exames
              </h3>
              <p className="text-[#3b5e5a]">
                Desafios práticos que simulam os exames nacionais.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <LineChart className="h-8 w-8 text-[#F4A300] mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-[#244E4A]">
                Acompanhamento de progresso
              </h3>
              <p className="text-[#3b5e5a]">
                Veja seu desempenho e saiba onde melhorar.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Users className="h-8 w-8 text-[#F4A300] mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-[#244E4A]">
                Suporte contínuo
              </h3>
              <p className="text-[#3b5e5a]">
                Tire suas dúvidas com nossa comunidade de alunos e professores.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
