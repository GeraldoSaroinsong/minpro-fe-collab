import * as React from "react";
import { CardHero } from "@/components/Card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRouter } from "next/navigation";

interface IHeroSection {
  events: any;
}

const Hero: React.FC<IHeroSection> = (prop: IHeroSection) => {
  const router = useRouter();
  return (
    <div className="w-[95%] md:w-[70%] m-auto py-5 flex flex-col gap-4">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {prop.events.map((e: any, index: number) => {
            return (
              <CarouselItem key={index}>
                <CardHero
                  title={e.title}
                  image={e.image}
                  onClick={() => router.push(`/event/${e.title.toLowerCase()}`)}
                />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Hero;
