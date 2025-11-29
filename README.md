# 🌌 Motionary

**The Ultimate Interactive Encyclopedia of Motion Design**

> A comprehensive, living library of 500+ web and mobile motion effects, meticulously crafted with Next.js, Framer Motion, and modern web technologies.

![Next.js](https://img.shields.io/badge/Next.js-16.0.5-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-ff0055?style=for-the-badge&logo=framer)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## ✨ Features

- 🎨 **500+ Motion Variants** across 17 categories
- 🌙 **Deep Void Theme** - Immersive dark interface with neon accents
- 🎭 **Live Interactions** - Every animation responds to user input
- 🔍 **Multi-dimensional Filtering** - Search by trigger, emotion, tech stack, and element type
- 📱 **Mobile & Web** - Covers both platform-specific and cross-platform effects
- 🎮 **3D & WebGL** - Advanced effects using React Three Fiber
- 🚀 **Performance Optimized** - Built with Next.js 14+ App Router and Turbopack
- 💾 **State Management** - Zustand for global filter states
- 🎯 **Production Ready** - Fully typed with TypeScript

---

## 📦 Categories

### Atomic Components
1. **Buttons** (13 variants) - Magnetic, Liquid, Jelly, Neon, Glitch, Cyberpunk, Spotlight, Elastic, Shimmer, Blob, Ghost, Send, 3D Tilt
2. **Cards** (20 variants) - 3D Flip, Glow Border, Parallax Tilt, Glassmorphism, Curtain Drop, Border Beam, Spotlight Gradient, Blob Morph, Video Hover
3. **Typography** (10 variants) - Kinetic, Typewriter, Scramble, Gradient, Blur Reveal, Video Mask, 3D Rotate, Wavy, Glitch
4. **Navigation** (20 variants) - Underline, Mac Dock, Circular Menu, Morphing Burger, Gooey Menu, Breadcrumb, Mega Menu, Theme Toggle

### Data & Feedback
5. **Backgrounds** (20 variants) - Mesh Gradient, Aurora, Starfield, Neon Lines, Circuit Board, Cyber Grid, Rain Effect, TV Glitch
6. **Data Visualization** (20 variants) - Bar Chart, Circle Progress, Line Draw, Pie Chart, Radar, Heatmap, Gauge, Network Graph
7. **Feedback** (20 variants) - Success Modal, Error Toast, Warning Alert, Confetti Burst, Typing Indicator, 404 Glitch, Skeleton Card

### Social & Commerce
8. **Social** (20 variants) - Heart Burst, Follow Button, Avatar Stack, Reaction Bar, Verified Badge, Story Ring, Swipe Reply
9. **Ecommerce** (20 variants) - Add to Cart, Product Lift, Wishlist Toggle, Price Flip, Shipping Truck, Stock Meter, Filter Chip

### Input & Forms
10. **Inputs** (20 variants) - Floating Label, Shake Error, OTP Input, Tag Input, File Dropzone, Voice Wave, Credit Card, Color Picker
11. **Loaders** (20 variants) - Classic Spinner, Pulse Dots, Orbit, Liquid, DNA, Infinity, Radar, Glitch, Hourglass

### Visual Effects
12. **Images** (20 variants) - Zoom Hover, B&W to Color, Blur Reveal, Ken Burns, Glitch, Circle Reveal, Before/After, Lens Flare
13. **Gamification** (20 variants) - XP Bar, Badge Unlock, Card Flip, Coin Spin, Level Up, Loot Box, Streak Flame, Boss Warning

### Media & Device
14. **Media & Audio** (20 variants) - Play/Pause Morph, Waveform, Vinyl Record, Volume Knob, Cassette Tape, Lyrics Karaoke, Album 3D
15. **Device UI** (20 variants) - Dynamic Island, Notch Reveal, Face ID, Battery Charge, Camera Shutter, Keyboard Popup, Lock Screen

### Transitions & Micro
16. **Page Transitions** (20 variants) - Fade, Slide, Wipe, Circle Mask, Blinds, Glitch, Curtain, Cube Rotate, Elastic Snap
17. **Micro-interactions** (20 variants) - Day/Night Toggle, Check Draw, Star Rating, Volume Slider, Share Fan, Upload Ring

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/motionary.git

# Navigate to project directory
cd motionary

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16** | React framework with App Router |
| **TypeScript** | Type safety and developer experience |
| **Tailwind CSS v4** | Utility-first styling with CSS-first config |
| **Framer Motion** | Declarative animations and gestures |
| **GSAP** | Complex scroll-triggered animations |
| **React Three Fiber** | 3D graphics and WebGL effects |
| **Zustand** | Lightweight state management |
| **Lucide React** | Beautiful icon library |

---

## 📁 Project Structure

```
motionary/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with global styles
│   │   ├── page.tsx            # Main gallery page
│   │   └── globals.css         # Tailwind + custom styles
│   ├── components/
│   │   ├── system/
│   │   │   ├── LayoutShell.tsx      # App shell with sidebar
│   │   │   ├── Sidebar.tsx          # Filter navigation
│   │   │   └── PlaygroundCard.tsx   # Motion card wrapper
│   │   └── motionary/
│   │       ├── atomic/              # All motion variants
│   │       │   ├── ButtonVariants.tsx
│   │       │   ├── CardVariants.tsx
│   │       │   ├── TextVariants.tsx
│   │       │   ├── NavVariants.tsx
│   │       │   ├── InputVariants.tsx
│   │       │   ├── LoaderVariants.tsx
│   │       │   ├── ImageVariants.tsx
│   │       │   ├── BackgroundVariants.tsx
│   │       │   ├── DataVariants.tsx
│   │       │   ├── FeedbackVariants.tsx
│   │       │   ├── SocialVariants.tsx
│   │       │   ├── EcommerceVariants.tsx
│   │       │   ├── GameVariants.tsx
│   │       │   ├── MediaVariants.tsx
│   │       │   ├── DeviceVariants.tsx
│   │       │   ├── TransitionVariants.tsx
│   │       │   └── MicroVariants.tsx
│   │       ├── mobile/
│   │       │   └── SwipeToDelete.tsx
│   │       ├── web/
│   │       │   └── CustomCursor.tsx
│   │       └── advanced/
│   │           └── ParticleCanvas.tsx
│   ├── store/
│   │   └── useFilterStore.ts   # Global filter state
│   └── lib/
│       └── utils.ts            # Utility functions
├── public/
│   ├── grid.svg
│   └── grid-small.svg
├── package.json
├── tsconfig.json
├── postcss.config.mjs
└── README.md
```

---

## 🎨 Customization

### Theme Configuration

Edit `src/app/globals.css` to customize the Deep Void theme:

```css
@theme {
  --color-primary: #00f3ff;      /* Cyan accent */
  --color-secondary: #7000ff;    /* Purple accent */
  --color-accent: #ff00ff;       /* Magenta accent */
  --color-background: #030303;   /* Near black */
}
```

### Adding New Variants

1. Create a new component in `src/components/motionary/atomic/YourVariants.tsx`
2. Export individual variant components
3. Import and display in `src/app/page.tsx`

Example:

```tsx
// YourVariants.tsx
export const CustomButton = () => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    Click Me
  </motion.button>
);

// page.tsx
import * as Custom from "@/components/motionary/atomic/YourVariants";

<PlaygroundCard title="Custom">
  <Custom.CustomButton />
</PlaygroundCard>
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-effect`)
3. Commit your changes (`git commit -m 'Add amazing hover effect'`)
4. Push to the branch (`git push origin feature/amazing-effect`)
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style and component structure
- Each variant should be self-contained and reusable
- Add proper TypeScript types
- Test animations across different browsers
- Update the README if adding new categories

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Inspired by motion design systems from Apple, Stripe, and Vercel
- Built with the amazing open-source community
- Special thanks to all contributors

---

## 📮 Contact

- Twitter: [@pokerjudge](https://twitter.com/pokerjudge)
- Email: pokerjudge@hotmail.com

---

## 🌟 Show Your Support

If you find this project useful, please consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new effects
- 📢 Sharing with the community

---

<div align="center">
  <strong>Made with ❤️ for the motion design community</strong>
  <br />
  <sub>Built with Next.js • Powered by Framer Motion</sub>
</div>
