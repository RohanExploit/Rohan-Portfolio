# Project Index & Documentation

## Overview

This is Rohan Gaikwad's professional portfolio website, built with cutting-edge technologies and featuring a sophisticated "Obsidian & Steel" design aesthetic.

---

## Documentation Files

### 📖 Main Documentation

| File | Purpose |
|------|---------|
| **README.md** | Project overview, features, and deployment |
| **PORTFOLIO_SUMMARY.md** | Comprehensive site structure and content breakdown |
| **SETUP_GUIDE.md** | Step-by-step customization and configuration |
| **DESIGN_TOKENS.md** | Complete design system reference |
| **PROJECT_INDEX.md** | This file - navigation guide |

---

## Quick Navigation

### Getting Started
1. Read **README.md** first for overview
2. Run `npm install && npm run dev`
3. Visit http://localhost:3000
4. Check **SETUP_GUIDE.md** for customization

### Understanding the Design
1. Review **DESIGN_TOKENS.md** for colors and typography
2. Check `app/globals.css` for theme implementation
3. Examine component files for pattern examples

### Making Changes
1. Update content in `lib/portfolio-data.ts`
2. Modify styling in `app/globals.css` or component files
3. Add pages in `app/[section]/page.tsx`
4. Update navigation in `app/components/navigation.tsx`

### Deploying
1. Run `npm run build` to check for errors
2. Deploy to Vercel, GitHub Pages, or your host
3. See **README.md** deployment section

---

## File Structure

```
rohan-portfolio/
├── README.md                    # Start here!
├── PORTFOLIO_SUMMARY.md         # Complete site overview
├── SETUP_GUIDE.md              # Customization guide
├── DESIGN_TOKENS.md            # Design system reference
├── PROJECT_INDEX.md            # This file
│
├── app/
│   ├── page.tsx                # Homepage
│   ├── layout.tsx              # Root layout with fonts
│   ├── globals.css             # Theme & design tokens
│   │
│   ├── about/page.tsx          # About page
│   ├── projects/page.tsx       # Projects showcase
│   ├── experience/page.tsx     # Experience timeline
│   ├── skills/page.tsx         # Skills & tech stack
│   ├── achievements/page.tsx   # Certifications
│   ├── contact/page.tsx        # Contact form
│   │
│   └── components/
│       ├── navigation.tsx      # Navigation bar
│       ├── footer.tsx          # Footer
│       └── tech-timeline.tsx   # Tech learning timeline
│
├── lib/
│   └── portfolio-data.ts       # All content data
│
├── public/                      # Static assets
│   └── cover.jpg               # OG image (generated)
│
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── tailwind.config.ts          # Tailwind config
├── next.config.mjs             # Next.js config
└── postcss.config.mjs          # PostCSS config
```

---

## Page Structure

### Homepage (`/`)
- **Path**: `app/page.tsx`
- **Purpose**: Landing page and main entry point
- **Components**: Role carousel, stats, featured sections
- **Data Source**: Dynamic on page component

### About (`/about`)
- **Path**: `app/about/page.tsx`
- **Purpose**: Personal introduction and background
- **Components**: Bio, highlights, core values
- **Data Source**: `lib/portfolio-data.ts` → `ROHAN_DATA.about`

### Projects (`/projects`)
- **Path**: `app/projects/page.tsx`
- **Purpose**: Portfolio showcase
- **Components**: Expandable project cards
- **Data Source**: `lib/portfolio-data.ts` → `ROHAN_DATA.projects`
- **Interactivity**: Click to expand, expandedId state

### Experience (`/experience`)
- **Path**: `app/experience/page.tsx`
- **Purpose**: Professional journey timeline
- **Components**: Timeline view, role badges
- **Data Source**: `lib/portfolio-data.ts` → `ROHAN_DATA.experience`

