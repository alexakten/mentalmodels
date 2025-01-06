"use client";

import { useState } from "react";
import { motion } from "motion/react";

export default function Model({
  emoji,
  name,
  summary,
  definition,
  example,
  className = "",
}: {
  emoji: string;
  name: string;
  summary: string;
  definition: string;
  example: string;
  className?: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => setIsExpanded((prev) => !prev);

  return (
    <motion.div
      className={`border-b bg-white border-black border-opacity-10 py-8 px-4 cursor-pointer ${className}`}
      onClick={toggleExpansion}
    >
      <div className="flex md:flex-row flex-col gap-4">
        <aside className="bg-zinc-100 shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center">
          <p className="text-2xl md:text-3xl">{emoji}</p>
        </aside>
        <div>
          <h3 className="font-bold text-lg md:text-2xl">{name}</h3>
          <p className="mt-1 text-sm md:text-lg opacity-50">{summary}</p>
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
        <p className="text-xs md:text-sm mt-8 font-bold opacity-25">
          DEFINITION
        </p>
        <p className="mt-2 text-sm md:text-lg">{definition}</p>
        <p className="text-xs md:text-sm mt-8 font-bold opacity-25">EXAMPLE</p>
        <p className="mt-2 text-sm md:text-lg">{example}</p>
      </motion.div>
    </motion.div>
  );
}
