"use client";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default async function EditarPerfil() {
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

  // Função para lidar com o envio do formulário
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Pegar os valores do formulário
    const formData = new FormData(event.target as HTMLFormElement);
    const nome = formData.get("nome") as string;
    const idade = formData.get("idade") as string;
    const serie = formData.get("serie") as string;
    const foto = formData.get("foto") as File | null;

    let fotoUrl = userDetails?.photo_url;

    // Se uma nova foto for enviada, fazer upload para o Supabase Storage
    if (foto) {
      const filePath = `${session.user.id}/profile/${foto.name}`;
      const { data, error: uploadError } = await supabase.storage
        .from("avatars")
        .upload(filePath, foto);

      if (uploadError) {
        console.error("Erro ao fazer upload da foto:", uploadError.message);
      } else {
        fotoUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${data?.path}`;
      }
    }

    // Atualizar os dados do usuário na tabela "user_details"
    const { error: updateError } = await supabase.from("user_details").upsert({
      user_id: session.user.id,
      name: nome,
      age: idade,
      year: serie,
      photo_url: fotoUrl,
    });

    if (updateError) {
      console.error("Erro ao atualizar dados do usuário:", updateError.message);
    } else {
      // Sucesso - redirecionar ou mostrar mensagem de sucesso
      alert("Perfil atualizado com sucesso!");
    }
  };

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
          <label htmlFor="nome" className="block text-[#244E4A] font-medium">
            Nome
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            defaultValue={session.user.name || ""}
            className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F4A300]"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="idade" className="block text-[#244E4A] font-medium">
            Idade
          </label>
          <input
            id="idade"
            name="idade"
            type="number"
            placeholder="16"
            defaultValue={userDetails?.age || ""}
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
          <label htmlFor="foto" className="block text-[#244E4A] font-medium">
            Foto de Perfil
          </label>
          <input
            id="foto"
            name="foto"
            type="file"
            accept="image/*"
            className="w-full p-2 border border-gray-300 rounded-xl"
          />
        </div>

        <button
          type="submit"
          className="mt-4 w-full bg-[#F4A300] hover:bg-[#e79c00] text-white font-semibold py-3 rounded-xl transition"
        >
          Salvar Alterações
        </button>
      </form>
    </section>
  );
}
