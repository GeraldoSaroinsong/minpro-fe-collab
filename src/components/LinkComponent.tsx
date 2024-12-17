import Link from "next/link";
import React from "react";

interface ILinkComponent {
  id?: string;
  href: string;
  name: string;
}

export const LinkMd: React.FC<ILinkComponent> = ({ id, href, name }) => {
  return (
    <Link
      id={name}
      href={href}
      className="rounded-md px-4 py-1 transition duration-100 hover:bg-sky-500 hover:text-white font-semibold"
    >
      {name}
    </Link>
  );
};

export const LinkSm: React.FC<ILinkComponent> = ({ id, href, name }) => {
  return (
    <Link
      id={name}
      href={href}
      className="w-full rounded-md p-2 text-sky-500 transition duration-150 hover:bg-sky-500 hover:text-white"
    >
      {name}
    </Link>
  );
};
