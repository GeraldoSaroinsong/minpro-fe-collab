import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CardSm } from "@/components/Card";

interface IFeaturedEvents {
  events: any;
}

const FeaturedEvents: React.FC<IFeaturedEvents> = (prop: IFeaturedEvents) => {
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
            <CarouselItem key={index} className="md:basis-1/4">
              <CardSm
                image={e.image}
                title={e.title}
                date={e.date}
                price={e.price}
                organizer={e.organizer}
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
