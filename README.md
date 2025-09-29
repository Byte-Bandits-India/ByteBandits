This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


.
├── src
│   ├── app
│   │   ├── (main)/                   # <-- NEW: Route group for your main pages
│   │   │   ├── about/
│   │   │   │   └── page.tsx
│   │   │   ├── blog/
│   │   │   │   ├── [slug]/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── contact/
│   │   │   │   └── page.tsx
│   │   │   ├── services/
│   │   │   │   └── page.tsx
│   │   │   ├── layout.tsx            # <-- NEW: Shared layout for main pages (with Header/Footer)
│   │   │   └── page.tsx              # Homepage
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts
│   │   ├── globals.css               # Keep this one
│   │   └── layout.tsx                # Root layout (html, body)
│   │
│   ├── components
│   │   ├── layout/                   # <-- MOVED: Header, Footer, StaggeredMenu
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   └── StaggeredMenu.tsx
│   │   ├── sections/                 # <-- NEW: Page-specific large components
│   │   │   ├── home/
│   │   │   │   ├── HeroSection.tsx
│   │   │   │   ├── AboutSummary.tsx
│   │   │   │   └── ServicesHighlight.tsx
│   │   │   ├── contact/
│   │   │   │   ├── ContactForm.tsx
│   │   │   │   └── MapEmbed.tsx
│   │   │   └── shared/               # <-- NEW: Sections used on multiple pages
│   │   │       ├── ClientLogos.tsx
│   │   │       ├── BlogList.tsx      # (e.g. on About page and Blog page)
│   │   │       └── Testimonials.tsx
│   │   └── ui/                       # <-- NEW: Your reusable design system
│   │       ├── Button.tsx
│   │       ├── Card.tsx              # Your BlogCard and TestimonialCard could be variants of this
│   │       └── Heading.tsx
│   │
│   ├── constants/                    # <-- NEW: For constants from your old utils
│   │   ├── index.ts                  # (e.g. NAV_LINKS, SITE_METADATA)
│   │
│   ├── hooks/                        # (This was already good)
│   │   └── ...
│   │
│   ├── lib/                          # <-- CONSOLIDATED: Your single source of truth
│   │   ├── actions.ts                # For server actions (like handling form submission)
│   │   ├── seo.config.ts
│   │   └── utils.ts                  # formatDate, stringHelpers etc. go here
│   │
│   ├── styles/                       # <-- REMOVED: Delete this folder, use `src/app/globals.css`
│   │
│   └── types/                        # (This was already good)
│       ├── index.ts
│       └── ...
│
├── public
│   ├── icons/                        # <-- NEW: For UI icons
│   │   ├── social/                   # <-- NEW: fb.png, git.png, etc.
│   │   └── ui/                       # <-- NEW: mail_red.png, location_red.png, etc.
│   ├── images/                       # <-- For content imagery
│   │   ├── map.png
│   │   └── women.webp
│   ├── Logo.png
│   └── ...
│
└── ... (configs: next.config.ts, tailwind.config.js, etc.)