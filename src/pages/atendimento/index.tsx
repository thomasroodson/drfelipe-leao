import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Button } from "@/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

const Atendimento = () => {
  return (
    <main className="w-full">
      <Header />
      <section className="bg-slate-900 text-white">
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
};
export default Atendimento;
