import Image from "next/image";
import { Star } from "lucide-react";

type TrustBadgeProps = {
  rating?: number; // e.g. 4.8
  totalLabel?: string; // e.g. "5k Satisfied Customers"
  avatars?: { src?: string; initials?: string }[];
};

export function TrustBadge({
  rating = 4.8,
  totalLabel = "As rated by customers",
  avatars = [
    { src: "/Trust-badge-people-faces/person1.jpg" },
    { src: "/Trust-badge-people-faces/person2.jpg" },
    { src: "/Trust-badge-people-faces/person3.jpg" },
  ],
}: TrustBadgeProps) {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-4
        rounded-2xl
        bg-white/90
        backdrop-blur-sm
        shadow-sm
        px-4
        py-3
        text-[#0E2C1E]
        max-w-fit
      "
    >
      {/* Avatars */}
      <div className="flex -space-x-2">
        {avatars.slice(0, 3).map((a, i) => (
          <div
            key={i}
            className="
              h-10 w-10 rounded-full ring-2 ring-white
              flex items-center justify-center
              bg-[#0E2C1E] text-white text-sm font-medium overflow-hidden
            "
          >
            {a.src ? (
              // real face or placeholder
              <Image
                src={a.src}
                alt="User avatar"
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            ) : (
              a.initials ?? "SR"
            )}
          </div>
        ))}
      </div>

      {/* Rating + label */}
      <div className="flex flex-col leading-tight">
        <div className="flex items-center gap-2">
          <span className="text-base font-semibold">{rating}</span>

          {/* Stars */}
          <div className="flex items-center">
            {[0, 1, 2, 3, 4].map((idx) => (
              <Star
                key={idx}
                size={16}
                className="fill-amber-500 text-amber-500"
              />
            ))}
          </div>
        </div>

        <span className="text-[13px] text-[#0E2C1E]/70 font-normal">
          {totalLabel}
        </span>
      </div>
    </div>
  );
}
