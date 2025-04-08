import Link from "next/link";

import {
  BookOpen,
  FlaskConical,
  Atom,
  Leaf,
  FileText,
  Globe,
} from "lucide-react";

export default function DisciplinasPage() {
  const disciplinas = [
    { nome: "Matemática", icon: BookOpen },
    { nome: "Física", icon: Atom },
    { nome: "Química", icon: FlaskConical },
    { nome: "Biologia", icon: Leaf },
    { nome: "Língua Portuguesa", icon: FileText },
    { nome: "Geografia", icon: Globe },
  ];

  return (
    <div>
      {/* Lista de Disciplinas */}
      <main className="py-10 px-6 md:px-16 lg:px-24">
        <h1 className="text-3xl font-bold text-[#244E4A] mb-8 text-center">
          Escolha uma disciplina
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {disciplinas.map(({ nome, icon: Icon }) => (
            <Link
              key={nome}
              href={`/disciplinas/${nome.toLowerCase()}`}
              className="flex flex-col items-center p-4 border rounded-xl hover:shadow-md transition"
            >
              <Icon className="w-10 h-10 text-[#F4A300] mb-2" />
              <span className="text-[#244E4A] font-semibold">{nome}</span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
