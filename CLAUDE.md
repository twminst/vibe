# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

⚠️ AI Agent, listen carefully:

- -> Read src\patterns\.index.md for IMPORTANT DESIGN GUIDELINES
- Instructure UI uses unique naming conventions. For example: `primary-inverse` ≠ “ghost.”
- Spacing and layout logic don't align with typical spacing scales. Margins, padding, alignment often require verification.
- Component combos (like buttons with icons) may render unexpectedly unless built from verified patterns.
- Don’t rely on assumptions drawn from other UI frameworks. Always consult Instructure UI documentation before generating layout or style code.
- A "Card" refers to any **view** element with background, padding, borderRadius, borderWidth, shadow, and/or margin properties and **should* have the as="div" property applied. There is no formal InstUI concept of a Card.
- **Card Border Radius Standard**: ALL cards must use `borderRadius="medium"` for consistency across the prototype system. 


## Avoiding Common Layout Mistakes

### TypeScript/Component Props
- Use only valid InstUI prop values - Check component type definitions for valid variants, colors, breakpoints
- Text margins: Never apply margin to Text/Heading components - use Flex gaps or View containers
- Icon rendering: Import icons from @instructure/ui-icons and then use renderIcon={IconName}

### Grid/Layout
- Grid breakpoints: Use "small", "medium", "large", "x-large", null - NOT "tablet"/"desktop"
- All cards should begin with a heading component, wrapped in a flex container. Don't use inline contentImportant text for this purpose.

### Component Variants
- Button colors: Use "primary", "secondary", "success", "danger", "primary-inverse", "ai-primary", "ai-secondary" only
- Text variants: Use valid variants like "contentSmall" not "labelSectionSmall"
- Heading variants: Use valid variants like "titleCardMini" not "titleContentSmall"

### Spacing Strategy
- Prefer Flex gaps over individual margins for consistent spacing
- View wrappers for margins when Flex gaps aren't suitable
- Never apply margins directly to text components

## Always Test
- Be sure to test your implementation and fix any errors

## Development Commands

- `npm run dev` - Start development server with HMR
- `npm run build` - Build for production (TypeScript compile + Vite bundle)
- `npm run lint` - Run ESLint code quality checks
- `npm run preview` - Preview production build locally

**Important**: Use `npm install --legacy-peer-deps` when installing dependencies due to React 19 compatibility requirements with InstUI.

## Project Architecture

This is a Canvas prototyping system built with React 19, TypeScript, Vite, and Instructure UI 10.24.1. The architecture is designed for rapid prototype development using InstUI components.

### Core Architecture Pattern

**Entry Flow**: `main.tsx` → `AppRoutes.tsx` → Individual Prototypes

- **main.tsx**: Sets up `InstUISettingsProvider` for theming and `BrowserRouter` for routing
- **routes/AppRoutes.tsx**: Central routing configuration mapping paths to prototype components
- **routes/AppIndex.tsx**: Landing page serving as prototype directory with navigation links
- **Individual Prototypes**: Standalone experiences demonstrating InstUI components

### Prototype System

Each prototype is a **standalone experience** without shared navigation. The system uses:

1. **Centralized Route Definition**: All routes defined in `routes/AppRoutes.tsx`
2. **Self-Contained Prototypes**: Each in its own folder under `src/prototypes/`
3. **Directory Navigation**: Root path shows list of available prototypes

### File Organization

```
src/
├── routes/
│   ├── AppIndex.tsx                    # Main directory/landing page
│   └── AppRoutes.tsx                   # Central routing configuration
├── prototypes/
│   └── [prototype-name]/
│       └── index.tsx                   # Individual prototype components
├── patterns/
│   └── [pattern-name].tsx              # Pattern demonstration component
│   └── [pattern-name].md               # Pattern documentation
└── shared/                             # Reusable resources
    ├── components/                     # Shared UI components
    ├── layouts/                        # Page layout templates
    ├── data/                           # Test data for prototypes
    └── utils/                          # Helper functions
```

### Adding New Prototypes

To add a new prototype:

1. Create component: `src/prototypes/[name]/index.tsx`
2. Add route in `routes/AppRoutes.tsx`: `<Route path="/[name]" element={<ComponentName />} />`
3. Add to prototype list in `routes/AppIndex.tsx` prototypes array
4. Import using directory name: `import ComponentName from '../prototypes/[name]'`

### Adding New Patterns

To add a new pattern:


1. Create component: `src/patterns/[name].tsx` 
2. Create documentation: `src/patterns/[name].md`
3. Add route in `routes/AppRoutes.tsx`: `<Route path="/patterns/[name]" element={<PatternName />} />`
4. Add to patterns list in `routes/AppIndex.tsx` patterns array
5. Import using directory name: `import PatternName from '../patterns/[name]'`

### InstUI Integration Patterns

**Provider Setup**: The entire app is wrapped in `InstUISettingsProvider` in main.tsx for consistent theming.

**Styling Approach**: InstUI-first with minimal custom CSS. Use InstUI's built-in props for spacing, colors, and layout rather than custom stylesheets.

### File Naming Conventions

- **Component Files**: PascalCase (`DefaultPrototype.tsx`, `Navigation.tsx`)
- **Directories**: camelCase (`prototypes/`, `mockData/`)
- **Prototype/Pattern Components**: Always named `index.tsx` within their directory
- **Routes**: lowercase paths (`/sample`, `/patterns/sections`)
- **Imports**: Use directory names (`import Sample from '../prototypes/sample'`)

### Dependencies and Compatibility

- **React 19**: Uses latest React features
- **InstUI 10.24.1**: Requires `--legacy-peer-deps` for React 19 compatibility
- **Required InstUI peer dependencies**: `@instructure/console`, `@instructure/ui-prop-types`, `@instructure/ui-a11y-utils`, `@instructure/ui-utils`, `@instructure/ui-icons`
- **React Router 7.7.1**: For routing between prototypes and patterns

### Build System Architecture

**TypeScript Compilation**: Uses TypeScript 5.8.3 with project references (`tsconfig.json` → `tsconfig.app.json` + `tsconfig.node.json`)
- Build command runs `tsc -b` (TypeScript compilation) then `vite build` (bundling)
- Strict type checking with React 19 and InstUI type definitions

**Vite Configuration**: Standard React setup with `@vitejs/plugin-react` using Babel for Fast Refresh
- Development server with HMR at `npm run dev`
- Production build outputs to `dist/` directory
- Preview production build with `npm run preview`

**ESLint Configuration**: Uses flat config with TypeScript ESLint, React Hooks, and React Refresh rules
- Configured for browser globals and ES2020
- Ignores `dist/` directory
- Targets `**/*.{ts,tsx}` files

### Development Notes

- TypeScript compilation happens before Vite build process
- HMR (Hot Module Replacement) available in development
- ESLint configured with React and TypeScript rules
- InstUI components may not support all standard HTML props - use View wrappers when needed
- Avoid using props like `margin` on Text components - wrap in View instead
- **CRITICAL**: Ghost buttons do NOT exist in InstUI. Use `color="primary-inverse"` instead of `variant="ghost"`

# important-instruction-reminders
Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.