import * as React from "react";
import { CardHero } from "@/components/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

interface IHeroSection {
  events: any;
}

const Hero: React.FC<IHeroSection> = (prop: IHeroSection) => {
  return (
    <div className="w-[95%] md:w-[70%] m-auto py-5 flex flex-col gap-4">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {prop.events.map((e: any, index: number) => {
            return (
              <CarouselItem key={index}>
                <CardHero title={e.title} image={e.image} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Hero;
