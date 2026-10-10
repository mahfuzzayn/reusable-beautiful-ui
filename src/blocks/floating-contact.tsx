import { Phone } from "lucide-react";

import { MessengerIcon, WhatsappIcon } from "@/components/icons";
import { site } from "@/data/site";

function FloatingContact() {
  return (
    <div className="fixed right-4 bottom-16 z-[100] flex flex-col items-end gap-3 md:right-8 md:bottom-8 md:gap-4">
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${site.whatsapp.replace("+", "")}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="group relative grid size-10 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110 md:size-12"
      >
        <span className="absolute top-0 right-0 z-20 size-3.5 rounded-full border-2 border-white bg-[#22c55e] md:size-4" />
        <WhatsappIcon className="size-5 md:size-6" />
        <span className="absolute right-full mr-3 rounded-lg bg-white px-3 py-1.5 text-[10px] font-bold whitespace-nowrap text-[#25D366] opacity-0 shadow-xl transition-opacity group-hover:opacity-100 md:mr-4 md:text-xs">
          WhatsApp
        </span>
      </a>

      {/* Messenger */}
      <a
        href={`https://m.me/${site.name}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Messenger"
        className="group relative grid size-10 place-items-center rounded-full bg-[#0084FF] text-white shadow-xl transition-transform hover:scale-110 md:size-12"
      >
        <MessengerIcon className="size-5 md:size-6" />
        <span className="absolute right-full mr-3 rounded-lg bg-white px-3 py-1.5 text-[10px] font-bold whitespace-nowrap text-[#0084FF] opacity-0 shadow-xl transition-opacity group-hover:opacity-100 md:mr-4 md:text-xs">
          Messenger
        </span>
      </a>

      {/* Phone */}
      <a
        href={`tel:${site.hotline}`}
        aria-label="Call us"
        className="group relative grid size-10 place-items-center rounded-full bg-primary text-white shadow-xl transition-transform hover:scale-110 md:size-12"
      >
        <Phone className="size-5 md:size-6" />
        <span className="absolute right-full mr-3 rounded-lg bg-white px-3 py-1.5 text-[10px] font-bold whitespace-nowrap text-primary opacity-0 shadow-xl transition-opacity group-hover:opacity-100 md:mr-4 md:text-xs">
          {site.hotline}
        </span>
      </a>
    </div>
  );
}

export { FloatingContact };
