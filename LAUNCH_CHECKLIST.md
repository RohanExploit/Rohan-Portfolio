# 🚀 Launch Day Checklist

Complete these steps to launch your portfolio to rohangaikwad.in

---

## Pre-Launch (48 Hours Before)

### Code Review
- [ ] Test all pages locally: `npm run dev`
- [ ] Check for console errors (F12 → Console)
- [ ] Verify all links work
- [ ] Test contact form submission
- [ ] Test resume download button
- [ ] Check responsive design (test at 320px, 768px, 1024px)
- [ ] Verify all images load correctly
- [ ] Run: `npm run build` (should complete with no errors)

### Content Verification
- [ ] Name correct (Rohan Gaikwad)
- [ ] Email correct (itzrohan007@gmail.com)
- [ ] All projects have descriptions
- [ ] All experience entries complete
- [ ] All skills listed
- [ ] Resume link works
- [ ] Social media links all working
- [ ] No typos or grammar errors

### Performance Check
- [ ] Run Lighthouse audit (DevTools → Lighthouse)
- [ ] Score should be 90+
- [ ] First Contentful Paint < 1.5s
- [ ] No performance warnings

### SEO Check
- [ ] Metadata complete in layout.tsx
- [ ] Sitemap generated at /sitemap.xml
- [ ] Robots.txt present at /robots.txt
- [ ] OpenGraph meta tags present

---

## 24 Hours Before Launch

### GitHub Setup
- [ ] All changes committed to main branch
- [ ] Run: `git status` (should be clean)
- [ ] All changes pushed to GitHub
- [ ] Repository is public

### Vercel Setup
- [ ] Logged into Vercel account
- [ ] Vercel project created
- [ ] GitHub connected to Vercel
- [ ] Auto-deploy from main branch enabled

### Domain Preparation
- [ ] Domain registered (rohangaikwad.in)
- [ ] Domain access available
- [ ] Registrar account accessible
- [ ] DNS admin access confirmed

---

## Launch Day

### 1. Initial Deployment (30 minutes)

```bash
# Final local test
npm run dev
# Check at http://localhost:3000

# Build production version
npm run build

# Final git push
git add .
git commit -m "Launch: Production deployment to rohangaikwad.in"
git push origin main
```

- [ ] Code pushed to GitHub
- [ ] Vercel deployment started
- [ ] Vercel build successful (check dashboard)
- [ ] Vercel deployment preview working
- [ ] All pages load in preview

### 2. Domain Configuration (5-10 minutes)

**In Vercel Dashboard:**
1. Go to Project Settings
2. Select "Domains" tab
3. Click "Add Domain"
4. Enter: `rohangaikwad.in`
5. Select "Use nameservers"
6. Copy nameserver addresses

- [ ] Domain added in Vercel
- [ ] Nameservers copied

**At Domain Registrar:**
1. Login to registrar (GoDaddy, Namecheap, etc.)
2. Find DNS/Nameserver settings
3. Replace existing nameservers with:
   ```
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```
4. Save changes

- [ ] Nameservers updated at registrar
- [ ] www subdomain configured (if needed)

### 3. Verification (Immediate)

```bash
# Check DNS propagation
nslookup rohangaikwad.in

# Should return Vercel IP address
```

- [ ] DNS changes submitted
- [ ] Note: Propagation takes 24-48 hours, but usually faster
- [ ] Don't worry if not immediately live

### 4. SSL Certificate (Automatic)

- [ ] Vercel automatically provisions SSL
- [ ] HTTPS will be enabled automatically
- [ ] May take 5-10 minutes after domain verification
- [ ] Certificate issued: Let's Encrypt

### 5. Testing During Propagation (Next 24 Hours)

Check back periodically:

```bash
# Check if site is live
curl https://rohangaikwad.in
# or ping in terminal

# Test various endpoints
https://rohangaikwad.in
https://rohangaikwad.in/about
https://rohangaikwad.in/projects
https://rohangaikwad.in/contact
```

- [ ] Homepage loads
- [ ] Navigation works
- [ ] All pages accessible
- [ ] HTTPS showing (lock icon)

---

## Post-Launch (First 48 Hours)

### Monitoring

- [ ] Check Vercel Analytics dashboard
- [ ] Monitor error logs
- [ ] Verify no 5xx errors
- [ ] Check 4xx errors (should be minimal)

### Verification

- [ ] Visit rohangaikwad.in from different devices
- [ ] Test on mobile browsers
- [ ] Test on desktop browsers (Chrome, Firefox, Safari)
- [ ] Check mobile responsiveness
- [ ] Test contact form
- [ ] Test resume download
- [ ] Click all social links

### Performance Validation

```bash
# Check site performance
# Go to: https://PageSpeed.web.dev
# Enter: rohangaikwad.in

# Should see:
# - Lighthouse Score: 90+
# - Performance: 90+
# - Accessibility: 90+
# - Best Practices: 90+
# - SEO: 95+
```

- [ ] Lighthouse score recorded
- [ ] No performance warnings
- [ ] No accessibility issues
- [ ] No SEO issues

### Search Engine Submission

