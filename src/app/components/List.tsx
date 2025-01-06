"use client";

import { useState } from "react";
import Model from "./Model";

export default function ModelsList({
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
  // State to track the expanded state for each model
  const [expandedStates, setExpandedStates] = useState<boolean[]>(
    models.map(() => false)
  );

  const toggleModel = (index: number) => {
    setExpandedStates((prev) =>
      prev.map((isExpanded, i) => (i === index ? !isExpanded : isExpanded))
    );
  };

  return (
    <div>
      {models.map((model, index) => (
        <Model
          key={index}
          emoji={model.emoji}
          name={model.name}
          summary={model.summary}
          definition={model.definition}
          example={model.example}
          isExpanded={expandedStates[index]}
          onToggle={() => toggleModel(index)}
        />
      ))}
    </div>
  );
}
