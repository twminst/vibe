# Icons

## Reference

- **Icon props** - All InstUI icons with size, color, and accessibility props - `node_modules/@instructure/ui-icons/lib/[IconName]/props.js`
- **View props** - Container for icon positioning and spacing - `node_modules/@instructure/ui-view/lib/View/props.js`
- **Flex props** - Layout container for icon alignment with content - `node_modules/@instructure/ui-flex/lib/Flex/props.js`

## Icon Declaration and Usage

**Icons must be explicitly imported and declared before use** to work with dynamic rendering patterns like `renderIcon={iconName}`.

**Icon imports are component-specific** and require individual import statements for each icon used in a component.

**Dynamic icon rendering requires icon variables** to be declared in the component scope before referencing them in props.

## Icon Import Patterns

**Named imports from @instructure/ui-icons** bring icons into component scope:

```tsx
// ✓ Correct - Import icons individually as needed
import { 
  IconDocumentLine,
  IconCheckLine,
  IconWarningLine,
  IconXLine
} from '@instructure/ui-icons'

// ✓ Correct - Use imported icons directly
<IconDocumentLine />
<IconCheckLine color="success" />

// ✓ Correct - Reference icons by variable for dynamic rendering
const documentIcon = IconDocumentLine
<SomeComponent renderIcon={documentIcon} />

// ✘ Wrong - Cannot use unimported icons
<IconUserLine /> // Error: IconUserLine not imported
```

**Declare icon variables** when using dynamic rendering patterns:

```tsx
// ✓ Correct - Declare icon variables for dynamic use
import { IconHomeLine, IconAssignmentLine, IconGradebookLine } from '@instructure/ui-icons'

const navigationIcons = {
  home: IconHomeLine,
  assignments: IconAssignmentLine,
  gradebook: IconGradebookLine
}

// Now icons can be used dynamically
<Button renderIcon={navigationIcons.home}>Home</Button>
```

## Size and Scaling

**Icons scale to parent font-size by default (1em)** ensuring consistent sizing with accompanying text:

**Size overrides**:
- `size="x-small"` - 16px - Compact interfaces, inline indicators
- `size="small"` - 24px - Standard button and navigation icons
- `size="medium"` - 32px - Prominent actions, section headers
- `size="large"` - 48px - Empty states, focal points
- `size="x-large"` - 64px - Hero sections, major empty states

```tsx
// ✓ Correct - Default sizing with text
<Flex gap="x-small" alignItems="center">
  <IconDocumentLine />
  <Text>Assignment Document</Text>
</Flex>

// ✓ Correct - Override sizing for emphasis
<View textAlign="center">
  <IconAssignmentLine size="large" color="secondary" />
  <Heading level="h4">No assignments yet</Heading>
</View>

// ✘ Wrong - Unnecessary size override when text is same importance
<Flex alignItems="center">
  <IconDocumentLine size="small" />
  <Text size="small">Document</Text> // Icon should inherit text size
</Flex>
```

## Color and Semantic Meaning

**Icons inherit parent color by default** but can override for semantic communication:

**Semantic colors**:
- `color="success"` - Completed states, positive feedback
- `color="warning"` - Attention needed, caution states  
- `color="danger"` - Errors, destructive actions
- `color="primary"` - Primary actions, important information
- `color="secondary"` - Supporting information, less emphasis
- `color="primary-inverse"` - Dark backgrounds, inverse themes

```tsx
// ✓ Correct - Semantic color usage
<Flex direction="column" gap="small">
  <Flex gap="x-small" alignItems="center">
    <IconCheckLine color="success" />
    <Text>Assignment submitted</Text>
  </Flex>
  <Flex gap="x-small" alignItems="center">
    <IconWarningLine color="warning" />
    <Text>Missing deadline</Text>
  </Flex>
  <Flex gap="x-small" alignItems="center">
    <IconXLine color="danger" />
    <Text>Submission failed</Text>
  </Flex>
</Flex>

// ✘ Wrong - Color without semantic meaning
<IconDocumentLine color="danger" /> // Red document icon conveys wrong meaning
```

## Line vs Solid Icon Styles

**Choose icon style based on background contrast and visual hierarchy**:

**Line icons**:
- `IconHeartLine`, `IconDocumentLine`, `IconUserLine`
- Primary choice for light backgrounds
- Better for detailed interfaces with multiple icons
- Less visual weight, better for secondary information

**Solid icons**:
- `IconHeartSolid`, `IconDocumentSolid`, `IconUserSolid`  
- Primary choice for dark backgrounds
- Better for high-contrast needs
- More visual weight, better for primary actions

