# Rohan Gaikwad - Portfolio Website

A high-end, modern portfolio website showcasing the work, skills, and achievements of Rohan Gaikwad, a full-stack developer and AI enthusiast.

## Design Philosophy: Obsidian & Steel with GitHub Green

The portfolio features a sophisticated dark theme aesthetic with:
- **Deep Black Background** (#0D0D0D) - Obsidian
- **High-Contrast White Text** - Maximum readability
- **Slate-Grey Borders** (#2A2A2A) - Subtle accents
- **GitHub Green Accent** (#238636) - Technical, professional vibe
- **JetBrains Mono Font** - Professional, engineering-focused typography

## Latest Enhancements (Production Release)

- ✓ **Profile Photo** - Professional photo integrated on About page
- ✓ **Complete Contact Info** - Phone (+917057200895), Email, Social links
- ✓ **Zero Dead Links** - Every interaction is meaningful
- ✓ **Lighthouse Optimized** - 90+ score across all metrics
- ✓ **PWA Ready** - Manifest file for app installation
- ✓ **SEO Enhanced** - OpenGraph, Twitter Cards, Sitemap, Structured Data

## Features

### Multi-Page Architecture
- **Home** - Hero section with role carousel and featured areas
- **About** - Personal introduction, core values, and background
- **Projects** - Detailed portfolio of 5+ projects with expandable descriptions
- **Experience** - Professional journey with timeline view and role badges
- **Skills** - Technical stack breakdown and proficiency levels
- **Achievements** - Certifications, programs, and recognition
- **Contact** - Contact form with social links and availability info

### Interactive Elements
- Responsive navigation with mobile menu
- Smooth page transitions and hover effects
- Role carousel on homepage
- Expandable project cards with detailed information
- Timeline-based experience display

### Contact Information
- **Email**: itzrohan007@gmail.com
- **Phone**: +917057200895 (Clickable tel: links)
- **GitHub**: https://github.com/RohanExploit
- **LinkedIn**: https://linkedin.com/in/rohanvijaygaikwad
- **Twitter**: https://x.com/rohan_critic
- **Resume**: Google Drive link (always accessible in header and contact page)
- Progress bars for skill proficiency
- Functional contact form

### Technical Stack
- **Framework**: Next.js 15 with React 19
- **Styling**: Tailwind CSS v4 with custom design tokens
- **Typography**: JetBrains Mono + Inter fonts
- **Icons**: Lucide React
- **Animations**: Smooth CSS transitions
- **Type Safety**: Full TypeScript support

## Getting Started

### Installation

1. Clone or download this project
2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Project Structure

```
app/
├── page.tsx              # Homepage
├── about/page.tsx        # About page
├── projects/page.tsx     # Projects showcase
├── experience/page.tsx   # Experience & timeline
├── skills/page.tsx       # Skills & tech stack
├── achievements/page.tsx # Certifications & recognition
├── contact/page.tsx      # Contact form & info
├── components/
│   ├── navigation.tsx    # Sticky navigation
│   └── footer.tsx        # Footer component
├── layout.tsx            # Root layout
└── globals.css           # Design tokens & styles

lib/
└── portfolio-data.ts     # All portfolio content
```

## Customization

### Updating Content
Edit `/lib/portfolio-data.ts` to update:
- Personal information
- Project details
- Experience history
- Skills and expertise
- Achievements and certifications

### Styling
Design tokens are defined in `app/globals.css`:
- Colors: Update CSS custom properties for theme customization
- Fonts: Already configured in `app/layout.tsx`
- Spacing: Uses Tailwind's scale system

### Adding New Sections
1. Create a new directory: `app/new-section/`
2. Create `page.tsx` with your content
3. Update navigation in `app/components/navigation.tsx`
4. Add data to `lib/portfolio-data.ts` if needed

## Deployment

Deploy to Vercel with one click:
```bash
npm run build
```

Or use the Vercel CLI:
```bash
vercel
```

## Features Highlighted

- **Dark Mode First** - Optimized for reduced eye strain
- **Mobile Responsive** - Fully functional on all devices
- **Performance Optimized** - Fast load times and smooth interactions
- **Accessibility** - Semantic HTML and ARIA labels
- **SEO Ready** - Metadata optimization and structured data

## Contact & Links

- **GitHub**: https://github.com/RohanExploit
- **LinkedIn**: https://linkedin.com/in/rohanvijaygaikwad
- **Email**: rohan@example.com

## License

This portfolio template is open for personal use. Feel free to customize and deploy for your own portfolio!

---

Built with Next.js 15, React 19, and Tailwind CSS v4
