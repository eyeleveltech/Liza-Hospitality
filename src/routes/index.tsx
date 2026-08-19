import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Landmark,
  HeartHandshake,
  Salad,
  Leaf,
  Users,
} from "lucide-react";
import {
  IconRestaurant,
  IconWellness,
  IconPool,
  IconFitness,
  IconEvents,
  IconConcierge,
  IconAirportTransfer,
  IconWifi,
} from "@/components/liza/BrandIcons";

import heroLobby from "@/assets/hero_lobby.webp";
import hotelRoyale from "@/assets/royalebyliza.webp";
import hotelRegency from "@/assets/hotel-regency.webp";
import hotelGrande from "@/assets/hotel-grande.webp";
import hotelAltura from "@/assets/hotel-altura.webp";
import roomExecutive from "@/assets/room-executive.webp";
import roomPremium from "@/assets/room-premium.webp";
import roomSuite from "@/assets/room-suite.webp";
import storyService from "@/assets/story-service.webp";
import asset4Png from "@/assets/Asset 4.png";

import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarPicker } from "@/components/ui/calendar";

import { Diamond, Eyebrow, EyebrowLeft } from "@/components/liza/Divider";
import { SiteHeader } from "@/components/liza/SiteHeader";
import { SiteFooter } from "@/components/liza/SiteFooter";
import { Logo, LogoMark } from "@/components/liza/Logo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Liza Hospitality — Timeless Stays Across India" },
      {
        name: "description",
        content:
          "Rooted in culture, crafted for today. Discover elegant rooms, warm service and four Liza destinations across India.",
      },
      { property: "og:title", content: "Liza Hospitality — Timeless Stays Across India" },
      {
        property: "og:description",
        content:
          "Elegant stays, thoughtful service and unforgettable experiences at four Liza destinations.",
      },
    ],
  }),
  component: Index,
});

const hotels = [
  {
    name: "Liza ROYALE",
    img: hotelRoyale,
    text: "Timeless elegance in the heart of Periamet, Chennai.",
  },
  {
    name: "Liza REGENCY",
    img: hotelRegency,
    text: "Classic comfort with contemporary charm in Periamet, Chennai.",
  },
  {
    name: "Liza GRANDE",
    img: hotelGrande,
    text: "Spacious stays for modern travellers in Nungambakkam, Chennai.",
  },
  {
    name: "ALTURA by Liza",
    img: hotelAltura,
    text: "Contemporary elegance in the heart of Anna Salai, Chennai.",
  },
];

const rooms = [
  {
    name: "Executive Room",
    img: roomExecutive,
    text: "Smart, serene and stylish spaces designed for comfort.",
    price: "₹6,500",
  },
  {
    name: "Premium Room",
    img: roomPremium,
    text: "Elevated comforts with warm textures and timeless design.",
    price: "₹8,500",
  },
  {
    name: "Suite Room",
    img: roomSuite,
    text: "Spacious suites with separate living and refined luxury.",
    price: "₹12,500",
  },
];

const amenities = [
  { label: "Restaurant", Icon: IconRestaurant },
  { label: "Wellness Spa", Icon: IconWellness },
  { label: "Swimming Pool", Icon: IconPool },
  { label: "Fitness Centre", Icon: IconFitness },
  { label: "Events & Banquets", Icon: IconEvents },
  { label: "Concierge", Icon: IconConcierge },
  { label: "Airport Transfer", Icon: IconAirportTransfer },
  { label: "High Speed Wi-Fi", Icon: IconWifi },
];

const pillars = [
  {
    label: "Timeless Heritage",
    text: "Inspired by India's architecture, arts and traditions.",
    Icon: Landmark,
  },
  {
    label: "Thoughtful Service",
    text: "Intuitive, sincere and always personal.",
    Icon: HeartHandshake,
  },
  { label: "Culinary Excellence", text: "Dining that celebrates local flavours.", Icon: Salad },
  {
    label: "Sustainable Choices",
    text: "Responsible hospitality for a better tomorrow.",
    Icon: Leaf,
  },
];

