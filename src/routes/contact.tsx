import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Eyebrow, Diamond, EyebrowLeft } from "@/components/liza/Divider";
import { SiteHeader } from "@/components/liza/SiteHeader";
import { SiteFooter } from "@/components/liza/SiteFooter";
import { ScrollReveal } from "@/components/liza/ScrollReveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact Us — Liza Hospitality" }] }),
  component: ContactPage,
});

// ─── Types ───────────────────────────────────────────────────────────────────

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  hotel: string;
  subject: string;
  message: string;
};

// ─── Data ────────────────────────────────────────────────────────────────────

const locations = [
  {
    name: "Liza ROYALE",
    suffix: "ROYALE",
    city: "Chennai",
    address:
      "2, Rama Pillai St, next to KFC, near Chennai Central Railway Station, Periamet, Park Town, Chennai, Greater Chennai, Tamil Nadu 600003",
    phone: "+91 44 2855 8900",
    email: "hello.royale@lizahospitality.com",
  },
  {
    name: "Liza REGENCY",
    suffix: "REGENCY",
    city: "Chennai",
    address:
      "7/4, Vepery High Rd, near Jawaharlal Nehru Stadium, Periamet, Opp:, Chennai, Tamil Nadu 600007",
    phone: "+91 44 2434 0123",
    email: "hello.regency@lizahospitality.com",
  },
  {
    name: "Liza GRANDE",
    suffix: "GRANDE",
    city: "Chennai",
    address: "Nungambakkam, Chennai – 600034",
    phone: "+91 44 2827 6789",
    email: "hello.grande@lizahospitality.com",
  },
  {
    name: "Liza ALTURA",
    suffix: "ALTURA",
    city: "Chennai",
    address:
      "Raja Muthiah Rd, Periamet, Kannappar Thidal, Poongavanapuram, Chennai, Greater Chennai, Tamil Nadu 600003",
    phone: "+91 44 2855 9200",
    email: "hello.altura@lizahospitality.com",
  },
];

