import { ArrowRight } from "lucide-react";

function SectionHeader({
  title,
  viewAllHref = "#",
}: {
  title: string;
  viewAllHref?: string;
}) {
  return (
    <div className="mb-6 flex items-center justify-between md:mb-10">
      <div className="relative">
        <h2 className="text-xl font-bold tracking-tight text-gray-900">
          {title}
        </h2>
        <span className="absolute -bottom-2 left-0 h-1 w-12 bg-primary" />
      </div>
      <a
        href={viewAllHref}
        className="flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/90"
      >
        View All
        <ArrowRight size={16} />
      </a>
    </div>
  );
}

export { SectionHeader };
