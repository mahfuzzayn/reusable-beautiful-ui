import Image from "next/image";

import { categories } from "@/data/site";

function CategoryStrip() {
  return (
    <section className="overflow-hidden py-6">
      <div className="container mx-auto px-4">
        <div className="scrollbar-hide flex snap-x gap-1 overflow-x-auto pb-6 md:gap-2">
          {categories.map((category) => (
            <a
              key={category.slug}
              href={`/category/${category.slug}`}
              className="group w-[84px] shrink-0 snap-start md:w-28"
            >
              <div className="aspect-square w-full overflow-hidden rounded-xl border border-zinc-100 bg-white p-1.5 transition-colors group-hover:border-primary/40">
                {category.image ? (
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={112}
                    height={112}
                    className="size-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <div className="grid size-full place-items-center rounded-lg bg-cream-deep text-xl font-bold text-primary">
                    {category.name.charAt(0)}
                  </div>
                )}
              </div>
              <p className="mt-2 line-clamp-2 w-full px-1 text-center text-[10px] leading-[1.1] font-bold text-zinc-900 transition-colors duration-300 group-hover:text-primary sm:text-[11px] md:text-[13px]">
                {category.name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export { CategoryStrip };
