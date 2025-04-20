import { BookOpen, FlaskConical, Atom, Leaf, FileText, Globe } from "lucide-react";
import { Disciplina } from "../../types/disciplina";


export const disciplinas: Disciplina[] = [
  { nome: "Matemática", slug: "matematica", icon: BookOpen },
  { nome: "Física", slug: "fisica", icon: Atom },
  { nome: "Química", slug: "quimica", icon: FlaskConical },
  { nome: "Biologia", slug: "biologia", icon: Leaf },
  { nome: "Língua Portuguesa", slug: "lingua-portuguesa", icon: FileText },
  { nome: "Geografia", slug: "geografia", icon: Globe },
];