// ─── Field Label ─────────────────────────────────────────────────────────────

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="mb-1 block text-[0.68rem] tracking-[0.18em] uppercase text-muted-foreground">
      {children}
    </label>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    hotel: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass =
    "w-full border border-border/70 px-4 py-3 text-sm text-forest bg-card focus:border-forest focus:outline-none appearance-none transition-colors duration-200";

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* ── Contact Hero & Interaction Fold ──────────────────────────────── */}
      <section className="flex min-h-[calc(100svh-5rem)] flex-col justify-center bg-cream px-6 py-12 sm:py-16 pattern-cream-section">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Get in Touch</Eyebrow>
          <h1 className="mt-4 font-serif text-3xl leading-[1.1] text-forest sm:text-5xl lg:text-6xl animate-hero-title">
            We'd Love to Hear From You
          </h1>
          <p className="mx-auto mt-3 max-w-md text-center text-xs sm:text-sm leading-relaxed text-muted-foreground animate-hero-sub">
            Whether you're planning a stay, hosting an event or simply have a question — our team
            responds within 24 hours.
          </p>
          <div className="mt-6 flex justify-center animate-hero-divider">
            <div className="flex w-full max-w-100 items-center gap-4">
              <span className="h-px flex-1 bg-gold/70" />
              <span className="size-1.5 rotate-45 bg-gold" />
              <span className="h-px flex-1 bg-gold/70" />
            </div>
          </div>
        </div>

        {/* ── Main Content Grid ────────────────────────────────────────────── */}
        <div className="mx-auto mt-10 grid w-full max-w-6xl gap-10 sm:gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-stretch">
          {/* ── Left: Contact Form ──────────────────────────────────────── */}
          <ScrollReveal variant="fade-up" className="flex flex-col">
            <EyebrowLeft>Send a Message</EyebrowLeft>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl text-forest">Make an Enquiry</h2>

            {submitted ? (
              <div className="mt-6 sm:mt-8 flex flex-1 flex-col items-center justify-center gap-4 border border-border/60 bg-card px-6 sm:px-8 py-12 sm:py-14 text-center animate-hero-title">
                <CheckCircle className="size-10 text-gold" strokeWidth={1.25} />
                <p className="font-serif text-xl text-forest">Your message has been sent.</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  We'll respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 sm:mt-8 flex flex-1 flex-col space-y-4">
                {/* Full Name */}
                <div>
                  <FieldLabel>Full Name</FieldLabel>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className={inputClass}
                  />
                </div>

                {/* Email Address */}
                <div>
                  <FieldLabel>Email Address</FieldLabel>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className={inputClass}
                  />
                </div>

                {/* Phone & Hotel Row */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <FieldLabel>Phone Number</FieldLabel>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 00000 00000"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <FieldLabel>Hotel of Interest</FieldLabel>
                    <Select
                      value={formData.hotel}
                      onValueChange={(val) => setFormData((prev) => ({ ...prev, hotel: val }))}
                    >
                      <SelectTrigger className="h-11.5 w-full rounded-none border-border/70 bg-card px-4 text-sm text-forest focus:ring-0">
                        <SelectValue placeholder="Select a property" />
                      </SelectTrigger>
                      <SelectContent className="border-border/70 bg-card">
                        <SelectItem value="general">General Enquiry (All Hotels)</SelectItem>
                        <SelectItem value="royale">Liza ROYALE, Chennai</SelectItem>
                        <SelectItem value="regency">Liza REGENCY, Chennai</SelectItem>
                        <SelectItem value="grande">Liza GRANDE, Chennai</SelectItem>
                        <SelectItem value="altura">Liza ALTURA, Chennai</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <FieldLabel>Subject</FieldLabel>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Room Reservation, Private Dining, Event Booking"
                    className={inputClass}
                  />
                </div>

                {/* Message */}
                <div className="flex flex-1 flex-col">
                  <FieldLabel>Message</FieldLabel>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us how we can make your stay unforgettable..."
                    className={cn(inputClass, "min-h-28 flex-1 resize-none")}
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="btn-shimmer flex w-full items-center justify-center gap-2 bg-forest py-3.5 sm:py-4 text-xs font-medium tracking-[0.24em] uppercase text-cream transition-all duration-300 hover:bg-forest/90 hover:shadow-lg cursor-pointer"
                >
                  <Send className="size-3.5" strokeWidth={1.75} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </ScrollReveal>

          {/* ── Right: Contact Information ──────────────────────────────── */}
          <ScrollReveal variant="fade-up" delay={200} className="flex flex-col">
            <EyebrowLeft>Reach Us Directly</EyebrowLeft>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl text-forest">
              Always at Your Service
            </h2>

            <div className="mt-6 sm:mt-8 flex flex-1 flex-col justify-between">
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-4 border-b border-border/40 pb-4">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-gold" strokeWidth={1.5} />
                  <div>
                    <p className="mb-1 text-[0.65rem] tracking-[0.18em] uppercase text-terracotta">
                      Address
                    </p>
                    <p className="text-xs sm:text-sm leading-relaxed text-forest">
                      Liza House, Anna Salai, Chennai – 600002, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 border-b border-border/40 pb-4">
                  <Phone className="mt-0.5 size-5 shrink-0 text-gold" strokeWidth={1.5} />
                  <div>
                    <p className="mb-1 text-[0.65rem] tracking-[0.18em] uppercase text-terracotta">
                      Phone
                    </p>
                    <p className="text-xs sm:text-sm text-forest">+91 44 4567 8900</p>
                    <p className="mt-0.5 text-xs sm:text-sm text-forest">
                      +91 44 4567 8901 <span className="text-muted-foreground">(Reservations)</span>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 border-b border-border/40 pb-4">
                  <Mail className="mt-0.5 size-5 shrink-0 text-gold" strokeWidth={1.5} />
                  <div>
                    <p className="mb-1 text-[0.65rem] tracking-[0.18em] uppercase text-terracotta">
                      Email
                    </p>
                    <p className="text-xs sm:text-sm text-forest">hello@lizahospitality.com</p>
                    <p className="mt-0.5 text-xs sm:text-sm text-forest">
                      reservations@lizahospitality.com
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <Clock className="mt-0.5 size-5 shrink-0 text-gold" strokeWidth={1.5} />
                  <div>
                    <p className="mb-1 text-[0.65rem] tracking-[0.18em] uppercase text-terracotta">
                      Hours
                    </p>
                    <p className="text-xs sm:text-sm text-forest">Front Desk: 24 Hours / 7 Days</p>
                    <p className="mt-0.5 text-xs sm:text-sm text-forest">
                      Reservations: 7:00 AM – 10:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Commitment Box */}
              <div className="mt-6 bg-forest p-6 sm:p-7">
                <h3 className="font-serif text-lg sm:text-xl text-cream">
                  Response Time Commitment
                </h3>
                <div className="my-3 flex max-w-56 items-center gap-3">
                  <span className="h-px flex-1 bg-gold/70" />
                  <span className="size-1.5 rotate-45 bg-gold" />
                  <span className="h-px flex-1 bg-gold/70" />
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-cream/80">
                  Our reservations and guest relations team is dedicated to responding to all
                  enquiries within 24 hours. For urgent requests, please call us directly.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Hotel Locations ───────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-forest py-16 sm:py-20 lg:py-24">
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
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <ScrollReveal variant="fade-up">
            <div className="text-center">
              <Eyebrow>Our Properties</Eyebrow>
              <h2 className="mt-4 sm:mt-5 font-serif text-3xl sm:text-4xl text-cream lg:text-5xl">
                Find Your Nearest Liza
              </h2>
              <div className="mt-6 flex justify-center">
                <Diamond />
              </div>
            </div>
          </ScrollReveal>

          <div className="mt-10 sm:mt-14 grid gap-6 sm:grid-cols-2">
            {locations.map((loc, i) => (
              <ScrollReveal key={loc.name} variant="fade-up" delay={i * 100} className="h-full">
                <div
                  className="h-full flex flex-col border border-cream/10 p-6 sm:p-8 transition-all duration-300 hover:border-gold/40 hover:-translate-y-1"
                  style={{ backgroundColor: "oklch(0.28 0.03 167)" }}
                >
                  {/* Name & City */}
                  <div>
                    <p className="font-serif text-xl sm:text-2xl leading-tight">
                      <span className="text-gold">LIZA</span>{" "}
                      <span className="text-cream">{loc.suffix}</span>
                    </p>
                    <p className="mt-2 text-xs tracking-[0.2em] uppercase text-terracotta">
                      {loc.city}
                    </p>
                  </div>

                  {/* Details */}
                  <div className="mt-5 sm:mt-6 space-y-2.5">
                    <p className="flex items-start gap-2.5 text-xs text-cream/70">
                      <span className="mt-1 size-1 shrink-0 rotate-45 bg-gold" />
                      <span className="leading-relaxed">{loc.address}</span>
                    </p>
                    <p className="flex items-center gap-2.5 text-xs text-cream/70">
                      <span className="size-1 shrink-0 rotate-45 bg-gold" />
                      <span>{loc.phone}</span>
                    </p>
                    <p className="flex items-center gap-2.5 text-xs text-cream/70">
                      <span className="size-1 shrink-0 rotate-45 bg-gold" />
                      <span>{loc.email}</span>
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
