import Link from "next/link";
import { Disciplina } from "../../../types/disciplina";

interface Props {
  disciplina: Disciplina;
}

export default function DisciplinaCard({ disciplina }: Props) {
  const { nome, slug, icon: Icon } = disciplina;

  return (
    <Link
      href={`/disciplinas/${slug}`}
      className="flex flex-col items-center p-4 border rounded-xl hover:shadow-md transition"
    >
      <Icon className="w-10 h-10 text-[#F4A300] mb-2" />
      <span className="text-[#244E4A] font-semibold">{nome}</span>
    </Link>
  );
}
