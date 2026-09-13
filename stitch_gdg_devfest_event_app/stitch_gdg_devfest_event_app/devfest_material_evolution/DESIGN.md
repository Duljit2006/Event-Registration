---
name: DevFest Material Evolution
colors:
  surface: '#faf9fd'
  surface-dim: '#dbd9dd'
  surface-bright: '#faf9fd'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f7'
  surface-container: '#efedf1'
  surface-container-high: '#e9e7eb'
  surface-container-highest: '#e3e2e6'
  on-surface: '#1a1b1e'
  on-surface-variant: '#424753'
  inverse-surface: '#2f3033'
  inverse-on-surface: '#f1f0f4'
  outline: '#727785'
  outline-variant: '#c2c6d5'
  surface-tint: '#005ac1'
  primary: '#0058bd'
  on-primary: '#ffffff'
  primary-container: '#2771df'
  on-primary-container: '#fefcff'
  inverse-primary: '#adc6ff'
  secondary: '#006e2c'
  on-secondary: '#ffffff'
  secondary-container: '#86f898'
  on-secondary-container: '#00722f'
  tertiary: '#765700'
  on-tertiary: '#ffffff'
  tertiary-container: '#956e00'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004494'
  secondary-fixed: '#89fa9b'
  secondary-fixed-dim: '#6ddd81'
  on-secondary-fixed: '#002108'
  on-secondary-fixed-variant: '#005320'
  tertiary-fixed: '#ffdfa0'
  tertiary-fixed-dim: '#fbbc05'
  on-tertiary-fixed: '#261a00'
  on-tertiary-fixed-variant: '#5c4300'
  background: '#faf9fd'
  on-background: '#1a1b1e'
  surface-variant: '#e3e2e6'
typography:
  display-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 38px
    fontWeight: '700'
    lineHeight: 46px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Roboto Flex
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Roboto Flex
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Roboto Flex
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  gutter-lg: 2rem
  margin: 1.5rem
  margin-md: 3rem
  margin-lg: 5rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
  space-2xl: 3rem
  space-3xl: 4.5rem
---

## Brand & Style

The design system embodies the community-focused, forward-looking energy of modern developer ecosystems. It balances utilitarian enterprise clarity with playful innovation, speaking to developers, students, researchers, and tech leaders alike. The emotional response should be welcoming, accessible, focused, and distinctly rooted in the open web.

The aesthetic philosophy draws strictly from contemporary **Material Design 3 (Material You)**:
- **Tonal surfaces over hard lines**: Layered neutral surfaces structure content rather than rigid dividing strokes.
- **Dynamic accents**: The canonical four-color palette (Google Blue, Red, Yellow, Green) acts as intentional focal points, indicator dots, track tags, and dynamic badges rather than dominating the primary reading plane.
- **Tactile, approachable geometry**: High roundedness (pill elements, deeply curved cards) creates an inviting, human surface texture.
- **Uncluttered breathing room**: Wide margins, generous vertical pacing, and rhythmic typography provide effortless scanning for schedules, speaker lineups, code snippets, and session registrations.

## Colors

