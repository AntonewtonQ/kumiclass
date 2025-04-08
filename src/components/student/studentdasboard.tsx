import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { BookOpen, Flame, Brain, Play } from "lucide-react";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function StudentDashboard() {
  const session = await auth();

  if (!session?.user) redirect("/login");
  return (
    <div className="p-6 md:p-10 bg-[#fdfaf6] min-h-screen text-[#244E4A]">
      {/* Saudação */}
      <h1 className="text-3xl md:text-4xl font-bold mb-4">
        Olá, {session.user.name}! Pronto para aprender hoje?
      </h1>

      {/* Progresso geral */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Seu Progresso</h2>
        <div className="space-y-4">
          <div>
            <p className="mb-1">Matemática - 40%</p>
            <Progress value={40} />
          </div>
          <div>
            <p className="mb-1">Física - 25%</p>
            <Progress value={25} />
          </div>
        </div>
      </div>

      {/* Recomendações */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Recomendações para você</h2>
        <p className="mb-2">📚 Continue de onde parou em Álgebra</p>
        <p>💡 Hoje sugerimos revisar "Leis de Newton" em Física</p>
      </div>

      {/* Missões do dia */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Missões do Dia</h2>
        <ul className="list-disc list-inside space-y-2 text-[#3b5e5a]">
          <li>
            <Play className="inline w-4 h-4 mr-2 text-[#F4A300]" /> Assista 1
            vídeo de Biologia
          </li>
          <li>
            <Brain className="inline w-4 h-4 mr-2 text-[#F4A300]" /> Resolva 3
            quizzes de Matemática
          </li>
        </ul>
      </div>

      {/* Últimas atividades */}
      <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Últimas Atividades</h2>
        <ul className="space-y-2 text-[#3b5e5a]">
          <li>✅ Finalizou um quiz de Álgebra</li>
          <li>✅ Assistiu vídeo sobre Reações Químicas</li>
          <li>✅ Respondeu atividade sobre Geometria</li>
        </ul>
      </div>

      {/* Acesso rápido */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Disciplinas</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Matemática", "Física", "Química", "Biologia"].map((disciplina) => (
            <Button
              key={disciplina}
              className="bg-[#F4A300] hover:bg-[#db9200] text-white text-base font-semibold"
            >
              {disciplina}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
