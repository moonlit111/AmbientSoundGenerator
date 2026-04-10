# DESIGN.md — Ambient Sound Generator (环境音制造器)

## 1. Visual Theme & Atmosphere

A calm, immersive ambient sound mixer that wraps users in a sensory cocoon. The design language borrows from glassmorphism and nature-inspired palettes, creating a meditative space where sound cards float like translucent stones over a living canvas of particles and gradients. The interface prioritizes ease of discovery (tap a card, hear a sound) while rewarding deeper exploration with fine-grained volume mixing, presets, and a sleep timer.

Dark mode is the default — appropriate for relaxation and sleep contexts. Light mode inverts the surface hierarchy but preserves the same accent-driven color system. A full-screen `<canvas>` layer renders context-aware particle effects (rain, leaves, waves, fire) that shift based on the dominant active sound category, reinforcing the sonic atmosphere visually.

**Key Characteristics**

- **Calm, not clinical** — rounded corners, generous padding, soft shadows, and a 30-second gradient shift animation keep the interface alive without being distracting.
- **Category-aware color identity** — each of the 8 sound categories (rain, nature, urban, transport, places, animals, noise, things) has a unique accent applied to card top borders, icon backgrounds, ambient orb glows, and canvas particle hues.
- **Glassmorphism surfaces** — semi-transparent card backgrounds with frosted borders sit over animated gradient backgrounds and dynamic ambient orbs.
- **Breathing feedback** — active sound cards pulse with a subtle glow animation (`breatheGlow` 3s ease-in-out), communicating "this sound is alive" without visual noise.
- **Touch-first** — all tap targets are ≥ 44 px, cards have press-feedback (`scale(0.97)` on `:active`), and horizontal scroll areas hide their scrollbars.

---

## 2. Color Palette & Roles

### Theme Colors

| Token | Light | Dark | Role |
|---|---|---|---|
| `--bg-primary` | `#f8fafc` | `#0a0f1a` | Page background, gradient base |
| `--bg-secondary` | `#ffffff` | `#1e293b` | Cards, panels, header, modal surfaces |
| `--bg-tertiary` | `#f1f5f9` | `#334155` | Subtle fills — icon circles, tab hover, input backgrounds |
| `--text-primary` | `#1e293b` | `#f1f5f9` | Headings, body text, card names |
| `--text-secondary` | `#64748b` | `#94a3b8` | Labels, descriptions, metadata |
| `--accent` | `#818cf8` | `#a5b4fc` | Primary interactive color — buttons, active states, links, sliders |
| `--accent-hover` | `#6366f1` | `#818cf8` | Button hover state |
| `--border` | `#e2e8f0` | `#334155` | Dividers, card borders, input borders |
| `--shadow` | `rgba(0,0,0,0.1)` | `rgba(0,0,0,0.3)` | Elevation shadows (small) |
| `--shadow-lg` | `rgba(0,0,0,0.15)` | `rgba(0,0,0,0.5)` | Elevated panels, hover shadows |
| `--color-danger` | `#ef4444` | `#ef4444` | Destructive actions — delete, stop-all hover |
| `--color-danger-hover` | `#dc2626` | `#dc2626` | Danger hover state |

### Glassmorphism Tokens

| Token | Light | Dark |
|---|---|---|
| `--glass-bg` | `rgba(255,255,255,0.75)` | `rgba(30,41,59,0.7)` |
| `--glass-border` | `rgba(255,255,255,0.3)` | `rgba(255,255,255,0.08)` |
| `--glass-shadow` | `rgba(0,0,0,0.08)` | `rgba(0,0,0,0.3)` |

### Background Gradient

| Token | Light | Dark |
|---|---|---|
| `--gradient-start` | `#f0f4ff` | `#0a0f1a` |
| `--gradient-mid` | `#f8fafc` | `#0f1628` |
| `--gradient-end` | `#e8ecf4` | `#0a1020` |

Applied as `linear-gradient(135deg, ...)` with `background-size: 400% 400%` animated over 30s.

### Active Card Colors

| Token | Light | Dark |
|---|---|---|
| `--card-active` | `#eef2ff` | `#1e1b4b` |
| `--card-active-border` | `#818cf8` | `#a5b4fc` |

### Category Accent Colors (shared across themes)

