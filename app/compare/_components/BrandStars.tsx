"use client";
import { Star } from "lucide-react";

export default function BrandStars({
  rating = 4.8,
  label = "As rated by customers",
}: { rating?: number; label?: string }) {
  const fullStars = Math.floor(rating);
  const hasPartialStar = rating % 1 !== 0;
  // Make the partial star less filled to show it's not quite 5.0
  const partialFill = Math.min((rating % 1) * 100 * 0.7, 70); // Cap at 70% and reduce by 30%

  return (
    <div className="flex items-center gap-3 text-sm text-slate-600">
      <div className="flex items-center">
        {/* Full stars */}
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current text-amber-500" />
        ))}
        
        {/* Partial star */}
        {hasPartialStar && (
          <div className="relative">
            {/* Empty star background */}
            <Star className="h-4 w-4 text-amber-500" />
            {/* Partial fill overlay */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${partialFill}%` }}
            >
              <Star className="h-4 w-4 fill-current text-amber-500" />
            </div>
          </div>
        )}
        
        {/* Empty stars to complete 5 stars */}
        {Array.from({ length: 5 - Math.ceil(rating) }).map((_, i) => (
          <Star key={`empty-${i}`} className="h-4 w-4 text-amber-500" />
        ))}
      </div>
      <span className="font-medium text-slate-800">{rating}</span>
      <span className="text-slate-500">{label}</span>
    </div>
  );
}

