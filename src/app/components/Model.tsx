"use client";

import { useState } from "react";
import { motion } from "motion/react";

export const TAG_COLORS: Record<string, string> = {
  Psychology: "text-blue-700",
  Economics: "text-green-700",
  Biology: "text-purple-700",
  Physics: "text-yellow-700",
  Mathematics: "text-red-700",
  Productivity: "text-pink-700",
  Philosophy: "text-teal-700",
  "Decision-Making": "text-gray-700",
  Business: "text-indigo-700",
  Strategy: "text-blue-700",
  "Game Theory": "text-orange-700",
  Sociology: "text-blue-700",
  "Environmental Science": "text-green-700",
  "Risk Management": "text-red-700",
  "Behavioral Economics": "text-green-700",
  "Chaos Theory": "text-purple-700",
  Finance: "text-blue-700",
  Marketing: "text-yellow-700",
  Education: "text-pink-700",
  Statistics: "text-orange-700",
  "Problem-Solving": "text-indigo-700",
  "Self-Control": "text-rose-700",
  Engineering: "text-gray-700",
  Communication: "text-sky-700",
  Planning: "text-lime-700",
  "Group Dynamics": "text-stone-700",
  Media: "text-amber-700",
  Design: "text-fuchsia-700",
  Metaphor: "text-cyan-700",
};

export default function Model({
  index,
  emoji,
  name,
  summary,
  definition,
  example,
  // tags,
  className = "",
}: {
  index: number;
  emoji: string;
  name: string;
  summary: string;
  definition: string;
  example: string;
  // tags: string[];
  className?: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => setIsExpanded((prev) => !prev);

  return (
    <motion.div
      className={`border-b bg-white border-black border-opacity-10 py-4 md:py-8 px-4 cursor-pointer ${className}`}
      onClick={toggleExpansion}
    >
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex justify-between">
          <aside className="bg-zinc-100 shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center">
            <p className="text-2xl md:text-3xl">{emoji}</p>
          </aside>
          <p className="flex text-xs text-black font-medium bg-zinc-50 rounded-full w-6 h-6 shrink-0 md:hidden items-center justify-center text-opacity-25">
            {index + 1}
          </p>
        </div>
        <div className="w-full">
          <div className="flex w-full justify-between">
            {/* <h3 className="font-bold text-lg md:text-2xl">{index + 1}{". "}{name}</h3> */}
            <h3 className="font-bold text-lg md:text-2xl">{name}</h3>
            <p className="md:flex text-xs text-black font-medium bg-zinc-50 rounded-full w-6 h-6 shrink-0 hidden items-center justify-center text-opacity-25">
              {index + 1}
            </p>
          </div>
          <p className="mt-1 text-sm md:text-lg opacity-50">{summary}</p>
          {/* <div className="flex flex-wrap gap-4 mt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className={`text-xs opacity-80 font-semibold ${
                  TAG_COLORS[tag] || "text-gray-800"
                }`}
              >
                #{tag}
              </span>
            ))}
          </div> */}
        </div>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          isExpanded
            ? { height: "auto", opacity: 1 }
            : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.1, ease: "easeInOut" }}
        className="overflow-hidden pl-0 md:pr-12 md:pl-20 flex flex-col"
      >
        <p className="text-xs md:text-sm mt-8 font-bold opacity-30">
          DEFINITION
        </p>
        <p className="mt-2 text-sm md:text-lg">{definition}</p>
        <p className="text-xs md:text-sm mt-8 font-bold opacity-30">EXAMPLE</p>
        <p className="mt-2 text-sm md:text-lg">{example}</p>
      </motion.div>
    </motion.div>
  );
}
