/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import * as React from "react";
import { callAPI } from "@/config/axios";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { getEventList, setEvents } from "@/lib/redux/features/eventSlice";
import Hero from "@/components/HeroSection";
import FeaturedEvents from "@/components/FeaturedEvents";

// const events = [
//   {
//     image: "https://picsum.photos/175/275",
//     title: "Your call has been confirmed.",
//     date: "12-2-2025",
//     price: 250000,
//     organizer: "gramedia",
//   },
//   {
//     image: "https://picsum.photos/175/275",
//     title: "Event registration successful.",
//     date: "15-2-2025",
//     price: 300000,
//     organizer: "bookclub",
//   },
//   {
//     image: "https://picsum.photos/175/275",
//     title: "Your workshop seat is reserved.",
//     date: "20-2-2025",
//     price: 150000,
//     organizer: "techmeet",
//   },
//   {
//     image: "https://picsum.photos/175/275",
//     title: "Conference booking confirmed.",
//     date: "25-2-2025",
//     price: 500000,
//     organizer: "conferencely",
//   },
//   {
//     image: "https://picsum.photos/175/275",
//     title: "Webinar enrollment successful.",
//     date: "28-2-2025",
//     price: 100000,
//     organizer: "webinarplus",
//   },
// ];
// const eventsHero = [
//   {
//     image: "https://picsum.photos/1280/350",
//     title: "Your call has been confirmed.",
//     date: "12-2-2025",
//     price: 250000,
//     organizer: "gramedia",
//   },
//   {
//     image: "https://picsum.photos/1280/350",
//     title: "Event registration successful.",
//     date: "15-2-2025",
//     price: 300000,
//     organizer: "bookclub",
//   },
//   {
//     image: "https://picsum.photos/1280/350",
//     title: "Your workshop seat is reserved.",
//     date: "20-2-2025",
//     price: 150000,
//     organizer: "techmeet",
//   },
//   {
//     image: "https://picsum.photos/1280/350",
//     title: "Conference booking confirmed.",
//     date: "25-2-2025",
//     price: 500000,
//     organizer: "conferencely",
//   },
//   {
//     image: "https://picsum.photos/1280/350",
//     title: "Webinar enrollment successful.",
//     date: "28-2-2025",
//     price: 100000,
//     organizer: "webinarplus",
//   },
// ];

export default function Home() {
  // const events = useAppSelector((state) => state.eventReducer);
  // const dispatch = useAppDispatch();

  const [events, setEvents] = React.useState<any>([]);

  React.useEffect(() => {
    getData();
    // dispatch(getEventList());
  }, []);

  const getData = async () => {
    try {
      const events = await callAPI.get("/event/all");
      console.log("EVENT DATA", events.data.result);

      // dispatch(setEvents(events.data.result));
      setEvents(events.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-100">
      {/* HERO SECTION */}
      <Hero events={events} />
      {/* FEATURED EVENTS */}
      <div className="w-[70%] md:w-[70%] m-auto py-5 flex flex-col gap-4">
        <h1 className="text-3xl font-bold text-center md:text-left">
          FEATURED EVENTS
        </h1>
        <FeaturedEvents events={events} />
      </div>
      {/* TOP ORGANIZERS */}
      <div className="w-[70%] md:w-[70%] md:p-10 m-auto py-5 flex flex-col gap-4 bg-slate-400 rounded-3xl">
        <h1 className="text-3xl font-bold text-center md:text-left">
          TOP UPCOMING EVENTS
        </h1>
      </div>
    </div>
  );
}
