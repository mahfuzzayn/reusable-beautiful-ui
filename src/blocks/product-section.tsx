import type { ProductGroup } from "@/data/site";
import { ProductCard } from "@/components/product-card";
import { SectionHeader } from "@/components/section-header";

function ProductSection({ group }: { group: ProductGroup }) {
  return (
    <section className="bg-cream py-2 lg:py-6">
      <div className="container mx-auto px-4">
        <SectionHeader
          title={group.name}
          viewAllHref={`/category/${group.slug}`}
        />
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-6 lg:grid-cols-3 xl:grid-cols-5">
          {group.products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export { ProductSection };
