# Portfolio Setup & Customization Guide

## Quick Start

### 1. Installation
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### 2. Preview the Site
- **Home**: http://localhost:3000
- **About**: http://localhost:3000/about
- **Projects**: http://localhost:3000/projects
- **Experience**: http://localhost:3000/experience
- **Skills**: http://localhost:3000/skills
- **Achievements**: http://localhost:3000/achievements
- **Contact**: http://localhost:3000/contact

---

## Customization

### Update Personal Information

#### Step 1: Edit Portfolio Data
Open `/lib/portfolio-data.ts` and update:

```typescript
// Change contact email
export const ROHAN_DATA = {
  // ... other data
}
```

#### Step 2: Update Social Links
In the same file, update:
- GitHub URL
- LinkedIn URL
- Twitter/X URL
- Email address

#### Step 3: Add/Remove Projects
```typescript
projects: [
  {
    id: 1,
    title: 'Your Project',
    subtitle: 'Short description',
    description: 'Full description',
    // ... other fields
  }
]
```

#### Step 4: Update Experience
```typescript
experience: [
  {
    id: 1,
    title: 'Your Role',
    company: 'Company Name',
    period: 'Jan 2024 - Present',
    // ... other fields
  }
]
```

---

### Customize Design

#### Colors
Edit `/app/globals.css` to change the Obsidian & Steel theme:

```css
:root {
  --background: #0d0d0d;           /* Main background */
  --surface: #1a1a1a;              /* Card backgrounds */
  --text-primary: #ffffff;         /* Main text */
  --text-secondary: #b0b0b0;       /* Secondary text */
  --border: #2a2a2a;               /* Borders */
  --accent: #00d9ff;               /* Highlight color */
  --accent-dark: #0099cc;          /* Hover state */
}
```

#### Fonts
Update in `/app/layout.tsx`:

```typescript
const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})
```

#### Spacing & Layout
Use Tailwind's utility classes:
- `px-4`, `py-8` for padding
- `gap-4`, `gap-6` for spacing
- `max-w-7xl` for container width

---

### Add New Pages

#### Example: Add a Blog Section

1. **Create the directory**:
```
app/blog/page.tsx
```

2. **Create the page**:
```typescript
export const metadata = {
  title: 'Blog - Rohan Gaikwad',
  description: 'Articles and insights',
}

export default function Blog() {
  return (
    <div className="min-h-screen bg-obsidian">
      <div className="mx-auto max-w-4xl px-4 py-20">
        <h1 className="font-mono text-4xl font-bold text-text-primary">Blog</h1>
        {/* Your content */}
      </div>
    </div>
  )
}
```

3. **Update navigation** in `app/components/navigation.tsx`:
```typescript
const navItems = [
  // ... existing items
  { href: '/blog', label: 'Blog', icon: '✍' },
]
```

---

## Content Organization

### File Structure
```
app/
├── page.tsx                 # Home page
├── about/page.tsx          # About section
├── projects/page.tsx       # Projects showcase
├── experience/page.tsx     # Work experience
├── skills/page.tsx         # Skills & tech stack
├── achievements/page.tsx   # Certifications
├── contact/page.tsx        # Contact form
├── components/
│   ├── navigation.tsx      # Navigation bar
│   ├── footer.tsx          # Footer
│   └── tech-timeline.tsx   # Tech timeline component
├── layout.tsx              # Root layout
└── globals.css             # Design tokens

lib/
└── portfolio-data.ts       # All portfolio content
```

### Adding New Project

In `/lib/portfolio-data.ts`:

```typescript
projects: [
  {
    id: 6,
    title: 'New Project',
    subtitle: 'Subtitle here',
    description: 'Brief description',
    fullDescription: 'Detailed description',
    technologies: ['Tech1', 'Tech2'],
    github: 'https://github.com/link',
    features: [
      'Feature 1',
      'Feature 2',
    ],
    impact: 'Real-world impact',
  },
  // ... other projects
]
```

---

## Building & Deploying

### Local Build
```bash
npm run build
npm run start
```

### Deploy to Vercel
```bash
# Option 1: Using Vercel CLI
npm install -g vercel
vercel

# Option 2: Using GitHub
# Push code to GitHub, connect in Vercel dashboard

# Option 3: Direct upload
# Download ZIP and import to Vercel
```

### Environment Variables
Create `.env.local` if needed:
```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

---

## Form Setup (Optional)

### Email Form Integration

To make the contact form actually send emails, integrate with:

**Option 1: Vercel Functions**
```typescript
// api/contact/route.ts
export async function POST(request: Request) {
  // Handle form submission
}
```

**Option 2: Third-party services**
- Formspree
- EmailJS
- SendGrid

**Option 3: Simple backend**
- Node.js/Express
- Firebase

---

## SEO & Meta Tags

### Update Meta Information

In `/app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  title: 'Your Name - Portfolio',
  description: 'Your professional description',
  keywords: ['developer', 'react', 'typescript'],
  creator: 'Your Name',
}
```

Per-page metadata in each `page.tsx`:
```typescript
export const metadata = {
  title: 'Page Title - Your Name',
  description: 'Page description',
}
```

---

## Performance Optimization

### Image Optimization
- Use Next.js `Image` component
- Compress images before adding
- Use WebP format when possible

### Code Splitting
- Dynamic imports for heavy components
- Lazy load non-critical content

### Caching
```typescript
// In route handlers
export const revalidate = 3600 // ISR
```

---

## Common Tasks

### Change Contact Email
1. Update in `/lib/portfolio-data.ts`
2. Update in footer component
3. Update in contact form

### Update GitHub Profile Link
Edit all instances:
- `/app/page.tsx`
- `/app/components/footer.tsx`
- `/app/components/navigation.tsx` (if applicable)
- `/lib/portfolio-data.ts`

### Add New Social Link
1. Import icon from Lucide React
2. Add to footer component
3. Update in data file

### Modify Colors
1. Update CSS custom properties in `globals.css`
2. Update Tailwind class names if needed

---

## Troubleshooting

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Port Already in Use
```bash
# Use different port
npm run dev -- -p 3001
```

### TypeScript Errors
```bash
# Regenerate types
npx tsc --noEmit
```

### Styling Issues
1. Check if Tailwind is properly configured
2. Verify class names are correct
3. Check CSS custom properties

---

## Resources

- **Next.js Docs**: https://nextjs.org/docs
- **React Docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **TypeScript**: https://typescriptlang.org

---

## Support & Questions

If you have questions about customization:
1. Check the main README.md
2. Review PORTFOLIO_SUMMARY.md for structure
3. Check component implementations for examples

---

**Happy customizing! Build something amazing.** 🚀
