import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import OuvidoImage from "../../public/ouvido.png";
import NarizImage from "../../public/nariz.png";
import GargantaImage from "../../public/garganta.png";
import Perfil from "../../public/Perfil.png";
import Pattern from "../../public/pattern.png";
import PatternRight from "../../public/patternright.png";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <main className="w-full">
      <Header />
      <section
        className="md:w-5/6 mx-auto bg-slate-900 flex flex-col md:flex-row rounded-xl text-white py-12 px-10 md:px-28 gap-8"
        style={{ marginTop: "-60px" }}
        data-aos="fade-up"
      >
        <div className="flex flex-1 mr-2 items-center md:border-e md:border-white">
          <div className="pr-8">
            <h2 className="uppercase mb-5 text-4xl font-bold">
              Especializações
            </h2>
            <ul>
              <li>Otorrinolaringologista – RQE: 21404</li>
              <li>Consultas e Cirurgias em Salvador</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-auto justify-center">
          <div className="text-center">
            <Image src={OuvidoImage} alt="Ouvido" />
            <h3 className="font-bold uppercase pt-2">Ouvido</h3>
          </div>
        </div>
        <div className="flex flex-auto justify-center">
          <div className="text-center">
            <Image src={NarizImage} alt="Nariz" />
            <h3 className="font-bold uppercase pt-2">Nariz</h3>
          </div>
        </div>
        <div className="flex flex-auto justify-center">
          <div className="text-center">
            <Image src={GargantaImage} alt="Garganta" />
            <h3 className="font-bold uppercase pt-2">Garganta</h3>
          </div>
        </div>
      </section>
      <section
        className="md:w-4/5 mx-auto flex flex-col md:flex-row p-10"
        id="sobre"
        data-aos="fade-up"
      >
        <div className="relative">
          <Image
            src={PatternRight}
            className="absolute top-5 none"
            style={{ left: "-56px" }}
            alt="Pattern"
          />
          <Image src={Perfil} alt="Dr. Felipe Leão" className="relative z-10" />
          <Image
            src={Pattern}
            className="absolute bottom-6 z-20"
            style={{ right: "-34px" }}
            alt="Pattern"
          />
        </div>
        <div className="flex-1 ml-5 pt-5 space-y-6 text-base">
          <h2 className="text-slate-900 text-4xl uppercase font-bold">
            Quem sou eu
          </h2>
          <p>
            Olá, me chamo Felipe Leão, médico otorrinolaringologista,
            completamente fascinado pelo universo médico e especialmente pela
            otorrinolaringologia. Minha missão é fornecer um tratamento
            individualizado e eficaz para cada paciente que entra no meu
            consultório, sempre aliando as técnicas e tecnologias mais avançadas
            à minha formação e expertise em otorrinolaringologia.
          </p>
          <p>
            Tenho orgulho em oferecer um atendimento especializado e humanizado
            aos meus pacientes, desde o diagnóstico, através da realização de
            exames com alta tecnologia, até o tratamento clínico e cirúrgico.
          </p>
          <Button
            label="Conheça a minha trajetória profissional..."
            url="/sobre"
          />
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="rotate-180 relative" style={{ top: "-10px" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="fill-white"
            ></path>
          </svg>
        </div>
        <div className="md:w-2/3 mx-auto flex flex-col space-y-1 py-10 px-5">
          <div className="text-center">
            <h2 className="uppercase font-bold text-4xl">
              Locais de Atendimento
            </h2>
            <span>Escolha a clínica mais próxima de você!</span>
          </div>
          <div className="flex flex-col md:flex-row pt-6 items-center">
            <div className="md:w-2/3 flex gap-5 items-center">
              <FontAwesomeIcon icon={faCircleCheck} size="xl" />
              <span className="pt-1">
                SIM - Serviços Integrados em Medicina
              </span>
            </div>
            <div className="w-1/3 flex justify-center">
              <Button
                label="agendar"
                url="https://www.simmedicina.com.br/"
                bgcolor="bg-white text-slate-900"
                svg="fill-slate-900"
                target="_blank"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 flex gap-5 items-center">
              <FontAwesomeIcon icon={faCircleCheck} size="xl" />
              <span className="pt-1">
                Otorrinoclin Vitta | Ouvido, nariz, garganta e medicina do sono
              </span>
            </div>
            <div className="w-1/3 flex justify-center">
              <Button
                label="agendar"
                url="http://www.otorrinoclinvitta.com/"
                bgcolor="bg-white text-slate-900"
                svg="fill-slate-900"
                target="_blank"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 flex gap-5 items-center">
              <FontAwesomeIcon icon={faCircleCheck} size="xl" />
              <span className="pt-1">
                Clínica AMO - Rede de serviços de saúde
              </span>
            </div>
            <div className="w-1/3 flex justify-center">
              <Button
                label="agendar"
                url="https://www.clinicaamo.com.br/"
                bgcolor="bg-white text-slate-900"
                svg="fill-slate-900"
                target="_blank"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
