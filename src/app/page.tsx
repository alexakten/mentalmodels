import List from "./components/List";
import { mentalModels } from "./components/Data";

export default function Home() {
  return (
    <main className="bg-zinc-50 py-24 px-4 flex flex-col items-center w-screen">
      <section className="w-full max-w-2xl">
        <h1 className="font-bold text-3xl md:text-5xl">🧠 99 Mental Models</h1>
        <h2 className="text-lg md:text-2xl mt-2 opacity-50">
          Principles to guide your thinking.
        </h2>
        <h2 className="text-sm md:text-lg mt-8">
          <span className="font-bold">99 Mental Models</span> is a curated list
          of mental models based on principles from various disciplines such as
          mathematics, physics, economics, and philosophy. These models have
          helped countless great thinkers throughout history make better
          decisions.
        </h2>
      </section>
      <section className="mt-16 w-full max-w-2xl">
        <List models={mentalModels} />
      </section>
    </main>
  );
}
