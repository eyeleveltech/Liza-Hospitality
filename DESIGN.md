# Design System & UI Specifications: Liza Hospitality

## 1. Brand Identity & Visual Aesthetic

- **Design Philosophy**: Modern Heritage Luxury — combining India's rich architectural culture with refined contemporary elegance.
- **Visual Style**: Minimalist, warm, generous whitespace, sharp serif typography, fine geometric dividers, and subtle ambient architectural jali watermark.
- **Usage Ratio**: 60% Cream Canvas (`#FFF6E4`) · 20% Forest Green (`#1F382E`) · 10% Terracotta (`#C65A36`) · 10% Accents (`#A89156`, Sand, Sage, Blue)

---

## 2. Color System

### Primary Palette

- **Cream Canvas (Base Canvas & Footer)**: `#FFF6E4` (`oklch(0.975 0.026 85)`) — main background, card surfaces, header & footer background.
- **Forest Green (Primary Structure)**: `#1F382E` (`oklch(0.317 0.036 167)`) — primary headings, dark section containers, navigation text, logo lockup.
- **Terracotta (Action CTAs)**: `#C65A36` (`oklch(0.596 0.147 39)`) — primary buttons ("Book Now", "Search", "Submit"), badges, highlighted accents.
- **Sand Beige (Secondary Neutral)**: `#DCCCB6` (`oklch(0.852 0.035 76)`) — secondary cards, soft borders, subtle separators.
- **Warm Taupe (Muted Copy)**: `#B6ADA0` (`oklch(0.751 0.021 77)`) — body descriptions, secondary captions.

### Secondary & Accent Palette

- **Deep Brown**: `#4A3B2A` (`oklch(0.364 0.035 70)`) — rich grounding accent.
- **Antique Gold**: `#A89156` (`oklch(0.664 0.083 89)`) — diamond dividers, monograms, star ratings, active nav dots, icon highlights.
- **Muted Sage**: `#8FA189` (`oklch(0.688 0.040 138)`) — botanical & wellness tags.
- **Dusty Blue**: `#4D6777` (`oklch(0.499 0.040 236)`) — pool & coastal leisure highlights.

---

## 3. Typography

- **Headings / Display**: `Cormorant Garamond`, serif, weights 400/500/600, letter-spacing +0.05em to +0.15em.
- **Body / Interface**: `Source Sans 3`, sans-serif, weights 300/400/500, line-height 1.6, tracking normal to +0.02em.
- **Eyebrows / Badges**: Uppercase, letter-spacing +0.22em to +0.35em, font size 0.65rem to 0.75rem.

---

## 4. Component Patterns

- **Logo**:
  - Official stacked lockup (`Asset 3.png`) rendered with dynamic Forest Green tone on `#FFF6E4` cream canvas and Ivory tone on dark sections.
- **Buttons**:
  - Primary: Solid Terracotta `#C65A36`, uppercase tracked text, `active:scale-[0.99]`, crisp luxury styling.
  - Secondary: Outlined circular button with Antique Gold border and hover inversion (`border-gold/50 text-gold hover:bg-gold hover:text-forest`).
- **Dividers**:
  - Central rotated 45° diamond with horizontal line wings in Antique Gold `#A89156`.
- **Background Watermark**:
  - Architectural gold trellis / jali pattern (`brand-pattern.jpg`) repeating at `520px auto` with `0.07` opacity and `mix-blend-mode: multiply`.

---

## 5. Screen Specifications for Stitch Import

### Screen 1: Home Page (`/`)

- **Header**: Sticky `#FFF6E4` cream navbar with Liza Hospitality stacked logo, navigation links (Home, Rooms, About, Contact) with gold active diamond dot, and Terracotta "Book Now" CTA.
- **Hero Section**: Full-bleed luxury lobby photograph with smooth left-to-right cream gradient overlay (`oklch(0.975 0.026 85)`), large serif headline _"Experience Timeless Hospitality"_, italic subtitle _"Four destinations. One promise."_, and diamond divider.
- **Interactive Booking Bar**: Elevated floating card spanning:
  - Hotel dropdown selector (Liza Royal, Liza Regency, Liza Grande, Liza Hotels)
  - Functional Check-in & Check-out date pickers with gold calendar icons
  - Guests counter (1 to 4+ guests)
  - Terracotta "Search" button with live searching state and navigation to `/rooms`.
- **Our Hotels Section**: Section title with eyebrow, 4 luxury hotel property cards (Liza Royal, Liza Regency, Liza Grande, Liza Hotels) featuring photography, location, and rating.
- **Amenities Section**: 8-item brand icon strip (Restaurant, Spa, Pool, Fitness, Events, Concierge, Transfer, Wi-Fi).
- **Featured Suites Carousel**: Interactive room slider showcasing Executive, Premium, and Presidential suites with prev/next navigation.
- **Story & Heritage Section**: Two-column layout with 4 brand pillars (Heritage, Service, Culinary, Sustainability) and floating heritage card with gold calligraphic monogram.
- **Unified Guest Experiences & Testimonials**: Single integrated Forest Green container featuring eyebrow, heading, testimonial quotation, diamond divider, author attribution, and vertically centered `<` / `>` carousel buttons.
- **Site Footer**: Clean `#FFF6E4` cream footer with brand logo in Forest Green, 5-column layout (About, Contact Us, Quick Links, Our Hotels, Newsletter signup), and copyright bar.

---

### Screen 2: Rooms & Suites (`/rooms`)

- **Hero Section**: Panoramic city-view suite image with heavy Forest Green left gradient overlay and headline _"Curated Spaces for the Discerning Traveler"_.
- **Included Amenities Strip**: 6 luxury inclusions (High-Speed Wi-Fi, Housekeeping, 24-hr Room Service, Air Conditioning, Toiletries, Safe).
- **Room List**: Alternating two-column cards with full-height room photography on one side and spacious details on the other:
  - Price eyebrow (_"From ₹14,000 / night"_)
  - Room Title (_"Presidential Suite"_, _"Executive Room"_, _"Premium Room"_)
  - Spec chips with icons (Area: 850 sq.ft, Bed: King Bed, View: Panoramic City)
  - Description & feature checkmarks
  - Direct "Book Room" CTA button
- **Reservation CTA**: Centered ivory panel with diamond divider and direct contact link.

---

### Screen 3: About Us (`/about`)

- **Hero Section**: Warm service photography with `#FFF6E4` gradient overlay, _"Modern Heritage. Timeless Stays."_
- **Stats Bar**: Forest Green banner with 4 key metrics in Antique Gold (`37+ Years`, `4 Properties`, `520+ Rooms`, `30,000+ Guests`).
- **Our Properties Grid**: Detailed overview of all 4 properties with architectural details and city labels.
- **What We Stand For**: 4 core values (Cultural Stewardship, Uncompromising Service, Sustainable Luxury, Community Impact) with clean `OUR PROMISE` eyebrow.

---

### Screen 4: Contact Us (`/contact`)

- **Hero Section**: Clean centered title _"We Are Here to Welcome You"_.
- **Main Layout**: Two-column split:
  - Left column: Comprehensive reservation and general inquiry form (Name, Email, Phone, Hotel selector, Dates, Message).
  - Right column: Direct contact cards (Concierge Desk, Email, Phone, Operating Hours) and _Response Time Commitment_ box.
- **Location Cards Grid**: 4 dark Forest Green hotel destination cards with address, phone, and direct email.
