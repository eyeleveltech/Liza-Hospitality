import { Link, useRouterState } from "@tanstack/react-router";
import { Logo } from "@/components/liza/Logo";

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
      className={`group flex flex-col items-center gap-1.5 text-sm tracking-wide transition-colors hover:text-forest ${isActive ? "text-forest" : "text-forest/70"}`}
    >
      {label}
      <span
        className={`size-1 rotate-45 bg-gold transition-opacity ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"}`}
      />
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-cream">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" aria-label="Liza Hospitality — Home">
          <Logo variant="image" tone="default" size={48} className="h-12 w-28" />
        </Link>
        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} label={item.label} />
          ))}
        </nav>
        <Link to="/contact">
          <span className="btn-shimmer inline-block bg-terracotta px-6 py-3 text-xs tracking-[0.2em] uppercase text-terracotta-foreground transition-all duration-300 hover:opacity-90 hover:shadow-md cursor-pointer">
            Book Now
          </span>
        </Link>
      </div>
    </header>
  );
}
