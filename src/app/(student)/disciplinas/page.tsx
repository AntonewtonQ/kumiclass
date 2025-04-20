import DisciplinaCard from "@/components/student/disciplinaCard";
import { disciplinas } from "@/data/disciplinas";

export default function DisciplinasPage() {
  return (
    <main className="py-10 px-6 md:px-16 lg:px-24">
      <h1 className="text-3xl font-bold text-[#244E4A] mb-8 text-center">
        Escolha uma disciplina
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {disciplinas.map((disciplina) => (
          <DisciplinaCard key={disciplina.slug} disciplina={disciplina} />
        ))}
      </div>
    </main>
  );
}
