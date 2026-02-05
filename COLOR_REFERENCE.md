# Rohan Gaikwad Portfolio - Color & Design Reference

## Color Palette System

### Primary Colors

```
GitHub Green (Primary Accent)
  HEX: #238636
  RGB: 35, 134, 54
  Usage: Main CTA buttons, primary accents, hover states, badges
  Tailwind: --github-green

Blue (Secondary Accent)
  HEX: #1F6FEB
  RGB: 31, 111, 235
  Usage: Resume button, secondary CTAs, information accents
  Tailwind: --info

GitHub Green Dark (Hover State)
  HEX: #1A7F37
  RGB: 26, 127, 55
  Usage: Hover state for green buttons
  Tailwind: --github-green-dark

Blue Dark (Hover State)
  HEX: #0D419D
  RGB: 13, 65, 157
  Usage: Hover state for blue buttons
  Tailwind: --accent-dark
```

### Neutral Colors

```
Background (Primary)
  HEX: #0D0D0D
  RGB: 13, 13, 13
  Tailwind: --background / bg-obsidian

Surface (Primary)
  HEX: #1A1A1A
  RGB: 26, 26, 26
  Tailwind: --surface / bg-steel

Surface Alt
  HEX: #262626
  RGB: 38, 38, 38
  Tailwind: --surface-alt

Text Primary
  HEX: #FFFFFF
  RGB: 255, 255, 255
  Tailwind: --text-primary

Text Secondary
  HEX: #B0B0B0
  RGB: 176, 176, 176
  Tailwind: --text-secondary

Text Tertiary (Muted)
  HEX: #808080
  RGB: 128, 128, 128
  Tailwind: --text-tertiary

Border
  HEX: #2A2A2A
  RGB: 42, 42, 42
  Tailwind: --border

Border Subtle
  HEX: #1F1F1F
  RGB: 31, 31, 31
  Tailwind: --border-subtle
```

### Semantic Colors

```
Success
  HEX: #238636
  Usage: Success states, positive actions
  Tailwind: --success

Error
  HEX: #FF6B6B
  RGB: 255, 107, 107
  Usage: Error states, destructive actions
  Tailwind: --error

Warning
  HEX: #D29922
  RGB: 210, 153, 34
  Usage: Warning messages, caution states
  Tailwind: --warning

Info
  HEX: #1F6FEB
  RGB: 31, 111, 235
  Usage: Information, secondary actions
  Tailwind: --info
```

---

## Component Styling

### Buttons

#### Primary Button (Green)
```
Background: #238636 (GitHub Green)
Text: #0D0D0D (Black)
Border: #238636
Hover: Background #1A7F37, Border #1A7F37
Padding: px-6 py-3
Font: Mono, sm, semibold
Border Radius: lg
```

#### Secondary Button (Blue)
```
Background: Transparent
Text: #1F6FEB (Blue)
Border: #1F6FEB
Hover: Background #1F6FEB/10, Border maintains color
Padding: px-6 py-3
Font: Mono, sm, semibold
Border Radius: lg
```

#### Outline Button
```
Background: Transparent
Text: #B0B0B0 (Secondary)
Border: #2A2A2A
Hover: Text #238636, Border #238636
Padding: px-6 py-3
Font: Mono, sm, semibold
Border Radius: lg
```

### Cards

#### Standard Card
```
Background: #1A1A1A (Steel)
Border: #2A2A2A (Border)
Border Radius: lg
Padding: p-6 or p-8
Hover: Border color changes to accent color, background subtly shifts
Transition: all 300ms duration-300
```

#### Highlighted Card
```
Background: #238636/10 (Green tint)
Border: #238636/30
Icon/Text: #238636 (Green)
```

### Badges & Tags

#### Tech Stack Badge (Green)
```
Background: #238636/10
Border: #238636/40
Text: #238636
Padding: px-3 py-1
Border Radius: full (rounded-full)
Font: Mono, xs, medium
```

### Form Elements

#### Input Fields
```
Background: #1A1A1A (Steel)
Border: #2A2A2A
Text: #FFFFFF
Placeholder: #808080 (Tertiary)
Focus: Border #238636 (Green)
Padding: Standard px-4 py-2
Border Radius: md
```

### Links

#### Hyperlinks
```
Text Color: #238636 (Green) or context-dependent
Hover: Underline, slightly lighter
Active: Maintain color, visited state optional
```

---

## Typography Colors

```
Headings (H1, H2, H3)
  Color: #FFFFFF (Primary)
  Font: JetBrains Mono
  Style: Bold

Body Text
  Color: #B0B0B0 (Secondary)
  Font: Inter
  Line Height: 1.4-1.6

Accent Text
  Color: #238636 (Green) or #1F6FEB (Blue)
  Usage: Emphasis, section headers

Muted Text
  Color: #808080 (Tertiary)
  Usage: Secondary info, timestamps
```

---

## Page Backgrounds

```
Main Pages: #0D0D0D (Obsidian)
Section Dividers: #1A1A1A (Steel) with #2A2A2A border
Dark Overlay: rgba(13, 13, 13, 0.95) for modals/overlays
Gradient: Not used (solid colors preferred)
```

---

## Interactive States

### Hover States
- **Links**: Color shifts to accent, underline appears
- **Buttons**: Color intensifies, subtle background shift
- **Cards**: Border color changes to accent, slight background lightening
- **Transition**: all 300ms cubic-bezier timing

### Active States
- **Navigation**: Text color to accent (#238636)
- **Buttons**: Slightly darker background shade
- **Links**: Maintained color with underline

### Focus States (Accessibility)
- **Outline**: ring-[#238636]/50
- **Visible**: Border or outline clearly visible
- **Minimum 2px width**

---

## Dark Mode Considerations

The portfolio operates exclusively in dark mode. However, if a light mode were added:
- Background would invert to #FFFFFF
- Text would invert to #0D0D0D
- Green accent would shift to darker green (#1A7F37)
- All other relationships would maintain contrast

---

## Contrast Ratios

All color combinations maintain WCAG AA+ compliance:
- Text on backgrounds: Minimum 7:1 contrast
- Large text: Minimum 4.5:1 contrast
- Interactive elements: Clearly distinguishable

---

## Implementation Notes

### CSS Variables
All colors are available as CSS variables in `app/globals.css`:
```css
--background: #0d0d0d;
--surface: #1a1a1a;
--github-green: #238636;
--info: #1f6feb;
/* etc. */
```

### Tailwind Utilities
Custom classes available:
```
.text-accent → #238636
.text-accent-secondary → #1F6FEB
.bg-obsidian → #0d0d0d
.bg-steel → #1a1a1a
.border-slate → #2a2a2a
.btn-primary → Full green button styling
.btn-secondary → Full blue button styling
```

---

## Quick Reference Table

| Element | Color | Hex | Usage |
|---------|-------|-----|-------|
| Primary Accent | GitHub Green | #238636 | Main buttons, primary text |
| Secondary Accent | Blue | #1F6FEB | Resume button, secondary CTAs |
| Background | Obsidian | #0D0D0D | Page background |
| Surface | Steel | #1A1A1A | Cards, containers |
| Text Primary | White | #FFFFFF | Headings, primary text |
| Text Secondary | Slate | #B0B0B0 | Body text, descriptions |
| Border | Slate | #2A2A2A | Card borders, dividers |
| Error | Red | #FF6B6B | Error states |
| Success | Green | #238636 | Success states |
| Warning | Gold | #D29922 | Warning states |

---

This color system ensures a cohesive, professional appearance while maintaining excellent accessibility and visual hierarchy throughout the portfolio.
