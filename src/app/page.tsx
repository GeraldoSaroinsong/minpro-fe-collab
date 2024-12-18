import { Card } from "@/components/Card";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <div className="w-[95%] md:w-[70%] m-auto py-5 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">FEATURED EVENTS</h1>
        <Card
          image="https://picsum.photos/200"
          title="THE RIPPING OF SOULS"
          desc="blblablablablablabla"
          date="23-12-2024"
          price={10000}
          organizer="siapa saja"
        />
      </div>
    </div>
  );
}
