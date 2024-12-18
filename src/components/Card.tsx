import Image from "next/image";
import React from "react";
import { FaCalendar } from "react-icons/fa";

interface ICard {
  image: string;
  title: string;
  desc: string;
  date: string;
  price: number;
  organizer: string;
}

export const Card: React.FC<ICard> = (prop: ICard) => {
  return (
    <div className="h-[350px] w-[275px] mb-4 shadow-xl rounded-xl bg-white overflow-hidden flex flex-col gap-2 transition duration-150 hover:-translate-y-3 hover:shadow-gray-400">
      <div className="w-full h-1/2">
        <Image
          alt={prop.title}
          src={prop.image}
          width={500}
          height={500}
          className="size-full"
        />
      </div>
      <div className="px-2 divide-y">
        <div>
          <h1 className="font-semibold">{prop.title}</h1>
          <p className="flex items-baseline gap-2">
            <span>
              <FaCalendar />
            </span>
            {prop.date}
          </p>
          <p>
            {prop.price.toLocaleString("id", {
              style: "currency",
              currency: "IDR",
              maximumFractionDigits: 0,
            })}
          </p>
        </div>
        <div className="align-baseline">
          <p>{prop.organizer}</p>
        </div>
      </div>
    </div>
  );
};
