import { PlusIcon, SearchIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function MeetWorks() {
  return (
    <>
      <h2 className="text-2xl text-center font-bold tracking-wide">
        How Virtex Works?
      </h2>
      <section className="max-w-screen-xl w-full flex items-center justify-center gap-5 my-8">
        <div className="p-6 w-full h-40 bg-accent hover:bg-blue-100 rounded-lg use-transition">
          <div className="flex items-start justify-between gap-5">
            <SearchIcon strokeWidth={1.9} className="w-10 h-10 text-blue-600" />
            <div className="w-full h-full  flex-1 space-y-3">
              <div>
                <h3 className="text-xl font-bold pb-1">
                  Discover Events and People
                </h3>
                <p className="h-12">Find people and events with same interest you are looking for.</p>
              </div>
              <div>
                <Link href={"/"} className="text-blue-600 font-bold hover:underline use-transition">
                  Search Events and Groups
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 w-full h-40 bg-accent hover:bg-blue-100 rounded-lg use-transition">
        <div className="flex items-start justify-between gap-5">
            <PlusIcon strokeWidth={1.9} className="w-10 h-10 text-blue-600" />
            <div className="w-full h-full flex-1 space-y-3">
              <div>
                <h3 className="text-xl font-bold pb-1">
                  Explore Communities
                </h3>
                <p className="h-12">Discover communities within Rizvi and throughtout Mumbai University.</p>
              </div>
              <div>
                <Link href={"/"} className="text-blue-600 font-bold hover:underline use-transition">
                  Explore communities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