| Category | Color | Usage |
|---|---|---|
| Rain | `#38bdf8` | Card top border, icon background (10% opacity), ambient orbs |
| Nature | `#4ade80` | Same pattern |
| Urban | `#fb923c` | Same pattern |
| Transport | `#c084fc` | Same pattern |
| Places | `#f472b6` | Same pattern |
| Animals | `#facc15` | Same pattern (also used for favorite star `active` state) |
| Noise | `#94a3b8` | Same pattern |
| Things | `#22d3ee` | Same pattern |

---

## 3. Typography Rules

**Font Stack:** `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif`

The system font stack ensures zero-latency rendering across platforms and avoids layout shift from web font loading — critical for a mobile-first audio app where instant feedback matters.

### Type Scale

| Role | Token | Size | Weight | Line Height | Usage |
|---|---|---|---|---|---|
| Display / Timer countdown | `--font-size-3xl` | `2rem` (32px) | 700 | Default | Timer remaining display |
| Heading 1 / Logo | — | `1.5rem` (24px) | 700 | Default | App logo in header |
| Heading 2 / Modal title | `--font-size-xl` | `1.25rem` (20px) | 600 | Default | Modal headers, panel titles |
| Heading 3 / Panel title | `--font-size-lg` | `1.125rem` (18px) | 600 | Default | Now Playing panel heading |
| Body / Tab text (desktop) | `--font-size-xl` | `1.25rem` | 500–700 | Default | Category tab labels, tab `active` = 700 |
| Body / Card name | `--font-size-base` | `1rem` (16px) | 600 | 1.4 | Sound card names |
| Small body | `--font-size-sm` | `0.875rem` (14px) | 400–600 | 1.5 | Button text, panel item names, labels |
| Caption | `--font-size-xs` | `0.75rem` (12px) | 500–600 | Default | Quick preset labels, timer labels, active-sound chips |

**Letter Spacing:** `0.05em` on timer countdown values for tabular clarity. Default `normal` elsewhere.

**Numeric Tabular Figures:** `font-variant-numeric: tabular-nums` on timer displays and volume percentages to prevent layout jitter.

**Icons:** Font Awesome 6.4 (solid style). Icon sizing follows the text size of their parent or uses explicit `font-size` values. All icons use `fa-solid` unless noted (favorites toggle uses `fa-regular` when inactive).

---

## 4. Component Stylings

### Buttons

**Primary Button (`.btn.primary`)**
- Background: `var(--accent)` | Text: `#ffffff`
- Padding: `0.625rem 1.25rem` | Radius: `0.75rem`
- Font: `500`, `--font-size-sm`
- Shadow: `0 2px 8px var(--shadow)`
- Hover: `var(--accent-hover)`, `translateY(-1px)`, `box-shadow: 0 4px 12px var(--shadow-lg)`
- Transition: `background 0.2s`, `transform 0.2s`, `box-shadow 0.2s`

**Secondary Button (`.btn.secondary`)**
- Background: `var(--bg-tertiary)` | Text: `var(--text-primary)`
- Hover: `var(--border)`

**Icon Button (`.icon-btn`)**
- Size: `2.5rem × 2.5rem` square | Radius: `0.75rem`
- Background: `var(--bg-tertiary)` | Icon: `var(--text-primary)`, `--font-size-base`
- Hover: `var(--border)`, `scale(1.05)`

### Sound Cards

- Background: `var(--glass-bg)` — semi-transparent, glassmorphic
- Border: `2px solid transparent` → active state uses `var(--card-active-border)`
- Radius: `1rem` | Padding: `1.25rem`
- Shadow: `0 2px 8px var(--glass-shadow)`
- Layout: Flexbox column, center-aligned, `gap: 0.875rem`
- **Top color bar:** `3px` stripe via `::before` pseudo-element, colored by category
- **Hover:** `translateY(-4px)`, `box-shadow: 0 8px 24px var(--shadow-lg)`
- **Active:** `background: var(--card-active)`, `border-color: var(--card-active-border)`, `box-shadow: 0 0 0 2px var(--card-active-border)`
- **Active glow:** `::after` with `breatheGlow` animation (3s ease-in-out, opacity 0.1→0.25)
- **Press feedback:** `:active` → `scale(0.97)` over 0.1s
- **Ripple:** radial gradient from accent color, `scale(0)→scale(4)`, opacity `0.3→0` over 0.6s

**Sound Icon (circle)**
- Size: `5rem × 5rem` (desktop) / `3rem × 3rem` (mobile)
- Background: category color at 10% opacity
- Icon color: category color at 100%
- Active: `pulse` animation (`scale(1)→1.1` over 2s)

