import { auth, signOut } from "@/lib/auth";
import { User, Settings, LogOut, Calendar, Edit } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase"; // Certifique-se de que o supabase está corretamente configurado.

export default async function PerfilEstudante() {
  const session = await auth();

  if (!session?.user) redirect("/login");

  // Buscar dados adicionais do usuário
  const { data: userDetails, error } = await supabase
    .from("user_details")
    .select("*")
    .eq("user_id", session.user.id)
    .single();

  if (error) {
    console.error("Erro ao buscar dados do usuário:", error.message);
  }

  return (
    <section className="p-6 md:p-12 lg:p-20 max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-[#244E4A] mb-6">
        Meu Perfil
      </h1>

      <div className="bg-white rounded-3xl shadow-md p-8 space-y-6">
        <div className="flex items-center gap-6">
          <img
            src={session.user.image || "/default-avatar.png"}
            alt="Foto de perfil"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h2 className="text-2xl font-semibold text-[#244E4A]">
              {session.user.name}
            </h2>
            <p className="text-[#3b5e5a]">
              {userDetails?.year
                ? `${userDetails.year}º Ano`
                : "Ano não especificado"}{" "}
              | {userDetails?.school_name || "Escola não especificada"}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#f9fafb] rounded-xl p-4">
            <Settings className="w-6 h-6 text-[#F4A300] mb-2" />
            <h3 className="font-semibold text-[#244E4A] mb-1">Preferências</h3>
            <p className="text-[#3b5e5a]">Idioma: Português</p>
            <p className="text-[#3b5e5a]">Notificações: Ativadas</p>
          </div>

          <div className="bg-[#f9fafb] rounded-xl p-4">
            <Calendar className="w-6 h-6 text-[#F4A300] mb-2" />
            <h3 className="font-semibold text-[#244E4A] mb-1">
              Histórico de Sessões
            </h3>
            <p className="text-[#3b5e5a]">Último acesso: 6 de Abril, 2025</p>
            <p className="text-[#3b5e5a]">Sessões nos últimos 7 dias: 5</p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <Link
            href="/perfil/editar-perfil" // Substitua com o link para a página de editar perfil
            className="flex items-center gap-2 text-[#F4A300] font-semibold hover:underline"
          >
            <Edit className="w-5 h-5" /> Editar Perfil
          </Link>

          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button className="flex cursor-pointer items-center gap-2 text-[#F4A300] font-semibold hover:underline">
              <LogOut className="w-5 h-5" /> Sair da Conta
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
