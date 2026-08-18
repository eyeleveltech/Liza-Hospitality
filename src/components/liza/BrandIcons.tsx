import * as React from "react";
import { cn } from "@/lib/utils";

import iconAirportTransfer from "@/assets/icons/airport transfer.png";
import iconAirConditioning from "@/assets/icons/air_conditioning.png";
import iconComplimentaryToiletries from "@/assets/icons/complimentary_toiletries.png";
import iconConcierge from "@/assets/icons/concierge.png";
import iconDailyHousekeeping from "@/assets/icons/daily_housekeeping.png";
import iconEvents from "@/assets/icons/events.png";
import iconFitness from "@/assets/icons/fitness.png";
import iconFood from "@/assets/icons/food.png";
import iconInRoomLocker from "@/assets/icons/in_room_locker.png";
import iconParking from "@/assets/icons/parking.png";
import iconPool from "@/assets/icons/pool.png";
import iconRestaurant from "@/assets/icons/restaurant.png";
import iconRooms from "@/assets/icons/rooms.png";
import iconWellness from "@/assets/icons/wellness.png";
import iconWifi from "@/assets/icons/wifi.png";

export type IconProps = React.HTMLAttributes<HTMLSpanElement> & {
  size?: number | string;
  tone?: "current" | "image";
  strokeWidth?: number | string;
};

function BrandIcon({
  src,
  alt,
  size,
  className,
  style,
  tone = "current",
  ...props
}: IconProps & { src: string; alt: string }) {
  const sizeStyle = size
    ? {
        width: typeof size === "number" ? `${size}px` : size,
        height: typeof size === "number" ? `${size}px` : size,
      }
    : {};

  if (tone === "image") {
    return (
      <img
        src={src}
        alt={alt}
        className={cn("inline-block shrink-0 object-contain size-12", className)}
        style={{ ...sizeStyle, ...style }}
        {...props}
      />
    );
  }

  return (
    <span
      role="img"
      aria-label={alt}
      className={cn("inline-block shrink-0 bg-current size-12", className)}
      style={{
        maskImage: `url("${src}")`,
        maskSize: "contain",
        maskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskImage: `url("${src}")`,
        WebkitMaskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        ...sizeStyle,
        ...style,
      }}
      {...props}
    />
  );
}

/** 1. AIRPORT TRANSFER */
export function IconAirportTransfer(props: IconProps) {
  return <BrandIcon src={iconAirportTransfer} alt="Airport Transfer" {...props} />;
}

/** 2. AIR CONDITIONING */
export function IconAirConditioning({ className, ...props }: IconProps) {
  return (
    <BrandIcon
      src={iconAirConditioning}
      alt="Air Conditioning"
      className={cn("scale-[1.30]", className)}
      {...props}
    />
  );
}

/** 3. COMPLIMENTARY TOILETRIES */
export function IconComplimentaryToiletries({ className, ...props }: IconProps) {
  return (
    <BrandIcon
      src={iconComplimentaryToiletries}
      alt="Complimentary Toiletries"
      className={cn("scale-[1.30]", className)}
      {...props}
    />
  );
}

/** 4. CONCIERGE */
export function IconConcierge(props: IconProps) {
  return <BrandIcon src={iconConcierge} alt="Concierge" {...props} />;
}

/** 5. DAILY HOUSEKEEPING */
export function IconDailyHousekeeping({ className, ...props }: IconProps) {
  return (
    <BrandIcon
      src={iconDailyHousekeeping}
      alt="Daily Housekeeping"
      className={cn("scale-[1.20]", className)}
      {...props}
    />
  );
}

/** 6. EVENTS & MEETINGS */
export function IconEvents(props: IconProps) {
  return <BrandIcon src={iconEvents} alt="Events & Meetings" {...props} />;
}

/** 7. FITNESS STUDIO */
export function IconFitness({ className, ...props }: IconProps) {
  return (
    <BrandIcon
      src={iconFitness}
      alt="Fitness Studio"
      className={cn("scale-[1.15]", className)}
      {...props}
    />
  );
}

/** 8. FOOD & DINING */
export function IconFood({ className, ...props }: IconProps) {
  return (
    <BrandIcon
      src={iconFood}
      alt="Food & Dining"
      className={cn("scale-[1.15]", className)}
      {...props}
    />
  );
}

/** 9. IN-ROOM LOCKER / SAFE */
export function IconInRoomLocker({ className, ...props }: IconProps) {
  return (
    <BrandIcon
      src={iconInRoomLocker}
      alt="In-Room Locker"
      className={cn("scale-[1.20]", className)}
      {...props}
    />
  );
}
export const IconInRoomSafe = IconInRoomLocker;

/** 10. PARKING */
export function IconParking(props: IconProps) {
  return <BrandIcon src={iconParking} alt="Parking" {...props} />;
}

/** 11. SWIMMING POOL */
export function IconPool({ className, ...props }: IconProps) {
  return (
    <BrandIcon
      src={iconPool}
      alt="Swimming Pool"
      className={cn("scale-[1.35]", className)}
      {...props}
    />
  );
}

/** 12. RESTAURANT & BAR */
export function IconRestaurant(props: IconProps) {
  return <BrandIcon src={iconRestaurant} alt="Restaurant & Bar" {...props} />;
}

/** 13. ROOMS & SUITES */
export function IconRooms(props: IconProps) {
  return <BrandIcon src={iconRooms} alt="Rooms & Suites" {...props} />;
}

/** 14. WELLNESS & SPA */
export function IconWellness(props: IconProps) {
  return <BrandIcon src={iconWellness} alt="Wellness & Spa" {...props} />;
}

/** 15. WI-FI */
export function IconWifi(props: IconProps) {
  return <BrandIcon src={iconWifi} alt="Complimentary Wi-Fi" {...props} />;
}