const testimonials = [
  {
    quote:
      "Exceptional hospitality and attention to detail. From the warm welcome to the comfortable stay, everything was perfect.",
    name: "Ananya Sharma",
    city: "New Delhi",
  },
  {
    quote:
      "The suite was beautiful and the team anticipated every need. It felt less like a hotel and more like being hosted.",
    name: "Rohit Menon",
    city: "Bengaluru",
  },
  {
    quote:
      "Elegant interiors, remarkable food and genuinely kind people. Liza has become our family's default stay.",
    name: "Fatima Qureshi",
    city: "Hyderabad",
  },
];

function Index() {
  const navigate = useNavigate();
  const [roomIndex, setRoomIndex] = useState(0);
  const [quote, setQuote] = useState(0);

  // Functional Booking Bar State
  const [selectedHotel, setSelectedHotel] = useState("Liza ROYALE, Chennai");
  const [checkInDate, setCheckInDate] = useState<Date | undefined>(new Date(2026, 4, 20));
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>(new Date(2026, 4, 22));
  const [guests, setGuests] = useState("2 Guests");
  const [isSearching, setIsSearching] = useState(false);
  const [searchFeedback, setSearchFeedback] = useState<string | null>(null);

  const [checkInOpen, setCheckInOpen] = useState(false);
  const [checkOutOpen, setCheckOutOpen] = useState(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    setSearchFeedback(`Checking availability for ${selectedHotel}...`);
    setTimeout(() => {
      setIsSearching(false);
      navigate({ to: "/rooms" });
    }, 450);
  };

  const orderedRooms = [0, 1, 2].map((i) => rooms[(roomIndex + i) % rooms.length]);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative flex min-h-[calc(100svh-5rem)] flex-col justify-between overflow-hidden bg-cream">
        {/* Right-Anchored Hero Visual: Fits the full photo without zooming */}
        <div className="absolute inset-y-0 right-0 w-full overflow-hidden lg:w-[58%] xl:w-[60%]">
          <img
            src={heroLobby}
            alt="Liza Royale reception and lobby lounge"
            className="size-full object-cover object-center"
          />
          {/* Desktop Left-to-Right Soft Fade */}
          <div
            className="absolute inset-0 pointer-events-none hidden lg:block"
            style={{
              background:
                "linear-gradient(to right, oklch(0.975 0.026 85) 0%, oklch(0.975 0.026 85 / 0.5) 12%, transparent 28%)",
            }}
          />
          {/* Mobile Overlay to protect text legibility */}
          <div
            className="absolute inset-0 pointer-events-none lg:hidden"
            style={{
              background:
                "linear-gradient(to bottom, oklch(0.975 0.026 85 / 0.92) 0%, oklch(0.975 0.026 85 / 0.75) 45%, oklch(0.975 0.026 85 / 0.25) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-6 pt-10 pb-4 lg:px-16 lg:pt-14 lg:pb-6">
          <div className="max-w-xl">
            <h1 className="font-serif text-5xl leading-[1.05] text-forest sm:text-6xl lg:text-[76px]">
              Experience
              <br />
              Timeless
              <br />
              Hospitality
            </h1>
            <p className="mt-4 font-sans font-light italic text-forest/70 text-base sm:text-lg lg:text-xl">
              Four destinations. One promise.
            </p>
            <div className="mt-4 flex max-w-60 items-center gap-4">
              <span className="h-px flex-1 bg-gold/70" />
              <span className="size-1.5 rotate-45 bg-gold" />
              <span className="h-px flex-1 bg-gold/70" />
            </div>
          </div>
        </div>

        <div className="relative z-20 mx-auto w-full max-w-5xl px-6 pb-6 lg:pb-8">
          <form
            onSubmit={handleBookingSubmit}
            className="border border-border/40 bg-card p-5 shadow-[0_20px_60px_-20px_rgba(31,56,46,0.4)] sm:p-6 lg:p-7"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-xl sm:text-2xl text-forest">Book Your Stay</h2>
              {searchFeedback && (
                <span className="text-xs text-terracotta animate-pulse font-medium">
                  {searchFeedback}
                </span>
              )}
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_auto]">
              {/* Hotel Dropdown */}
              <div className="form-field-card relative bg-card px-4 py-2">
                <label className="block text-[0.6rem] tracking-[0.18em] uppercase text-muted-foreground">
                  Hotel
                </label>
                <Select value={selectedHotel} onValueChange={setSelectedHotel}>
                  <SelectTrigger className="h-7 border-0 p-0 shadow-none focus:ring-0 [&>svg]:text-muted-foreground">
                    <SelectValue placeholder="Choose a property" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Liza ROYALE, Chennai">Liza ROYALE, Chennai</SelectItem>
                    <SelectItem value="Liza REGENCY, Chennai">Liza REGENCY, Chennai</SelectItem>
                    <SelectItem value="Liza GRANDE, Chennai">Liza GRANDE, Chennai</SelectItem>
                    <SelectItem value="ALTURA by Liza, Chennai">ALTURA by Liza, Chennai</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Check In Calendar Popover */}
              <div className="form-field-card relative bg-card px-4 py-2">
                <label className="block text-[0.6rem] tracking-[0.18em] uppercase text-muted-foreground">
                  Check In
                </label>
                <Popover open={checkInOpen} onOpenChange={setCheckInOpen}>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className="mt-0.5 flex h-7 w-full cursor-pointer items-center justify-between text-left font-sans text-sm font-medium text-forest focus:outline-none"
                    >
                      <span className="truncate">
                        {checkInDate ? format(checkInDate, "dd-MM-yyyy") : "Select date"}
                      </span>
                      <Calendar className="size-4 shrink-0 text-gold" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent
                    align="start"
                    className="w-auto border border-border/70 bg-cream p-0 text-forest shadow-2xl"
                  >
                    <CalendarPicker
                      mode="single"
                      selected={checkInDate}
                      onSelect={(date) => {
                        if (date) {
                          setCheckInDate(date);
                          if (checkOutDate && date >= checkOutDate) {
                            const nextDay = new Date(date);
                            nextDay.setDate(nextDay.getDate() + 1);
                            setCheckOutDate(nextDay);
                          }
                          setCheckInOpen(false);
                        }
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Check Out Calendar Popover */}
              <div className="form-field-card relative bg-card px-4 py-2">
                <label className="block text-[0.6rem] tracking-[0.18em] uppercase text-muted-foreground">
                  Check Out
                </label>
                <Popover open={checkOutOpen} onOpenChange={setCheckOutOpen}>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className="mt-0.5 flex h-7 w-full cursor-pointer items-center justify-between text-left font-sans text-sm font-medium text-forest focus:outline-none"
                    >
                      <span className="truncate">
                        {checkOutDate ? format(checkOutDate, "dd-MM-yyyy") : "Select date"}
                      </span>
                      <Calendar className="size-4 shrink-0 text-gold" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent
                    align="start"
                    className="w-auto border border-border/70 bg-cream p-0 text-forest shadow-2xl"
                  >
                    <CalendarPicker
                      mode="single"
                      selected={checkOutDate}
                      disabled={checkInDate ? (date) => date <= checkInDate : undefined}
                      onSelect={(date) => {
                        if (date) {
                          setCheckOutDate(date);
                          setCheckOutOpen(false);
                        }
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Guests Dropdown */}
              <div className="form-field-card relative bg-card px-4 py-2">
                <label className="block text-[0.6rem] tracking-[0.18em] uppercase text-muted-foreground">
                  Guests
                </label>
                <Select value={guests} onValueChange={setGuests}>
                  <SelectTrigger className="h-7 border-0 p-0 shadow-none focus:ring-0 [&>svg]:text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Users className="size-4 shrink-0 text-gold" />
                      <SelectValue placeholder="Select guests" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1 Guest">1 Guest</SelectItem>
                    <SelectItem value="2 Guests">2 Guests</SelectItem>
                    <SelectItem value="3 Guests">3 Guests</SelectItem>
                    <SelectItem value="4+ Guests (2 Rooms)">4+ Guests (2 Rooms)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <button
                type="submit"
                disabled={isSearching}
                className="flex cursor-pointer items-center justify-center bg-terracotta px-8 py-3.5 text-xs tracking-[0.2em] uppercase text-terracotta-foreground transition-opacity hover:opacity-90 active:scale-[0.99]"
              >
                {isSearching ? "Searching..." : "Search"}
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Hotels */}
      <section className="bg-cream px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>Our Hotels</Eyebrow>
          <h2 className="mt-5 text-center font-serif text-4xl text-forest lg:text-5xl">
            Four Destinations. One Promise.
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {hotels.map((h) => (
              <article
                key={h.name}
                className="group overflow-hidden border border-border/60 bg-card transition-all duration-300 hover:border-gold/50 hover:shadow-[0_20px_50px_-30px_rgba(31,56,46,0.4)]"
              >
                <div className="overflow-hidden">
                  <img
                    src={h.img}
                    alt={h.name}
                    width={800}
                    height={640}
                    loading="lazy"
                    className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="px-5 py-6 text-center">
                  <h3 className="font-serif text-xl text-forest">{h.name}</h3>
                  <div className="my-3">
                    <Diamond />
                  </div>
                  <p className="text-xs leading-relaxed text-muted-foreground">{h.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured rooms */}
      <section className="relative overflow-hidden bg-forest px-6 py-20 lg:py-24">
        {/* Brand Pattern Background Texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "url('/brand-pattern.webp')",
            backgroundRepeat: "repeat",
            backgroundBlendMode: "overlay",
            mixBlendMode: "overlay",
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl">
          <Eyebrow className="text-gold">Featured Rooms</Eyebrow>
          <h2 className="mt-5 text-center font-serif text-4xl text-cream lg:text-5xl">
            Rest. Relax. Reconnect.
          </h2>
          <div className="mt-14 flex items-center gap-4 lg:gap-8">
            <CarouselButton
              label="Previous room"
              onClick={() => setRoomIndex((i) => (i + rooms.length - 1) % rooms.length)}
            >
              <ChevronLeft className="size-4" />
            </CarouselButton>
            <div className="grid flex-1 gap-6 md:grid-cols-3">
              {orderedRooms.map(
                (r) =>
                  r && (
                    <article key={r.name} className="overflow-hidden bg-cream shadow-lg">
                      <div className="overflow-hidden">
                        <img
                          src={r.img}
                          alt={r.name}
                          width={900}
                          height={640}
                          loading="lazy"
                          className="h-52 w-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="font-serif text-xl text-forest">{r.name}</h3>
                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                          {r.text}
                        </p>
                        <div className="mt-6 flex items-center justify-between">
                          <p className="text-xs text-muted-foreground">
                            From{" "}
                            <span className="text-sm font-semibold text-forest">{r.price}</span> /
                            night
                          </p>
                          <button className="bg-forest px-5 py-3 text-[0.65rem] tracking-[0.2em] uppercase text-forest-foreground transition-colors hover:bg-terracotta cursor-pointer">
                            View Room
                          </button>
                        </div>
                      </div>
                    </article>
                  ),
              )}
            </div>
            <CarouselButton
              label="Next room"
              onClick={() => setRoomIndex((i) => (i + 1) % rooms.length)}
            >
              <ChevronRight className="size-4" />
            </CarouselButton>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="bg-cream px-6 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>Amenities</Eyebrow>
          <h2 className="mt-5 text-center font-serif text-4xl text-forest lg:text-5xl">
            Designed Around You
          </h2>
          <div className="mt-14 grid grid-cols-2 gap-y-10 sm:grid-cols-4 lg:grid-cols-8">
            {amenities.map(({ label, Icon }, i) => (
              <div
                key={label}
                className={`flex flex-col items-center gap-3 px-2 text-center ${i !== amenities.length - 1 ? "lg:border-r lg:border-border/60" : ""}`}
              >
                <Icon className="size-14 text-forest transition-transform duration-300 hover:scale-105" />
                <span className="text-xs font-medium tracking-wide text-forest/80">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="bg-cream px-6 py-20 lg:px-16 lg:py-24">
          <EyebrowLeft>Our Story</EyebrowLeft>
          <h2 className="mt-6 font-serif text-4xl leading-tight text-forest lg:text-5xl">
            Rooted in Culture.
            <br />
            Crafted for Today.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Liza Hospitality blends India's rich heritage with contemporary elegance. Every detail
            is thoughtfully curated to create warm, memorable experiences for our guests.
          </p>
          <div className="mt-10 grid max-w-lg gap-8 sm:grid-cols-2">
            {pillars.map(({ label, text, Icon }) => (
              <div key={label} className="flex gap-3">
                <Icon className="mt-0.5 size-5 shrink-0 text-gold" strokeWidth={1.25} />
                <div>
                  <h3 className="text-sm font-medium text-forest">{label}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative min-h-96">
          <img
            src={storyService}
            alt="A Liza Hospitality host arranging fresh flowers in the lobby"
            width={1104}
            height={912}
            loading="lazy"
            className="absolute inset-0 size-full object-cover"
          />
          {/* Circular Brand Crest Card with Clear Space & Do's Rules */}
          <div className="absolute bottom-8 right-8 hidden w-64 border border-gold/40 bg-forest/95 p-6 text-center shadow-xl backdrop-blur-sm lg:block">
            <p className="font-serif text-lg italic text-cream">Every Stay Tells a Story</p>
            <div className="my-3">
              <Diamond />
            </div>
            <div className="flex justify-center">
              <LogoMark size={64} color="#dccc86" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative overflow-hidden bg-forest px-6 py-20 lg:py-24">
        {/* Brand Pattern Background Texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "url('/brand-pattern.webp')",
            backgroundRepeat: "repeat",
            backgroundBlendMode: "overlay",
            mixBlendMode: "overlay",
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="flex items-center justify-between gap-4 sm:gap-8">
            <CarouselButton
              label="Previous review"
              onClick={() => setQuote((i) => (i + testimonials.length - 1) % testimonials.length)}
            >
              <ChevronLeft className="size-4" />
            </CarouselButton>

            <div className="flex-1 px-2 text-center sm:px-6">
              <Eyebrow>Guest Experiences</Eyebrow>
              <h2 className="mt-4 font-serif text-3xl text-cream sm:text-4xl lg:text-5xl">
                Loved by Our Guests
              </h2>
              <blockquote className="mt-8 flex min-h-20 items-center justify-center font-serif text-lg leading-relaxed text-cream/90 italic lg:text-xl">
                &ldquo;{testimonials[quote]?.quote}&rdquo;
              </blockquote>
              <div className="my-6">
                <Diamond />
              </div>
              <p className="text-sm font-medium text-cream">{testimonials[quote]?.name}</p>
              <p className="mt-0.5 text-xs text-cream/60">{testimonials[quote]?.city}</p>
            </div>

            <CarouselButton
              label="Next review"
              onClick={() => setQuote((i) => (i + 1) % testimonials.length)}
            >
              <ChevronRight className="size-4" />
            </CarouselButton>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function CarouselButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex size-10 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold transition-colors hover:bg-gold hover:text-forest"
    >
      {children}
    </button>
  );
}
