# Design Tokens Reference

## Obsidian & Steel Theme

A sophisticated dark theme with high contrast, engineered for technical professionals.

---

## Color System

### Primary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Obsidian** (Background) | `#0D0D0D` | 13, 13, 13 | Main page background |
| **Steel** (Surface) | `#1A1A1A` | 26, 26, 26 | Cards, containers |
| **Surface Alt** | `#262626` | 38, 38, 38 | Hover states, alternatives |

### Text Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Text Primary** | `#FFFFFF` | 255, 255, 255 | Headings, main text |
| **Text Secondary** | `#B0B0B0` | 176, 176, 176 | Body text, descriptions |
| **Text Tertiary** | `#808080` | 128, 128, 128 | Timestamps, hints |

### Accent Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Accent** (Cyan) | `#00D9FF` | 0, 217, 255 | Links, highlights, CTAs |
| **Accent Dark** | `#0099CC` | 0, 153, 204 | Hover states, active |

### Border Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Border** (Slate) | `#2A2A2A` | 42, 42, 42 | Main borders |
| **Border Subtle** | `#1F1F1F` | 31, 31, 31 | Subtle dividers |

### Status Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Success** | `#51CF66` | Positive states, confirmations |
| **Error** | `#FF6B6B` | Warnings, errors |

---

## Typography

### Font Families

```css
/* Headings & Monospace */
font-family: 'JetBrains Mono', 'Courier New', monospace;

/* Body Text */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
```

### Font Sizes

| Usage | Size | Line Height |
|-------|------|-------------|
| H1 (Main Heading) | 48px | 1.2 |
| H2 (Section) | 32px | 1.3 |
| H3 (Subsection) | 24px | 1.4 |
| Body | 16px | 1.5 |
| Small | 14px | 1.5 |
| Extra Small | 12px | 1.4 |

### Font Weights

| Weight | Value | Usage |
|--------|-------|-------|
| Regular | 400 | Body text |
| Medium | 500 | Labels |
| Semibold | 600 | Emphasis |
| Bold | 700 | Headings |

### Line Heights

- **Tight**: 1.2 (Headings)
- **Normal**: 1.4 (Medium text)
- **Relaxed**: 1.6 (Body text)

---

## Spacing Scale

### Base Unit: 4px

| Token | Value | Usage |
|-------|-------|-------|
| `gap-1` | 4px | Tight spacing |
| `gap-2` | 8px | Small spacing |
| `gap-3` | 12px | Comfortable spacing |
| `gap-4` | 16px | Standard spacing |
| `gap-6` | 24px | Section spacing |
| `gap-8` | 32px | Large spacing |
| `gap-12` | 48px | Section separation |

### Padding/Margin Scale

- `p-4` / `m-4`: 16px
- `p-6` / `m-6`: 24px
- `p-8` / `m-8`: 32px
- `px-4`: 16px horizontal
- `py-8`: 32px vertical

---

## Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `rounded-lg` | 8px | Cards, buttons |
| `rounded-xl` | 12px | Large containers |
| `rounded-full` | 9999px | Pills, badges |

---

## Shadows & Effects

### Box Shadows

```css
/* Subtle */
box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);

/* Medium */
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

/* Large */
box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
```

### Backdrop Effects

```css
backdrop-filter: blur(8px);
background: rgba(13, 13, 13, 0.95);
```

---

## Component Tokens

### Buttons

```css
/* Primary CTA Button */
background: #00D9FF;
color: #0D0D0D;
border: 1px solid #00D9FF;
padding: 12px 24px;
border-radius: 8px;
font-weight: 600;
font-family: 'JetBrains Mono';

/* Secondary Button */
background: transparent;
color: #00D9FF;
border: 1px solid #2A2A2A;
padding: 12px 24px;
border-radius: 8px;
```

### Input Fields

```css
background: #0D0D0D;
border: 1px solid #2A2A2A;
color: #FFFFFF;
padding: 10px 16px;
border-radius: 8px;

/* Focus State */
border-color: #00D9FF;
box-shadow: 0 0 0 3px rgba(0, 217, 255, 0.2);
```

### Cards

```css
background: #1A1A1A;
border: 1px solid #2A2A2A;
border-radius: 8px;
padding: 24px;

/* Hover State */
border-color: #00D9FF;
background: #262626;
```

### Navigation

```css
background: rgba(13, 13, 13, 0.95);
backdrop-filter: blur(8px);
border-bottom: 1px solid #2A2A2A;
```

---

## Responsive Breakpoints

```css
/* Mobile First */
/* Default: 0px - 639px */

/* Medium devices */
@media (min-width: 640px) { /* sm: */ }

/* Tablets */
@media (min-width: 768px) { /* md: */ }

/* Desktops */
@media (min-width: 1024px) { /* lg: */ }

/* Large desktops */
@media (min-width: 1280px) { /* xl: */ }
```

---

## Animation & Transition

### Timing Functions

