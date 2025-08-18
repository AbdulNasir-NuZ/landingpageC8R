# 🌌 CRE8TAR Landing Page

![CRE8TAR Cosmic Banner](https://raw.githubusercontent.com/AbdulNasir-NuZ/landingpageC8R/main/public/cre8tar-banner.jpg)

**An immersive 3D cosmic experience showcasing CRE8TAR's AI ecosystem, built with Next.js 14 and React Three Fiber.**

## ✨ Key Features

- 🚀 Next.js 14 App Router with SSR/ISR
- 🌠 Interactive 3D cosmic scenes
- ✨ Emotion-driven animations
- 🌗 Intelligent theme switching
- 📱 Fully responsive design
- ⚡ Optimized performance (95+ Lighthouse)

## 🛠 Tech Stack

### Core Technologies
| Category | Tools |
|----------|-------|
| Framework | Next.js 14 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS + Framer Motion |
| 3D Engine | Three.js + R3F |
| Icons | Lucide + HeroIcons |

### Package Highlights
```json
{
  "dependencies": {
    "next": "^14.2.15",
    "@react-three/fiber": "^9.0.0",
    "framer-motion": "^10.16.4",
    "three": "^0.155.0",
    "tailwind-merge": "^2.2.0"
  }
}

```
🪐 Project Structure

```
.github/
└── images/
    ├── img1.png
    ├── img2.png
    ├── img3.png
    ├── img4.png
    ├── img_main.png
    └── stats.svg

app/
├── apple-icon.png
├── icon1.png
├── icon2.png
├── layout.tsx
├── marketplace/
│   └── page.tsx
└── page.tsx

components/
├── main/
│   ├── encryption.tsx
│   ├── FAQSection.tsx
│   ├── footer.tsx
│   ├── hero.tsx
│   ├── Highlights.tsx
│   ├── JoinClan.tsx
│   ├── MeetTheTeam.tsx
│   ├── Mintstep.tsx
│   ├── MotionPills.tsx
│   ├── navbar.tsx
│   ├── Perkssection.tsx
│   ├── projects.tsx
│   ├── roadmap.tsx
│   ├── skills.tsx
│   └── star-background.tsx
├── sub/
│   ├── hero-content.tsx
│   ├── project-card.tsx
│   ├── skill-data-provider.tsx
│   └── skill-text.tsx

config/
└── index.ts

constants/
└── index.ts

lib/
├── motion.ts
└── utils.ts

public/
├── hero-bg.svg
├── lock-main.png
├── lock-top.png
├── logo.png
├── projects/
│   ├── project-1.png
│   ├── project-2.png
│   └── project-3.png
├── skills/
│   ├── css.png
│   ├── docker.png
│   ├── express.png
│   ├── figma.png
│   ├── firebase.png
│   ├── framer.png
│   ├── go.png
│   ├── graphql.png
│   ├── html.png
│   ├── js.png
│   ├── mongodb.png
│   ├── mui.png
│   ├── mysql.png
│   ├── next.png
│   ├── node.png
│   ├── postgresql.png
│   ├── prisma.png
│   ├── react.png
│   ├── reactnative.png
│   ├── reactquery.png
│   ├── redux.png
│   ├── stripe.png
│   ├── tailwind.png
│   ├── tauri.png
│   └── ts.png
└── videos/
    ├── blackhole.webm
    ├── encryption-bg.webm
    └── skills-bg.webm

next-env.d.ts  
next.config.js  
postcss.config.js  
tailwind.config.ts

```

🚀 Quick Start

# Clone with CRE8TAR templates
git clone https://github.com/AbdulNasir-NuZ/landingpageC8R.git

cd landingpageC8R

# Install with cosmic dependencies
npm install --legacy-peer-deps

# Launch dev server
npm run dev

🌟 Development Guide
Adding New Planets
Create GLTF model in /public/assets

Add to components/cosmic/Planet.tsx:
```
tsx
<mesh>
  <primitive object={gltf.scene} />
</mesh>
Theming Your Cosmos
tsx
// tailwind.config.ts
extend: {
  colors: {
    cosmic: {
      dark: '#0f172a',
      nebula: '#7c3aed'
    }
  }
}
```
🛰 Deployment

# Vercel (Recommended)
vercel --prod --ai-runtime=edge

# Netlify
netlify deploy --prod
📡 Environment Setup
env
# .env.local
// NEXT_PUBLIC_COSMIC_API=https://api.cre8tar.com/v3
// NEXT_PUBLIC_ANALYTICS=UA-XXXXXX

📜 License
CRE8TAR Cosmic License
View Full Terms

🌌 Connect
// https://img.shields.io/badge/Discord-join%2520our%2520orbit-blueviolet
// https://img.shields.io/badge/Twitter-follow%2520our%2520journey-blue





