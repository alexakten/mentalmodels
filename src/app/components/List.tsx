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
    tags: string[];
  }[];
}) {
  return (
    <div className="overflow-hidden bg-white border border-black border-opacity-10 rounded-2xl">
      {models.map((model, index) => (
        <Model
          key={index}
          emoji={model.emoji}
          name={model.name}
          summary={model.summary}
          definition={model.definition}
          example={model.example}
          tags={model.tags}
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