### Skills (`/skills`)
- **Path**: `app/skills/page.tsx`
- **Purpose**: Technical expertise showcase
- **Components**: Skill categories, proficiency bars, tech timeline
- **Data Source**: `lib/portfolio-data.ts` → `ROHAN_DATA.skills`
- **Special**: Includes `TechTimeline` component

### Achievements (`/achievements`)
- **Path**: `app/achievements/page.tsx`
- **Purpose**: Certifications and recognition
- **Components**: Achievement cards, testimonials
- **Data Source**: `lib/portfolio-data.ts` → `ROHAN_DATA.achievements`

### Contact (`/contact`)
- **Path**: `app/contact/page.tsx`
- **Purpose**: Contact information and form
- **Components**: Contact form, social links, info cards
- **Interactivity**: Form state management, submission feedback
- **Note**: Form currently simulates submission (no backend)

---

## Component Reference

### Navigation (`app/components/navigation.tsx`)
```typescript
// Features:
- Sticky positioning
- Mobile responsive menu
- Active page highlighting
- Smooth transitions
```

### Footer (`app/components/footer.tsx`)
```typescript
// Features:
- Company info
- Quick links
- Social connections
- Copyright
```

### Tech Timeline (`app/components/tech-timeline.tsx`)
```typescript
// Features:
- Timeline visualization
- Learning journey
- Technology progression
- Icon and color coding
```

---

## Data Structure

### Portfolio Data (`lib/portfolio-data.ts`)

```typescript
ROHAN_DATA = {
  about: {
    title: string
    intro: string
    bio: string[]
    highlights: { label, value }[]
  }
  
  projects: {
    id: number
    title: string
    subtitle: string
    description: string
    fullDescription: string
    technologies: string[]
    github: string
    features: string[]
    impact: string
  }[]
  
  experience: {
    id: number
    title: string
    company: string
    period: string
    type: string
    description: string[]
    skills: string[]
  }[]
  
  skills: {
    technical: {
      category: string
      items: string[]
    }[]
    soft: string[]
  }
  
  achievements: {
    id: number
    title: string
    issuer: string
    date: string
    description: string
    type: string
  }[]
  
  testimonials: {
    id: number
    quote: string
    author: string
    role: string
  }[]
}
```

---

## Styling System

### CSS Structure
1. **Global Styles** (`app/globals.css`)
   - CSS custom properties (design tokens)
   - Base Tailwind imports
   - Custom component classes

2. **Component Styling**
   - Tailwind utility classes in JSX
   - Responsive prefixes (md:, lg:, etc.)
   - Inline styles for dynamic values

3. **Theme**
   - Dark mode forced
   - Obsidian & Steel color scheme
   - High contrast for accessibility

### Color System
```
Background:  #0D0D0D (Obsidian)
Surface:     #1A1A1A (Steel)
Text:        #FFFFFF (Primary), #B0B0B0 (Secondary)
Accent:      #00D9FF (Cyan), #0099CC (Dark Cyan)
Border:      #2A2A2A (Slate)
```

### Typography
```
Headings:  JetBrains Mono (Technical)
Body:      Inter (Readable)
Weight:    400 (Regular), 600 (Semibold), 700 (Bold)
Size:      12px - 48px scale
```

---

## Development Workflow

### Local Development
```bash
npm install      # Install dependencies
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # Linting
```

### Making Changes
1. **Update Content**: Edit `lib/portfolio-data.ts`
2. **Update Styling**: Modify `app/globals.css` or component files
3. **Add Pages**: Create in `app/[section]/page.tsx`
4. **Update Navigation**: Edit `app/components/navigation.tsx`
5. **Test**: `npm run dev` and check http://localhost:3000

### Deployment
```bash
npm run build        # Build for production
vercel deploy        # Deploy to Vercel
# OR
npm run start        # Run production locally
```

---

## Key Technologies

### Core
- **Next.js 15**: React framework with SSR
- **React 19**: UI library
- **TypeScript**: Type safety