```bash
# Submit to Google
1. Go to Google Search Console: search.google.com/search-console
2. Add property: rohangaikwad.in
3. Verify domain ownership (use Vercel DNS method)
4. Submit sitemap: rohangaikwad.in/sitemap.xml

# Submit to Bing
1. Go to Bing Webmaster Tools: www.bing.com/webmasters
2. Add site: rohangaikwad.in
3. Verify ownership
4. Submit sitemap
```

- [ ] Google Search Console setup
- [ ] Bing Webmaster Tools setup
- [ ] Sitemap submitted to Google
- [ ] Sitemap submitted to Bing

### Analytics Setup

- [ ] Setup Google Analytics (optional)
- [ ] Get Measurement ID
- [ ] Add to tracking
- [ ] Verify tracking code working

- [ ] Setup Vercel Analytics (built-in)
- [ ] Check Web Vitals
- [ ] Monitor bounce rate

### Social Media Update

- [ ] Update LinkedIn to link portfolio
- [ ] Update GitHub bio
- [ ] Update Twitter bio
- [ ] Update other profiles

- [ ] Create launch post on social media
- [ ] Share portfolio link
- [ ] Engage with responses

---

## Ongoing Maintenance (First Week)

### Daily
- [ ] Check site loads correctly
- [ ] Monitor error logs
- [ ] Respond to any contact form submissions

### Weekly (First Week)
- [ ] Monitor Google Search Console
- [ ] Check if site indexed
- [ ] Review analytics
- [ ] Verify all pages crawlable

---

## After First Week

### Check Rankings

```bash
# Search for yourself in Google
site:rohangaikwad.in
"Rohan Gaikwad"
"Rohan Gaikwad portfolio"
```

- [ ] Site appearing in search results
- [ ] Main pages indexed
- [ ] Rankings improving

### Update Content (Optional)

- [ ] Add any recent projects
- [ ] Update experience if needed
- [ ] Refresh skills if needed
- [ ] Update resume if available

### Performance Review

- [ ] Lighthouse score stable
- [ ] Page speed good
- [ ] No errors in analytics
- [ ] Traffic metrics positive

---

## Troubleshooting Guide

### Domain Not Resolving (24-48 Hours After Setup)

**Cause**: DNS propagation in progress  
**Solution**:
1. Wait another 24 hours
2. Clear browser cache (Ctrl+Shift+Del)
3. Try from different network/device
4. Check DNS propagation: whatsmydns.net

```bash
# Check propagation status
nslookup rohangaikwad.in
dig rohangaikwad.in +short
```

### HTTPS Not Working

**Cause**: Certificate not issued yet  
**Solution**:
1. Wait 10-15 minutes
2. Refresh page
3. Check Vercel dashboard for cert status
4. Contact Vercel support if > 30 minutes

### Site Shows Vercel Default

**Cause**: Deployment incomplete or domain not configured correctly  
**Solution**:
1. Check Vercel dashboard
2. Verify deployment successful (green checkmark)
3. Verify domain added in project settings
4. Verify DNS nameservers updated at registrar
5. Clear browser cache and try again

### Contact Form Not Working

**Solution**:
1. Check browser console for errors
2. Verify email configuration
3. Test in different browser
4. Check Vercel logs for errors

### Images Not Loading

**Cause**: Image paths incorrect  
**Solution**:
1. Check browser DevTools → Network tab
2. Look for 404 errors on images
3. Verify images in public/projects/ folder
4. Check image file names match code

---

## Launch Success Criteria

Your launch is successful when:

- [x] rohangaikwad.in loads
- [x] HTTPS working (lock icon visible)
- [x] All pages accessible
- [x] No errors in console
- [x] Contact form working
- [x] Resume button working
- [x] Images loading
- [x] Mobile responsive
- [x] Lighthouse score 90+
- [x] Social links working
- [x] Site showing in search results (within 48 hours)

---

## Quick Command Reference

```bash
# Local development
npm run dev

# Production build
npm run build

# Test production build locally
npm start

# Deploy to Vercel
git push origin main

# Check build status
# Visit: https://vercel.com/dashboard

# Monitor site
# Visit: https://vercel.com/dashboard → [Project] → Analytics
```

---

## Important Links

**Vercel Dashboard**: https://vercel.com/dashboard  
**GitHub Repository**: https://github.com/RohanExploit/rohan-portfolio  
**Google Search Console**: https://search.google.com/search-console  
**Bing Webmaster**: https://www.bing.com/webmasters  
**Page Speed Insights**: https://pagespeed.web.dev  
**DNS Propagation Checker**: https://whatsmydns.net  

---

## Final Notes

✅ Everything is ready!

- Your code is clean
- Your site is optimized
- Your deployment is configured
- Your domain is registered

**All you need to do is push the button and wait for DNS propagation.**

Average launch time: **30 minutes to 2 hours**

---

## Need Help?

Refer to:
- **DEPLOYMENT.md** - Detailed deployment guide
- **MAINTENANCE_GUIDE.md** - Ongoing maintenance
- **QUICK_REFERENCE.txt** - Quick lookup
- **BUG_FIXES_AND_IMPROVEMENTS.md** - What was fixed

---

## Celebrate! 🎉

You're about to launch your professional portfolio!

Good luck with rohangaikwad.in! 🚀
