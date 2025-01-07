"use client";
import * as React from "react";
import { callAPI } from "@/config/axios";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface IDetailProps {
  params: Promise<{ slug: string }>;
}

const Detail: React.FunctionComponent<IDetailProps> = ({ params }) => {
  const [eventDetails, setEventDetails] = React.useState<any>(null);
  const [organizer, setOrganizer] = React.useState<any>(null);
  const [city, setCity] = React.useState<any>(null);
  const [category, setCategory] = React.useState<any>(null);
  {
  }
  const getEventDetails = async () => {
    try {
      const slug = (await params).slug;
      const res = await callAPI.get(`/event/detail/${slug}`);

      setEventDetails(res.data.result);
      console.log("Event Details", eventDetails);
    } catch (error) {
      console.log(error);
    }
  };

  const getOrganizer = async () => {
    try {
      if (eventDetails && eventDetails.id_organizer) {
        const res = await callAPI.get(`user/id/${eventDetails.id_organizer}`);
        setOrganizer(res.data.result.data);
      }
      console.log("Organizer Details", organizer);
    } catch (error) {
      console.log(error);
    }
  };

  const getCity = async () => {
    try {
      if (eventDetails && eventDetails.id_city) {
        const res = await callAPI.get(`/city/${eventDetails.id_city}`);
        setCity(res.data.result);
      }
      console.log("City Details", city);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategory = async () => {
    try {
      if (eventDetails && eventDetails.id_category) {
        const res = await callAPI.get(`/category/${eventDetails.id_category}`);
        setCategory(res.data.result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getEventDetails();
  }, [params]);

  React.useEffect(() => {
    if (eventDetails) {
      getOrganizer();
      getCity();
      getCategory();
    }
  }, [eventDetails]);

  React.useEffect(() => {
    if (eventDetails && organizer && city && category) {
      console.log("Event", eventDetails);
      console.log("Organizer", organizer);
      console.log("City", city);
      console.log("Category", category);
    }
  }, [eventDetails, organizer, city, category]);

  if (!eventDetails) {
    return <p>Loading...</p>;
  }

  // const onBuy = async () => {
  //   try {
  //     // const res = await callAPI.post("/transaction/create",{iduser:1,subtotal:200000},{headers:{Authorization: `Bearer ${}`}})
  //     console.log("RESPON CREATE TRANSACTION",res)
  //     const token = res.data.result.tokenMidtrans
  //     // ! kemungkinan perlu di parse pake json2an

  //   } catch (error) {

  //   }
  // }

  return (
    <div className="w-[50%] mx-auto py-6 flex flex-col gap-10">
      <div className="rounded-xl overflow-hidden">
        <Image
          alt={eventDetails?.title}
          src={eventDetails?.image}
          width={500}
          height={500}
          className="size-full"
        />
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-6 w-2/3">
          <div>
            <p>23 Feb 2025 - {city?.name}</p>
            <h1 className="text-3xl uppercase font-semibold">
              {eventDetails?.title}
            </h1>
          </div>
          <p className="text-xl">{eventDetails?.desc}</p>
          <div className="w-fit bg-slate-200 p-4 rounded-xl shadow-md">
            <p>
              By{" "}
              <span className="font-bold">
                {organizer?.name} - {organizer?.email}
              </span>
            </p>
          </div>
          <p className="bg-sky-200 w-fit p-2 rounded-full font-semibold">
            #{category?.name}
          </p>
        </div>
        <div className="p-4 flex flex-col gap-6">
          <p>
            <span className="font-semibold">Price : </span>
            IDR {eventDetails?.price.toLocaleString()}
          </p>
          <div className="flex items-center gap-4">
            <label htmlFor="amount" className="font-semibold">
              Amount :
            </label>
            <input
              id="amount"
              type="number"
              className="px-2 py-1 shadow-md rounded-md w-16 outline outline-slate-400"
            />
          </div>
          <button
            type="submit"
            className="p-2 bg-red-500 rounded-md shadow-md text-lg font-semibold text-white"
          >
            Buy Tickets
          </button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
