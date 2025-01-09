// No "use client" here
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
  return (
    <div className="overflow-hidden bg-white border border-black border-opacity-10 rounded-2xl">
      {models.map((model, index) => (
        <Model
          key={index}
          index={index}
          emoji={model.emoji}
          name={model.name}
          summary={model.summary}
          definition={model.definition}
          example={model.example}
          className={
            index === 0
              ? "rounded-t-2xl"
              : index === models.length - 1
              ? "rounded-b-2xl border-none"
              : ""
          }
        />
      ))}
    </div>
  );
}
