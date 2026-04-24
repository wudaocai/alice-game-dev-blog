# Cassette Futurism Blog

磁带未来主义风格博客 - Cassette Futurism Visual Style

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/              # Next.js App Router
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home page
│   ├── about/        # About page
│   └── posts/[slug]/ # Post detail page
├── components/       # React components
│   ├── CRTOverlay.tsx     # CRT scanline effect
│   ├── Header.tsx         # Site header
│   ├── Footer.tsx         # Site footer
│   └── UI/                # UI components
├── lib/              # Utilities
│   └── posts.ts      # Post data
└── styles/           # CSS files
    ├── globals.css        # Global styles
    └── crt.css            # CRT effects

```

## Design

**Color Palette:**
- Amber: #ffb347
- Green: #00ff41  
- Orange: #ff6b35
- Dark BG: #0d0d0d

**Fonts:**
- VT323 (terminal style)
- Press Start 2P (pixel style)

## Tech Stack

- Next.js 15
- TypeScript
- Tailwind CSS
- CRT visual effects

## License

MIT
