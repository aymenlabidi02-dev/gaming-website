import React from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";

interface GameCardProps {
  key?: React.Key;
  game: {
    id: number;
    title: string;
    category: string;
    price: string;
    image: string;
    rating: string;
    tags: string[];
  };
  index: number;
}

export default function GameCard({ game, index }: GameCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group relative flex cursor-pointer flex-col overflow-hidden rounded-xl bg-[#141417] transition-all hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(109,40,217,0.3)]"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <img
          src={game.image}
          alt={game.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141417] via-transparent to-transparent opacity-80" />

        {/* Rating Badge */}
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-md bg-black/60 px-2 py-1 backdrop-blur-sm">
          <Star className="h-3 w-3 fill-[#00ffcc] text-[#00ffcc]" />
          <span className="text-xs font-bold text-white">{game.rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          <p className="mb-1 text-xs font-medium text-gray-400 uppercase tracking-wider">
            {game.category}
          </p>
          <h3 className="mb-2 text-lg font-bold text-white line-clamp-1">
            {game.title}
          </h3>

          <div className="mb-4 flex flex-wrap gap-2">
            {game.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="rounded bg-white/5 px-2 py-1 text-[10px] font-medium text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <span className="text-sm font-bold text-[#00ffcc]">{game.price}</span>
          <button className="rounded bg-white/10 px-3 py-1.5 text-xs font-bold text-white transition-colors hover:bg-[#6d28d9]">
            GET
          </button>
        </div>
      </div>
    </motion.div>
  );
}
