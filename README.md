# Vibe Prototyping

A React-based prototyping environment for exploring design system components and patterns. Built as an experimental workspace for rapid UI exploration and testing.

## 🚀 Live Demo

The prototypes are automatically deployed to: **https://twminst.github.io/vibe/**

## 🛠 Development

### Prerequisites
- Node.js 18+
- npm

### Setup
```bash
# Install dependencies (note: requires legacy peer deps for React 19 compatibility)
npm install --legacy-peer-deps

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

### Project Structure

```
src/
├── routes/
│   ├── AppIndex.tsx                    # Main prototype directory
│   └── AppRoutes.tsx                   # Routing configuration
├── prototypes/
│   └── [prototype-name]/
│       └── index.tsx                   # Individual prototype experiments
├── patterns/
│   ├── [pattern-name].tsx              # Component pattern demos
│   └── [pattern-name].md               # Pattern documentation
└── shared/                             # Reusable utilities and components
    ├── components/
    ├── layouts/
    ├── data/
    └── utils/
```

## 🎨 Adding New Experiments

### Prototypes
Create a new prototype experiment:

1. Add component: `src/prototypes/[name]/index.tsx`
2. Add route in `routes/AppRoutes.tsx`: `<Route path="/[name]" element={<ComponentName />} />`
3. Add to directory in `routes/AppIndex.tsx` prototypes array

### Patterns
Document a new UI pattern:

1. Create component: `src/patterns/[name].tsx`
2. Create docs: `src/patterns/[name].md`
3. Add route in `routes/AppRoutes.tsx`: `<Route path="/patterns/[name]" element={<PatternName />} />`
4. Add to directory in `routes/AppIndex.tsx` patterns array

## 🔧 Tech Stack

- **React 19** - Latest React features and concurrent rendering
- **TypeScript 5.8** - Type safety and developer experience
- **Vite 7** - Fast development and optimized builds
- **React Router 7** - Client-side routing
- **Third-party UI Library** - Component foundation and design system
- **GitHub Actions** - Automated deployment to GitHub Pages

## 📝 Development Notes

- Uses `--legacy-peer-deps` for React 19 compatibility with third-party components
- TypeScript compilation runs before Vite bundling
- ESLint configured with React and TypeScript best practices
- Automated deployment on every push to main branch
- Components follow design system patterns and accessibility guidelines

## 🚦 Deployment

The project automatically deploys to GitHub Pages via GitHub Actions. Every push to the main branch triggers:

1. Dependency installation with legacy peer deps support
2. TypeScript compilation and type checking
3. Production build with Vite
4. Deployment to GitHub Pages

No manual deployment steps required - just push your code!

## 🎯 Purpose

This is a personal experimentation space for UI development, not intended for production use. It serves as a testing ground for exploring component patterns, design systems, and modern React development practices.