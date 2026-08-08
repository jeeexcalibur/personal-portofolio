# Portfolio Handoff — Visual Fix Needed

## Project
- Framework: Nuxt 4.2.2, Vue 3, Tailwind CSS 4
- Working directory: `D:\Project\Personal Portofolio\personal-porfotolio`
- Start development server: `npm.cmd run dev`
- Build: `npm.cmd run build`

## Current Situation
The portfolio is intended to follow the editorial visual direction from the supplied `iqmal.dev` screenshots:
- Warm off-white paper background
- Charcoal sections
- Large editorial typography
- Minimal borders and pill controls
- Horizontal scroll-driven Experience cards
- Restrained monochrome visual language

The current visual design is not fully reliable and needs to be fixed before further feature work. Do not assume the current `app/assets/css/main.css` is clean or maintainable: it was recovered from a generated Nuxt CSS cache after an earlier accidental overwrite. The build passes, but the page must be visually checked and the source CSS should be reconstructed or cleaned up properly.

## Important User Feedback
The latest feedback is:
- The design across the page is still visually off.
- About and Projects must look like the earlier editorial design, not the old neon/glass design.
- Experience needs a visible transition gap before Projects.
- Experience should feel vertically centered in the pinned viewport, not stuck against the bottom.
- Do not continue polishing blindly until the overall layout is compared against the screenshots.

## GSAP Experience Work
File: `app/components/sections/ExperienceSection.vue`

GSAP and ScrollTrigger are installed in `package.json`:
- `gsap: ^3.15.0`

Current implementation:
- Imports `gsap` and `ScrollTrigger`.
- Registers ScrollTrigger on the client.
- Pins the Experience section with `pin: true`.
- Uses vertical page scrolling to animate the horizontal Experience rail.
- Uses `scrub: 1`.
- Calculates travel from the rail width.
- Uses `invalidateOnRefresh: true`.
- Keeps pointer dragging.
- Updates the `01 / 04` progress counter reactively.

This implementation compiles and should be tested visually in a real browser. Do not bring back the old global wheel handler or manual `railX` state unless there is a strong reason.

## Page Structure
Homepage: `app/pages/index.vue`

1. Hero
2. `.hero-about-divider`
3. About
4. Experience
5. Selected Projects
6. Contact

Projects archive: `app/pages/projects.vue`

## Relevant Components
- `app/components/sections/HeroSection.vue`
- `app/components/sections/AboutSection.vue`
- `app/components/sections/ExperienceSection.vue`
- `app/components/sections/ProjectsSection.vue`
- `app/components/sections/ContactSection.vue`
- `app/components/Navbar.vue`
- `app/components/CVPreviewModal.vue`
- `app/data/portfolio.ts`
- `app/assets/css/main.css`

## Assets
- `public/profile.png`
- `public/profile2.png`
- `public/main.pdf`
- `public/main-id.pdf`
- `public/project-chremate.png`
- `public/project-dashboard-mp.png`
- `public/project-eis-mobile.png`
- `public/project-serenity-booth.png`
- `public/project-company-profile.png`
- `public/project-sweetelle.png`



## Guardrails
- Do not reintroduce the old neon gradients, glass cards, or parallax design.
- Keep only one hero/about curve: `.hero-about-divider`.
- Avoid unrelated refactors.
- Do not trust a successful build as proof that the visual design is correct.
- Compare against the screenshots before declaring the layout finished.

## Current Validation
- `npm.cmd run build` passes.
- Visual validation is still required.
## Latest Fixes
- About now matches the user's image17 direction: centered editorial statement, dim/bright text treatment, original skill sequence, and a shallow hero/About curve.
- Desktop Experience now matches image19 positioning with compact centered heading, larger centered cards, and preserved GSAP horizontal scroll/pinning.
- Mobile Experience now matches image20 as a horizontal carousel. It does not create a mobile ScrollTrigger pin; cards use native horizontal swipe/drag behavior and remain in normal document flow.
- Mobile Experience must allow vertical page movement after a horizontal gesture. Keep `touch-action: auto` on `.experience-rail`; do not restore `touch-action: pan-x`, mobile `pin`, or mobile `height: 100vh`.

## Current Validation
- `npm.cmd run build` passes after the latest Experience changes.
- Mobile visual validation should confirm one swipe can leave Experience and continue into Selected Projects.
- Navbar menu links now use explicit section navigation: they close the menu, smoothly scroll on the homepage, and route back to the homepage from project detail pages.
