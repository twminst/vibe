# Building Layouts with Flex and View Components

## Reference

- **Flex props** - Flexbox layout container properties - `node_modules/@instructure/ui-flex/lib/Flex/props.js`
- **View props** - Versatile container with styling options - `node_modules/@instructure/ui-view/lib/View/props.js`
- **Grid props** - Multi-column responsive layout system - `node_modules/@instructure/ui-grid/lib/Grid/props.js`

## IMPORTANT

- For padding, margin, and gap values ONLY, do NOT use legacy "small, medium, large" style values
- Use **Semantic Spacing Tokens** or **Numeric Scale**
- Instead of **medium** use **sectionElements** / **paddingCardLarge** (Preferred) or **space24**

## Core Layout Structure

**Start with a centered container** using View as your main wrapper. Set a maximum width of 1100px and center it with auto margins. This creates a consistent content area across all screen sizes.

**Organize content into sections** using Flex components with vertical direction. Each major section should have a gap of "sections" (36px) between them. Within each section, use "sectionElements" (24px) gap between the header and content.

**View components with block layout properties** (margin, padding, width, height, etc.) must use `as="div"` to render correctly as block-level elements. This ensures proper HTML structure and layout behavior.

## Building with Flex

**CRITICAL: Never apply margins to Text, Heading, or other text components.** Always use Flex containers with gaps or View containers for spacing.

**For vertical layouts**, use Flex with direction="column" and appropriate gap sizes:
- **sections** (36px) - Between major page sections
- **sectionElements** (24px) - Between section headers and their content
- **moduleElements** (16px) - Between smaller content groups
- **medium** (16px) - Standard spacing between elements
- **small** (12px) - Compact spacing for related items

**For horizontal layouts**, always use Flex with direction="row" and gaps. Never place content flush together:
- **large** (24px) - Major content divisions
- **medium** (16px) - Standard horizontal spacing (buttons, form elements)
- **small** (12px) - Compact elements (badges, status indicators, metadata)

## Text Component Spacing Rules

**✅ Correct - Use Flex containers with gaps:**
```tsx
<Flex direction="column" gap="small">
  <Text variant="contentSmall">Label text</Text>
  <Button>Action</Button>
</Flex>
```

**✅ Correct - Use View containers for margins when Flex gaps aren't suitable:**
```tsx
<View margin="0 0 small 0">
  <Text variant="contentSmall">Label text</Text>
</View>
<Button>Action</Button>
```

**❌ Wrong - Never apply margins directly to text components:**
```tsx
<Text margin="0 0 small 0">Label text</Text>
<Button>Action</Button>
```

## Card System

**All cards must use `as="div"`** to render correctly as semantic containers.

**Primary cards** (white background) are for main content:
- Use `as="div"` for proper HTML structure
- Use padding="paddingCardMedium" (16px) for standard cards
- Use padding="paddingCardLarge" (24px) for spacious cards
- Use padding="paddingCardSmall" (12px) for compact cards
- Always apply borderRadius="medium" for consistency
- Always use borderWidth="small" and borderColor="secondary" for definition

**Secondary cards** (gray background) are for supporting content:
- Use `as="div"` for proper HTML structure
- Same padding rules apply
- Use for backgrounds, secondary information, or to create visual hierarchy
- Can contain primary cards for nested layouts (limit to 2 levels deep)

**Card variations**:
- **Standard**: White background, padding, secondary border, and optional shadow
- **With primary border**: Use borderColor="primary" instead of "secondary" for emphasis
- **With shadow**: Add shadow="resting" for elevated importance

## Grid Layouts

**Use Grid for multi-column layouts**:
- Set colSpacing="medium" and rowSpacing="medium" for consistent gaps
- Use responsive widths like width={{medium: 6, large: 4}} for adaptive layouts
- Use width="auto" for flexible columns that size to content

**Grid responsive breakpoints** use the `startAt` prop with these valid values:
- **`startAt="small"`** - Grid activates at smallest screens (default stacked behavior)
- **`startAt="medium"`** - Grid activates at medium screens (~768px+), stacks below
- **`startAt="large"`** - Grid activates at large screens (~1024px+), stacks below
- **`startAt="x-large"`** - Grid activates at extra-large screens (~1200px+), stacks below
- **`startAt={null}`** - Grid is always active (no responsive stacking)

**For header sections with actions**:
- Use Grid with hAlign="space-between" and vAlign="middle"
- Place title in first Grid.Col
- Place actions in Grid.Col with width="auto"

**Grid responsive patterns**:
```tsx
// 2-column layout from medium screens up
<Grid startAt="medium" colSpacing="medium">
  <Grid.Row>
    <Grid.Col width={6}>Content 1</Grid.Col>
    <Grid.Col width={6}>Content 2</Grid.Col>
  </Grid.Row>
</Grid>

// 3-column layout from large screens up  
<Grid startAt="large" colSpacing="medium">
  <Grid.Row>
    <Grid.Col width={4}>Content 1</Grid.Col>
    <Grid.Col width={4}>Content 2</Grid.Col>  
    <Grid.Col width={4}>Content 3</Grid.Col>
  </Grid.Row>
</Grid>
```