**Favorite Button**
- Position: absolute `top: 0.5rem, right: 0.5rem`
- Size: `1.5rem × 1.5rem` circle
- Default: `opacity: 0.5`, `fa-regular fa-star`, `var(--text-secondary)`
- Active: `opacity: 1`, `fa-solid fa-star`, `#facc15`

### Category Tabs

- Layout: Flexbox, horizontal, hidden scrollbar
- Tab items: `flex: 1`, `text-align: center`, `padding: 0.75rem 1rem`, `font-size: 1.25rem`, `font-weight: 500`
- Bottom border: `3px solid transparent`
- Active: `color: var(--accent)`, `font-weight: 700`, `border-bottom-color: var(--accent)`
- Mobile: tabs become `flex: none` (horizontally scrollable), `font-size: 1rem`, `border-bottom-width: 2px`

### Now Playing Bar

- Position: `fixed`, `bottom: 2rem`, horizontally centered via `translateX(-50%)`
- Background: `var(--bg-secondary)`
- Radius: `1rem` | Padding: `0.875rem 1.5rem`
- Shadow: `0 8px 32px var(--shadow-lg), 0 0 0 1px var(--border)`
- Max-width: `90vw` | Overflow-x: auto (hidden scrollbar)
- Hover: `translateY(-2px)`, enhanced shadow
- **Pulse dot:** `8px` circle, accent color, `pulse-dot` animation (opacity + scale, 1.5s)
- **Volume bars:** 4 bars, `2px wide`, staggered height animations (0.4–0.55s)
- **Sound chips:** `bg-tertiary` pill, `0.375rem × 0.75rem` padding, `--font-size-xs`

### Expanded Now Playing Panel

- Position: fixed, `bottom: 2rem`, centered, `width: 92vw`, `max-width: 500px`, `max-height: 60vh`
- Entry animation: `panelSlideUp` (0.25s, opacity + translateY 20px)
- Slider track: CSS gradient fill using `--slider-fill` custom property
- Slider thumb: `20px` circle, white fill, `3px solid var(--accent)` border
- Active thumb: `scale(1.25)`, `box-shadow: 0 0 0 6px rgba(99,102,241,0.15)`

### Presets / Timer Panels

- Position: centered via `translate(-50%, -50%)`
- Width: `90vw`, `max-width: 380px`
- Background: `var(--bg-secondary)`, Radius: `1.25rem`
- Shadow: `0 20px 60px var(--shadow-lg), 0 0 0 1px var(--border)`
- Entry: `modalIn` animation (0.25s, opacity + scale 0.95→1)
- Backdrop overlay: `rgba(0,0,0,0.4)` with `fadeIn`

### Sound Editor Modal

- Full-screen backdrop: `rgba(0,0,0,0.5)`
- Content: `max-width: 400px`, `width: 90%`, Radius: `1.5rem`
- Entry: `modalContentIn` (0.25s, scale 0.95→1)
- Icon circle: `5rem × 5rem`, accent-colored, `box-shadow: 0 4px 20px`
- Volume slider: `8px` track height, accent thumb, `20px × 20px`
- Quick preset buttons: flex row, `flex: 1`, `min-width: 60px`

### Custom Dialog Modals (Message / Confirm / Input)

- Replaces native `alert()`, `confirm()`, `prompt()` with Promise-based equivalents
- Shares modal backdrop and content styling
- Input fields: `2px solid var(--border)`, focus → `border-color: var(--accent)`
- Buttons: full-width within modal footer

---

## 5. Layout Principles

### Spacing Scale

| Token | Value | Usage |
|---|---|---|
| `--space-1` | `0.25rem` (4px) | Tight gaps |
| `--space-2` | `0.5rem` (8px) | Icon gaps, small component spacing |
| `--space-3` | `0.75rem` (12px) | Label margins, inner card gaps |
| `--space-4` | `1rem` (16px) | Standard padding, section gaps |
| `--space-5` | `1.5rem` (24px) | Panel padding, larger gaps |
| `--space-6` | `2rem` (32px) | Category tab gaps, page margins |

### Border Radius Scale

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | `0.5rem` | Small elements, preset buttons |
| `--radius-md` | `0.75rem` | Buttons, inputs, icon buttons |
| `--radius-lg` | `1rem` | Cards, now playing bar, quick presets bar |
| `--radius-xl` | `1.25rem` | Panels, modals |

### Grid System

