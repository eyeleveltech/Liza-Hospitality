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
    address: "Egmore, Chennai – 600008",
    phone: "+91 44 2855 8900",
    email: "hello.royale@lizahospitality.com",
  },
  {
    name: "Liza REGENCY",
    suffix: "REGENCY",
    city: "Chennai",
    address: "T. Nagar, Chennai – 600017",
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
    name: "ALTURA by Liza",
    suffix: "ALTURA",
    city: "Chennai",
    address: "Anna Salai, Chennai – 600002",
    phone: "+91 44 5678 9012",
    email: "hello.altura@lizahospitality.com",
  },
];

// ─── Field Label ─────────────────────────────────────────────────────────────

function FieldLabel({ children }: { children: string }) {
  return (
    <label className="mb-1.5 block text-[0.65rem] tracking-[0.18em] uppercase text-muted-foreground">
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

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass =
    "w-full border border-border/70 px-4 py-3 text-sm text-forest bg-card focus:border-forest focus:outline-none";
  const selectClass =
    "w-full border border-border/70 px-4 py-3 text-sm text-forest bg-card focus:border-forest focus:outline-none appearance-none";

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* ── Contact Hero & Interaction Fold ──────────────────────────────── */}
      <section className="flex min-h-[calc(100svh-5rem)] flex-col justify-center bg-cream px-6 py-12 lg:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Get in Touch</Eyebrow>
          <h1 className="mt-4 font-serif text-4xl leading-[1.1] text-forest sm:text-5xl lg:text-6xl">
            We'd Love to Hear From You
          </h1>
          <p className="mx-auto mt-3 max-w-md text-center text-sm leading-relaxed text-muted-foreground">
            Whether you're planning a stay, hosting an event or simply have a question — our team
            responds within 24 hours.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="flex w-full max-w-100 items-center gap-4">
              <span className="h-px flex-1 bg-gold/70" />
              <span className="size-1.5 rotate-45 bg-gold" />
              <span className="h-px flex-1 bg-gold/70" />
            </div>
          </div>
        </div>

        {/* ── Main Content Grid ────────────────────────────────────────────── */}
        <div className="mx-auto mt-10 grid w-full max-w-6xl gap-10 lg:grid-cols-[1.2fr_1fr]">
          {/* ── Left: Contact Form ──────────────────────────────────────── */}
          <div>
            <EyebrowLeft>Send a Message</EyebrowLeft>
            <h2 className="mt-3 font-serif text-3xl text-forest">Make an Enquiry</h2>

            {submitted ? (
              <div className="mt-10 flex flex-col items-center gap-4 border border-border/60 bg-card px-8 py-14 text-center">
                <CheckCircle className="size-10 text-gold" strokeWidth={1.25} />
                <p className="font-serif text-xl text-forest">Your message has been sent.</p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  We'll respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
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

                {/* Phone Number */}
                <div>
                  <FieldLabel>Phone Number</FieldLabel>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className={inputClass}
                  />
                </div>

                {/* Select Hotel */}
                <div>
                  <FieldLabel>Select Hotel</FieldLabel>
                  <Select
                    value={formData.hotel}
                    onValueChange={(val) => setFormData((prev) => ({ ...prev, hotel: val }))}
                  >
                    <SelectTrigger className="form-field-card w-full bg-card px-4 py-3 text-sm text-forest focus:ring-0">
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

                {/* Subject */}
                <div>
                  <FieldLabel>Subject</FieldLabel>
                  <Select
                    value={formData.subject}
                    onValueChange={(val) => setFormData((prev) => ({ ...prev, subject: val }))}
                  >
                    <SelectTrigger className="form-field-card w-full bg-card px-4 py-3 text-sm text-forest focus:ring-0">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="room-booking">Room Booking</SelectItem>
                      <SelectItem value="event-enquiry">Event Enquiry</SelectItem>
                      <SelectItem value="restaurant-reservation">Restaurant Reservation</SelectItem>
                      <SelectItem value="general-enquiry">General Enquiry</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <div>
                  <FieldLabel>Message</FieldLabel>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us how we can help…"
                    className={inputClass}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2.5 bg-terracotta px-8 py-4 text-[0.7rem] tracking-[0.22em] uppercase text-terracotta-foreground transition-opacity hover:opacity-90"
                >
                  <Send className="size-3.5" strokeWidth={1.75} />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* ── Right: Contact Information ──────────────────────────────── */}
          <div>
            <EyebrowLeft>Reach Us Directly</EyebrowLeft>
            <h2 className="mt-3 font-serif text-3xl text-forest">Always at Your Service</h2>

            <div className="mt-8 space-y-7">
              {/* Address */}
              <div className="flex items-start gap-4 border-b border-border/40 pb-7">
                <MapPin className="mt-0.5 size-5 shrink-0 text-gold" strokeWidth={1.5} />
                <div>
                  <p className="mb-1 text-[0.65rem] tracking-[0.18em] uppercase text-terracotta">
                    Address
                  </p>
                  <p className="text-sm leading-relaxed text-forest">
                    Liza House, Anna Salai, Chennai – 600002, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 border-b border-border/40 pb-7">
                <Phone className="mt-0.5 size-5 shrink-0 text-gold" strokeWidth={1.5} />
                <div>
                  <p className="mb-1 text-[0.65rem] tracking-[0.18em] uppercase text-terracotta">
                    Phone
                  </p>
                  <p className="text-sm text-forest">+91 44 4567 8900</p>
                  <p className="mt-0.5 text-sm text-forest">
                    +91 44 4567 8901 <span className="text-muted-foreground">(Reservations)</span>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 border-b border-border/40 pb-7">
                <Mail className="mt-0.5 size-5 shrink-0 text-gold" strokeWidth={1.5} />
                <div>
                  <p className="mb-1 text-[0.65rem] tracking-[0.18em] uppercase text-terracotta">
                    Email
                  </p>
                  <p className="text-sm text-forest">hello@lizahospitality.com</p>
                  <p className="mt-0.5 text-sm text-forest">reservations@lizahospitality.com</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <Clock className="mt-0.5 size-5 shrink-0 text-gold" strokeWidth={1.5} />
                <div>
                  <p className="mb-1 text-[0.65rem] tracking-[0.18em] uppercase text-terracotta">
                    Hours
                  </p>
                  <p className="text-sm text-forest">Front Desk: 24 Hours / 7 Days</p>
                  <p className="mt-0.5 text-sm text-forest">Reservations: 7:00 AM – 10:00 PM</p>
                </div>
              </div>
            </div>

            {/* Response Commitment Box */}
            <div className="mt-8 bg-forest p-6">
              <h3 className="font-serif text-xl text-cream">Response Time Commitment</h3>
              <div className="mt-4 flex max-w-58 items-center gap-4">
                <span className="h-px flex-1 bg-gold/70" />
                <span className="size-1.5 rotate-45 bg-gold" />
                <span className="h-px flex-1 bg-gold/70" />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-cream/80">
                Our reservations and guest relations team is dedicated to responding to all
                enquiries within 24 hours. For urgent requests, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hotel Locations ───────────────────────────────────────────────────── */}
      <section className="bg-forest py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <Eyebrow>Our Properties</Eyebrow>
            <h2 className="mt-5 font-serif text-4xl text-cream lg:text-5xl">
              Find Your Nearest Liza
            </h2>
            <br />
            <Diamond />
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {locations.map((loc) => (
              <div
                key={loc.name}
                className="border border-cream/10 p-8 transition-colors hover:bg-[oklch(0.35_0.03_167)]"
                style={{ backgroundColor: "oklch(0.28 0.03 167)" }}
              >
                {/* Name */}
                <p className="font-serif text-2xl leading-tight">
                  <span className="text-gold">LIZA</span>{" "}
                  <span className="text-cream">{loc.suffix}</span>
                </p>

                {/* City */}
                <p className="mt-2 text-xs tracking-[0.2em] uppercase text-terracotta">
                  {loc.city}
                </p>

                {/* Details */}
                <div className="mt-5 space-y-2">
                  <p className="flex items-start gap-2 text-xs text-cream/70">
                    <span className="mt-1.5 size-1 shrink-0 rotate-45 bg-gold" />
                    {loc.address}
                  </p>
                  <p className="flex items-start gap-2 text-xs text-cream/70">
                    <span className="mt-1.5 size-1 shrink-0 rotate-45 bg-gold" />
                    {loc.phone}
                  </p>
                  <p className="flex items-start gap-2 text-xs text-cream/70">
                    <span className="mt-1.5 size-1 shrink-0 rotate-45 bg-gold" />
                    {loc.email}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
