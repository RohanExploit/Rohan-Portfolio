# Portfolio Maintenance & Update Guide

## Regular Maintenance Schedule

### Daily

- Monitor for errors in console
- Check analytics dashboard
- Respond to contact form submissions

### Weekly

- Verify all links are working
- Check Google Search Console
- Review performance metrics

### Monthly

- Update content as needed
- Check for dependency updates: `npm update`
- Review security advisories: `npm audit fix`
- Backup portfolio data

### Quarterly

- Update project descriptions
- Add new achievements/certifications
- Refresh skill assessments
- Update resume if changed

### Annually

- Full security audit
- Dependency major version updates
- Consider design refresh
- Archive past year's analytics

---

## How to Update Content

### Updating Projects

Edit `/vercel/share/v0-project/lib/portfolio-data.ts`:

```typescript
projects: [
  {
    id: 1,
    title: "Project Name",
    subtitle: "Short description",
    description: "Full description",
    fullDescription: "Detailed explanation",
    technologies: ["Tech1", "Tech2"],
    github: "https://github.com/...",
    features: ["Feature 1", "Feature 2"],
    impact: "Project impact",
  },
  // Add more projects...
];
```

### Adding Experience

```typescript
experience: [
  {
    id: 1,
    title: "Job Title",
    company: "Company Name",
    type: "Internship", // or 'Leadership', 'Mentorship'
    description: "Job description",
    skills: ["Skill1", "Skill2"],
    start: "Jan 2024",
    end: "Dec 2024",
    link: "https://company.com",
  },
  // Add more experiences...
];
```

### Updating Skills

```typescript
skills: {
  technical: [
    {
      category: 'Frontend',
      items: ['React', 'TypeScript', 'Tailwind'],
    },
    // Add more categories...
  ],
  soft: ['Communication', 'Leadership', 'Problem Solving'],
}
```

### Adding Certifications

```typescript
achievements: [
  {
    id: 1,
    title: "Certification Name",
    issuer: "Issuing Organization",
    date: "Month Year",
    type: "Certification", // or 'Program'
    description: "What it covers",
    link: "https://certificate.link",
  },
  // Add more achievements...
];
```

---

## How to Customize Styling

### Change Primary Color (GitHub Green)

Edit `app/globals.css`:

```css
:root {
  --github-green: #238636; /* Change this */
  --github-green-dark: #1a7f37; /* And this */
}
```

### Change Secondary Color (Blue)

```css
:root {
  --info: #1f6feb; /* Change this */
  --accent-dark: #0d419d; /* And this */
}
```

### Change Background Colors

```css
:root {
  --background: #0d0d0d; /* Main black */
  --surface: #1a1a1a; /* Card background */
  --text-primary: #ffffff; /* Main text */
  --text-secondary: #b0b0b0; /* Secondary text */
}
```

---

## Common Updates

### Change Email Address

In `lib/portfolio-data.ts`:

```typescript
contact: {
  email: 'newemail@example.com',  // Update here
  // ... rest of contact info
}
```

### Update Resume Link

In `lib/portfolio-data.ts`:

```typescript
contact: {
  resume: 'https://drive.google.com/file/d/NEW_ID/view',
  // ... rest
}
```

### Update Social Links

In `lib/portfolio-data.ts`:

```typescript
contact: {
  social: [
    { platform: 'GitHub', url: 'https://github.com/username', icon: 'Github' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/username', icon: 'Linkedin' },
    { platform: 'Twitter', url: 'https://x.com/username', icon: 'Twitter' },
  ],
}
```

### Update About Me

In `lib/portfolio-data.ts`:

```typescript
about: {
  title: 'About Me',
  intro: 'Updated introduction text',
  bio: [
    'Paragraph 1',
    'Paragraph 2',
    'Paragraph 3',
  ],
  highlights: [
    { label: 'Role', value: 'Updated Role' },
    // ... rest
  ],
}
```

---

## Deployment After Changes

### Local Testing

```bash
npm run dev
# Test at http://localhost:3000
```

### Build Production

```bash
npm run build
npm start
```

### Deploy to Vercel

Push to GitHub:

```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

Vercel will automatically deploy.

---

## Troubleshooting

### Build Fails

```bash
# Clean and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Changes Not Showing

```bash
# Clear cache
npm run build -- --no-cache
npm start
```

### Images Not Loading

- Check image path is correct
- Verify file exists in `public/` folder
- Check image format is supported (JPG, PNG, WebP)

### Styling Issues

