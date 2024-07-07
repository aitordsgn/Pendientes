import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";

import { FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-slate-700 text-slate-200 mt-16 text-sm">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-lg font-bold">Categories</h3>
            <Link href="#">Pendientes</Link>
            <Link href="#">Llaveros</Link>

          </FooterList>

          <FooterList>
            <h3 className="text-lg font-bold">Servicio Tecnico</h3>
            <Link href="#">Contacto</Link>

          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-bold">Sobre mi</h3>
            <p className="mb-2">Un ingeniero que hace sus pinitos en otras cosas</p>
            <p>© 2024 - Todos los derechos reservados</p>
          </div>
          <FooterList>
            <h3 className="text-lg font-bold">Redes Sociales</h3>
            <div className="flex gap-2">
              <Link href="#"><FaTwitter size={24} /></Link>
              <Link href="#"><FaInstagram size={24} /></Link>
            </div>

          </FooterList>


        </div>
      </Container>
    </div>
  );
}

export default Footer;