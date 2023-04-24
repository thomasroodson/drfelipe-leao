import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faAddressBook
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Contato = () => {
  return (
    <main className="w-full">
      <Header />
      <section className="w-5/6 mx-auto my-10 text-center">
        <h2 className="uppercase font-bold text-3xl py-5">Contato</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="text-slate-900 border p-4 md:w-3/6">
            <FontAwesomeIcon icon={faLocationDot} size="xl" />
            <h3 className="font-semibold text-lg">Endereços</h3>
            <p className="text-sm">
              Avenida Prof. Magalhães Neto, 1541, Centro Médico do Hospital da
              Bahia, Bloco A, Salas 5021, 5022 e 5023, Pituba, Salvador-BA
            </p>
          </div>
          <div className="text-slate-900 border p-4 flex flex-col gap-y-1 md:w-3/6">
            <FontAwesomeIcon icon={faAddressBook} size="xl" />
            <h3 className="font-semibold text-lg">Telefones e E-mail</h3>
            <p className="text-sm">
              <Link href={"tel:(71) 2109-2522"}>(71) 2109-2522 </Link>/
              <Link href={"tel:(71) 3036-3689"}> (71) 3036-3689</Link>
            </p>
            <p className="text-sm">
              <Link href={"mailto:contato@otorrinoclinvitta.com.br"}>
                contato@otorrinoclinvitta.com.br
              </Link>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};
export default Contato;
