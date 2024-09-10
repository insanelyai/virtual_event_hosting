'use client'

import React from "react";
import { Card, CardContent } from "./ui/card";
import {
  AppWindow,
  BrainCircuit,
  BrickWall,
  Cable,
  Cpu,
  Settings,
} from "lucide-react";
import {motion} from "framer-motion"

const cateforyPayload = [
  {
    id: "CS",
    name: "Computer Science",
    icon: <Cpu strokeWidth={1.5} className="w-10 h-10 m-2 text-yellow-300" />,
    iconColor: "yellow-400",
  },
  {
    id: "IT",
    name: "Information Technology",
    icon: (
      <AppWindow strokeWidth={1.5} className="w-10 h-10 m-2 text-blue-300" />
    ),
    iconColor: "blue-400",
  },
  {
    id: "ME",
    name: "Mechanical Engineering",
    icon: <Settings strokeWidth={1.5} className="w-10 h-10 m-2 text-red-300" />,
    iconColor: "red-400",
  },
  {
    id: "EE",
    name: "Electrical Engineering",
    icon: <Cable strokeWidth={1.5} className="w-10 h-10 m-2 text-green-300" />,
    iconColor: "green-400",
  },
  {
    id: "CE",
    name: "Civil Engineering",
    icon: (
      <BrickWall strokeWidth={1.5} className="w-10 h-10 m-2 text-purple-300" />
    ),
    iconColor: "purple-400",
  },
  {
    id: "AR",
    name: "Architecture",
    icon: (
      <BrainCircuit
        strokeWidth={1.5}
        className="w-10 h-10 m-2 text-indigo-300"
      />
    ),
    iconColor: "pink-400",
  },
];

export default function ExploreCategories() {
  return (
    <div className="max-w-screen-xl w-full flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold tracking-wide py-3">
        Expore Categories
      </h1>
      <div className="flex items-center justify-center mx-auto my-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {cateforyPayload.map((category) => (
            <motion.div key={category.id}
            whileHover={{scale: 1.08}}
            whileTap={{scale: 0.99}}
            >
              <Card
                className="w-36 h-36"
                style={{ backgroundColor: category.iconColor }}
              >
                <CardContent className="p-6 flex flex-col items-center justify-center">
                  {category.icon}
                  <div className="h-3 flex items-start">
                    <h3 className="font-sedium text-sm text-center">
                      {category.name}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          {/* <Card className="w-36">
            <CardContent className="p-7 flex flex-col items-center justify-center">
              <Cpu strokeWidth={1.5} className="w-10 h-10 m-2" />
              <h3 className="font-sedium text-sm text-center">
                Computer Science
              </h3>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </div>
  );
}
