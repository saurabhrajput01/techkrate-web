# About Page Updates - TODO

## Completed:
1. ✅ Removed Vanta.NET animation from hero
2. ✅ Added video background with autoplay, muted, loop, object-cover
3. ✅ Kept dark overlay for text readability

## Current Task:
### Framer Motion Animation Improvements

**Sections to animate with Framer Motion:**
1. Hero section - fade-in with upward motion
2. About Us text section - fade-in with upward motion  
3. Charter cards - staggered fade-in animation
4. Team member sections - staggered fade-in with hover effects on images

**Implementation:**
- Import `{ motion }` from framer-motion
- Add `initial`, `whileInView`, `viewport` props for scroll-triggered animations
- Add hover scale effects on team member images
- Stagger children animations for cards and team members

