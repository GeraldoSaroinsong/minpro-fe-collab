import Link from "next/link";
import { FaCalendar, FaEnvelope, FaPhone, FaSearch } from "react-icons/fa";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "./ui/drawer";
import { GiHamburgerMenu } from "react-icons/gi";
import { LinkMd, LinkSm } from "./LinkComponent";

const Navbar = () => {
  return (
    <div className="fixed z-10 w-full divide-y-2 divide-sky-500 bg-sky-100 shadow-sm">
      <div className="m-auto flex w-[95%] items-center justify-between py-2 text-sky-500 md:py-4">
        <div className="flex gap-6 items-center">
          <Link
            href="#"
            className="text-md flex flex-col md:flex-row md:text-xl md:gap-1 font-semibold"
          >
            <h1 className="px-1 pb-2 rounded-md bg-sky-500 text-white text-3xl underline underline-offset-8">
              LOGO
            </h1>
          </Link>
        </div>
        {/* Desktop Navbar */}
        <div className="hidden gap-2 md:flex">
          <div className="flex flex-row gap-1">
            <input
              type="search"
              placeholder="search"
              className="px-4 rounded-full shadow-md h-8 w-96 focus:ring-0 focus:outline-none text-slate-600"
            />
            <button
              type="button"
              className="py-2 px-4 bg-slate-300 hover:bg-sky-500 hover:text-white right-0 top-0 text-slate-600 overflow-hidden rounded-full transition duration-100"
            >
              <FaSearch className="justify-center" />
            </button>
          </div>
          <LinkMd href="#" name="Tentang Kami" />
          <LinkMd href="#" name="Buat Event" />
          <LinkMd href="#" name="Login" />
          <LinkMd href="#" name="Signup" />
        </div>
        {/* Mobile Navbar */}
        <div className="block md:hidden">
          <Drawer>
            <DrawerTrigger>
              <GiHamburgerMenu className="text-xl" />
            </DrawerTrigger>
            <DrawerContent>
              <div className="m-auto flex h-[50vh] w-[90%] flex-col items-start justify-evenly text-3xl">
                <LinkSm href="#" name="Tentang Kami" />
                <LinkSm href="#" name="Buat Event" />
                <LinkSm href="#" name="Login" />
                <LinkSm href="#" name="Signup" />
              </div>
              <DrawerFooter>
                <DrawerClose className="w-full rounded-md p-2 text-left text-3xl text-red-500 transition duration-150 hover:bg-red-500 hover:text-white">
                  Tutup
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
      <div className="m-auto hidden items-center justify-end gap-2 divide-x-2 divide-sky-500 text-xs md:flex md:w-[95%] md:py-2">
        <div className="flex items-center gap-1">
          <FaPhone className="text-sky-500" />
          <p className="text-gray-500">: 098123987345</p>
        </div>
        {/* <div className="flex items-center gap-1 pl-2">
          <FaCalendar className="text-sky-500" />
          <p className="text-gray-500">: 06:00 - 22:00 WITA (Senin-Sabtu)</p>
        </div> */}
        <div className="flex items-center gap-1 pl-2">
          <FaEnvelope className="text-sky-500" />
          <p className="text-gray-500">: ticket@go.com</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
