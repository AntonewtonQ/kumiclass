import { Settings, Calendar, Edit, User, Cake, School } from "lucide-react";
import Link from "next/link";
export default async function PerfilEstudante() {
  return (
    <section className="p-6 md:p-12 lg:p-20 max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-[#244E4A] mb-6">
        Meu Perfil
      </h1>

      <div className="bg-white rounded-3xl shadow-md p-8 space-y-6">
        {/* Cabeçalho com foto e informações básicas */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="relative">
            <img
              src={"/default-avatar.png"}
              alt="Foto de perfil"
              className="w-24 h-24 rounded-full object-cover border-2 border-[#F4A300]"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-[#244E4A]">username</h2>

            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="flex items-center text-[#3b5e5a]">
                <School className="w-4 h-4 mr-2" />
                <span>{"Ano não especificado"}</span>
              </div>

              <div className="flex items-center text-[#3b5e5a]">
                <Cake className="w-4 h-4 mr-2" />
                <span>{"Idade não especificada"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Seção de informações detalhadas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Informações Pessoais */}
          <div className="bg-[#f9fafb] rounded-xl p-4">
            <div className="flex items-center mb-3">
              <User className="w-5 h-5 text-[#F4A300] mr-2" />
              <h3 className="font-semibold text-[#244E4A]">
                Informações Pessoais
              </h3>
            </div>

            <div className="space-y-2">
              <div>
                <p className="text-sm text-gray-500">Data de Nascimento</p>
                <p className="text-[#3b5e5a]">data de Nascimento</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-[#3b5e5a]">email</p>
              </div>
            </div>
          </div>

          {/* Informações Escolares */}
          <div className="bg-[#f9fafb] rounded-xl p-4">
            <div className="flex items-center mb-3">
              <School className="w-5 h-5 text-[#F4A300] mr-2" />
              <h3 className="font-semibold text-[#244E4A]">
                Informações Escolares
              </h3>
            </div>

            <div className="space-y-2">
              <div>
                <p className="text-sm text-gray-500">Escola</p>
                <p className="text-[#3b5e5a]">{"Não especificada"}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Matéria Favorita</p>
                <p className="text-[#3b5e5a]">{"Não especificada"}</p>
              </div>
            </div>
          </div>

          {/* Preferências */}
          <div className="bg-[#f9fafb] rounded-xl p-4">
            <div className="flex items-center mb-3">
              <Settings className="w-5 h-5 text-[#F4A300] mr-2" />
              <h3 className="font-semibold text-[#244E4A]">Preferências</h3>
            </div>
            <p className="text-[#3b5e5a]">Idioma: Português</p>
            <p className="text-[#3b5e5a]">Notificações: Ativadas</p>
          </div>

          {/* Atividade */}
          <div className="bg-[#f9fafb] rounded-xl p-4">
            <div className="flex items-center mb-3">
              <Calendar className="w-5 h-5 text-[#F4A300] mr-2" />
              <h3 className="font-semibold text-[#244E4A]">Atividade</h3>
            </div>
            <p className="text-[#3b5e5a]">Membro desde: {"pt-pt"}</p>
            <p className="text-[#3b5e5a]">Último acesso: Hoje</p>
          </div>
        </div>

        {/* Botão de edição */}
        <div className="flex justify-end pt-4">
          <Link
            href="/perfil/editar-perfil"
            className="flex items-center gap-2 px-4 py-2 bg-[#F4A300] hover:bg-[#e79c00] text-white font-semibold rounded-lg transition"
          >
            <Edit className="w-5 h-5" /> Editar Perfil
          </Link>
        </div>
      </div>
    </section>
  );
}
