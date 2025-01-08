import type { Metadata } from "next";
import "../globals.css";
import SideBar from "@/components/OrganizerSideBar";

interface IOrganizerDashboardLayout {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Organizer Dashboard",
};

const OrganizerLayout: React.FunctionComponent<IOrganizerDashboardLayout> = ({
  children,
}) => {
  return (
    <div className="flex gap-4 divide-x-2 w-[95%] md:w-[70%] py-10 m-auto">
      <SideBar />
      {children}
    </div>
  );
};
export default OrganizerLayout;