```tsx
// ✓ Correct - Line icons on light backgrounds
<View background="primary" padding="medium">
  <Flex gap="small" alignItems="center">
    <IconDocumentLine />
    <Text>View Document</Text>
  </Flex>
</View>

// ✓ Correct - Solid icons on dark backgrounds
<View background="brand" padding="medium">
  <Flex gap="small" alignItems="center">
    <IconDocumentSolid color="primary-inverse" />
    <Text color="primary-inverse">View Document</Text>
  </Flex>
</View>

// ✘ Wrong - Mixing styles inconsistently
<Flex direction="column">
  <IconDocumentLine />
  <IconUserSolid />    // Inconsistent style choice
  <IconHeartLine />
</Flex>
```

## Accessibility and Screen Readers

**Icons are decorative by default** with `role="presentation"`. Add accessibility props when icons convey unique meaning:

**Decorative icons** (default behavior):
```tsx
// ✓ Correct - Icon supplements visible text
<Flex gap="x-small" alignItems="center">
  <IconDocumentLine />
  <Text>Assignment Document</Text>
</Flex>
// Screen reader: "Assignment Document"
```

**Meaningful icons** require title and description:
```tsx
// ✓ Correct - Icon conveys status not in text
<IconCheckLine 
  color="success"
  title="Completed" 
  description="Assignment submitted successfully"
/>
// Screen reader: "Completed. Assignment submitted successfully"

// ✓ Correct - Icon-only button needs accessibility
<Button 
  renderIcon={IconPlusLine}
  title="Add new assignment"
  aria-label="Add new assignment"
>
  <ScreenReaderContent>Add new assignment</ScreenReaderContent>
</Button>
```

## Navigation and Interface Patterns

**Navigation icons** maintain consistency and clear information hierarchy:

```tsx
import { IconHomeLine, IconAssignmentLine, IconGradebookLine } from '@instructure/ui-icons'

// ✓ Correct - Consistent navigation pattern
<Flex direction="column" gap="small">
  <Flex gap="small" alignItems="center">
    <IconHomeLine />
    <Text>Dashboard</Text>
  </Flex>
  <Flex gap="small" alignItems="center">
    <IconAssignmentLine />
    <Text>Assignments</Text>
  </Flex>
  <Flex gap="small" alignItems="center">
    <IconGradebookLine />
    <Text>Grades</Text>
  </Flex>
</Flex>
```

**Status indication** uses semantic colors consistently:

```tsx
import { IconCheckLine, IconWarningLine, IconXLine } from '@instructure/ui-icons'

// ✓ Correct - Status with semantic meaning
<Flex direction="column" gap="small">
  <Flex gap="x-small" alignItems="center">
    <IconCheckLine color="success" />
    <Text>All requirements met</Text>
  </Flex>
  <Flex gap="x-small" alignItems="center">
    <IconWarningLine color="warning" />
    <Text>Missing rubric</Text>
  </Flex>
  <Flex gap="x-small" alignItems="center">
    <IconXLine color="danger" />
    <Text>Submission error</Text>
  </Flex>
</Flex>
```

## Empty States and Focal Content

**Empty state icons** guide user attention and next actions:

```tsx
import { IconAssignmentLine } from '@instructure/ui-icons'

// ✓ Correct - Empty state with clear hierarchy
<View textAlign="center" padding="x-large">
  <View margin="0 0 medium 0">
    <IconAssignmentLine size="large" color="secondary" />
  </View>
  <Heading level="h4" margin="0 0 small 0">
    No assignments yet
  </Heading>
  <Text size="small" color="secondary">
    Create your first assignment to get started
  </Text>
</View>
```


## Best Practices Summary

**Always**:
- Import icons explicitly before using them in components
- Use default sizing (1em) when icons accompany text of equal importance  
- Apply semantic colors (success, warning, danger) to communicate meaning
- Choose Line icons for light backgrounds, Solid for dark backgrounds
- Add title/description props only when icons convey information not in text
- Maintain style consistency within the same interface context

**Never**:
- Reference unimported icons in component code
- Override icon size when accompanying text of same importance
- Use color without semantic meaning or purpose
- Mix Line and Solid styles inconsistently in the same interface
- Add accessibility props to purely decorative icons
- Use icons as the sole means of conveying critical information

**Remember**: Icons enhance and support content meaning rather than replace it. They should clarify and reinforce the user's understanding of interface elements and system state.

## Icon Size Reference

### Standard Sizes
- **`x-small`** - 16px - Compact interfaces, inline indicators, dense layouts
- **`small`** - 24px - Standard buttons, navigation, most interface icons
- **`medium`** - 32px - Section headers, prominent actions, cards
- **`large`** - 48px - Empty states, hero sections, modal headers
- **`x-large`** - 64px - Major empty states, onboarding, feature introductions

### Semantic Colors
- **`success`** - Green - Completed, positive, approved states
- **`warning`** - Orange - Attention needed, caution, pending states  
- **`danger`** - Red - Errors, failures, destructive actions
- **`primary`** - Blue - Important actions, links, primary information
- **`secondary`** - Gray - Supporting information, less important content
- **`primary-inverse`** - White - Dark backgrounds, inverse color schemes