- Clear browser cache (Ctrl+Shift+Del)
- Check CSS syntax in globals.css
- Verify class names in components

---

## Performance Optimization

### Image Optimization

Use Next.js Image component:

```tsx
import Image from "next/image";

<Image
  src="/projects/example.jpg"
  alt="Project description"
  width={800}
  height={600}
  quality={85}
/>;
```

### Font Optimization

Already configured with `next/font`:

```tsx
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
```

### Code Splitting

Already optimized by Next.js with dynamic imports:

```tsx
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("../components/Heavy"), {
  loading: () => <p>Loading...</p>,
});
```

---

## Monitoring & Analytics

### Setup Google Analytics

1. Create account at analytics.google.com
2. Get Measurement ID (G-XXXX)
3. Add to page header:

```tsx
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXX');
</script>
```

### Monitor with Vercel Analytics

1. Dashboard → Analytics
2. View page views and performance
3. Check Web Vitals

### Error Tracking with Sentry

```bash
npm install @sentry/nextjs
```

Configure in next.config.mjs:

```javascript
import * as Sentry from "@sentry/nextjs";

export const config = Sentry.captureNextjsServerExceptionMiddleware(nextConfig);
```

---

## SEO Maintenance

### Update Metadata

In `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Updated Title",
  description: "Updated description",
  keywords: ["updated", "keywords"],
};
```

### Update Open Graph Tags

Add to metadata:

```typescript
openGraph: {
  title: 'Share Title',
  description: 'Share description',
  images: [{ url: '/og-image.jpg' }],
}
```

### Check Search Console

1. Go to search.google.com/search-console
2. Add property for rohangaikwad.in
3. Submit sitemap
4. Monitor for errors

---

## Backup Strategy

### Automated Backups

Push to GitHub regularly:

```bash
git add .
git commit -m "Backup: [date]"
git push origin main
```

### Manual Backups

```bash
# Backup entire project
zip -r portfolio-backup-$(date +%Y%m%d).zip /path/to/project

# Backup data only
cp lib/portfolio-data.ts lib/portfolio-data-backup.ts
```

### Recovery

```bash
# Restore from backup
git reset --hard [commit-hash]
git push --force origin main
```

---

## Dependencies Management

### Check for Updates

```bash
npm outdated
```

### Update All Dependencies

```bash
npm update
```

### Update Specific Package

```bash
npm install package-name@latest
```

### Check for Vulnerabilities

```bash
npm audit
npm audit fix
```

### Update Major Versions

```bash
npm install next@latest react@latest react-dom@latest
```

---

## Version Control Best Practices

### Commit Messages

```bash
# Format: type: description
git commit -m "feat: Add new project to portfolio"
git commit -m "fix: Correct color inconsistency in navigation"
git commit -m "docs: Update deployment guide"
git commit -m "style: Improve project card styling"
git commit -m "refactor: Simplify data structure"
```

### Create Feature Branches

```bash
git checkout -b feature/new-project
# Make changes
git push origin feature/new-project
# Create pull request on GitHub
```

---

## Debugging Tips

### Console Debugging

```tsx
console.log("[Portfolio] Info:", data);
console.warn("[Portfolio] Warning:", message);
console.error("[Portfolio] Error:", error);
```

### Network Debugging

- Open DevTools (F12)
- Go to Network tab
- Check requests and responses
- Verify API calls working

### Performance Debugging

- Open DevTools → Performance
- Record page load
- Analyze timeline
- Identify bottlenecks

---

## Security Maintenance

### Keep Software Updated

```bash
npm audit
npm audit fix
npm update
```

### Check for Exposed Secrets

```bash
# Scan for secrets
npm audit --audit-level=high

# Use git-secrets
brew install git-secrets
git secrets --install
```

### Regular Security Review

- Check for console warnings
- Verify no API keys exposed
- Ensure HTTPS enabled
- Review CORS headers

---

## Scaling Considerations

### If Adding Backend

1. Create API routes in `app/api/`
2. Setup database connection
3. Add authentication if needed
4. Update environment variables

### If Adding Database

```bash
npm install prisma @prisma/client
npx prisma init
```

### If Adding Email

```bash
npm install nodemailer
# or use third-party service
npm install formspree
```

---

## Helpful Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Vercel Docs](https://vercel.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## Getting Help

If issues arise:

1. Check error message carefully
2. Search issue in GitHub
3. Check documentation
4. Ask in community forums
5. Contact support (Vercel, npm, etc)

Happy maintaining! 🚀
