import { games } from "../data/games";
import GameCard from "./GameCard";

export default function GameGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            TRENDING <span className="text-[#00ffcc]">NOW</span>
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            The most played games this week.
          </p>
        </div>
        <a
          href="#"
          className="hidden text-sm font-bold text-[#6d28d9] hover:text-[#7c3aed] sm:block"
        >
          VIEW ALL RELEASES &rarr;
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-6">
        {games.map((game, index) => (
          <GameCard key={game.id} game={game} index={index} />
        ))}
      </div>
    </section>
  );
}
