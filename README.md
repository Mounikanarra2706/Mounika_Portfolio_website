# Mounika Narra — Personal Portfolio

A responsive, modern-dark personal portfolio built with Next.js, React, TypeScript, and plain CSS.

## What is included

- Intro / hero section
- About section based on the common themes in the supplied profile and resume variants
- Focus areas for Generative AI, agentic workflows, retrieval, and production AI engineering
- Skills grouped by theme
- Engineering approach
- Email and LinkedIn contact links
- Responsive layout for mobile, tablet, and desktop
- SEO metadata starter

The portfolio deliberately uses **focus areas** instead of claiming that sample project ideas are published client projects. Add only approved public demos, repositories, and measured results when you have them.

## Requirements

- Node.js 18.17+ (Node.js 20 LTS recommended)
- npm
- A GitHub account for deployment

## Run locally

1. Unzip the project.
2. Open a terminal in the project folder.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open http://localhost:3000.

To verify a production build:

```bash
npm run build
npm run start
```

## Customize the site

### Personal details
Edit `app/page.tsx`:
- Hero headline and introduction
- About section
- Focus area cards
- Skills list
- Contact details and social links

The supplied profile identifies the LinkedIn URL as `https://www.linkedin.com/in/mounika99/` and email as `mounikanarra610@gmail.com`. Verify those details before publishing.

### Add project case studies
When you have public-safe examples, add a Projects section with:
- Problem and intended user
- Your role and contribution
- High-level architecture
- Evaluation method and verified results
- GitHub/demo links

Do not disclose employer source code, internal data, confidential architecture, or regulated information. Avoid metrics unless they are accurate and approved for public use.

### SEO and domain
Update the metadata in `app/layout.tsx`. Replace `https://example.com` with your deployed domain once you have one. If you do not own a domain, you can omit `metadataBase` until the hosting URL is known.

### Resume
If you want a resume download, add a public-safe PDF to `public/` and link it from the page. This starter intentionally does not publish one of the role-targeted resume variants by default.

## Free deployment on Vercel

1. Create a GitHub repository and push this project.
2. Sign in at https://vercel.com/ using GitHub.
3. Choose **Add New → Project**, then import the repository.
4. Keep the detected framework as **Next.js** and the default build settings.
5. Click **Deploy**.
6. Vercel will provide a public `*.vercel.app` URL. Add it to your LinkedIn and resume after testing the site.

Alternative: other platforms may offer free tiers, but plan limits and terms can change.

## Before publishing checklist

- [ ] Confirm all biography and experience wording is accurate.
- [ ] Verify email and LinkedIn links.
- [ ] Add only public-safe project links and verified outcomes.
- [ ] Replace `example.com` in metadata with the deployed URL or remove `metadataBase`.
- [ ] Test mobile layout, keyboard navigation, and link behavior.
- [ ] Consider whether you want your phone number publicly visible; it is intentionally omitted from the page.
