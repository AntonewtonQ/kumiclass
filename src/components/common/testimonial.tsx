export default function Testimonial() {
  return (
    <>
      {/* Testemunhos */}
      <section
        id="testemunhos"
        className="bg-white py-20 px-6 md:px-16 lg:px-24 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#244E4A] mb-12">
          O que nossos usuários dizem
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <div className="bg-[#fdfaf6] p-6 rounded-xl shadow-md">
            <p className="text-[#3b5e5a] text-lg italic">
              "A KumiClass me ajudou a melhorar minhas notas no ensino médio.
              Agora estou muito mais preparado para os exames nacionais!"
            </p>
            <p className="mt-4 font-semibold text-[#244E4A]">
              João, estudante da 11ª classe
            </p>
          </div>

          <div className="bg-[#fdfaf6] p-6 rounded-xl shadow-md">
            <p className="text-[#3b5e5a] text-lg italic">
              "Uso a KumiClass com meus alunos e percebo como eles estão mais
              engajados nas aulas. É uma ferramenta incrível!"
            </p>
            <p className="mt-4 font-semibold text-[#244E4A]">
              Professora Marta, docente de Matemática
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-[#3b5e5a] font-medium">
            90% dos nossos usuários aumentaram suas notas em até 30% após 3
            meses de uso.
          </p>
        </div>
      </section>
    </>
  );
}
