'use client';

import { useEffect, useState, useRef } from 'react';

const sections = [
  'Introduction',
  'Scope',
  'Information We Collect',
  'How We Use Your Information',
  'Data Sharing and Disclosure',
  'Data Security',
  'Your Rights',
  'Data Retention',
  "Children's Privacy",
  'International Data Transfers',
  'Changes to This Policy',
  'Contact Us',
];

export function Toc() {
  const [active, setActive] = useState<string | null>(null);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const updateActiveSection = () => {
      if (isScrollingRef.current) return;

      const scrollTop = window.scrollY + 120; // Account for header and some offset
      let currentSection = null;

      // Find the section that's currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollTop) {
          currentSection = sections[i];
          break;
        }
      }

      if (currentSection && currentSection !== active) {
        setActive(currentSection);
      }
    };

    const handleScroll = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false;
        updateActiveSection();
      }, 100);
    };

    // Initial check
    updateActiveSection();

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [active]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    // Set scrolling flag and immediately update active state
    isScrollingRef.current = true;
    setActive(sectionId);
    
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });

      // Reset scrolling flag after animation completes
      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    }
  };

  return (
    <aside className="hidden md:block md:w-64 md:shrink-0">
      <div className="sticky top-24 rounded-xl border border-gray-200 bg-gray-50 p-4">
        <h3 className="text-sm font-semibold text-gray-800 mb-3">On this page</h3>
        <nav className="space-y-1">
          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              onClick={(e) => handleClick(e, sec)}
              className={`block rounded-md px-3 py-1.5 text-sm transition-colors cursor-pointer ${
                active === sec
                  ? 'bg-lime-100 text-gray-900 border-l-4 border-lime-400 font-medium'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              {sec}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
