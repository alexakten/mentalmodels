import List from "./components/List";

const mentalModels = [
  {
    emoji: "🧪",
    name: "First Principles Thinking",
    summary: "Breaking down problems into their fundamental parts.",
    definition:
      "First Principles Thinking involves deconstructing a problem into its basic truths and reasoning up from there, enabling innovative solutions.",
    example:
      "When faced with a problem, first principles thinking involves breaking it down into its fundamental components, such as the basic principles of physics or the fundamental principles of a business. By starting with these basic truths, you can develop a more comprehensive understanding of the problem and create innovative solutions that are not limited by existing assumptions or constraints.",
  },
  {
    emoji: "📊",
    name: "The Pareto Principle",
    summary: "80% of outcomes come from 20% of inputs.",
    definition:
      "The Pareto Principle suggests focusing on the few inputs that yield the most significant results, often applied in productivity and business.",
    example:
      "The Pareto Principle can be applied to many areas of life, such as productivity, business, and personal finance. For example, if you spend 80% of your time on 20% of your tasks, you can focus on those tasks and delegate the rest to others. This can help you achieve more in less time and improve your overall productivity.",
  },
  {
    emoji: "🔄",
    name: "Inversion",
    summary: "Think backwards to avoid failure.",
    definition:
      "Inversion involves thinking about what you want to avoid or what could go wrong to ensure success by planning against negative outcomes.",
    example:
      "Inversion can be applied to many areas of life, such as business, personal finance, and relationships. For example, if you want to avoid failure in a business, you can think about what could go wrong and plan against it. This can help you avoid common pitfalls and ensure your success.",
  },
];

export default function Home() {
  return (
    <main className="bg-zinc-50 py-24 px-4 flex flex-col items-center w-screen">
      <section className="w-full max-w-2xl">
        <h1 className="font-bold text-3xl md:text-5xl">🧠 99 Mental Models</h1>
        <h2 className="text-lg md:text-2xl mt-2 opacity-50">
          Principles to help you think better.
        </h2>
        <h2 className="text-sm md:text-lg mt-8">
          <span className="font-bold">99 Mental Models</span> is a curated list
          of mental models based on principles from mathematics, physics,
          economics, and philosophy. These models have helped great thinkers
          such as Elon Musk, Ray Dalio, and Sam Altman make better decisions.
        </h2>
      </section>
      <section className="mt-16 w-full max-w-2xl">
        <List models={mentalModels} />
      </section>
    </main>
  );
}
