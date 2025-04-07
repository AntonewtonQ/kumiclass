import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Call() {
  return (
    <>
      {/* Call to Action Final */}
      <section className="bg-[#244E4A] text-white py-20 px-6 md:px-16 lg:px-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Pronto para melhorar seu desempenho acadêmico?
        </h2>
        <p className="text-lg mb-8">
          Junte-se a centenas de estudantes que estão alcançando melhores
          resultados com a KumiClass.
        </p>
        <Link href="login">
          <Button className="bg-[#F4A300] cursor-pointer hover:bg-[#db9200] text-white text-lg px-6 py-3">
            Crie sua conta grátis
          </Button>
        </Link>
      </section>
    </>
  );
}
