import * as React from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone } from "react-icons/fa";

const FooterSection = () => {
  return (
    <div className="w-full bg-sky-500 py-[5vh] text-white">
      <div className="m-auto flex w-[90%] flex-col items-center gap-6 md:w-[50%] md:items-start">
        <h1 className="rounded-md bg-white px-1 text-xl font-semibold text-sky-500 md:w-fit">
          LOGO
        </h1>
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h1 className="font-semibold underline underline-offset-2">
              Navigasi
            </h1>
            <ul className="flex flex-col">
              <li className="rounded-md px-2 hover:bg-white hover:text-sky-500 md:-translate-x-2">
                <a href="#">Tentang Kami</a>
              </li>
              <li className="rounded-md px-2 hover:bg-white hover:text-sky-500 md:-translate-x-2">
                <a href="#">Layanan</a>
              </li>
              <li className="rounded-md px-2 hover:bg-white hover:text-sky-500 md:-translate-x-2">
                <a href="#">Tim</a>
              </li>
              <li className="rounded-md px-2 hover:bg-white hover:text-sky-500 md:-translate-x-2">
                <a href="#">Blog</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h1 className="px-2 font-semibold underline underline-offset-2">
              Ikuti Kami
            </h1>
            <ul className="flex flex-col">
              <a
                href="#"
                target="_blank"
                className="rounded-md px-2 text-white hover:bg-white hover:text-sky-500"
              >
                <li className="flex flex-row items-center justify-center gap-1 md:justify-start">
                  <FaInstagram />
                  <p>ticketGo</p>
                </li>
              </a>
              <a
                href="#"
                target="_blank"
                className="rounded-md px-2 text-white hover:bg-white hover:text-sky-500"
              >
                <li className="flex items-center justify-center gap-1 md:justify-start">
                  <FaFacebook />
                  <p>Ticket GO</p>
                </li>
              </a>
            </ul>
          </div>
          <div className="flex flex-col gap-2 text-center md:text-left">
            <h1 className="font-semibold underline underline-offset-2">
              Hubungi Kami
            </h1>
            <ul className="flex flex-col">
              <li className="flex flex-row items-center justify-center gap-1 md:justify-start">
                <FaPhone className="text-white" />
                <p className="text-white">: 098123987345</p>
              </li>
              <li className="flex items-center justify-center gap-1 md:justify-start">
                <FaEnvelope className="text-white" />
                <p className="text-white">: ticket@go.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
