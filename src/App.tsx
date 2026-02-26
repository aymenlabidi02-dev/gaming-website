import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GameGrid from "./components/GameGrid";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] selection:bg-[#6d28d9] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <GameGrid />

        {/* Additional Section: Categories or News */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 border-t border-white/5">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              BROWSE BY <span className="text-[#6d28d9]">GENRE</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-6">
            {["Action", "RPG", "Strategy", "Indie"].map((genre, i) => (
              <div
                key={genre}
                className="group relative flex h-32 cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-[#141417] transition-all hover:scale-105"
              >
                <img
                  src={`https://picsum.photos/seed/${genre.toLowerCase()}/400/200`}
                  alt={genre}
                  className="absolute inset-0 h-full w-full object-cover opacity-40 transition-transform duration-500 group-hover:scale-110 group-hover:opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] to-transparent opacity-80" />
                <span className="relative z-10 text-xl font-bold tracking-wider text-white">
                  {genre}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-[#0a0a0c] py-12 text-center text-sm text-gray-500">
        <p>&copy; 2026 Nexus Gaming. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="#" className="hover:text-white transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Support
          </a>
        </div>
      </footer>
    </div>
  );
}
