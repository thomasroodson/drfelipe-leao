import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Perfil from "../../../public/Perfil.png";
import Image from "next/image";

const Sobre = () => {
  return (
    <main className="w-full">
      <Header />
      <section className="w-5/6 mx-auto flex flex-col md:flex-row my-10 text-center">
        <h2 className="uppercase font-bold text-3xl py-5">Quem sou eu</h2>
        <div>
          <Image src={Perfil} alt="Dr. Felipe Leão" />
        </div>
        <div className="flex-1">...</div>
      </section>
      <Footer />
    </main>
  );
};
export default Sobre;
