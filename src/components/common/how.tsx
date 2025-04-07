import { UserPlus, FileText, BarChart3, ClipboardList } from "lucide-react";

export default function How() {
  return (
    <>
      {/* Como Funciona */}
      <section
        id="como-funciona"
        className="bg-[#fdfaf6] py-20 px-6 md:px-16 lg:px-24 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#244E4A] mb-12">
          Como Funciona?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          <div className="flex flex-col items-center">
            <UserPlus className="h-12 w-12 text-[#F4A300] mb-4" />
            <h3 className="text-xl font-semibold text-[#244E4A] mb-2">
              Passo 1
            </h3>
            <p className="text-[#3b5e5a]">Crie uma conta gratuita.</p>
          </div>

          <div className="flex flex-col items-center">
            <FileText className="h-12 w-12 text-[#F4A300] mb-4" />
            <h3 className="text-xl font-semibold text-[#244E4A] mb-2">
              Passo 2
            </h3>
            <p className="text-[#3b5e5a]">
              Escolha a disciplina e comece a estudar com materiais interativos.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <BarChart3 className="h-12 w-12 text-[#F4A300] mb-4" />
            <h3 className="text-xl font-semibold text-[#244E4A] mb-2">
              Passo 3
            </h3>
            <p className="text-[#3b5e5a]">
              Acompanhe seu progresso e melhore suas habilidades com testes e
              desafios.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <ClipboardList className="h-12 w-12 text-[#F4A300] mb-4" />
            <h3 className="text-xl font-semibold text-[#244E4A] mb-2">
              Passo 4
            </h3>
            <p className="text-[#3b5e5a]">
              Prepare-se para os exames nacionais com as nossas simulaçõess.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