Sound grid uses CSS Grid: `grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))` with `gap: 1.25rem`. This creates a responsive grid that adapts from 2 columns on small phones to 4+ columns on desktop.

### Page Structure

```
┌──────────────────────────────────────────────┐
│ Header (sticky, z-100)                       │
│ Logo ··· Controls (timer, theme, presets)    │
├──────────────────────────────────────────────┤
│ Main Content (max-width: 1400px, centered)   │
│ ┌─ Category Tabs (horiz scroll) ───────────┐ │
│ │ All │ Favorites │ Rain │ Nature │ ...     │ │
│ └───────────────────────────────────────────┘ │
│ ┌─ Quick Presets Bar (horiz scroll) ────────┐ │
│ │ [Preset1] [Preset2] [Preset3] [+ Save]   │ │
│ └───────────────────────────────────────────┘ │
│ ┌─ Sound Grid (responsive CSS grid) ───────┐ │
│ │ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐        │ │
│ │ │Card │ │Card │ │Card │ │Card │        │ │
│ │ └─────┘ └─────┘ └─────┘ └─────┘        │ │
│ │ ...                                       │ │
│ └───────────────────────────────────────────┘ │
│                                               │
│ (padding-bottom: 6rem for now-playing bar)    │
└──────────────────────────────────────────────┘
  ┌─ Now Playing Bar (fixed bottom center) ──┐
  │ ● Playing  [chip1] [chip2]  [stop]       │
  └───────────────────────────────────────────┘
```

### Ambient Orbs

A single `::before` pseudo-element on `.app-container` creates a 300×300px blurred circle (`filter: blur(60px)`, `opacity: 0.12`) positioned at `top: -80px, right: -80px`. Its background color is driven by `--ambient-orb-1`, which updates dynamically via JS based on the dominant active sound category. A `1.5s ease` transition on background creates smooth color shifts.

---

## 6. Depth & Elevation

The app uses a 5-level elevation system expressed through shadows and z-index:

| Level | Shadow | Z-Index | Components |
|---|---|---|---|
| **Base** | none | 0 | App container, ambient canvas |
| **Resting** | `0 2px 8px var(--glass-shadow)` | 1 | Sound cards, quick presets bar |
| **Sticky** | `0 2px 10px var(--glass-shadow)` | 100 | Header |
| **Floating** | `0 8px 32px var(--shadow-lg)` | 50 | Now playing bar |
| **Panel** | `0 12px 48px var(--shadow-lg)` | 60 | Expanded now playing panel |
| **Overlay** | `0 20px 60px var(--shadow-lg)` | 200–300 | Presets panel (200), timer panel (250), modal (300) |

**Shadow definitions:**
- Small: `0 2px 8px` — resting cards, button default
- Medium: `0 2px 10px` — header
- Large: `0 8px 32px` — now playing bar
- Extra-large: `0 12px 48px` — panels
- Maximum: `0 20px 60px` — centered modals

**Hover elevation lift:** Cards `translateY(-4px)` + shadow upgrade. Now playing bar `translateY(-2px)` + shadow upgrade. Buttons `translateY(-1px)` + shadow upgrade.

---

## 7. Do's and Don'ts

### Do

- **Do use the category color system consistently** — every visual reference to a category (card stripe, icon background, ambient orbs, canvas particles) must use the exact hex values defined in the palette.
- **Do maintain the glassmorphism aesthetic** — cards and panels should feel translucent. Use `var(--glass-bg)` for card fills, not opaque backgrounds.
- **Do provide haptic-feeling feedback** — every clickable element should have at least a subtle scale transform on `:active` (e.g., `scale(0.97)` for cards, `scale(1.05)` for icon buttons).
- **Do use the breathing glow** for active cards — the 3s ease-in-out opacity animation (`0.1↔0.25`) communicates "playing" without visual aggression.
- **Do animate entries** — panels slide up (20px translate + opacity), modals scale in (0.95→1), always 0.25s ease.
- **Do cap canvas at 30fps** — the ambient background animation should never compete with audio performance. Use `requestAnimationFrame` with frame-skip logic.
- **Do persist state** — theme, favorites, presets, active session should survive page reloads via `localStorage`.

### Don't

