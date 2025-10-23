'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function HeroVisual() {
  const logosRef = useRef(null);
  const isLogosInView = useInView(logosRef, { once: true, margin: "-100px" });

  const logoVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as const,
      }
    })
  };

  const logos = [
    { src: "/competitors-logos/deel.avif", alt: "Deel", width: 140, height: 48, className: "h-10 w-auto" },
    { src: "/competitors-logos/payoneer.png", alt: "Payoneer", width: 140, height: 40, className: "h-8 w-auto" },
    { src: "/competitors-logos/gusto.avif", alt: "Gusto", width: 120, height: 40, className: "h-8 w-auto" },
    { src: "/competitors-logos/safety-wings.avif", alt: "Safety Wing", width: 150, height: 48, className: "h-10 w-auto" },
    { src: "/competitors-logos/workday.avif", alt: "Workday", width: 150, height: 48, className: "h-10 w-auto" },
    { src: "/competitors-logos/checkr.avif", alt: "Checkr", width: 120, height: 40, className: "h-8 w-auto" },
  ];

  return (
    <section aria-label="Product preview" className="relative isolate -mt-24 sm:-mt-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-[2070px]">
          {/* Green background box - positioned behind and smaller than image */}
          <div className="absolute inset-x-0 top-[35%] bottom-[-40px] mx-auto max-w-[1914px] rounded-3xl bg-[#D1FF94] shadow-[0_12px_40px_rgba(0,0,0,0.08)]" />
          
          {/* Image container - extends beyond the green box */}
          <div className="relative z-10 mx-auto max-w-[1465px] px-6 pt-0 pb-8">
            <motion.div 
              className="overflow-hidden rounded-2xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/landing-page-images/hero-mobile-image.avif"
                alt="Sigma dashboard and mobile preview"
                width={2944}
                height={1840}
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 90vw, 1465px"
                quality={95}
                className="h-auto w-full"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </motion.div>

            {/* Vendor row */}
            <div className="mt-8 text-center" ref={logosRef}>
              <motion.p 
                className="text-base font-medium text-center md:text-xl text-black/60 mb-4 md:mb-10"
                initial={{ opacity: 0 }}
                animate={isLogosInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                Companies use Sigma's end-to-end solution to replace:
              </motion.p>
              <div className="mx-auto max-w-[640px] md:max-w-none">
                <div className="grid grid-cols-2 gap-x-4 gap-y-6 md:flex md:flex-wrap md:items-center md:justify-center md:gap-10 lg:gap-16">
                  {logos.map((logo, i) => (
                    <motion.div
                      key={logo.alt}
                      custom={i}
                      initial="hidden"
                      animate={isLogosInView ? "visible" : "hidden"}
                      variants={logoVariants}
                      className="flex items-center justify-center"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={140}
                        height={48}
                        className="h-6 w-auto object-contain md:h-7 lg:h-8"
                        priority={false}
                        quality={90}
                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
