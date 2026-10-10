import Image from "next/image";

import { site } from "@/data/site";

function Hero() {
  return (
    <section className="bg-cream py-4">
      <div className="container mx-auto px-4">
        <div className="w-full overflow-hidden rounded-lg">
          {/* Desktop banner */}
          <Image
            src={site.slider.desktop}
            alt="NittoNova campaign"
            width={1280}
            height={420}
            priority
            className="hidden w-full object-cover md:block"
          />
          {/* Mobile banner */}
          <Image
            src={site.slider.mobile}
            alt="NittoNova campaign"
            width={800}
            height={800}
            priority
            className="block w-full object-cover md:hidden"
          />
        </div>
      </div>
    </section>
  );
}

export { Hero };
