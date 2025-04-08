const progressData = [
  { name: "Matemática", progresso: 80 },
  { name: "Física", progresso: 65 },
  { name: "Química", progresso: 70 },
  { name: "Biologia", progresso: 55 },
  { name: "Português", progresso: 90 },
];

export default function Progresso() {
  return (
    <section className="p-6 md:p-12 lg:p-20 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-[#244E4A] mb-6">
        📈 Meu Progresso
      </h1>
      <p className="text-[#3b5e5a] mb-12 text-lg max-w-3xl">
        Veja como você tem evoluído nos seus estudos. Acompanhe seu desempenho
        por disciplina, metas, tempo de estudo e mais.
      </p>

      <div className="bg-white rounded-3xl shadow-md p-8 mb-16">
        <h2 className="text-2xl font-semibold text-[#244E4A] mb-6">
          Progresso por Disciplina
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[#244E4A]">
        <div className="bg-white rounded-3xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">Módulos Concluídos</h3>
          <p className="text-3xl font-bold text-[#F4A300]">24</p>
        </div>
        <div className="bg-white rounded-3xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">Pontos Acumulados</h3>
          <p className="text-3xl font-bold text-[#F4A300]">1.850 ⭐</p>
        </div>
        <div className="bg-white rounded-3xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-2">Tempo Total de Estudo</h3>
          <p className="text-3xl font-bold text-[#F4A300]">18h 30min</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-md p-8 mt-16">
        <h2 className="text-2xl font-semibold text-[#244E4A] mb-4">
          🎯 Meta Pessoal
        </h2>
        <p className="text-[#3b5e5a] mb-2">Estudar pelo menos</p>
        <p className="text-2xl font-bold text-[#F4A300]">2 horas por semana</p>
      </div>
    </section>
  );
}