### Styling
- **Tailwind CSS v4**: Utility-first CSS
- **Custom Properties**: CSS variables for theming

### Components
- **Lucide React**: Icon library
- **Custom Components**: Navigation, Footer, Timeline

### Tools
- **Node.js**: Runtime environment
- **npm**: Package manager
- **Vercel**: Hosting platform

---

## Customization Checklist

- [ ] Update name and title in `lib/portfolio-data.ts`
- [ ] Add your projects in data file
- [ ] Update work experience and skills
- [ ] Add certifications and achievements
- [ ] Update social media links
- [ ] Customize colors in `globals.css` if desired
- [ ] Update metadata in `app/layout.tsx`
- [ ] Test all pages: `npm run dev`
- [ ] Build and check for errors: `npm run build`
- [ ] Deploy to Vercel or preferred hosting
- [ ] Add custom domain if available
- [ ] Set up form backend (if using contact form)

---

## Common Customizations

### Change Your Name
**File**: `lib/portfolio-data.ts`, `app/layout.tsx`, `app/page.tsx`

### Add New Project
**File**: `lib/portfolio-data.ts` → Add to `projects` array

### Update Colors
**File**: `app/globals.css` → Modify `:root` CSS custom properties

### Add New Page
**Create**: `app/[section]/page.tsx`
**Update**: `app/components/navigation.tsx` → Add navItem

### Connect Form to Backend
**File**: `app/contact/page.tsx` → Modify `handleSubmit` function

---

## Performance Tips

1. **Images**: Optimize before adding to `public/`
2. **Code**: Use Next.js dynamic imports for large components
3. **Caching**: Configure `next.config.mjs` for optimal caching
4. **Fonts**: Already optimized (loaded from Google Fonts)
5. **Build**: Check for warnings with `npm run build`

---

## SEO Optimization

- ✅ Semantic HTML
- ✅ Meta tags configured
- ✅ Responsive design
- ✅ Fast load times
- ✅ Mobile-first approach
- ✅ Proper heading hierarchy

### To Add:
- Open Graph images
- Twitter Card tags
- Structured data (JSON-LD)
- Sitemap
- Robots.txt

---

## Accessibility Features

- ✅ High contrast colors (WCAG AAA)
- ✅ Semantic HTML elements
- ✅ ARIA labels
- ✅ Keyboard navigation
- ✅ Focus indicators
- ✅ Alt text ready

---

## Troubleshooting

### Issue: Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Issue: Module not found errors
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Tailwind styles not applying
- Check class names are correct
- Verify `globals.css` is imported
- Run `npm run build` to check for errors

### Issue: TypeScript errors
```bash
npx tsc --noEmit
```

---

## Resources

- **Next.js Documentation**: https://nextjs.org/docs
- **React Documentation**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **TypeScript**: https://typescriptlang.org
- **Lucide Icons**: https://lucide.dev
- **Vercel Deployment**: https://vercel.com/docs

---

## Support & Contact

For portfolio customization help:
- **GitHub**: https://github.com/RohanExploit
- **LinkedIn**: https://linkedin.com/in/rohanvijaygaikwad
- **Email**: rohan@example.com

---

## Version History

- **v1.0** (Current)
  - Initial portfolio launch
  - 7 main pages
  - Obsidian & Steel theme
  - Full responsive design
  - Contact form
  - Tech timeline

---

## License

This portfolio template is provided for personal use. You are free to customize and deploy it for your own portfolio.

---

## Summary

This portfolio is a complete, production-ready website for Rohan Gaikwad featuring:
- 7 multi-page sections
- Obsidian & Steel design aesthetic
- Full responsive design
- Interactive components
- SEO optimization
- Dark mode optimized
- TypeScript for safety
- Modern tech stack

**Start by reading README.md, then customize using SETUP_GUIDE.md.**

🚀 Happy building!

---

**Last Updated**: February 2026
**Status**: Production Ready
**Maintenance**: Active
