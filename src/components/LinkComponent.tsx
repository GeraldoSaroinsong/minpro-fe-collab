import Link from "next/link";
import React from "react";

interface ILinkComponent {
  href: string;
  name: string;
}

export const LinkMd: React.FC<ILinkComponent> = (prop: ILinkComponent) => {
  return (
    <Link
      href={prop.href}
      className="rounded-md px-4 py-1 transition duration-100 hover:bg-sky-500 hover:text-white hover:shadow-md font-semibold"
    >
      {prop.name}
    </Link>
  );
};

export const LinkSm: React.FC<ILinkComponent> = (prop: ILinkComponent) => {
  return (
    <Link
      href={prop.href}
      className="w-full rounded-md p-2 text-sky-500 transition duration-150 hover:bg-sky-500 hover:text-white"
    >
      {prop.name}
    </Link>
  );
};
