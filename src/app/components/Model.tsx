import { motion } from "motion/react";

export default function Model({
  emoji,
  name,
  summary,
  definition,
  example,
  isExpanded,
  onToggle,
}: {
  emoji: string;
  name: string;
  summary: string;
  definition: string;
  example: string;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      className="border-b border-zinc-300 py-8 cursor-pointer"
      onClick={onToggle}
    >
      <div className="flex gap-4">
        <aside className="bg-zinc-100 w-16 h-16 rounded-full flex items-center justify-center">
          <p className="text-3xl">{emoji}</p>
        </aside>
        <div>
          <h3 className="font-bold text-2xl">{name}</h3>
          <p className="mt-1 text-lg opacity-50">{summary}</p>
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
        className="overflow-hidden pl-20 flex flex-col"
      >
        <p className="text-sm mt-8 font-bold opacity-25">DEFINITION</p>
        <p className="mt-2 text-lg">{definition}</p>
        <p className="text-sm mt-8 font-bold opacity-25">EXAMPLE</p>
        <p className="mt-2 text-lg">{example}</p>
      </motion.div>
    </motion.div>
  );
}
