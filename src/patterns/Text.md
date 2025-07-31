# Typography Components and Semantic Text Styling

## Reference

- **Heading props** - Semantic headings with styling variants - `node_modules/@instructure/ui-heading/lib/Heading/props.js`
- **Text props** - Body text with semantic variants - `node_modules/@instructure/ui-text/lib/Text/props.js`
- **Link props** - Interactive navigation links - `node_modules/@instructure/ui-link/lib/Link/props.js`
- **List props** - Structured content lists - `node_modules/@instructure/ui-list/lib/List/props.js`

## Semantic Typography Principles

**Typography ensures consistent visual presentation while maintaining accessibility through semantic meaning rather than purely visual styling.** All typography components provide semantic text styling and proper heading hierarchy.

**Always use both `level` AND `variant` props for Heading components** to maintain semantic HTML structure while achieving the desired visual appearance.

**CRITICAL: Never apply margin props directly to Text, Heading, or Link components.** Use Flex containers with gaps (preferred) or View containers when margins are necessary.

## Text Component Spacing Rules

**✅ Preferred - Use Flex containers with gaps for consistent spacing:**
```tsx
<Flex direction="column" gap="small">
  <Text variant="contentSmall">Section label</Text>
  <Text>Main content text</Text>
  <Button>Related action</Button>
</Flex>
```

**✅ Alternative - Use View containers for margins when Flex gaps aren't suitable:**
```tsx
<View margin="0 0 small 0">
  <Heading level="h3" variant="titleContentSmall">Section Title</Heading>
</View>
<Text>Section content follows the heading</Text>
```

**❌ Wrong - Never apply margins directly to text components:**
```tsx
<Heading level="h3" variant="titleContentSmall" margin="0 0 small 0">Section Title</Heading>
<Text margin="small 0">Content with margins</Text>
``` 

## Heading Hierarchy

**Follow proper semantic heading order** (h1 → h2 → h3 → h4 → h5) for accessibility:

**Page-level headings**:
- `level="h1" variant="titlePageDesktop"` - Main page titles for desktop
- `level="h1" variant="titlePageMobile"` - Main page titles for mobile

**Section headings**:
- `level="h2" variant="titleSection"` - Major page sections
- `level="h3" variant="titleModule"` - Component and module titles

**Card and component headings**:
- `level="h4" variant="titleCardLarge"` - Primary card headers
- `level="h4" variant="titleCardRegular"` - Standard card headers
- `level="h5" variant="titleCardMini"` - Small card headers

**Form and utility labels**:
- `level="h5" variant="label"` - Form section labels
- `level="h5" variant="labelInline"` - Inline labels

## Text Variants

**Use semantic variants that match content meaning**, not visual appearance:

**Page and section descriptions**:
- `variant="descriptionPage"` - Page-level descriptions and introductions
- `variant="descriptionSection"` - Section explanations and context

**Body content**:
- `variant="content"` - Standard body text and paragraphs
- `variant="contentImportant"` - Emphasized content requiring attention
- `variant="contentQuote"` - Quoted text and citations
- `variant="contentSmall"` - Metadata, timestamps, and secondary information

**Specialized text**:
- `variant="legend"` - Chart legends and data explanations

## Link Patterns

**Choose link variants based on context**:

**Inline links** (within text):
- `variant="inline"` - Standard inline links within paragraphs
- `variant="inline-small"` - Small inline links within compact text

**Standalone links** (independent elements):
- `variant="standalone"` - Primary standalone navigation links
- `variant="standalone-small"` - Secondary or utility links

**Link colors**:
- `color="link"` - Standard link color for light backgrounds
- `color="link-inverse"` - Inverse link color for dark backgrounds

## Text Spacing Patterns

**Wrap Text components in View containers for block-level spacing**:

