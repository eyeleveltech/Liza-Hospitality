import { createFileRoute } from "@tanstack/react-router";
import { Check, Maximize, Eye, Bell, Lock } from "lucide-react";
import {
  IconFood,
  IconRooms,
  IconWifi,
  IconAirConditioning,
  IconComplimentaryToiletries,
  IconDailyHousekeeping,
  IconInRoomLocker,
} from "@/components/liza/BrandIcons";
import roomSuite from "@/assets/room-suite.jpg";
import roomExecutive from "@/assets/room-executive.jpg";
import roomPremium from "@/assets/room-premium.jpg";
import { Eyebrow, Diamond, EyebrowLeft } from "@/components/liza/Divider";
import { SiteHeader } from "@/components/liza/SiteHeader";
import { SiteFooter } from "@/components/liza/SiteFooter";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/rooms")({
  head: () => ({ meta: [{ title: "Rooms & Suites — Liza Hospitality" }] }),
  component: RoomsPage,
});

// ─── Data ───────────────────────────────────────────────────────────────────

type RoomData = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  img: string;
  imgAlt: string;
  size: string;
  guests: string;
  view: string;
  description: string;
  amenities: string[];
};

const roomsData: RoomData[] = [
  {
    id: "executive",
    name: "Executive Room",
    tagline: "Intimate elegance for the solo traveller or couple.",
    price: "₹ 8,500",
    img: roomExecutive,
    imgAlt: "Liza Hospitality Executive Room — warm lighting, king bed",
    size: "38 sq.m / 410 sq.ft",
    guests: "Up to 2 guests",
    view: "City View",
    description:
      "A quiet sanctuary high above the city. The Executive Room features bespoke teak furnishings, a plush king bed with 400-thread-count linens and a marble bathroom with rain shower.",
    amenities: [
      "King-size bed with bespoke linens",
      "Marble bathroom with rain shower",
      "High-speed complimentary Wi-Fi",
      "4K Smart TV with casting",
      "Nespresso coffee machine & tea bar",
      "In-room digital safe",
      "Daily housekeeping & turndown",
      "24-hour in-room dining",
    ],
  },
  {
    id: "premium",
    name: "Premium Suite",
    tagline: "More space, richer textures, panoramic views.",
    price: "₹ 14,000",
    img: roomPremium,
    imgAlt: "Liza Hospitality Premium Suite — living area and bedroom",
    size: "58 sq.m / 625 sq.ft",
    guests: "Up to 3 guests",
    view: "City / Garden View",
    description:
      "Crafted for extended stays and discerning guests who appreciate room to breathe. Includes an expansive seating salon, deep-soaking bathtub and curated minibar of artisanal refreshments.",
    amenities: [
      "Separate living & sleeping areas",
      "Deep-soaking freestanding bathtub",
      "Walk-in wardrobe",
      "Curated artisanal minibar",
      "Bose sound system",
      "Complimentary breakfast included",
      "Priority check-in & check-out",
      "Dedicated concierge access",
    ],
  },
  {
    id: "presidential",
    name: "Presidential Suite",
    tagline: "The pinnacle of Liza hospitality. Unrivalled luxury.",
    price: "₹ 28,000",
    img: roomSuite,
    imgAlt: "Liza Hospitality Presidential Suite — grand living room",
    size: "110 sq.m / 1,185 sq.ft",
    guests: "Up to 4 guests",
    view: "Panoramic Landmark View",
    description:
      "Spacious, refined and utterly personal — our Suites offer a separate living area, private dining and a dedicated butler to attend to every detail.",
    amenities: [
      "All Premium amenities",
      "Separate living area",
      "Dining area for four",
      "Dedicated butler service",
      "Complimentary airport transfer",
      "Premium curated bar",
      "Complimentary pressing",
      "Late checkout on request",
    ],
  },
];

const includedAmenities = [
  { label: "Free High-Speed Wi-Fi", Icon: IconWifi },
  { label: "Daily Housekeeping", Icon: IconDailyHousekeeping },
  { label: "24-Hour Room Service", Icon: IconFood },
  { label: "Air Conditioning", Icon: IconAirConditioning },
  { label: "Complimentary Toiletries", Icon: IconComplimentaryToiletries },
  { label: "In-Room Safe", Icon: IconInRoomLocker },
];

// ─── Page ────────────────────────────────────────────────────────────────────

function RoomsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden">
        <img
          src={roomSuite}
          alt="Liza Hospitality Suite — panoramic city view"
          width={1600}
          height={900}
          className="absolute inset-0 size-full object-cover object-center"
        />
        {/* Forest gradient — heavy on the left for text readability */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(31,56,46,0.92) 28%, rgba(31,56,46,0.55) 58%, rgba(31,56,46,0.15) 100%)",
          }}
        />
        {/* Text block */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 lg:px-16">
          <EyebrowLeft>Rooms &amp; Suites</EyebrowLeft>
          <h1 className="mt-5 font-serif text-5xl leading-[1.08] text-cream lg:text-[4rem]">
            Rest. Relax.
            <br />
            Reconnect.
          </h1>
          <p className="mt-4 font-sans font-light italic text-cream/80 text-lg lg:text-xl">
            Three carefully curated stays, designed around you.
          </p>
          <div className="mt-6">
            <Diamond />
          </div>
        </div>
      </section>

      {/* ── Room Cards ─────────────────────────────────────────────────────── */}
      <section>
        {roomsData.map((room, index) => (
          <RoomCard key={room.id} room={room} imageLeft={index % 2 === 0} />
        ))}
      </section>

      {/* ── All Rooms Include ──────────────────────────────────────────────── */}
      <section className="bg-forest px-6 py-20 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <Eyebrow>Every Room</Eyebrow>
          <h2 className="mt-5 text-center font-serif text-4xl text-cream lg:text-5xl">
            What's Always Included
          </h2>
          <div className="mt-14 grid grid-cols-2 gap-y-12 sm:grid-cols-3 lg:grid-cols-6">
            {includedAmenities.map(({ label, Icon }, i) => (
              <div
                key={label}
                className={[
                  "flex flex-col items-center gap-3 px-4 text-center",
                  i !== includedAmenities.length - 1 ? "lg:border-r lg:border-cream/15" : "",
                ].join(" ")}
              >
                <Icon className="size-16 text-gold transition-transform duration-300 hover:scale-105" />
                <span className="text-xs leading-snug tracking-wide text-cream/80">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Booking CTA ────────────────────────────────────────────────────── */}
      <section className="bg-cream px-6 py-20 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Reserve Your Stay</Eyebrow>
          <h2 className="mt-5 font-serif text-4xl text-forest lg:text-5xl">
            Experience Liza.
            <br />
            Choose Your Room.
          </h2>
          <div className="my-7">
            <Diamond />
          </div>
          <p className="mx-auto max-w-md text-sm leading-relaxed text-muted-foreground">
            Whether you're here for business or leisure, every Liza stay is crafted to feel
            personal. Select your room and let us take care of the rest.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-block bg-terracotta px-12 py-4 text-[0.7rem] tracking-[0.24em] uppercase text-terracotta-foreground transition-opacity hover:opacity-90"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

// ─── RoomCard ────────────────────────────────────────────────────────────────
// Image and details are always direct grid children so both stretch to full
// row height without an extra wrapper. Order classes handle the alternation.

function RoomCard({ room, imageLeft }: { room: RoomData; imageLeft: boolean }) {
  return (
    <article className="grid lg:grid-cols-2" style={{ minHeight: "500px" }}>
      {/* Image half */}
      <div className={cn("relative min-h-80 lg:min-h-0", !imageLeft && "order-1 lg:order-2")}>
        <img
          src={room.img}
          alt={room.imgAlt}
          width={900}
          height={700}
          loading="lazy"
          className="absolute inset-0 size-full object-cover"
        />
      </div>

      {/* Details half */}
      <div
        className={cn(
          "flex flex-col justify-center bg-cream px-8 py-14 lg:px-12",
          !imageLeft && "order-2 lg:order-1",
        )}
      >
        <EyebrowLeft>{`From ${room.price} / night`}</EyebrowLeft>

        <h2 className="mt-4 font-serif text-4xl text-forest lg:text-[2.6rem]">{room.name}</h2>

        {/* Stat chips */}
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="flex items-center gap-1.5 border border-border/60 px-3 py-1.5 text-xs text-forest/80">
            <Maximize className="size-3.5 text-gold" strokeWidth={1.5} />
            {room.size}
          </span>
          <span className="flex items-center gap-1.5 border border-border/60 px-3 py-1.5 text-xs text-forest/80">
            <IconRooms className="size-3.5 text-gold" strokeWidth={1.5} />
            {room.guests}
          </span>
          <span className="flex items-center gap-1.5 border border-border/60 px-3 py-1.5 text-xs text-forest/80">
            <Eye className="size-3.5 text-gold" strokeWidth={1.5} />
            {room.view}
          </span>
        </div>

        {/* Description */}
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{room.description}</p>

        {/* Amenities */}
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {room.amenities.map((a) => (
            <li key={a} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="mt-0.5 size-3.5 shrink-0 text-terracotta" strokeWidth={2.5} />
              {a}
            </li>
          ))}
        </ul>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <Link
            to="/contact"
            className="bg-forest px-8 py-3.5 text-[0.7rem] tracking-[0.22em] uppercase text-cream transition-opacity hover:opacity-90"
          >
            Book This Room
          </Link>
          <Link
            to="/contact"
            className="text-[0.7rem] tracking-[0.22em] uppercase text-forest underline underline-offset-4 transition-colors hover:text-terracotta"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </article>
  );
}
