import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/components/icons";
import { site } from "@/data/site";

function Footer() {
  return (
    <footer className="mt-8 border-t border-zinc-200 bg-white font-sans text-zinc-700">
      <div className="container mx-auto grid grid-cols-1 gap-12 px-4 py-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
        {/* Brand */}
        <div className="space-y-8 lg:col-span-4">
          <a href="/" className="inline-flex h-12 items-center">
            <Image
              src={site.logo}
              alt={site.name}
              width={140}
              height={48}
              className="h-12 w-auto object-contain"
            />
          </a>
          <p className="max-w-sm text-sm leading-relaxed text-zinc-600">
            {site.footerText}
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="grid size-10 place-items-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-600 transition-all duration-300 hover:border-primary/50 hover:text-primary"
            >
              <FacebookIcon className="size-4" />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="grid size-10 place-items-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-600 transition-all duration-300 hover:border-primary/50 hover:text-primary"
            >
              <YoutubeIcon className="size-4" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="grid size-10 place-items-center rounded-lg border border-zinc-200 bg-zinc-50 text-zinc-600 transition-all duration-300 hover:border-primary/50 hover:text-primary"
            >
              <InstagramIcon className="size-4" />
            </a>
          </div>
        </div>

        {/* Categories */}
        <div className="lg:col-span-2">
          <h4 className="mb-8 text-sm font-semibold tracking-wider text-zinc-900 uppercase">
            Categories
          </h4>
          <ul className="space-y-3">
            {site.footerCategories.map((link) => (
              <li key={link.title}>
                <a
                  href={link.url}
                  className="text-sm text-zinc-600 transition-colors hover:text-primary"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <div className="lg:col-span-2">
          <h4 className="mb-8 text-sm font-semibold tracking-wider text-zinc-900 uppercase">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {site.footerLinks.map((link) => (
              <li key={link.title}>
                <a
                  href={link.url}
                  className="text-sm text-zinc-600 transition-colors hover:text-primary"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-6 lg:col-span-4">
          <h4 className="mb-8 text-sm font-semibold tracking-wider text-zinc-900 uppercase">
            Get in Touch
          </h4>
          <div className="flex items-start gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-cream-deep text-primary">
              <Phone size={16} />
            </span>
            <div>
              <p className="text-xs tracking-widest text-zinc-500 uppercase">
                Hotline
              </p>
              <p className="mt-0.5 text-sm font-semibold text-zinc-900">
                {site.hotline}
                <span className="ml-2 text-xs font-normal text-zinc-500">
                  (9am – 10pm)
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-cream-deep text-primary">
              <Mail size={16} />
            </span>
            <div>
              <p className="text-xs tracking-widest text-zinc-500 uppercase">
                Email
              </p>
              <p className="mt-0.5 text-sm font-semibold text-zinc-900">
                {site.email}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-cream-deep text-primary">
              <MapPin size={16} />
            </span>
            <div>
              <p className="text-xs tracking-widest text-zinc-500 uppercase">
                Address
              </p>
              <p className="mt-0.5 text-sm leading-relaxed text-zinc-800">
                {site.address}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-100 bg-zinc-50">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-5 text-sm text-zinc-600 lg:flex-row">
          <p className="text-center lg:text-left">
            © 2026 {site.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            <span className="inline-block size-2 rounded-full bg-emerald-500" />
            Cash on Delivery available all over Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