## Layout Patterns

**Page structure** follows this hierarchy:
1. Main container (View with maxWidth and centered)
2. Sections (Flex direction="column" gap="sections")
3. Section header (View wrapper containing Heading and Text)
4. Section content (Cards, Grids, or nested Flex layouts)

**Content grouping**:
- Always wrap related headings and descriptions in a View container
- Use semantic heading hierarchy (h1 → h2 → h3 → h4 → h5)
- Group related elements with appropriate gap sizes
- Use content blocks with descriptive headers for component demonstrations

**Horizontal content** examples:
- **Button groups**: Flex row with gap="medium" for primary actions, gap="small" for secondary
- **Status indicators**: Flex row with gap="small" for badges, avatars, and metadata
- **Card headers**: Flex row with justifyItems="space-between" for title and actions

## Content Blocks with Descriptive Headers

**Content blocks** are groups of related elements with descriptive text headers that follow module spacing guidelines. These are not semantic form labels, but visual organizers that help users understand content groupings.

**Vertical content blocks** (most common):
- Use Flex direction="column" with gap="moduleElements" (16px) between blocks
- Descriptive header uses Heading level="h5" variant="label"
- Content follows with minimal spacing from header (xx-small margin bottom on header)

**Horizontal content blocks** (for size variants, state comparisons):
- Use Flex direction="column" with gap="moduleElements" between blocks
- Each block contains descriptive header and single component/element
- Align blocks using Flex alignItems="start" to maintain consistent header positioning

**Descriptive header patterns**:
```tsx
// Vertical grouping (multiple related components)
<View>
  <View margin="0 0 xx-small 0">
    <Heading level="h5" variant="label">Content Block Description</Heading>
  </View>
  <Flex gap="small" wrap="wrap">
    {/* Related components */}
  </Flex>
</View>

// Horizontal grouping (single component per block)
<View>
  <View margin="0 0 xx-small 0">
    <Heading level="h5" variant="label">Component Size</Heading>
  </View>
  <ComponentElement />
</View>
```

## Best Practices Summary

**Always**:
- Use Flex gaps instead of margins for spacing
- Apply consistent borderRadius="medium"
- Follow the semantic spacing tokens
- Wrap headings and descriptions together
- Use Grid spacing properties over individual margins
- Add `as="div"` to all card components
- Add `as="div"` to View components with block layout properties (margin, padding, width, height)

**Never**:
- Place content flush together without gaps
- Skip heading levels for visual effect
- Apply margins directly to Text components
- Nest cards more than 2 levels deep
- Mix different padding tokens in the same layout
- Omit `as="div"` from card View components
- Omit `as="div"` from View components with block layout properties

**Remember**: The key to good layouts is consistency. Use the semantic tokens (sections, sectionElements, moduleElements) to create predictable spacing patterns that users can unconsciously learn and navigate.

## Semantic Spacing Tokens Reference

### Layout Structure
- **`sections`** - 2.25rem (36px) - Between major page sections
- **`sectionElements`** - 1.5rem (24px) - Between elements within sections
- **`moduleElements`** - 1rem (16px) - Between module components
- **`trayElements`** - 1.5rem (24px) - Elements within trays
- **`modalElements`** - 1.5rem (24px) - Elements within modals

### Container Padding
- **`paddingCardLarge`** - 1.5rem (24px) - Large card internal padding
- **`paddingCardMedium`** - 1rem (16px) - Medium card internal padding
- **`paddingCardSmall`** - 0.75rem (12px) - Small card internal padding

### Form Elements
- **`inputFields`** - 1rem (16px) - Between form input fields
- **`checkboxes`** - 1rem (16px) - Between checkbox groups
- **`radios`** - 1rem (16px) - Between radio button groups
- **`selects`** - 1rem (16px) - Between select dropdowns
- **`textAreas`** - 1rem (16px) - Between text area fields
- **`toggles`** - 1rem (16px) - Between toggle switches

### Interactive Elements
- **`buttons`** - 0.75rem (12px) - Between buttons in groups
- **`tags`** - 0.75rem (12px) - Between tag elements
- **`statusIndicators`** - 0.75rem (12px) - Between status badges
- **`dataPoints`** - 0.75rem (12px) - Between data visualization points

### Numeric Scale (Use when semantic tokens don't apply)
- **`space0`** - 0rem (0px)
- **`space2`** - 0.125rem (2px)
- **`space4`** - 0.25rem (4px)
- **`space8`** - 0.5rem (8px)
- **`space12`** - 0.75rem (12px)
- **`space16`** - 1rem (16px)
- **`space24`** - 1.5rem (24px)
- **`space36`** - 2.25rem (36px)
- **`space48`** - 3rem (48px)
- **`space60`** - 3.75rem (60px)