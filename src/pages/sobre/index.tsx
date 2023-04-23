import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Perfil from "../../../public/Perfil.png";
import Image from "next/image";

const Sobre = () => {
  return (
    <main className="w-full">
      <Header />
      <section className="w-5/6 mx-auto my-10 text-center">
        <h2 className="uppercase font-bold text-3xl py-5">Quem sou eu</h2>
        <div className="flex flex-col md:flex-row gap-5">
          <div className="md:w-5/12">
            <Image src={Perfil} alt="Dr. Felipe Leão" />
          </div>
          <div className="flex-1 text-justify space-y-4">
            <p>
              Olá, me chamo Felipe Leão, médico otorrinolaringologista,
              completamente fascinado pelo universo médico e especialmente pela
              otorrinolaringologia. Minha missão é fornecer um tratamento
              individualizado e eficaz para cada paciente que entra no meu
              consultório, sempre aliando as técnicas e tecnologias mais
              avançadas à minha formação e expertise em otorrinolaringologia.
            </p>

            <p>
              Tenho orgulho em oferecer um atendimento especializado e
              humanizado aos meus pacientes, desde o diagnóstico, através da
              realização de exames com alta tecnologia, até o tratamento clínico
              e cirúrgico.
            </p>

            <p>
              E esse tem sido o meu propósito ao longo da minha caminhada,
              espero ajudá-lo(a) no que estiver ao meu alcance!
            </p>
            <h3 className="font-semibold text-xl text-slate-900">
              Formação profissional:
            </h3>
            <ul className="list-disc px-5">
              <li>
                Graduado em Medicina pela Escola Bahiana de Medicina e Saúde
                Pública (Salvador / BA) em 2017
              </li>
              <li>
                Especialização em Otorrinolaringologia pelo Hospital do Servidor
                Público Estadual de São Paulo em 2021 (São Paulo) - tese de
                especialização orientada pelo Prof. Dr. Fernando Kaoru Yonamine
              </li>
              <li>
                Membro titular da Associação Brasileira de Otorrinolaringologia
                e Cirurgia Cérvico-Facial desde 2021
              </li>
              <li>
                Doutorando em Otorrinolaringologia pela Universidade de São
                Paulo (USP), com tese intitulada “Olfato e vias olfatórias
                centrais: um estudo de ressonância magnética funcional”,
                orientado pelo Prof. Dr. Fábio de Rezende Pinna.
              </li>
            </ul>
            <h3 className="font-semibold text-xl text-slate-900">
              Atuação profissional:
            </h3>
            <ul className="list-disc px-5">
              <li>
                Hospital Santa Izabel / Santa Casa de Misericórdia da Bahia
              </li>
              <li>Centro médico INOOA</li>
              <li>Clínica AMO</li>
              <li>
                Clínica Otorrinoclin-Vitta (centro médico Hospital da Bahia)
              </li>
              <li>
                Ambulatório de Doenças do Olfato do Hospital das Clínicas da
                Faculdade de Medicina da Universidade de São Paulo.
              </li>
            </ul>
            <h3 className="font-semibold text-xl text-slate-900">Exames</h3>
            <ul className="list-disc px-5">
              <li>
                Nasofibrolaringoscopia (com uma câmera flexível podemos avaliar
                desde a porção interna do nariz, até as partes mais inferiores
                da garganta e cordas vocais).
              </li>
              <li>Videolaringoscopia (exame por vídeo das cordas vocais).</li>
            </ul>
            <h3 className="font-semibold text-xl text-slate-900">Cirurgias</h3>
            <ul className="list-disc px-5">
              <li>
                Cirurgia de septo nasal e cornetos nasais (septoplastias e
                turbinectomia).
              </li>
              <li>Cirurgia para sinusite (sinusectomia).</li>
              <li>
                Cirurgia para amigdalas e adenoides (adenoamigdalectomias).
              </li>
              <li>Biópsia de lesões na boca, ouvido, nariz e garganta.</li>
              <li>Cirurgia para reconstrução do tímpano (timpanoplastia).</li>
              <li>
                Cirurgia para colocação de tubinhos de ventilação no ouvido
                (timpanotomia).
              </li>
              <li>Drenagem de abscesso amigdaliano.</li>
              <li>
                Cirurgias para sangramentos nasais e demais urgências na
                otorrinolaringologia.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};
export default Sobre;
