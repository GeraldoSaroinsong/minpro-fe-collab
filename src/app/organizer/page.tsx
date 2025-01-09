"use client";

import EOEvents from "@/components/EOEvents";
import { callAPI } from "@/config/axios";
import React from "react";

export default function OrganizeHome() {
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
        <div className="w-[95%] md:w-[70%] m-auto px-12 py-5 flex flex-col gap-4">
            <h1 className="text-3xl font-bold">My Event</h1>
            <EOEvents events={events} />
        </div>
    );
}
