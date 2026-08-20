import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react";
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
import { ScrollReveal } from "@/components/liza/ScrollReveal";
import { cn } from "@/lib/utils";

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
    text: "Periamet, Chennai — Flagship property with bespoke interiors, fine dining, and timeless hospitality.",
  },
  {
    name: "Liza REGENCY",
    img: hotelRegency,
    text: "Periamet, Chennai — Thoughtful comfort with warm hospitality, curated breakfast, and easy city connectivity.",
  },
  {
    name: "Liza GRANDE",
    img: hotelGrande,
    text: "Nungambakkam, Chennai — Modern poise in Chennai's cultural hub, tailored for discerning leisure and business travellers.",
  },
  {
    name: "ALTURA by Liza",
    img: hotelAltura,
    text: "Periamet, Chennai — Contemporary architectural elegance, premium suites, and elevated rooftop dining.",
  },
];

const rooms = [
  {
    name: "Executive Room",
    price: "₹8,500",
    text: "Intimate elegance with city skyline views and bespoke furnishings.",
    img: roomExecutive,
  },
  {
    name: "Premium Room",
    price: "₹12,000",
    text: "Spacious comfort with garden views and deep-soaking bathtub.",
    img: roomPremium,
  },
  {
    name: "Liza Suite",
    price: "₹22,000",
    text: "Panoramic skyline views, private dining salon, and butler service.",
    img: roomSuite,
  },
];

const amenities = [
  { label: "Wi-Fi", Icon: IconWifi },
  { label: "Restaurant", Icon: IconRestaurant },
  { label: "Wellness", Icon: IconWellness },
  { label: "Pool", Icon: IconPool },
  { label: "Fitness", Icon: IconFitness },
  { label: "Events", Icon: IconEvents },
  { label: "Concierge", Icon: IconConcierge },
  { label: "Airport", Icon: IconAirportTransfer },
];

