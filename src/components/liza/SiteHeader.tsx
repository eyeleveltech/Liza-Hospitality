import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/liza/Logo";
import { Diamond } from "@/components/liza/Divider";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Rooms", to: "/rooms" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

function NavLink({ to, label }: { to: string; label: string }) {
  const { location } = useRouterState();
  const isActive = to === "/" ? location.pathname === "/" : location.pathname === to;
  return (
    <Link
      to={to}
      className={`group flex flex-col items-center gap-1.5 text-sm tracking-wide transition-colors hover:text-forest ${isActive ? "text-forest font-medium" : "text-forest/70"}`}
    >
      {label}
      <span
        className={`size-1 rotate-45 bg-gold transition-opacity ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"}`}
      />
    </Link>
  );
}

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const { location } = useRouterState();

  // Close drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-cream">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" aria-label="Liza Hospitality — Home">
          <Logo variant="image" tone="default" size={48} className="h-11 w-28 sm:h-12 sm:w-30" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} label={item.label} />
          ))}
        </nav>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link to="/contact" className="hidden sm:inline-block">
            <span className="btn-shimmer inline-block bg-terracotta px-6 py-3 text-xs tracking-[0.2em] uppercase text-terracotta-foreground transition-all duration-300 hover:opacity-90 hover:shadow-md cursor-pointer">
              Book Now
            </span>
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            className="flex size-11 items-center justify-center border border-border/60 text-forest transition-colors hover:border-gold hover:text-gold cursor-pointer md:hidden"
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Full-Screen Isolated Mobile Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#FFF6E4] md:hidden animate-hero-title">
          {/* Mobile Drawer Top Bar */}
          <div className="flex h-20 items-center justify-between border-b border-border/40 bg-cream px-6">
            <Link to="/" aria-label="Liza Hospitality — Home" onClick={() => setIsOpen(false)}>
              <Logo
                variant="image"
                tone="default"
                size={48}
                className="h-11 w-28 sm:h-12 sm:w-30"
              />
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation menu"
              className="flex size-11 items-center justify-center border border-border/60 text-forest transition-colors hover:border-gold hover:text-gold cursor-pointer"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Mobile Drawer Content */}
          <div className="relative flex flex-1 flex-col overflow-y-auto px-6 py-4 sm:px-8">
            {/* Opaque brand pattern texture */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: "url('/brand-pattern.webp')",
                backgroundSize: "280px",
                backgroundRepeat: "repeat",
              }}
            />

            <div className="relative z-10 flex flex-1 flex-col justify-between">
              <nav className="flex flex-col space-y-2.5 pt-2">
                {navItems.map((item) => {
                  const isActive =
                    item.to === "/" ? location.pathname === "/" : location.pathname === item.to;
                  return (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between border-b border-forest/10 pb-2.5 font-serif text-2xl tracking-wide transition-colors ${
                        isActive
                          ? "font-bold text-forest"
                          : "font-normal text-forest/90 hover:text-gold"
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="size-2 rotate-45 bg-gold" />}
                    </Link>
                  );
                })}
              </nav>

              <div className="space-y-3 pt-4 pb-2 text-center">
                <div className="flex justify-center">
                  <Diamond />
                </div>
                <p className="font-sans text-xs italic text-forest/80">
                  Four destinations. One promise.
                </p>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-shimmer block w-full bg-terracotta py-3.5 text-xs font-medium tracking-[0.24em] uppercase text-terracotta-foreground transition-all duration-300 hover:opacity-95 shadow-md cursor-pointer"
                >
                  Book Your Stay
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
