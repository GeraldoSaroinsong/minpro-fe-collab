/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import * as React from "react";
import { callAPI } from "@/config/axios";
import Hero from "@/components/HeroSection";
import FeaturedEvents from "@/components/FeaturedEvents";
import NoEO from "@/guard/NoEO";

export default function Home() {
    const [events, setEvents] = React.useState<any>([]);

    React.useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const events = await callAPI.get("/event/all");
            setEvents(events.data.result);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <NoEO terlarang="organizer">
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
        </NoEO>
    );
}
