import {
  CreditCard,
  RotateCcw,
  ShieldCheck,
  Truck,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Inside Dhaka within 24–48 hours",
  },
  {
    icon: RotateCcw,
    title: "Easy Return",
    description: "7 days easy return policy",
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    description: "100% secure payment",
  },
  {
    icon: ShieldCheck,
    title: "Authentic Products",
    description: "Genuine products guaranteed",
  },
];

function FeaturesBar() {
  return (
    <section className="bg-cream py-6 lg:pt-12">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-xl border border-cream-border bg-cream-deep shadow-sm md:rounded-2xl">
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={[
                  "group flex items-center gap-3 p-4 md:gap-4 md:p-5",
                  index < 2 ? "border-b lg:border-b-0" : "",
                  index < 3 ? "lg:border-r" : "",
                ].join(" ")}
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm md:size-12">
                  <feature.icon className="size-5 text-primary transition-transform group-hover:scale-110 md:size-6" />
                </span>
                <div className="flex flex-col text-center sm:items-start sm:text-left">
                  <span className="text-[10px] leading-tight font-bold tracking-tight text-zinc-900 uppercase md:text-xs">
                    {feature.title}
                  </span>
                  <span className="mt-0.5 text-[9px] leading-snug text-zinc-500 md:mt-1 md:text-[10px]">
                    {feature.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export { FeaturesBar };