```css
/* Standard transition */
transition: all 0.3s ease-in-out;

/* Hover effects */
transition: all 0.2s ease;

/* Page transitions */
transition: opacity 0.5s ease-in-out;
```

### Durations

| Duration | Usage |
|----------|-------|
| 100ms | Quick hover effects |
| 200ms | Button feedback |
| 300ms | Component transitions |
| 500ms | Page enters |
| 700ms+ | Slow reveals |

---

## Accessibility

### Contrast Ratios

- **Text Primary on Background**: 21:1 (AAA)
- **Text Secondary on Background**: 7.2:1 (AA)
- **Accent on Background**: 6.5:1 (AA)

### Focus States

```css
/* Keyboard focus */
outline: 2px solid #00D9FF;
outline-offset: 2px;

/* Focus ring */
box-shadow: 0 0 0 3px rgba(0, 217, 255, 0.2);
```

---

## CSS Custom Properties

Location: `/app/globals.css`

```css
:root {
  --background: #0d0d0d;
  --surface: #1a1a1a;
  --surface-alt: #262626;
  --text-primary: #ffffff;
  --text-secondary: #b0b0b0;
  --text-tertiary: #808080;
  --border: #2a2a2a;
  --border-subtle: #1f1f1f;
  --accent: #00d9ff;
  --accent-dark: #0099cc;
  --error: #ff6b6b;
  --success: #51cf66;
}
```

### Usage

```css
background-color: var(--background);
color: var(--text-primary);
border-color: var(--border);
```

---

## Tailwind Classes

### Custom Components

```css
.bg-obsidian { @apply bg-[#0d0d0d]; }
.bg-steel { @apply bg-[#1a1a1a]; }
.border-slate { @apply border-[#2a2a2a]; }
.text-accent { @apply text-[#00d9ff]; }
.ring-accent { @apply ring-[#00d9ff]/30; }
```

### Usage Examples

```html
<!-- Background -->
<div class="bg-obsidian">Main content</div>
<div class="bg-steel">Card</div>

<!-- Text -->
<h1 class="text-text-primary">Heading</h1>
<p class="text-text-secondary">Body</p>

<!-- Borders -->
<div class="border border-slate-600">Content</div>

<!-- Accent -->
<button class="text-accent hover:text-accent-dark">Button</button>
```

---

## Icon Usage

### Lucide React Icons

```typescript
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react'

<Github className="h-6 w-6 text-accent" />
<Linkedin className="h-6 w-6 text-accent" />
<Mail className="h-6 w-6 text-accent" />
<ArrowRight className="h-4 w-4" />
```

### Sizes

- Extra Small: `h-4 w-4`
- Small: `h-5 w-5`
- Medium: `h-6 w-6`
- Large: `h-8 w-8`

---

## Creating Consistent UI

### Button Pattern

```typescript
// Primary
<button className="bg-accent text-obsidian px-6 py-3 rounded-lg border border-accent hover:bg-accent-dark transition-all duration-300">
  Action
</button>

// Secondary
<button className="border border-slate-600 text-accent px-6 py-3 rounded-lg hover:bg-accent/10 transition-all duration-300">
  Secondary
</button>
```

### Card Pattern

```typescript
<div className="rounded-lg border border-slate-600 bg-steel p-6 hover:border-accent transition-all duration-300">
  <h3 className="font-mono font-bold text-text-primary">Title</h3>
  <p className="mt-2 text-text-secondary">Content</p>
</div>
```

### Text Pattern

```typescript
<h1 className="font-mono text-4xl font-bold text-text-primary">Heading</h1>
<p className="text-text-secondary">Body text</p>
<span className="font-mono text-xs uppercase text-accent">Label</span>
```

---

## Dark Mode Considerations

This portfolio uses **forced dark mode** for consistency:

```typescript
<ThemeProvider
  enableSystem={false}
  attribute="class"
  defaultTheme="dark"
  forcedTheme="dark"
>
```

All colors are optimized for dark mode viewing with high contrast ratios.

---

## Extension Points

### Adding New Colors

In `globals.css`:
```css
--color-new: #XXXXXX;
```

In Tailwind:
```css
.bg-new { @apply bg-[#XXXXXX]; }
```

### Creating Themes

Create new CSS files in `app/themes/`:
- `theme-light.css`
- `theme-high-contrast.css`

---

## Best Practices

1. **Use CSS Custom Properties** for colors
2. **Follow Tailwind Scale** for spacing
3. **Maintain Contrast Ratios** for accessibility
4. **Test on Multiple Devices** for responsiveness
5. **Use Consistent Icon Sizes** (h-5 w-5, h-6 w-6)
6. **Apply Transitions** consistently (300ms)
7. **Respect Typography Hierarchy** with font sizes

---

## References

- Tailwind CSS: https://tailwindcss.com/docs
- Lucide Icons: https://lucide.dev
- Color Contrast: https://webaim.org/resources/contrastchecker/
- WCAG Guidelines: https://www.w3.org/WAI/WCAG21/quickref/

---

**Last Updated**: February 2026
**Theme**: Obsidian & Steel v1.0