const pillars = [
  {
    label: "Timeless Architecture",
    text: "Every property reflects the art, textures and architectural traditions of India.",
    Icon: Landmark,
  },
  {
    label: "Intuitive Service",
    text: "Warmth that anticipates your needs before you ask.",
    Icon: HeartHandshake,
  },
  {
    label: "Culinary Craft",
    text: "Authentic regional flavours and elevated contemporary dining.",
    Icon: Salad,
  },
  {
    label: "Sustainable Luxury",
    text: "Thoughtful hospitality that respects our environment and local heritage.",
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
      "A rare balance of Indian heritage and international luxury. The culinary experience alone was worth the stay.",
    name: "Vikram Malhotra",
    city: "Mumbai",
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
  const [roomDirection, setRoomDirection] = useState<"next" | "prev">("next");
  const [isRoomHovered, setIsRoomHovered] = useState(false);

  const [quote, setQuote] = useState(0);
  const [quoteDirection, setQuoteDirection] = useState<"next" | "prev">("next");
  const [isQuoteHovered, setIsQuoteHovered] = useState(false);

  // Auto-slide Testimonials every 2 seconds
  useEffect(() => {
    if (isQuoteHovered) return;
    const interval = setInterval(() => {
      setQuoteDirection("next");
      setQuote((i) => (i + 1) % testimonials.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isQuoteHovered]);

  // Auto-slide Featured Rooms every 2 seconds
  useEffect(() => {
    if (isRoomHovered) return;
    const interval = setInterval(() => {
      setRoomDirection("next");
      setRoomIndex((i) => (i + 1) % rooms.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isRoomHovered]);

  // Booking search state
  const [hotel, setHotel] = useState("");
  const [checkIn, setCheckIn] = useState<Date | undefined>(undefined);
  const [checkOut, setCheckOut] = useState<Date | undefined>(undefined);
  const [guests, setGuests] = useState("2");
  const [searchFeedback, setSearchFeedback] = useState("");

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hotel) {
      setSearchFeedback("Please choose a hotel destination.");
      return;
    }
    setSearchFeedback("");
    navigate({
      to: "/contact",
      search: {
        hotel,
        guests,
        checkIn: checkIn ? format(checkIn, "yyyy-MM-dd") : undefined,
        checkOut: checkOut ? format(checkOut, "yyyy-MM-dd") : undefined,
      },
    });
  };

  const handleNextRoom = () => {
    setRoomDirection("next");
    setRoomIndex((i) => (i + 1) % rooms.length);
  };

  const handlePrevRoom = () => {
    setRoomDirection("prev");
    setRoomIndex((i) => (i + rooms.length - 1) % rooms.length);
  };

  const handleNextQuote = () => {
    setQuoteDirection("next");
    setQuote((i) => (i + 1) % testimonials.length);
  };

  const handlePrevQuote = () => {
    setQuoteDirection("prev");
    setQuote((i) => (i + testimonials.length - 1) % testimonials.length);
  };

  const handleSelectQuote = (index: number) => {
    setQuoteDirection(index > quote ? "next" : "prev");
    setQuote(index);
  };

  const orderedRooms = [
    rooms[roomIndex % rooms.length],
    rooms[(roomIndex + 1) % rooms.length],
    rooms[(roomIndex + 2) % rooms.length],
  ];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative flex min-h-[calc(100svh-5rem)] flex-col justify-between overflow-hidden bg-cream">
        {/* Right-Anchored Hero Visual: Fits the full photo without zooming */}
        <div className="absolute inset-y-0 right-0 z-0 w-full overflow-hidden lg:w-[58%] xl:w-[60%]">
          <img
            src={heroLobby}
            alt="Liza Royale reception and lobby lounge"
            className="size-full object-cover object-center animate-hero-img"
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
            <h1 className="font-serif text-5xl leading-[1.05] text-forest sm:text-6xl lg:text-[76px] animate-hero-title">
              Experience
              <br />
              Timeless
              <br />
              Hospitality
            </h1>
            <p className="mt-4 font-sans font-light italic text-forest/70 text-base sm:text-lg lg:text-xl animate-hero-sub">
              Four destinations. One promise.
            </p>
            <div className="mt-4 flex max-w-60 items-center gap-4 animate-hero-divider">
              <span className="h-px flex-1 bg-gold/70" />
              <span className="size-1.5 rotate-45 bg-gold" />
              <span className="h-px flex-1 bg-gold/70" />
            </div>
          </div>
        </div>

        <div className="relative z-20 mx-auto w-full max-w-5xl px-6 pb-6 lg:pb-8 animate-hero-bar">
          <form
            onSubmit={handleBookingSubmit}
            className="border border-border/40 bg-card p-5 shadow-[0_20px_60px_-20px_rgba(31,56,46,0.4)] sm:p-6 lg:p-7 transition-all duration-300 hover:border-gold/30"
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
              <div className="flex flex-col justify-end">
                <label className="mb-1.5 block text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground">
                  Select Hotel
                </label>
                <Select value={hotel} onValueChange={setHotel}>
                  <SelectTrigger className="form-field-card flex h-11 w-full items-center justify-between rounded-none bg-card px-4 text-xs text-forest focus:ring-0">
                    <SelectValue placeholder="Choose a property" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="royal">Liza ROYALE – Chennai</SelectItem>
                    <SelectItem value="regency">Liza REGENCY – Chennai</SelectItem>
                    <SelectItem value="grande">Liza GRANDE – Chennai</SelectItem>
                    <SelectItem value="altura">ALTURA by Liza – Chennai</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Check-in */}
              <div className="flex flex-col justify-end">
                <label className="mb-1.5 block text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground">
                  Check-in
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className="form-field-card flex h-11 w-full items-center justify-between rounded-none bg-card px-4 text-left text-xs text-forest cursor-pointer hover:bg-card/80 focus:outline-none"
                    >
                      <span className={checkIn ? "text-forest" : "text-muted-foreground"}>
                        {checkIn ? format(checkIn, "dd MMM yyyy") : "Select date"}
                      </span>
                      <Calendar className="size-3.5 text-muted-foreground" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto border border-border/70 bg-cream p-0 text-forest shadow-2xl"
                    align="start"
                  >
                    <CalendarPicker
                      mode="single"
                      selected={checkIn}
                      onSelect={(d) => {
                        setCheckIn(d);
                        if (checkOut && d && checkOut <= d) {
                          setCheckOut(undefined);
                        }
                      }}
                      disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Check-out */}
              <div className="flex flex-col justify-end">
                <label className="mb-1.5 block text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground">
                  Check-out
                </label>
                <Popover>
                  <PopoverTrigger asChild>
                    <button
                      type="button"
                      className="form-field-card flex h-11 w-full items-center justify-between rounded-none bg-card px-4 text-left text-xs text-forest cursor-pointer hover:bg-card/80 focus:outline-none"
                    >
                      <span className={checkOut ? "text-forest" : "text-muted-foreground"}>
                        {checkOut ? format(checkOut, "dd MMM yyyy") : "Select date"}
                      </span>
                      <Calendar className="size-3.5 text-muted-foreground" />
                    </button>
                  </PopoverTrigger>
                  <PopoverContent
                    className="w-auto border border-border/70 bg-cream p-0 text-forest shadow-2xl"
                    align="start"
                  >
                    <CalendarPicker
                      mode="single"
                      selected={checkOut}
                      onSelect={setCheckOut}
                      disabled={(date) => {
                        const today = new Date(new Date().setHours(0, 0, 0, 0));
                        if (checkIn) {
                          return date <= checkIn;
                        }
                        return date < today;
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Guests */}
              <div className="flex flex-col justify-end">
                <label className="mb-1.5 block text-[0.65rem] tracking-[0.2em] uppercase text-muted-foreground">
                  Guests
                </label>
                <Select value={guests} onValueChange={setGuests}>
                  <SelectTrigger className="form-field-card flex h-11 w-full items-center justify-between rounded-none bg-card px-4 text-xs text-forest focus:ring-0">
                    <SelectValue placeholder="Guests" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Guest</SelectItem>
                    <SelectItem value="2">2 Guests</SelectItem>
                    <SelectItem value="3">3 Guests</SelectItem>
                    <SelectItem value="4">4+ Guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Submit */}
              <div className="flex flex-col justify-end">
                <button
                  type="submit"
                  className="btn-shimmer flex h-11 w-full items-center justify-center gap-2 rounded-none bg-terracotta px-7 text-xs tracking-[0.22em] uppercase text-terracotta-foreground transition-all duration-300 hover:opacity-95 hover:shadow-lg cursor-pointer"
                >
                  <span>Search</span>
                  <ChevronDown className="size-3 -rotate-90" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Hotels */}
      <section className="bg-cream px-6 py-20 lg:py-24 pattern-cream-section">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal variant="fade-up">
            <Eyebrow>Our Hotels</Eyebrow>
            <h2 className="mt-5 text-center font-serif text-4xl text-forest lg:text-5xl">
              Four Destinations. One Promise.
            </h2>
          </ScrollReveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {hotels.map((h, i) => (
              <ScrollReveal key={h.name} variant="fade-up" delay={i * 120}>
                <article className="group overflow-hidden border border-border/60 bg-card transition-all duration-500 hover:border-gold/50 hover:shadow-[0_20px_50px_-30px_rgba(31,56,46,0.4)] hover:-translate-y-1">
                  <div className="overflow-hidden">
                    <img
                      src={h.img}
                      alt={h.name}
                      width={800}
                      height={640}
                      loading="lazy"
                      className="h-48 w-full object-cover transition-transform duration-700 group-hover:scale-108"
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
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured rooms */}
      <section
        className="relative overflow-hidden bg-forest px-6 py-20 lg:py-24"
        onMouseEnter={() => setIsRoomHovered(true)}
        onMouseLeave={() => setIsRoomHovered(false)}
      >
        {/* Brand Pattern Background Texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "url('/brand-pattern.webp')",
            backgroundSize: "280px",
            backgroundRepeat: "repeat",
            backgroundBlendMode: "overlay",
            mixBlendMode: "overlay",
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl">
          <ScrollReveal variant="fade-up">
            <Eyebrow className="text-gold">Featured Rooms</Eyebrow>
            <h2 className="mt-5 text-center font-serif text-4xl text-cream lg:text-5xl">
              Rest. Relax. Reconnect.
            </h2>
          </ScrollReveal>
          <div className="mt-14 flex items-center gap-4 lg:gap-8">
            <CarouselButton label="Previous room" onClick={handlePrevRoom}>
              <ChevronLeft className="size-4" />
            </CarouselButton>
            <div
              key={roomIndex}
              className={cn(
                "grid flex-1 gap-6 md:grid-cols-3",
                roomDirection === "next" ? "animate-slide-next" : "animate-slide-prev",
              )}
            >
              {orderedRooms.map(
                (r) =>
                  r && (
                    <article
                      key={r.name}
                      className="overflow-hidden bg-cream shadow-lg transition-all duration-500 hover:shadow-2xl"
                    >
                      <div className="overflow-hidden">
                        <img
                          src={r.img}
                          alt={r.name}
                          width={900}
                          height={640}
                          loading="lazy"
                          className="h-52 w-full object-cover transition-transform duration-700 hover:scale-108"
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
                          <button className="btn-shimmer bg-forest px-5 py-3 text-[0.65rem] tracking-[0.2em] uppercase text-forest-foreground transition-all duration-300 hover:bg-terracotta cursor-pointer">
                            View Room
                          </button>
                        </div>
                      </div>
                    </article>
                  ),
              )}
            </div>
            <CarouselButton label="Next room" onClick={handleNextRoom}>
              <ChevronRight className="size-4" />
            </CarouselButton>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="bg-cream px-6 py-20 lg:py-24 pattern-cream-section">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal variant="fade-up">
            <Eyebrow>Amenities</Eyebrow>
            <h2 className="mt-5 text-center font-serif text-4xl text-forest lg:text-5xl">
              Designed Around You
            </h2>
          </ScrollReveal>
          <div className="mt-14 grid grid-cols-2 gap-y-10 sm:grid-cols-4 lg:grid-cols-8">
            {amenities.map(({ label, Icon }, i) => (
              <ScrollReveal key={label} variant="fade-up" delay={i * 60}>
                <div
                  className={`group flex flex-col items-center gap-3 px-2 text-center ${i !== amenities.length - 1 ? "lg:border-r lg:border-border/60" : ""}`}
                >
                  <Icon className="size-14 text-forest transition-transform duration-300 group-hover:scale-110 group-hover:text-gold" />
                  <span className="text-xs font-medium tracking-wide text-forest/80 transition-colors group-hover:text-forest">
                    {label}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="bg-cream px-6 py-20 lg:px-16 lg:py-24 pattern-cream-section">
          <ScrollReveal variant="fade-up">
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
          </ScrollReveal>
          <div className="mt-10 grid max-w-lg gap-8 sm:grid-cols-2">
            {pillars.map(({ label, text, Icon }, i) => (
              <ScrollReveal key={label} variant="fade-up" delay={150 + i * 100}>
                <div className="flex gap-3">
                  <Icon
                    className="mt-0.5 size-5 shrink-0 text-gold transition-transform duration-300 hover:scale-110"
                    strokeWidth={1.25}
                  />
                  <div>
                    <h3 className="text-sm font-medium text-forest">{label}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        <div className="relative min-h-96 overflow-hidden">
          <img
            src={storyService}
            alt="A Liza Hospitality host arranging fresh flowers in the lobby"
            width={1104}
            height={912}
            loading="lazy"
            className="absolute inset-0 size-full object-cover transition-transform duration-1000 hover:scale-105"
          />
          {/* Circular Brand Crest Card with Clear Space & Do's Rules */}
          <div className="absolute bottom-8 right-8 hidden w-64 border border-gold/40 bg-forest/95 p-6 text-center shadow-xl backdrop-blur-sm lg:block transition-all duration-500 hover:border-gold">
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
      <section
        className="relative overflow-hidden bg-forest px-6 py-20 lg:py-24"
        onMouseEnter={() => setIsQuoteHovered(true)}
        onMouseLeave={() => setIsQuoteHovered(false)}
      >
        {/* Brand Pattern Background Texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "url('/brand-pattern.webp')",
            backgroundSize: "280px",
            backgroundRepeat: "repeat",
            backgroundBlendMode: "overlay",
            mixBlendMode: "overlay",
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="flex items-center justify-between gap-4 sm:gap-8">
            <CarouselButton label="Previous review" onClick={handlePrevQuote}>
              <ChevronLeft className="size-4" />
            </CarouselButton>

            <div className="flex-1 px-2 text-center sm:px-6 overflow-hidden">
              <Eyebrow>Guest Experiences</Eyebrow>
              <h2 className="mt-4 font-serif text-3xl text-cream sm:text-4xl lg:text-5xl">
                Loved by Our Guests
              </h2>

              <div
                key={quote}
                className={cn(
                  "mt-8",
                  quoteDirection === "next" ? "animate-slide-next" : "animate-slide-prev",
                )}
              >
                <blockquote className="flex min-h-20 items-center justify-center font-serif text-lg leading-relaxed text-cream/90 italic lg:text-xl">
                  &ldquo;{testimonials[quote]?.quote}&rdquo;
                </blockquote>
                <div className="my-6">
                  <Diamond />
                </div>
                <p className="text-sm font-medium text-cream">{testimonials[quote]?.name}</p>
                <p className="mt-0.5 text-xs text-cream/60">{testimonials[quote]?.city}</p>
              </div>

              {/* Pagination Dots */}
              <div className="mt-8 flex items-center justify-center gap-2.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => handleSelectQuote(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={cn(
                      "transition-all duration-300 rounded-full cursor-pointer",
                      i === quote ? "h-1.5 w-6 bg-gold" : "size-1.5 bg-cream/30 hover:bg-cream/60",
                    )}
                  />
                ))}
              </div>
            </div>

            <CarouselButton label="Next review" onClick={handleNextQuote}>
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
