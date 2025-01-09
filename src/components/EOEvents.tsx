/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import * as React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { CardSm } from "@/components/Card";
import { useRouter } from "next/navigation";

interface IEOEvents {
    events: any;
}

const EOEvents: React.FC<IEOEvents> = (prop: IEOEvents) => {
    const router = useRouter();
    return (
        <div>
            {prop.events.map((e: any, index: number) => {
                return (
                    <CardSm
                        id={e.id}
                        image={e.image}
                        title={e.title}
                        date={e.date}
                        price={e.price}
                        organizer={e.organizer}
                        onClick={() =>
                            router.push(`/event/${e.title.toLowerCase()}`)
                        }
                    />
                );
            })}
        </div>
    );
};

export default EOEvents;