- **Don't introduce jarring colors** outside the 8-category palette. New categories need a designated accent color following the same pattern.
- **Don't use native `alert()`/`confirm()`/`prompt()`** — always use the custom Promise-based dialog modals that match the app's visual language.
- **Don't hardcode pixel values for layout** — use the spacing scale (`--space-1` through `--space-6`) and radius tokens.
- **Don't add scrollbars to horizontal scroll areas** — use `scrollbar-width: none` and `::-webkit-scrollbar { display: none }`.
- **Don't forget `env(safe-area-inset-*)`** — the header needs `padding-top: calc(1rem + env(safe-area-inset-top))` and the main content needs bottom safe-area padding for the now-playing bar.
- **Don't animate `box-shadow` directly** on frequently-changing elements (sound cards) — use opacity on `::after` pseudo-elements for the glow effect instead, and prefer GPU-composited properties (`transform`, `opacity`).

---

## 8. Responsive Behavior

### Breakpoints

| Name | Range | Key Changes |
|---|---|---|
| **Extra-small phone** | ≤ 375px | Grid: `repeat(2, 1fr)` with `0.5rem` gap. Button text hidden (icon-only). Quick presets bar wraps. Tab font: `1rem`. |
| **Phone** | ≤ 768px | Logo text hidden (icon-only header). Grid: `repeat(auto-fill, minmax(100px, 1fr))`. Card icons shrink to `3rem`. Now playing bar: `bottom: 1rem`, tighter padding. Panels: `width: 280px`. Tab labels scroll horizontally. |
| **Tablet** | 769–1024px | Grid: `repeat(3, 1fr)`. Main content padding: `1.5rem`. |
| **Desktop** | > 1024px | Grid: `repeat(auto-fill, minmax(200px, 1fr))`. Full header with text labels. Max content width: `1400px`, centered. |

### Touch Targets

- Sound cards: full-card tap area (minimum 200×200px on desktop, 100×100px on mobile)
- Icon buttons: `2.5rem × 2.5rem` (40px) — meets 44px recommendation with padding
- Category tabs: `0.75rem × 1rem` padding
- All interactive elements have `-webkit-tap-highlight-color: transparent` to prevent flash

### Collapsing Strategy

- Header: Logo text → hidden on mobile. Button labels → hidden on mobile (icon-only).
- Sound cards: Icon size shrinks (5rem → 3rem). Padding tightens (1.25rem → 0.625rem).
- Now playing bar: Moves closer to bottom edge (2rem → 1rem).
- Expanded panel: Widens to 95vw on mobile.

---

## 9. Agent Prompt Guide

### Quick Color Reference

```
Background:     --bg-primary (#f8fafc light / #0a0f1a dark)
Surface:        --bg-secondary (#ffffff / #1e293b)
Subtle fill:    --bg-tertiary (#f1f5f9 / #334155)
Accent:         --accent (#818cf8 / #a5b4fc)
Accent hover:   --accent-hover (#6366f1 / #818cf8)
Border:         --border (#e2e8f0 / #334155)
Danger:         #ef4444
```

### Ready-to-Use Prompts

**Add a new sound category:**
> Create a new sound category called "music" with accent color `#f472b6`. Add 5 sounds with Font Awesome icons. Follow the existing `soundDatabase` structure in app.js. Apply the category color to the card's `::before` top stripe and icon background using the same `rgba(color, 0.1)` pattern.

**Create a new panel component:**
> Build a settings panel that slides in from the right side of the screen. Use the same overlay pattern as the timer panel (`.timer-overlay` with `rgba(0,0,0,0.4)` background, `fadeIn` animation). The panel should use `--bg-secondary` background, `1.25rem` radius, and the standard `modalIn` entry animation. Include a header with title and close button matching the presets panel structure.

**Add a new card state:**
> Add a "loading" state to sound cards that shows while audio is buffering. Use the same glassmorphic card styling but replace the icon with a spinning loader animation. The card should have a subtle pulsing border in the category's accent color. Do not change the existing active/inactive states.

**Modify the ambient canvas:**
> Add a "snow" particle effect to the AmbientBackground class. It should produce 30–50 white falling particles with slight horizontal drift, similar to the existing rain effect but with round dots instead of lines. Trigger it when the dominant category is "nature" and the specific sound is "walk-in-snow". Keep the 30fps frame cap and mobile particle reduction.

**Build a companion widget:**
> Create a minimal now-playing widget that can be embedded in a notification or widget panel. It should display: active sound icons in a row, a combined volume slider, and the sleep timer countdown if active. Use only the design tokens from this system — `--accent` for the primary color, `--bg-secondary` for the surface, and `--radius-md` for corners.
