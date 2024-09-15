import ExploreCategories from "@/components/ExploreCategories";
import MeetWorks from "@/components/MeetWorks";
import Navbar from "@/components/Nabvar";
import Image from "next/image";

export default function Home() {
  return (

    <main className="w-full flex flex-col justify-center items-center">
      <Navbar/>
      <ExploreCategories />
      <MeetWorks />
    </main>
  );
}
