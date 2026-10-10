import Image from "next/image";
import {
  ChevronDown,
  Heart,
  LayoutGrid,
  Phone,
  Search,
  ShoppingBag,
  User,
} from "lucide-react";

import { categories, site } from "@/data/site";

function Navbar() {
  return (
    <header>
      {/* Top bar */}
      <div className="hidden border-b border-zinc-800 bg-topbar text-white shadow-sm lg:block">
        <div className="container mx-auto flex h-9 items-center justify-between px-4 text-xs">
          <div className="flex items-center gap-2 text-zinc-300">
            <Phone size={13} className="text-primary" />
            <span>
              Hotline:{" "}
              <span className="font-semibold text-white">{site.hotline}</span>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="/order/track" className="text-zinc-300 transition-colors hover:text-primary">
              Track Order
            </a>
            <a href="/return-refund-policy" className="text-zinc-300 transition-colors hover:text-primary">
              Return &amp; Refund
            </a>
            <a href="/about" className="text-zinc-300 transition-colors hover:text-primary">
              About Us
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="sticky top-0 z-50 select-none bg-white font-sans transition-all duration-300">
        <div className="container mx-auto flex h-16 items-center gap-3 px-4 md:h-[72px] md:gap-6">
          <a href="/" className="flex h-12 shrink-0 items-center">
            <Image
              src={site.logo}
              alt={site.name}
              width={140}
              height={48}
              className="h-10 w-auto object-contain md:h-12"
              priority
            />
          </a>

          <div className="flex flex-1 items-center">
            <input
              type="text"
              placeholder="Search for massager, gadgets, smart watch…"
              className="h-11 min-w-0 flex-1 rounded-l-lg border border-zinc-200 bg-white px-4 text-sm text-zinc-900 transition-colors outline-none placeholder:text-zinc-400 focus:border-primary"
            />
            <button
              type="button"
              className="flex h-11 items-center gap-2 rounded-r-lg bg-primary px-4 text-[13px] font-bold text-white transition-colors hover:bg-primary/90 md:px-6"
            >
              <Search size={16} strokeWidth={2.5} />
              <span className="hidden sm:inline">Search</span>
            </button>
          </div>

          <div className="flex items-center gap-1 md:gap-2">
            <button
              type="button"
              aria-label="Wishlist"
              className="relative grid size-11 place-items-center rounded-full text-zinc-700 transition-colors hover:bg-primary/10 hover:text-primary"
            >
              <Heart size={20} />
            </button>
            <button
              type="button"
              aria-label="Cart"
              className="relative grid size-11 place-items-center rounded-full text-zinc-700 transition-colors hover:bg-primary/10 hover:text-primary"
            >
              <ShoppingBag size={20} />
              <span className="absolute top-1 right-1 grid size-4.5 place-items-center rounded-full bg-primary text-[10px] font-bold text-white">
                0
              </span>
            </button>
            <button
              type="button"
              aria-label="Account"
              className="hidden size-11 place-items-center rounded-full text-zinc-700 transition-colors hover:bg-primary/10 hover:text-primary sm:grid"
            >
              <User size={20} />
            </button>
          </div>
        </div>

        {/* Nav row */}
        <div className="border-t border-zinc-100">
          <div className="container mx-auto flex h-12 items-center gap-6 px-4">
            <div className="group relative">
              <button
                type="button"
                className="flex h-12 items-center gap-2 text-sm font-bold text-zinc-900 transition-colors group-hover:text-primary"
              >
                <LayoutGrid size={17} />
                All Categories
                <ChevronDown
                  size={15}
                  className="transition-transform duration-300 group-hover:rotate-180"
                />
              </button>
              <div className="invisible absolute top-full left-0 z-50 w-60 rounded-lg border border-zinc-100 bg-white py-2 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                {categories.map((category) => (
                  <a
                    key={category.slug}
                    href={`/category/${category.slug}`}
                    className="flex items-center gap-2.5 px-4 py-2 text-sm font-medium text-zinc-700 transition-colors hover:bg-cream hover:text-primary"
                  >
                    {category.image ? (
                      <Image
                        src={category.image}
                        alt=""
                        width={22}
                        height={22}
                        className="size-5.5 rounded object-contain"
                      />
                    ) : (
                      <span className="size-5.5 rounded bg-zinc-100" />
                    )}
                    {category.name}
                  </a>
                ))}
              </div>
            </div>

            <nav className="hidden items-center gap-6 md:flex">
              {site.headerMenu.map((item) => (
                <a
                  key={item.title}
                  href={item.url}
                  className="text-sm font-semibold text-zinc-800 transition-colors hover:text-primary"
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export { Navbar };