```tsx
// ✓ Correct - Use View for block spacing
<View as="div" margin="0 0 medium 0">
  <Text variant="content">This text block has proper spacing</Text>
</View>

// ✓ Correct - Inline text components don't need wrapping
<View as="div">
  <Text variant="content">Please review the </Text>
  <Link href="/syllabus" variant="inline">course syllabus</Link>
  <Text variant="content"> before starting.</Text>
</View>

// ✘ Wrong - Never use margins directly on Text
<Text variant="content" margin="0 0 medium 0">Don't do this</Text>
```

**Block vs. inline text patterns**:
- **Block text**: Wrap in View containers for vertical spacing between paragraphs and sections
- **Inline text**: Text and Link components can flow together within a single View container
- Use consistent gap spacing between text blocks
- Apply semantic spacing tokens (sectionElements, moduleElements) for block layouts

## List Components

**Use List for vertical item collections**:
- `as="ul"` for unordered lists
- `as="ol"` for numbered sequences
- `itemSpacing` controls vertical spacing between items
- `delimiter` adds visual separators (none, dashed, solid)

**Use InlineList for horizontal item collections**:
- Navigation breadcrumbs
- Tag-like elements
- Status indicators
- `delimiter` options: none, pipe, slash, arrow

**Use TruncateList for long collections**:
- Automatically handles overflow with "more" menu
- Requires `renderHiddenItemMenu` function
- Set `visibleItemsCount` for truncation threshold

## Color System

**Text colors** follow semantic meaning:
- `primary` - Main text content
- `secondary` - Supporting information and metadata
- `brand` - Brand-related content
- `success/danger/warning/alert` - Status and feedback messages
- `primary-inverse/secondary-inverse` - Text on dark backgrounds

**Heading colors** use the same system with additional options:
- `inherit` - Inherit color from parent
- `ai` - AI-related content with special styling

## Best Practices Summary

**Always**:
- Use both `level` and `variant` props for Heading components
- Follow proper heading hierarchy (h1 → h2 → h3 → h4 → h5)
- Wrap Text components in View containers for spacing
- Use semantic variants that match content meaning
- Choose appropriate link variants for context

**Never**:
- Skip heading levels for visual purposes (h1 → h4)
- Apply margins directly to Text components
- Use heading variants only for styling without semantic meaning
- Mix deprecated `size` props with semantic `variant` props
- Use custom CSS to override variant styling

**Remember**: Typography is about semantic structure first, visual appearance second. The design system's variants provide both consistent styling and meaningful document structure for accessibility.

## Typography Variant Reference

### Heading Variants
- **`titlePageDesktop`** - 2rem (32px) - Desktop page titles
- **`titlePageMobile`** - 1.75rem (28px) - Mobile page titles
- **`titleSection`** - 1.5rem (24px) - Major section headings
- **`titleCardSection`** - 1.25rem (20px) - Card section headings
- **`titleModule`** - 1.125rem (18px) - Module and component titles
- **`titleCardLarge`** - 1.125rem (18px) - Large card headers
- **`titleCardRegular`** - 1rem (16px) - Standard card headers
- **`titleCardMini`** - 0.875rem (14px) - Small card headers
- **`label`** - 0.875rem (14px) - Form labels and sections
- **`labelInline`** - 0.875rem (14px) - Inline labels

### Text Variants
- **`descriptionPage`** - 1.125rem (18px) - Page descriptions
- **`descriptionSection`** - 1rem (16px) - Section descriptions
- **`content`** - 1rem (16px) - Standard body text
- **`contentImportant`** - 1rem (16px) - Bold emphasized text
- **`contentQuote`** - 1rem (16px) - Italic quoted text
- **`contentSmall`** - 0.875rem (14px) - Metadata and timestamps
- **`legend`** - 0.75rem (12px) - Data legends and labels

### Link Variants
- **`inline`** - Standard size inline links
- **`inline-small`** - Small inline links
- **`standalone`** - Standard standalone links
- **`standalone-small`** - Small standalone links