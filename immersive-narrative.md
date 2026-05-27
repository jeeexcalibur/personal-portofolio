Create a “Scroll Narrative” page in TailwindCSS so users experience storyboard-like beats while scrolling.

**Core Design Requirements**

1. **Parallax Hero**
   - Foreground: headline 40–64px, subhead 18–22px, primary/secondary CTAs.
   - Background: 2–3 parallax gradient/grid layers at 0.3x/0.6x/1x speeds.
   - Sample CSS:
     ```css
     .scroll-hero { position: relative; min-height: 80vh; }
     .scroll-hero::before { content: ""; position: absolute; inset: -10% 0 0; background: radial-gradient(circle at 20% 30%, #5eead4 0%, transparent 40%), radial-gradient(circle at 80% 40%, #60a5fa 0%, transparent 35%); filter: blur(40px); transform: translateY(-6vh); }
     .scroll-hero .cta-primary { @apply bg-indigo-500 text-white rounded-full px-6 py-3 shadow-[0_10px_40px_rgba(76,106,255,0.35)]; }
     .scroll-hero .cta-secondary { @apply border border-white/40 text-white/90 rounded-full px-5 py-2; }
     ```

2. **Story Beats (3–5)**
   - Each beat: chapter badge, 28–34px title, 2–3 lines of body, deep-link CTA.
   - Alternate left/right layouts; pair with illustration/data card.
   - Scroll animation: fade + translate-y, 500–700ms, stagger 120ms.

3. **Sticky Summary / Progress**
   - Keep a pinned rail with chapter dots, active label, actions.
   - Use sticky top 96px; highlight active node.

4. **Media Blocks**
   - Video/chart blocks with 16–24px padding, 20px radius, gradient scrim overlay.
   - Keep contrast between text and media.

5. **Scroll Cues & Dividers**
   - Add light separators between beats and an animated “Scroll” cue at fold.

6. **Responsive & Performance**
   - Mobile: disable heavy parallax, reduce blur/shadow, stack content vertically.
   - Prefer GPU-friendly transforms; avoid massive box-shadows.

7. **Interaction & A11y**
   - Clear hover/focus states; focus-visible outline.
   - Contrast ≥ 4.5:1; line-height 1.6–1.8; letter-spacing 0.01–0.04em.

**Color System (Night Neon)**
- Primary: #6366f1, #4f46e5, #22d3ee, #5eead4, #f472b6
- Base: #0b1020, #0f172a, #111827; Text: #e5e7eb, #cbd5e1; Border: rgba(255,255,255,0.08-0.16)

**Key CSS Classes**
```css
.scroll-shell { @apply min-h-screen bg-[#0b1020] text-slate-100 overflow-hidden; }
.scroll-grid { @apply max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-24; }
.chapter-badge { @apply inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-sky-200 bg-white/5 border border-white/10 rounded-full px-3 py-1; }
.cta-ghost { @apply inline-flex items-center gap-2 text-sky-100 border border-sky-200/40 rounded-full px-4 py-2 hover:border-sky-200/70 hover:bg-sky-200/10 transition; }
.scrim { background: radial-gradient(circle at 30% 20%, rgba(94,234,212,0.25), transparent 40%), radial-gradient(circle at 70% 10%, rgba(99,102,241,0.25), transparent 45%); filter: blur(32px); }
```

**Layout & Rhythm**
- 8px spacing grid; 48–72px beat spacing; 20–28px paragraph spacing.
- Headings: H1 48–64px / H2 32–40px / H3 22–26px; weight 600–800.
- Container 1200–1280px; line length 58–72 characters.

**Important Notes**
- Reserve sticky offset = header height + 24px.
- Parallax offsets between -10vh and -4vh; reduce on mobile.
- Disable heavy blur/shadow on small screens; honor prefers-reduced-motion.
- Limit CTAs to two levels; keep hierarchy clear.
- Ensure media overlays keep text legible.