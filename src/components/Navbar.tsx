import { Gamepad2, Search, Bell, User, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0a0a0c]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 text-white">
            <Gamepad2 className="h-8 w-8 text-[#00ffcc]" />
            <span className="text-xl font-bold tracking-tight">NEXUS</span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-400">
            <a
              href="#"
              className="text-white transition-colors hover:text-white"
            >
              Store
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Library
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Community
            </a>
            <a href="#" className="transition-colors hover:text-white">
              Esports
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Search games..."
              className="w-64 rounded-full bg-white/5 py-2 pl-10 pr-4 text-sm text-white placeholder-gray-500 outline-none focus:bg-white/10 focus:ring-1 focus:ring-[#00ffcc] transition-all"
            />
          </div>

          <button className="rounded-full p-2 text-gray-400 transition-colors hover:bg-white/10 hover:text-white">
            <Bell className="h-5 w-5" />
          </button>

          <button className="flex items-center gap-2 rounded-full bg-white/5 p-1 pr-4 transition-colors hover:bg-white/10">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#6d28d9] to-[#00ffcc]">
              <User className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm font-medium text-white hidden sm:block">
              PlayerOne
            </span>
          </button>

          <button className="md:hidden rounded-full p-2 text-gray-400 hover:bg-white/10 hover:text-white">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </nav>
  );
}
