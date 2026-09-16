# Agrasen Yoga & Karate Classes — Next.js Website

## Structure

Each homepage section is a separate component under `app/pages/`.
`app/page.tsx` is the main file and imports/calls every section component.

```text
app/
├── page.tsx
├── globals.css
└── pages/
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── Classes.tsx
    ├── About.tsx
    ├── Benefits.tsx
    ├── TrainingVideo.tsx
    ├── Gallery.tsx
    ├── CTA.tsx
    ├── Contact.tsx
    ├── Footer.tsx
    └── WhatsAppButton.tsx
```

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy

Push to GitHub and import the repository into Vercel.
