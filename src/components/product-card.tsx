import Image from "next/image";
import { Star } from "lucide-react";

import type { Product } from "@/data/site";
import { formatBDT } from "@/lib/utils";

function ProductCard({ product }: { product: Product }) {
  const soldOut = product.stock <= 0;
  const discountPercent =
    !soldOut &&
    product.previousPrice &&
    product.previousPrice > product.price
      ? Math.round(
          ((product.previousPrice - product.price) / product.previousPrice) *
            100
        )
      : 0;

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-[12px] border border-zinc-100 bg-white transition-all hover:shadow-lg hover:shadow-zinc-200/50">
      {/* Badges */}
      <div className="pointer-events-none absolute top-3 left-3 z-20 flex flex-col gap-1.5">
        {product.remarks ? (
          <div className="rounded bg-zinc-900 px-2 py-0.5 text-[9px] font-bold tracking-wider text-white uppercase">
            {product.remarks}
          </div>
        ) : null}
        {discountPercent > 0 ? (
          <div className="rounded bg-primary px-2 py-0.5 text-[10px] font-bold text-white shadow-sm">
            -{discountPercent}%
          </div>
        ) : null}
      </div>

      {/* Image */}
      <a
        href={`/product/${product.slug}`}
        className="relative mb-2 block aspect-square w-full overflow-hidden"
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1280px) 20vw, (min-width: 768px) 33vw, 50vw"
          className="object-contain p-2 mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
        />
        {soldOut ? (
          <div className="absolute inset-0 z-10 flex items-center justify-center">
            <span className="rounded-full bg-zinc-900 px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase">
              Sold Out
            </span>
          </div>
        ) : null}
      </a>

      {/* Body */}
      <div className="flex flex-grow flex-col px-3 pb-3">
        <a href={`/product/${product.slug}`} className="mb-2">
          <h3 className="line-clamp-1 text-[12px] leading-tight font-bold text-zinc-900 transition-colors hover:text-primary md:text-[14px]">
            {product.name}
          </h3>
        </a>

        <div className="mb-2 flex items-center gap-1.5">
          <div className="flex items-center text-primary">
            <Star size={14} fill="currentColor" strokeWidth={0} />
            <span className="ml-1 text-[12px] font-bold text-zinc-600 md:text-[13px]">
              {Number(product.avgRating || 0).toFixed(1)}
            </span>
          </div>
          <span className="text-[11px] text-zinc-400 md:text-[12px]">
            ({product.reviewsCount || 0})
          </span>
        </div>

        <div className="mt-auto mb-2 flex items-baseline gap-2">
          <span className="text-[16px] font-bold text-primary md:text-[18px]">
            ৳{formatBDT(product.price)}
          </span>
          {product.previousPrice && product.previousPrice > product.price ? (
            <span className="text-[13px] font-medium text-zinc-400 line-through">
              ৳{formatBDT(product.previousPrice)}
            </span>
          ) : null}
        </div>

        <button
          type="button"
          className={
            soldOut
              ? "pointer-events-none w-full rounded-lg border border-zinc-300 bg-zinc-50 py-2 text-center text-[12px] font-bold text-zinc-500 md:text-[14px]"
              : "w-full rounded-lg border border-primary py-2 text-center text-[12px] font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-white active:scale-[0.98] md:text-[14px]"
          }
        >
          {soldOut ? "Sold Out" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

export { ProductCard };
