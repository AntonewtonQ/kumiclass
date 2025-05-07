"use client";

export default function EditarPerfil() {
  return (
    <section className="p-6 md:p-12 lg:p-20 max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-[#244E4A] mb-6">
        Editar Perfil
      </h1>

      <form className="bg-white rounded-3xl shadow-md p-8 space-y-6">
        <div className="space-y-2">
          <label
            htmlFor="birth_date"
            className="block text-[#244E4A] font-medium"
          >
            Data de Nascimento
          </label>
          <input
            id="birth_date"
            name="birth_date"
            type="date"
            defaultValue={""}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F4A300]"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="serie" className="block text-[#244E4A] font-medium">
            Série Escolar
          </label>
          <select
            id="serie"
            name="serie"
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F4A300]"
            defaultValue={"10"}
          >
            <option value="9">9º Ano</option>
            <option value="10">10º Ano</option>
            <option value="11">11º Ano</option>
            <option value="12">12º Ano</option>
          </select>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="school_name"
            className="block text-[#244E4A] font-medium"
          >
            Nome da Escola
          </label>
          <input
            id="school_name"
            name="school_name"
            type="text"
            defaultValue={""}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F4A300]"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="favorite_subject"
            className="block text-[#244E4A] font-medium"
          >
            Matéria Favorita
          </label>
          <input
            id="favorite_subject"
            name="favorite_subject"
            type="text"
            defaultValue={""}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F4A300]"
          />
        </div>

        <button
          type="submit"
          className="mt-6 w-full cursor-pointer bg-[#F4A300] hover:bg-[#e79c00] text-white font-semibold py-3 rounded-xl transition"
        >
          Salvar Alterações
        </button>
      </form>
    </section>
  );
}
