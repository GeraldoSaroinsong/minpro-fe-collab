import Link from "next/link";
import { FaCalendar, FaEnvelope, FaPhone } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="fixed z-10 w-full divide-y-2 bg-slate-100 shadow-sm">
      <div className="m-auto flex w-[90%] items-center justify-between py-2 text-lime-500 md:w-[50%] md:py-4">
        <Link
          href="https://rsud-samrat-cc.vercel.app/"
          className="text-md flex flex-col md:flex-row md:text-xl"
        >
          <h1 className="rounded-t-md bg-lime-500 px-0.5 text-white md:rounded-l-md md:rounded-se-none">
            RSUD
          </h1>
          <h1>Sam Ratulangi</h1>
        </Link>
        {/* Desktop Navbar */}
        <div className="hidden gap-2 md:flex">
          <Link
            href="/tentangKami"
            className="rounded-md px-4 py-1 transition duration-200 hover:bg-lime-500 hover:text-white"
          >
            Tentang Kami
          </Link>
          <Link
            href="/layanan"
            className="rounded-md px-4 py-1 transition duration-200 hover:bg-lime-500 hover:text-white"
          >
            Layanan
          </Link>
          <Link
            href="/tim"
            className="rounded-md px-4 py-1 transition duration-200 hover:bg-lime-500 hover:text-white"
          >
            Tim
          </Link>
          <Link
            href="/blog"
            className="rounded-md px-4 py-1 transition duration-200 hover:bg-lime-500 hover:text-white"
          >
            Blog
          </Link>
        </div>
        {/* Mobile Navbar */}
        {/* <div className="block md:hidden">
          <Drawer>
            <DrawerTrigger>
              <GiHamburgerMenu className="text-xl" />
            </DrawerTrigger>
            <DrawerContent>
              <div className="m-auto flex h-[50vh] w-[90%] flex-col items-start justify-evenly text-3xl">
                <Link
                  href="/tentangKami"
                  className="w-full rounded-md px-2 text-lime-500 transition duration-150 hover:bg-lime-500 hover:text-white"
                >
                  Tentang Kami
                </Link>
                <Link
                  href="/layanan"
                  className="w-full rounded-md px-2 text-lime-500 transition duration-150 hover:bg-lime-500 hover:text-white"
                >
                  Layanan
                </Link>
                <Link
                  href="/tim"
                  className="w-full rounded-md px-2 text-lime-500 transition duration-150 hover:bg-lime-500 hover:text-white"
                >
                  Tim
                </Link>
                <Link
                  href="/blog"
                  className="w-full rounded-md px-2 text-lime-500 transition duration-150 hover:bg-lime-500 hover:text-white"
                >
                  Blog
                </Link>
              </div>
              <DrawerFooter>
                <DrawerClose className="w-full rounded-md px-2 text-left text-3xl text-red-400 transition duration-150 hover:bg-red-400 hover:text-white">
                  Tutup
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div> */}
      </div>
      <div className="m-auto hidden items-center justify-center gap-2 divide-x-2 text-xs md:flex md:w-[50%] md:py-2">
        <div className="flex items-center gap-1">
          <FaPhone className="text-lime-500" />
          <p className="text-gray-500">: 0431321117</p>
        </div>
        <div className="flex items-center gap-1 pl-2">
          <FaCalendar className="text-lime-500" />
          <p className="text-gray-500">: 06:00 - 22:00 WITA (Senin-Sabtu)</p>
        </div>
        <div className="flex items-center gap-1 pl-2">
          <FaEnvelope className="text-lime-500" />
          <p className="text-gray-500">: samratulangirsud@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
