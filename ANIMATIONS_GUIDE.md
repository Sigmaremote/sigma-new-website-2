# Animations Guide

## Implemented Animations on Landing Page

All animations are implemented using the **Framer Motion** library, following best practices for modern web animations.

### 🎨 Design Principles

1. **Smooth Easing** - Using custom cubic-bezier function `[0.22, 1, 0.36, 1]` for natural, professional flow
2. **Scroll-Triggered** - Most animations activate when user scrolls to the section
3. **Once** - Animations execute only once (don't repeat every time you scroll)
4. **Performance** - Using GPU-accelerated properties (opacity, transform)
5. **Accessibility** - Framer Motion automatically respects user's `prefers-reduced-motion` preference

---

## 📋 Animation Overview by Sections

### 1. Hero Section (`HeroCopy.tsx`)

**What gets animated:**
- ✨ News badge - fade in from top
- 📝 Main title "Sigma helps you hire, pay and retain anyone" - fade + slide up
- 📄 Subhead and Body text - stagger effect (appear one after another)
- 🔘 CTA buttons - stagger effect
- 🏆 Product Hunt badges - delayed fade in

**Characteristics:**
```typescript
- News badge: fade in from top (duration: 0.4s)
- Title: fade + slide up (duration: 0.6s)
- Text: stagger with 0.15s delay between elements
- Badges: appear after 1s
```

---

### 2. Competitor Logos (`HeroVisual.tsx`)

**What gets animated:**
- 🏢 Competitor logos appear one by one **from left to right** when user reaches the section
- 📱 Hero image - fade + slide up

**Characteristics:**
```typescript
- Each logo has 0.1s delay more than the previous one
- Animation: opacity 0→1, x: -20→0
- Trigger: when section enters viewport (margin: -100px)
```

---

### 3. Business Features (`BusinessFeatures.tsx`)

**Section:** "Sigma is designed for businesses powered by global emerging talent"

**What gets animated:**
- 📋 Section title - fade + slide up
- 🎴 Three cards ("Hire in Minutes", "Your Pay, Their Way", "Master IRS Compliance") - appear one by one

**Characteristics:**
```typescript
- Each card: opacity 0→1, y: 30→0
- Delay between cards: 0.15s
- Duration: 0.6s
```

---

### 4. Scale Workforce (`ScaleWorkforce.tsx`)

**What gets animated:**
- 🎯 Title "Scale your workforce" - fade + scale effect (0.95→1)
- 📇 Four expandable cards - stagger effect
- 📂 Expansion content - smooth height animation

**Characteristics:**
```typescript
- Title: scale animation (0.95→1) + opacity
- Cards: appear with 0.1s delay between them
- Expansion: smooth height transition (0.3s)
```

---

### 5. Financial & Compliance Hubs (`FinancialComplianceHubs.tsx`)

**Most complex section with three different animations!**

**What gets animated:**
- 💚 "Global finances for your workers" (dark green card) - **slide in from left**
- 💛 "Truly local benefits" (lime card) - **slide in from right**
- 🟡 "Compliance & Reporting Hub" (yellow card) - **slide in from bottom**

**Characteristics:**
```typescript
// Left card
initial: { opacity: 0, x: -60 }
animate: { opacity: 1, x: 0 }

// Right card
initial: { opacity: 0, x: 60 }
animate: { opacity: 1, x: 0 }

// Bottom card (special trigger)
initial: { opacity: 0, y: 40 }
animate: { opacity: 1, y: 0 }
```

---

### 6. Global Reach (`GlobalReach.tsx`)

**What gets animated:**
- 🌍 Title "We get you to every country" - fade + slide up
- 📝 Text and CTA - sequential fade in

**Characteristics:**
```typescript
- Title: duration 0.6s
- Text: delay 0.2s
- CTA: delay 0.3s
```

---

### 7. Final CTA (`CTAShowcase.tsx`)

**Section:** "Let's build your Global Team with Sigma"

**What gets animated:**
- 🎴 Entire dark green card - fade + scale effect

**Characteristics:**
```typescript
initial: { opacity: 0, scale: 0.95 }
animate: { opacity: 1, scale: 1 }
duration: 0.7s
```

---

## ⚡ Performance Optimizations

### 1. **useInView Hook**
```typescript
const isInView = useInView(ref, { once: true, margin: "-100px" });
```
- `once: true` - animation executes only once
- `margin: "-100px"` - animation starts 100px before element enters viewport

### 2. **GPU Acceleration**
All animations use properties that can be hardware accelerated:
- `opacity`
- `transform` (x, y, scale)

### 3. **Accessibility**
Framer Motion automatically detects `prefers-reduced-motion` and:
- Skips animations if user has disabled animations in system
- Immediately shows final state

---

## 🎬 Animation Timeline

When user loads the page:

```
0ms     → News badge fade in
200ms   → Hero title slide up
500ms   → Subhead appears
650ms   → Body text appears
800ms   → First CTA button
950ms   → Second CTA button
1000ms  → Product Hunt badges

[Scroll Start]

→ Dashboard image slide up
→ Competitor logos (one by one, left→right)
→ Business Features title
→ Business cards (stagger)
→ "Scale workforce" title (scale)
→ Expandable cards (stagger)
→ Finance cards (left/right slide)
→ Compliance card (from bottom)
→ Global Reach title
→ Final CTA (scale)
```

---

## 🔧 Technical Details

### Custom Easing Function
```typescript
ease: [0.22, 1, 0.36, 1] as const
```
This cubic-bezier curve provides a professional, smooth effect similar to Material Design animations.

### Stagger Pattern
```typescript
{
  staggerChildren: 0.15,
  delayChildren: 0.3,
}
```
- `staggerChildren`: delay between children
- `delayChildren`: initial delay before they start appearing

### Viewport Trigger
```typescript
margin: "-100px"
```
Animation starts 100px before element becomes visible - gives illusion that animation is already in progress when element comes into view.

---

## 📱 Responsive Behavior

All animations work on all screen sizes:
- Mobile: animations are identical but faster (better UX on mobile)
- Tablet: standard speeds
- Desktop: full effect

---

## 🎨 Best Practices We Followed

1. ✅ **Subtle, Not Overwhelming** - Animations are subtle and don't interfere with reading
2. ✅ **Purposeful** - Every animation has a purpose (guides user attention)
3. ✅ **Performance** - Using GPU-accelerated properties
4. ✅ **Accessibility** - Respecting prefers-reduced-motion
5. ✅ **Once** - Animations don't repeat every time
6. ✅ **Progressive Enhancement** - Content is readable even without animations

---

## 🚀 Testing

To test animations:

```bash
npm run dev
```

Then open:
- `http://localhost:3000` - testing on desktop
- Open DevTools → Toggle device toolbar - testing on mobile

---

## 📚 References

- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Material Design Motion](https://material.io/design/motion)
- [Web Animation Best Practices](https://web.dev/animations/)

---

All animation parameters (duration, delay, easing) can be easily adjusted in component files if you want to experiment with different effects! 🎨

