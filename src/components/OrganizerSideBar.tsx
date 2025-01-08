import Link from "next/link";
import * as React from "react";

const SideBar = () => {
  return (
    <div className="flex flex-col gap-2 font-semibold text-gray-600">
      <h1 className="text-2xl">ORGANIZER</h1>
      <hr />
      <Link href={"/organizer"} className="hover:text-sky-500">
        Main Page
      </Link>
      <Link href={"/organizer/dashboard"} className="hover:text-sky-500">
        Dashboard
      </Link>
      <Link href={"/organizer/event-management"} className="hover:text-sky-500">
        Event Management
      </Link>
      <Link href={"/organizer/create-event"} className="hover:text-sky-500">
        Create Event
      </Link>
    </div>
  );
};
export default SideBar;
