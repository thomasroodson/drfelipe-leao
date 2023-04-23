import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Perfil from "../../../public/Perfil.png";
import Image from "next/image";

const Atendimento = () => {
  return (
    <main className="w-full">
      <Header />
      <section className="w-5/6 mx-auto my-10 text-center">
        <h2 className="uppercase font-bold text-3xl py-5">Atendimento</h2>
      </section>
      <Footer />
    </main>
  );
};
export default Atendimento;
