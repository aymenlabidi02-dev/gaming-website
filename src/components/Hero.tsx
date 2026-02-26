import { motion } from "motion/react";
import { Play, Plus } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/cyberpunk/1920/1080?blur=2"
          alt="Featured Game"
          className="h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0c] via-[#0a0a0c]/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-7xl items-end px-4 pb-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-[#00ffcc] backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00ffcc] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00ffcc]"></span>
            </span>
            AVAILABLE NOW
          </div>

          <h1 className="mb-4 text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
            CYBER <br />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffcc] to-[#6d28d9]">
              SYNDICATE
            </span>
          </h1>

          <p className="mb-8 text-lg text-gray-300 sm:text-xl">
            Dive into the neon-soaked streets of Neo-Veridia. Build your crew,
            hack the megacorps, and survive the ultimate cyberpunk RPG
            experience.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button className="flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-bold text-black transition-transform hover:scale-105 active:scale-95">
              <Play className="h-5 w-5 fill-black" />
              PLAY NOW
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-white/10 px-8 py-3.5 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-105 active:scale-95">
              <Plus className="h-5 w-5" />
              WISHLIST
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
