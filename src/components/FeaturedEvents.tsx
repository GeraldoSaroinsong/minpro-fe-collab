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

interface IFeaturedEvents {
  events: any;
}

const FeaturedEvents: React.FC<IFeaturedEvents> = (prop: IFeaturedEvents) => {
  const router = useRouter();
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
    >
      <CarouselContent className="flex h-96">
        {prop.events.map((e: any, index: number) => {
          return (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <CardSm
                id={e.id}
                image={e.image}
                title={e.title}
                date={e.date}
                price={e.price}
                organizer={e.organizer}
                onClick={() => router.push(`/event/${e.title.toLowerCase()}`)}
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default FeaturedEvents;
