"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import { useSession } from "next-auth/react";
import { createClient } from "@supabase/supabase-js";

export default function EditarPerfil() {
  const { data: session } = useSession();
  const router = useRouter();
  const [userDetails, setUserDetails] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!session?.user) {
      router.push("/login");
      return;
    }

    const fetchUserDetails = async () => {
      try {
        const { data, error } = await supabase
          .from("user_details")
          .select("*")
          .eq("user_id", session.user.id)
          .maybeSingle();

        if (error) throw error;
        setUserDetails(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [session, router]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!session?.user) {
      router.push("/login");
      return;
    }

    try {
      const formData = new FormData(event.target as HTMLFormElement);
      const birthDate = formData.get("birth_date")?.toString() || "";
      const serie = formData.get("serie")?.toString() || "10";
      const schoolName = formData.get("school_name")?.toString() || "";
      const favoriteSubject =
        formData.get("favorite_subject")?.toString() || "";

      const supabaseAccessToken = session.supabaseAccessToken;
      if (!supabaseAccessToken) {
        throw new Error("Token de acesso não encontrado");
      }

      const supabaseClient = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
          global: {
            headers: {
              Authorization: `Bearer ${supabaseAccessToken}`,
            },
          },
        }
      );

      // Atualização dos dados
      const { error } = await supabaseClient
        .from("user_details")
        .upsert({
          user_id: session.user.id,
          birth_date: birthDate || null,
          year: parseInt(serie),
          school_name: schoolName,
          favorite_subject: favoriteSubject,
          updated_at: new Date().toISOString(),
          profile_completed: true,
        })
        .select();

      if (error) throw error;

      alert("Perfil atualizado com sucesso!");
      router.refresh();
    } catch (error: any) {
      console.error("Erro detalhado:", {
        message: error.message,
        code: error.code,
        details: error,
      });
      alert(`Erro: ${error.message || "Falha ao atualizar perfil"}`);
    }
  };

  if (!session || loading) {
    return <div>Carregando...</div>;
  }

  return (
    <section className="p-6 md:p-12 lg:p-20 max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-[#244E4A] mb-6">
        Editar Perfil
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-3xl shadow-md p-8 space-y-6"
      >
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
            defaultValue={userDetails?.birth_date || ""}
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
            defaultValue={userDetails?.year || "10"}
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
            defaultValue={userDetails?.school_name || ""}
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
            defaultValue={userDetails?.favorite_subject || ""}
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
