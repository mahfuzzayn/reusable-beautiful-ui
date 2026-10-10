import { CategoryStrip } from "@/blocks/category-strip";
import { FeaturesBar } from "@/blocks/features-bar";
import { FloatingContact } from "@/blocks/floating-contact";
import { Footer } from "@/blocks/footer";
import { Hero } from "@/blocks/hero";
import { Navbar } from "@/blocks/navbar";
import { ProductSection } from "@/blocks/product-section";
import { productGroups, trending } from "@/data/site";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <CategoryStrip />
        <Hero />
        <FeaturesBar />
        <ProductSection group={trending} />
        {productGroups.map((group) => (
          <ProductSection key={group.slug} group={group} />
        ))}
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
