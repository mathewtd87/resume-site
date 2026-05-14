---
name: Technical Precision
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fd'
  on-secondary-container: '#57657b'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#001e2f'
  on-tertiary-container: '#008cc7'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d5e3fd'
  secondary-fixed-dim: '#b9c7e0'
  on-secondary-fixed: '#0d1c2f'
  on-secondary-fixed-variant: '#3a485c'
  tertiary-fixed: '#c9e6ff'
  tertiary-fixed-dim: '#89ceff'
  on-tertiary-fixed: '#001e2f'
  on-tertiary-fixed-variant: '#004c6e'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  headline-lg:
    fontFamily: Manrope
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: Work Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  code-inline:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  container-max: 1120px
  gutter: 1.5rem
  margin-page: 2rem
  stack-sm: 0.5rem
  stack-md: 1.5rem
  stack-lg: 4rem
---

## Brand & Style

The brand personality is rooted in technical excellence, clarity, and reliability. This design system is engineered for a software professional whose work demands both logic and aesthetic rigor. The emotional response should be one of immediate trust; the UI should feel "compiled"—precise, bug-free, and highly performant.

The chosen style is **Minimalism with a Corporate/Modern influence**. It avoids unnecessary ornamentation to allow the engineer’s projects and code to remain the focal point. The interface uses generous whitespace to reduce cognitive load, suggesting a developer who values clean code and architectural order.

## Colors

The palette is anchored by a deep navy (`#0F172A`) for primary headings and brand elements, providing a strong sense of authority. Slate gray (`#334155`) is used for secondary text and icons to maintain a sophisticated hierarchy without the harshness of pure black.

A vibrant "Electric Blue" (`#0EA5E9`) serves as the accent color, used sparingly for interactive states, progress indicators, and syntax highlighting. The background is a crisp, very light gray (`#F8FAFC`) to differentiate the site from generic white-label templates while maintaining maximum readability for technical documentation and resumes.

## Typography

This design system employs a three-font strategy to balance character with utility. 

**Manrope** is used for headings to provide a modern, refined, and balanced look that feels contemporary and trustworthy. 

**Work Sans** is used for body text. Its optimized legibility and slightly wider apertures ensure that dense technical descriptions remain approachable and readable at any scale.

**Space Grotesk** is used for labels, metadata, and "mono-style" accents. This adds a subtle "tech" flavor to the UI, referencing the monospace environments software engineers inhabit daily without sacrificing the readability of a proportional font.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop to maintain a professional, editorial feel, transitioning to a fluid layout for mobile devices. On large screens, the content is centered within a 1120px container.

A strict 8px (0.5rem) spacing rhythm is enforced across the system. "Stack" spacing is used to create clear groupings: 8px for related items (label + input), 24px for standard block separation, and 64px to define major sections of the portfolio. This high-contrast spacing ensures the technical expertise is organized and easy to scan.

## Elevation & Depth

To maintain a clean and professional aesthetic, this design system uses **Tonal Layers** and **Low-contrast Outlines** rather than heavy shadows.

- **Surface 0:** The main page background (`#F8FAFC`).
- **Surface 1:** Card containers or code blocks use a pure white background with a subtle 1px border in a lightened slate.
- **Interactive State:** Elements like cards may use an "Ambient Shadow"—an extremely diffused, low-opacity (4-8%) navy shadow—only upon hover to indicate interactivity.

This approach ensures the portfolio feels light and fast, mirroring the efficiency of well-optimized software.

## Shapes

The shape language is **Soft**. A 4px (0.25rem) border radius is applied to buttons, input fields, and cards. This small radius keeps the UI feeling disciplined and "engineered," avoiding the overly casual nature of fully rounded pill shapes while feeling more modern than sharp 0px corners.

Iconography should follow a "line" style with a consistent 2px stroke weight, matching the precision of the typography and border system.

## Components

### Buttons
Primary buttons use the deep navy background with white text. Secondary buttons use a slate outline. The "accent" button uses the teal color for high-priority CTAs like "Download Resume." All buttons feature a subtle transition on hover, shifting the background color slightly or adding the soft ambient shadow.

### Cards
Cards are used to showcase projects. They feature a white background, a 1px slate-light border, and `rounded-lg` (8px) corners. Headings within cards should be Manrope (headline-sm).

### Chips/Tags
Tech stack tags (e.g., "React", "TypeScript") use the Space Grotesk font in `label-caps`. They should have a light slate-gray background with slate-gray text to remain unobtrusive.

### Code Blocks
Essential for an engineer's portfolio. These should use a dark background (`#1E293B`) even in light mode, with the Teal accent used for syntax highlighting to create a focal point of technical skill.

### Input Fields
Inputs are minimalist: a 1px border that turns Teal on focus. Labels should always be visible above the field using the `label-caps` style for clarity.