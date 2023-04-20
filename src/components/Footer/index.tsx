import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex flex-col gap-2 mt-12 text-center text-slate-900">
      <a href="#" className="font-bold uppercase">
        Dr. Felipe Leão
      </a>
      <div className="flex mt-5 gap-5 justify-center">
        <Link href="https://facebook.com/">
          <FontAwesomeIcon icon={faFacebookF} />
        </Link>
        <Link href="https://facebook.com/">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link href="https://facebook.com/">
          <FontAwesomeIcon icon={faYoutube} />
        </Link>
        <Link href="https://facebook.com/">
          <FontAwesomeIcon icon={faTwitter} />
        </Link>
      </div>
      <footer className="text-sm mb-2">
        Dr. Felipe Leão | Todos os direitos reservados.
      </footer>
    </div>
  );
};
