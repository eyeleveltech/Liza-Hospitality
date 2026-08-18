import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from "lucide-react";
import { Logo } from "@/components/liza/Logo";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Rooms", to: "/rooms" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

const hotels = ["Liza Royale", "Liza Regency", "Liza Grande", "ALTURA by Liza"];

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-xs tracking-[0.22em] uppercase font-semibold text-forest">{title}</h3>
      <ul className="mt-5 space-y-3 text-xs leading-relaxed text-forest/80">{children}</ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-cream text-forest">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:grid-cols-2 lg:grid-cols-[1.35fr_1.25fr_0.8fr_0.95fr_1.25fr] lg:gap-8 xl:gap-10">
        <div className="lg:pr-4">
          <Logo variant="image" tone="default" size={44} className="h-11 w-auto max-w-[180px]" />
          <p className="mt-4 text-xs leading-relaxed text-forest/70">
            Rooted in culture. Crafted for today. Elevating experiences, creating memories.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex size-8 items-center justify-center rounded-full border border-border/60 text-forest/70 transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="size-3.5" />
              </a>
            ))}
          </div>
        </div>

        <FooterCol title="Contact Us">
          <li className="flex items-start gap-2.5">
            <MapPin className="mt-0.5 size-3.5 shrink-0 text-gold" />
            <span>Liza House, Connaught Place, New Delhi – 110001, India</span>
          </li>
          <li className="flex items-center gap-2.5">
            <Phone className="size-3.5 shrink-0 text-gold" />
            <span>+91 11 4567 8900</span>
          </li>
          <li className="flex items-center gap-2.5">
            <Mail className="size-3.5 shrink-0 text-gold" />
            <span>hello@lizahospitality.com</span>
          </li>
        </FooterCol>

        <FooterCol title="Quick Links">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link to={item.to} className="transition-colors hover:text-gold">
                {item.label}
              </Link>
            </li>
          ))}
        </FooterCol>

        <FooterCol title="Our Hotels">
          {hotels.map((h) => (
            <li key={h}>
              <a href="#" className="transition-colors hover:text-gold">
                {h}
              </a>
            </li>
          ))}
        </FooterCol>

        <div className="lg:pl-2">
          <h3 className="text-xs tracking-[0.22em] uppercase font-semibold text-forest">
            Newsletter
          </h3>
          <p className="mt-5 text-xs leading-relaxed text-forest/70">
            Stay updated with our offers and experiences.
          </p>
          <form className="mt-4 space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="Enter your email"
              aria-label="Email address"
              className={cn(
                "w-full bg-card px-3 py-2.5 text-xs text-forest",
                "border border-border/60 placeholder:text-muted-foreground",
                "focus:border-gold focus:outline-none",
              )}
            />
            <button
              type="submit"
              className="w-full bg-terracotta py-2.5 text-[0.65rem] tracking-[0.2em] uppercase text-terracotta-foreground transition-opacity hover:opacity-90"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-border/40">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-[0.65rem] tracking-wide text-forest/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Liza Hospitality. All rights reserved.</p>
          <div className="flex gap-6 uppercase">
            <a href="#" className="hover:text-gold">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gold">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
