# Quick Start Guide - Rohan Gaikwad Portfolio

## Get Started in 3 Steps

### 1. Install & Run Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# Visit http://localhost:3000
```

### 2. Preview the Portfolio

The portfolio includes 8 pages:
- **Home** (`/`) - Landing with role carousel and featured areas
- **Projects** (`/projects`) - 5 showcased projects with images
- **Experience** (`/experience`) - Work history and roles
- **Skills** (`/skills`) - Technical expertise and learning journey
- **Certifications** (`/certifications`) - Awards and programs
- **Open Source** (`/open-source`) - Contributions and community impact
- **Contact** (`/contact`) - Contact form and social links
- **About** (`/about`) - Personal bio

### 3. Deploy to Vercel

```bash
# Deploy with one command
vercel deploy

# Or link your GitHub repo for automatic deployments
```

---

## Key Information

### Contact Details
- **Email**: itzrohan007@gmail.com
- **Location**: Satara, Maharashtra, India
- **GitHub**: https://github.com/RohanExploit
- **LinkedIn**: https://linkedin.com/in/rohanvijaygaikwad
- **Twitter**: https://x.com/rohan_critic

### Resume
**Google Drive Link** (in all 3 CTA locations):
https://drive.google.com/file/d/1alaSYAR5b2zUzTa0ZMlaSnZY-RDQ68Og/view?usp=sharing

---

## Design Highlights

### Color Scheme
- **Primary**: GitHub Green (#238636) - Main buttons and accents
- **Secondary**: Blue (#1F6FEB) - Resume and secondary CTAs
- **Background**: Deep Black (#0D0D0D)
- **Surfaces**: Steel (#1A1A1A)

### Typography
- **Headings**: JetBrains Mono (technical, modern)
- **Body**: Inter (clean, readable)

### Features
- Animated role carousel
- AI-generated project images
- Expandable project cards
- Smooth hover effects
- Mobile responsive
- WCAG AA+ accessible

---

## Make Changes

### Update Content

Edit `lib/portfolio-data.ts`:

```typescript
export const ROHAN_DATA = {
  about: { /* ... */ },
  projects: [ /* your projects */ ],
  experience: [ /* your roles */ ],
  skills: { /* ... */ },
  achievements: [ /* ... */ ],
  contact: {
    email: 'your-email@example.com',
    location: 'Your Location',
    social: [ /* your socials */ ],
    resume: 'your-resume-link',
  },
}
```

### Change Colors

Edit `app/globals.css`:

```css
:root {
  --accent: #238636;
  --accent-secondary: #1f6feb;
  --background: #0d0d0d;
  --surface: #1a1a1a;
  /* ... other colors */
}
```

### Update Navigation

Edit `app/components/navigation.tsx` to add/remove pages.

---

## File Structure

```
project/
├── app/
│   ├── page.tsx              (Home)
│   ├── projects/page.tsx     (Projects)
│   ├── experience/page.tsx   (Experience)
│   ├── skills/page.tsx       (Skills)
│   ├── certifications/page.tsx (Certifications)
│   ├── open-source/page.tsx  (Open Source)
│   ├── contact/page.tsx      (Contact)
│   ├── about/page.tsx        (About)
│   ├── components/
│   │   ├── navigation.tsx
│   │   ├── footer.tsx
│   │   └── tech-timeline.tsx
│   ├── globals.css           (Design tokens)
│   └── layout.tsx            (Root layout)
├── lib/
│   └── portfolio-data.ts     (All content)
├── public/
│   └── projects/             (Project images)
└── [config files]
```

---

## Common Tasks

### Add a New Project

In `lib/portfolio-data.ts`:

```typescript
{
  id: 6,
  title: 'Project Name',
  subtitle: 'Brief subtitle',
  description: 'Description',
  fullDescription: 'Full details...',
  technologies: ['Tech1', 'Tech2'],
  github: 'https://github.com/...',
  features: ['Feature 1', 'Feature 2'],
  impact: 'Project impact',
}
```

Then add the image to `public/projects/project-name.jpg` and update the image mapping in `/projects/page.tsx`.

### Update Social Links

In `lib/portfolio-data.ts`:

```typescript
contact: {
  email: 'your-email@example.com',
  location: 'Your Location',
  social: [
    { platform: 'GitHub', url: 'https://...', icon: 'Github' },
    { platform: 'LinkedIn', url: 'https://...', icon: 'Linkedin' },
    // Add more...
  ],
  resume: 'your-resume-url',
}
```

### Change Resume Link

All resume buttons reference `ROHAN_DATA.contact.resume`. Update it in one place, and it updates everywhere.

---

## Customization Ideas

- [ ] Add a blog section with MDX support
- [ ] Implement a dark/light mode toggle
- [ ] Add testimonials section
- [ ] Create a projects filtering system
- [ ] Add a newsletter signup
- [ ] Implement analytics
- [ ] Add a guestbook
- [ ] Create a now page

---

## Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Styles Not Loading
- Check `app/globals.css` for syntax errors
- Verify Tailwind is properly configured
- Clear .next folder: `rm -rf .next`

### Images Not Showing
- Ensure images are in `/public/projects/`
- Check image path in component matches filename
- Verify Next.js Image component setup

### Colors Not Updating
- Check `app/globals.css` for CSS variable definitions
- Rebuild after making changes
- Clear browser cache (Ctrl+Shift+Delete)

---

## Performance Tips

- Images are optimized with Next.js Image component
- Fonts are loaded via Google Fonts CDN
- CSS is minified in production
- Consider using Vercel Analytics for insights

---

## SEO

The portfolio includes:
- Proper metadata in `app/layout.tsx`
- Semantic HTML structure
- Open Graph tags (can be added)
- Sitemap (can be generated)

---

## Need Help?

- Check `PORTFOLIO_BUILD_SUMMARY.md` for detailed documentation
- Review `COLOR_REFERENCE.md` for design system info
- See `BUILD_CHECKLIST.md` for complete feature list

---

## Next Steps

1. ✓ Run `npm install`
2. ✓ Run `npm run dev`
3. ✓ Preview at http://localhost:3000
4. ✓ Customize content in `lib/portfolio-data.ts`
5. ✓ Deploy to Vercel

**Your portfolio is production-ready. Deploy and share!**

---

**Happy building!** 🚀
