import ExploreCategories from "@/components/ExploreCategories";
import MeetWorks from "@/components/MeetWorks";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-center items-center">
      <ExploreCategories />
      <MeetWorks />
    </main>
  );
}
