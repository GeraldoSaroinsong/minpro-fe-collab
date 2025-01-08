import Image from "next/image";
import React from "react";
import { FaCalendar } from "react-icons/fa";

interface ICardSm {
  id: number;
  image: string;
  title: string;
  date: string;
  price: number;
  organizer: string;
  onClick: () => void;
}

interface ICardHero {
  image: string;
  title: string;
  onClick: () => void;
}

export const CardSm: React.FC<ICardSm> = (prop: ICardSm) => {
  return (
    <div
      className="h-[350px] w-[275px] mb-4 shadow-xl rounded-xl bg-white overflow-hidden flex flex-col gap-2 transition duration-150 hover:translate-y-2 hover:shadow-gray-400 hover:cursor-pointer"
      onClick={prop.onClick}
    >
      <div className="w-full h-1/2">
        <Image
          alt={prop.title}
          src={prop.image}
          width={500}
          height={500}
          className="size-fill"
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

export const CardHero: React.FC<ICardHero> = (prop: ICardHero) => {
  return (
    <div
      className="relative h-[170px] md:h-[350px] w-[90%] m-auto md:w-[97%] my-10 rounded-xl shadow-xl overflow-hidden bg-slate-500 hover:cursor-pointer"
      onClick={prop.onClick}
    >
      <Image
        alt={prop.title}
        src={prop.image}
        objectFit="cover"
        priority={true}
        fill
        className="place-self-center"
      />
    </div>
  );
};
