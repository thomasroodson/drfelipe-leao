import Link from "next/link";
import { Button } from "../Button";
import Head from "next/head";

export const Header = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Dr Felipe Leão</title>
        <meta
          name="description"
          content="OTORRINOLARINGOLOGIA |
    Cuidando da Saúde dos Ouvidos, Nariz e Garganta"
        />
        <meta property="og:url" content="https://drfelipeleao.com.br/" />
      </Head>
      <nav className="flex flex-wrap items-center justify-between max-w-6xl mx-auto py-4 md:py-0 px-4 text-lg text-gray-700 bg-white">
        <div>
          <Link href="/" className="font-bold text-slate-900 uppercase">
            Dr. Felipe Leão
          </Link>
        </div>
        <div className="hidden w-full md:flex md:items-center md:w-auto">
          <ul className=" pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0">
            <li>
              <Link className="md:p-4 py-2 block hover:text-slate-900" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="md:p-4 py-2 block hover:text-slate-900"
                href="/sobre"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                className="md:p-4 py-2 block hover:text-slate-900"
                href="/atendimento"
              >
                Locais de Atendimento
              </Link>
            </li>
            <li>
              <Link
                className="md:p-4 py-2 block hover:text-slate-900"
                href="/contato"
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <header
        className="flex items-center bg-center"
        style={{
          backgroundImage: "url('/Header.jpg')",
          height: "680px"
        }}
      >
        <div className="mx-auto md:w-4/5">
          <h1 className="md:text-4xl text-3xl font-bold text-slate-900 uppercase">
            Otorrinolaringologia
          </h1>
          <h3 className="text-sm text-gray-500 pl-1 mb-5">
            Cuidando da Saúde dos Ouvidos, Nariz e Garganta
          </h3>
          <div className="pl-2">
            <p>Dr. Felipe Carvalho Leão</p>
            <p>CRM: 30874</p>
          </div>

          <Button label="agende uma visita" url="/atendimento" />
        </div>
      </header>
    </>
  );
};
