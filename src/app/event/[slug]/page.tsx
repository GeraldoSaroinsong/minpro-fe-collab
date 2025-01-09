/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import * as React from "react";
import { callAPI } from "@/config/axios";
import Image from "next/image";
import "dotenv/config";
import { initSnap, useSnap } from "midtrans-snap";
import { useAppSelector } from "@/lib/redux/hooks";
import { redirect } from "next/navigation";
import Link from "next/link";
import NoEO from "@/guard/NoEO";

interface IDetailProps {
  params: Promise<{ slug: string }>;
}

const Detail: React.FunctionComponent<IDetailProps> = ({ params }) => {
  const [eventDetails, setEventDetails] = React.useState<any>(null);
  const [organizer, setOrganizer] = React.useState<any>(null);
  const [city, setCity] = React.useState<any>(null);
  const [category, setCategory] = React.useState<any>(null);
  const [quantity, setQuantity] = React.useState<number>(1);

  // penggunaan library komunitas untuk midtrans snap
  const clientKey: string = "SB-Mid-client-JuIn72sBaReyPMcG";
  initSnap(clientKey, "sandbox");
  const snap = useSnap();

  const userData = useAppSelector((state) => state.userReducer);

  const getEventDetails = async () => {
    try {
      const slug = (await params).slug;
      const res = await callAPI.get(`/event/detail/${slug}`);

      setEventDetails(res.data.result);
      console.log("Event Details", res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  const getOrganizer = async () => {
    try {
      if (eventDetails && eventDetails.id_organizer) {
        const res = await callAPI.get(`user/id/${eventDetails.id_organizer}`);
        setOrganizer(res.data.result.data);
        console.log("Organizer Details", res.data.result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCity = async () => {
    try {
      if (eventDetails && eventDetails.id_city) {
        const res = await callAPI.get(`/city/id/${eventDetails.id_city}`);
        setCity(res.data.result);
        console.log("City Detail", res);
      }
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
    // console.log("Event Details", eventDetails);
  }, []);

  React.useEffect(() => {
    if (eventDetails) {
      getOrganizer();
      getCity();
      getCategory();
    }
  }, [eventDetails]);

  // React.useEffect(() => {
  //   if (eventDetails && organizer && city && category) {
  //     console.log("Event", eventDetails);
  //     console.log("Organizer", organizer);
  //     console.log("City", city);
  //     console.log("Category", category);
  //   }
  // }, [eventDetails, organizer, city, category]);

  if (!eventDetails) {
    return <p>Loading...</p>;
  }

  const loggedIn = localStorage.getItem("userId");
  const onBuy = async (): Promise<any> => {
    try {
      console.log("USER ID", loggedIn);

      if (!loggedIn) {
        alert("You must login first to buy tickets");
      }
      const data = {
        id_event: eventDetails.id,
        id_user: userData.id,
        subtotal: eventDetails.price,
        quantity: quantity,
        referralCouponIsUsed: false,
        pointsUsed: 0,
        status: "process",
      };
      console.log("DATA", data);

      const res = await callAPI.post("/transaction/create", { data });
      console.log("TRANSAKSI DAN TOKEN", res.data.result);

      const tokenMid = res.data.result.tokenMidtrans;

      await snap.pay(tokenMid, {});
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <NoEO terlarang="organizer">
      <div className="w-[90%] md:w-[50%] mx-auto py-6 flex flex-col gap-10">
        <div className="rounded-xl overflow-hidden">
          <Image
            alt={eventDetails?.title}
            src={eventDetails?.image}
            width={500}
            height={500}
            className="size-full"
          />
        </div>
        <div className="flex flex-col gap-6 md:flex-row justify-between">
          <div className="flex flex-col gap-6 md:w-2/3">
            <div>
              <p>
                {eventDetails?.startDate} - {city?.name}
              </p>
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
          <div className="md:p-4 flex flex-col gap-4 md:gap-6">
            <p>
              <span className="font-semibold">Price : </span>
              IDR {eventDetails?.price}
            </p>
            <div className="flex items-center gap-4">
              <label htmlFor="amount" className="font-semibold">
                Amount :
              </label>
              <select
                className="pr-12"
                name="amount"
                id="amount"
                onChange={(e: any) => {
                  setQuantity(parseInt(e.target.value));
                }}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            {loggedIn ? (
              <button
                type="submit"
                className="p-2 bg-red-500 rounded-md shadow-md text-lg font-semibold text-white"
                onClick={() => {
                  onBuy();
                }}
              >
                Buy Tickets
              </button>
            ) : (
              <Link
                href="/sign-in"
                type="submit"
                className="p-2 bg-yellow-500 rounded-md shadow-md text-lg font-semibold text-white"
              >
                Sign In to Continue
              </Link>
            )}
          </div>
        </div>
      </div>
    </NoEO>
  );
};

export default Detail;
