# DESIGN.md — Visual System & Design Direction

## Aesthetic World: Vintage Tamil Bakery × Avant-Garde Editorial Broadsheet
A tactile, sensory world inspired by `kickstartcreativestudio.com`, `universalfire101.in`, `tigranz.com`, and `landonorris.com`. It balances warm artisan heritage with bold, fat typography, torn craft paper layers, vintage sketches, and fluid kinetic typography.

## Color Tokens
- `--espresso-950`: `#1A0D08` (deep wood-fire roast, charcoal brown)
- `--espresso-900`: `#25140E` (primary deep brown, rich dark cocoa)
- `--crust-800`: `#3D2315` (oven-baked loaf crust)
- `--gold-500`: `#D68A36` (golden star cake crumb, warm honey)
- `--dough-300`: `#EADBC4` (warm aged parchment)
- `--cream-100`: `#F8F3EA` (flour dust, fresh morning cream)
- `--stamp-red`: `#8F2A1E` (vintage rubber stamp red)

## Typography
- **Hero / Display Headline:** `Fraunces` (variable optical sizes, heavy 900 weight, curvy serif warmth)
- **Graphic Brutalist / Kicker:** `Syne` (fat, wide 800/900 weight)
- **Body & Information:** `Plus Jakarta Sans` (crisp, modern legible neutral)

## Kinetic Motion Principles
1. **The Rolling Star Cake:** The hero's star cake transitions with realistic angular rotation and inertia into Section 2 as the user scrolls down, locking cleanly into the deep-dive pedestal.
2. **The Star Vertical Loader:** Fixed along the right margin, a mini spinning Star Cake acts as the scroll track thumb, displaying live scroll percentage and rotating with scroll velocity.
3. **Torn Paper & Sketch Overlays:** Organic paper rips with drop shadows, wheat stalk botanical line art, and heritage stamps that float gently with subtle parallax.
4. **Smooth Scroll:** Powered by Lenis + GSAP ScrollTrigger for buttery deceleration.