The color palette leverages clean high-luminance canvas backgrounds, anchored by Dark Charcoal (#202124) for high-contrast, effortless legibility, and Medium Grey (#5F6368) for secondary labels and descriptive metadata.

### Color Roles & Guidelines:
- **Primary (`#4285F4` - Google Blue)**: Drives primary interactions, active navigation states, link selections, and key conversion CTAs.
- **Secondary (`#34A853` - Google Green)**: Confirmed registration badges, live session tags, success toasts, and workshop tracks.
- **Tertiary (`#FBBC04` - Google Yellow)**: Spotlights, featured keynote highlights, caution indicators, and track tags (AI/Cloud).
- **Destructive & Error (`#EA4335` - Google Red)**: Session full warnings, destructive cancellations, validation errors, and community alerts.
- **Surfaces & Containers**: The base canvas is `#FFFFFF`. Secondary content regions, session cards, code blocks, and filter panels sit on `#F8F9FA` (Surface Container) or `#F1F3F4` (Surface Variant).
- **Dividers & Strokes**: `#DADCE0` serves strictly for low-contrast borders, non-interactive outlines, and disabled button fills.
- **Brand Accents**: The 4-color dot cluster (Blue, Red, Yellow, Green) is reserved for brand anchors, section kickers, and avatar active badges.

## Typography

The typography strategy pairs **Plus Jakarta Sans** for headlines, section titles, and action labels with **Roboto Flex** for long-form descriptions, speaker bios, and technical details. 

- **Display & Headlines**: Plus Jakarta Sans provides clean, contemporary geometric authority that aligns with modern developer branding, with tight optical tracking (`-0.01em` to `-0.02em`) on sizes above 28px to maintain visual cohesion.
- **Body Content**: Roboto Flex ensures maximum structural neutrality, vertical rhythm, and reading stamina across session outlines, abstracts, and table grids.
- **Labels & Badges**: Set in semi-bold Plus Jakarta Sans with subtle positive tracking for heightened legibility at micro sizes (tags, chips, time slots).

## Layout & Spacing

The system utilizes a 12-column responsive fluid grid anchored against a max-width container of 1440px on desktop screens.

### Grid Architecture:
- **Desktop (1024px – 1440px+)**: 12 columns, `margin-lg` (80px / 5rem) exterior padding, and `gutter-lg` (32px / 2rem) column gap. Max reading column constrained to 720px for schedule descriptions.
- **Tablet (600px – 1023px)**: 8 columns, `margin-md` (48px / 3rem) exterior margin, and `gutter` (24px / 1.5rem) column gap.
- **Mobile (< 600px)**: 4 columns, `margin` (24px / 1.5rem) exterior margin, and `gutter-sm` (16px / 1rem) column gap.

### Vertical Rhythm:
- Related items within components (labels to inputs, card titles to meta badges) use `space-xs` (4px) to `space-sm` (8px).
- Internal card padding defaults to `space-lg` (24px).
- Vertical stack distance between distinct agenda tracks or speaker categories scales at `space-2xl` (48px) to `space-3xl` (72px).

## Elevation & Depth

Visual hierarchy uses Material Design 3 surface containers coupled with warm, ambient, diffused drop shadows. High-contrast, sharp drop shadows are forbidden.

### Depth Levels:
- **Level 0 (Flat Surface)**: Background canvas (`#FFFFFF`) and embedded inset panels (`#F8F9FA`). No shadow; separation is achieved purely via surface hue tone or a 1px border of `#DADCE0`.
- **Level 1 (Default Cards & Chips)**: Schedule cards, track containers, speaker tiles.
  `box-shadow: 0px 1px 3px 1px rgba(32, 33, 36, 0.05), 0px 1px 2px 0px rgba(32, 33, 36, 0.08);`
- **Level 2 (Hover States & Active Dropdowns)**: Interactive cards on mouse hover, quick-filter flyouts, search dropdowns.
  `box-shadow: 0px 2px 6px 2px rgba(32, 33, 36, 0.08), 0px 1px 2px 0px rgba(32, 33, 36, 0.12);`
- **Level 3 (Modals, Dialogs, Floating Navigation)**: Sticky header bar, session detail sheets, speaker bio dialogs.
  `box-shadow: 0px 4px 12px 3px rgba(32, 33, 36, 0.10), 0px 1px 3px 0px rgba(32, 33, 36, 0.15);`

## Shapes

The design system adopts a soft, friendly Material Design 3 shape language with full adherence to intentional radius levels:

- **Pill / Fully Rounded (`rounded-full`, 9999px)**: Used for all interactive buttons (Filled, Tonal, Outlined), filter chips, session duration pills, status badges, and track category tags.
- **Card & Dialog Containers (`rounded-3xl`, 24px)**: Applied to all prominent card containers, speaker bio modal overlays, agenda date-switching bars, and workshop showcase blocks.
- **Input Fields & Small Surfaces (`rounded-xl`, 12px)**: Form fields, search bars, textareas, code snippet containers, and secondary media thumbnails.
- **Interactive Checkbox/Radio (`rounded-sm` to `rounded-full`)**: Checkboxes feature a 4px soft corner; radio buttons are 100% circular.

## Components

### Buttons
- **Filled (Primary CTA)**: Height 48px (desktop), background `#4285F4`, text `#FFFFFF`, shape `rounded-full`, padding `0 24px`. Hover applies a 8% black tint overlay with Level 1 elevation.
- **Tonal (Secondary CTA)**: Height 48px, background `#F1F3F4`, text `#202124`, shape `rounded-full`, no border.
- **Outlined**: Height 48px, background transparent, 1px solid border `#DADCE0`, text `#4285F4`, shape `rounded-full`.
- **Text Button**: Height 40px, padding `0 12px`, transparent background, text `#4285F4`, `rounded-full`.

### Input Fields & Search Bars
- **Form Inputs**: Height 56px, filled style using `#F1F3F4` container, `rounded-xl` (12px), text `#202124`, placeholder `#5F6368`. On focus: 2px solid border `#4285F4` with white background `#FFFFFF`.
- **Global Event Search**: Height 56px, `rounded-full`, container `#F1F3F4`, leading search icon in `#5F6368`, trailing clear or shortcut button.

### Chips & Badges
- **Filter Chips**: Height 32px, `rounded-full`, border 1px solid `#DADCE0`, background `#FFFFFF`, text `#202124`. Selected state: `#E8F0FE` background, `#4285F4` border and text.
- **Category / Track Badges**: Pill-shaped with a colored 6px leading dot (Blue for Web, Green for Android, Yellow for Cloud, Red for AI/ML).

### Cards (Sessions, Speakers, Workshops)
- **Container**: `rounded-3xl` (24px), background `#FFFFFF`, border 1px solid `#DADCE0`, Level 1 elevation. Padding is 24px (`space-lg`).
- **Interactive Behavior**: On hover, transitions border color to `#4285F4` and elevates to Level 2 with a smooth 200ms ease-out curve.

### Selection Controls
- **Checkboxes**: 18px x 18px, 4px corner radius. Unchecked has 2px stroke in `#5F6368`. Checked has `#4285F4` fill with pure white check icon.
- **Radio Buttons**: 20px circular container with 2px `#5F6368` border. Selected state swaps to `#4285F4` outer ring with a centered 10px `#4285F4` filled bullet.

### Specialized Component: Four-Color Brand Anchor
- Header and hero sections integrate the horizontal DevFest 4-color dot cluster: four 8px circles aligned horizontally (`space-xs` gap) in sequence: `#4285F4`, `#EA4335`, `#FBBC04`, `#34A853`.