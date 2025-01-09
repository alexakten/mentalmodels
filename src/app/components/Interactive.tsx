"use client";

import { useState } from "react";
import ModelsList from "./List"; // The server component
import {DiceFive } from "@phosphor-icons/react";

export default function InteractiveModelsList({
  models,
}: {
  models: {
    emoji: string;
    name: string;
    summary: string;
    definition: string;
    example: string;
  }[];
}) {
  // Store a copy of `models` in client state
  const [shuffledModels, setShuffledModels] = useState(models);

  const shuffleModels = () => {
    const temp = [...shuffledModels];
    for (let i = temp.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [temp[i], temp[j]] = [temp[j], temp[i]];
    }
    setShuffledModels(temp);
  };

  return (
    <div>
      <button
        onClick={shuffleModels}
        className="mb-4 flex items-center gap-2 px-4 py-2 border border-zinc-200 rounded-full hover:bg-zinc-100"
      >
        <DiceFive size={24} />
        Randomize
      </button>

      {/* Render the server component again, 
          but this time it's fed the shuffled array */}
      <ModelsList models={shuffledModels} />
    </div>
  );
}
