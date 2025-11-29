# Contributing to Motionary

Thank you for your interest in contributing to Motionary! This document provides guidelines and instructions for contributing.

## 🎯 How Can I Contribute?

### 1. Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When creating a bug report, include:

- **Clear title and description**
- **Steps to reproduce** the behavior
- **Expected vs actual behavior**
- **Screenshots or GIFs** if applicable
- **Browser and OS** information
- **Next.js and package versions**

### 2. Suggesting New Effects

We love new motion ideas! When suggesting effects:

- Check if the effect already exists
- Provide visual references (videos, GIFs, or links)
- Explain the use case and interaction trigger
- Specify target category (Button, Card, Transition, etc.)

### 3. Adding New Variants

#### Step-by-Step Guide

1. **Fork and Clone**
   ```bash
   git clone https://github.com/yourusername/motionary.git
   cd motionary
   npm install
   ```

2. **Create a Branch**
   ```bash
   git checkout -b feature/add-bounce-button
   ```

3. **Add Your Variant**
   
   Create or edit a file in `src/components/motionary/atomic/`:
   
   ```tsx
   'use client';
   
   import React from 'react';
   import { motion } from 'framer-motion';
   
   export const BounceButton = () => (
     <motion.button
       className="px-4 py-2 bg-primary text-black rounded"
       whileHover={{ scale: 1.1 }}
       whileTap={{ scale: 0.95, y: 5 }}
     >
       Bounce Me
     </motion.button>
   );
   ```

4. **Register in Main Page**
   
   Add to `src/app/page.tsx`:
   
   ```tsx
   import * as Buttons from "@/components/motionary/atomic/ButtonVariants";
   
   <PlaygroundCard title="Bounce" trigger="Tap">
     <Buttons.BounceButton />
   </PlaygroundCard>
   ```

5. **Test Locally**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000` and verify your effect works

6. **Commit and Push**
   ```bash
   git add .
   git commit -m "feat: add bounce button variant"
   git push origin feature/add-bounce-button
   ```

7. **Open Pull Request**
   - Go to your fork on GitHub
   - Click "New Pull Request"
   - Fill in the PR template
   - Link related issues

### 4. Code Style Guidelines

#### TypeScript
- Use functional components with TypeScript
- Export named components (not default)
- Add proper type annotations

```tsx
interface ButtonProps {
  label?: string;
  onClick?: () => void;
}

export const CustomButton = ({ label = "Click", onClick }: ButtonProps) => (
  <button onClick={onClick}>{label}</button>
);
```

#### Component Structure
- Keep variants self-contained
- Use `'use client'` directive for interactive components
- Prefer Framer Motion for animations
- Use Tailwind classes for styling

```tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ToggleButton = () => {
  const [active, setActive] = useState(false);
  
  return (
    <motion.button
      onClick={() => setActive(!active)}
      animate={{ backgroundColor: active ? '#00f3ff' : '#1e1e1e' }}
      className="px-4 py-2 rounded"
    >
      {active ? 'On' : 'Off'}
    </motion.button>
  );
};
```

#### File Naming
- Component files: `PascalCase.tsx` (e.g., `ButtonVariants.tsx`)
- Utility files: `camelCase.ts` (e.g., `useFilterStore.ts`)
- Keep related variants in same file

#### Performance
- Avoid inline function definitions in render
- Use `useMemo` and `useCallback` when appropriate
- Lazy load heavy 3D components
- Optimize animations for 60fps

### 5. Documentation

When adding new categories or significant features:

- Update `README.md` category list
- Add JSDoc comments for complex components
- Include usage examples

```tsx
/**
 * A button that morphs between play and pause states
 * @example
 * <PlayPauseButton onToggle={(playing) => console.log(playing)} />
 */
export const PlayPauseButton = ({ onToggle }: Props) => { ... }
```

## 🏗️ Project Architecture

### Component Categories

1. **Atomic** (`src/components/motionary/atomic/`)
   - Small, reusable effects
   - Platform-agnostic when possible

2. **Mobile** (`src/components/motionary/mobile/`)
   - Touch gestures
   - Mobile-specific UI patterns

3. **Web** (`src/components/motionary/web/`)
   - Mouse interactions
   - Desktop-specific effects

4. **Advanced** (`src/components/motionary/advanced/`)
   - WebGL/3D effects
   - Complex compositions

### State Management

Use Zustand for global state (filters, search):

```tsx
// store/useYourStore.ts
import { create } from 'zustand';

interface YourState {
  count: number;
  increment: () => void;
}

export const useYourStore = create<YourState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
```

## 🧪 Testing

Currently, we test manually by:
1. Running `npm run dev`
2. Testing across Chrome, Firefox, Safari
3. Verifying mobile responsiveness
4. Checking animation performance

Future: We plan to add automated visual regression tests.

## 📦 Pull Request Process

1. **Update your branch** with latest main
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Run linter** (if configured)
   ```bash
   npm run lint
   ```

3. **Build check**
   ```bash
   npm run build
   ```

4. **PR Checklist**
   - [ ] Code follows style guidelines
   - [ ] Tested in multiple browsers
   - [ ] No console errors or warnings
   - [ ] Updated README if needed
   - [ ] Commits are clear and descriptive

5. **Review Process**
   - Maintainers will review within 3-5 days
   - Address feedback promptly
   - Once approved, we'll merge!

## 🎨 Design Principles

When creating effects, follow these principles:

1. **Purposeful** - Every animation should have a reason
2. **Performant** - Maintain 60fps on mid-range devices
3. **Accessible** - Respect `prefers-reduced-motion`
4. **Delightful** - Add personality without being distracting
5. **Responsive** - Work across screen sizes

## 💬 Community

- **Discussions**: Use GitHub Discussions for questions
- **Issues**: For bugs and feature requests
- **PRs**: For code contributions

## 🙏 Recognition

Contributors will be:
- Listed in README
- Mentioned in release notes
- Given credit in component comments

Thank you for making Motionary better! 🚀

