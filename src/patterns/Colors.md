# Colors

## Reference

- **View props** - Background colors, border colors - `node_modules/@instructure/ui-view/lib/View/props.js`
- **Text props** - Text colors, semantic color system - `node_modules/@instructure/ui-text/lib/Text/props.js`
- **Heading props** - Text colors for headings - `node_modules/@instructure/ui-heading/lib/Heading/props.js`

## Color System Principles

**InstUI colors follow semantic meaning over visual appearance** - use `color="success"` instead of "green" to ensure consistent meaning across themes and accessibility standards.

**Color and contrast work as a system** - colored backgrounds require matching inverse text colors to maintain proper contrast ratios and readability.

**Status colors convey universal meaning** - success (green), warning (orange), danger (red), and alert (blue) maintain consistent semantic meaning across all components and contexts.

## Background Colors

**Background colors establish visual hierarchy and semantic context** using the `background` prop on View and other components:

**Primary backgrounds**:
- `background="primary"` - Clean white background for main content areas, cards, containers
- `background="secondary"` - Light gray background for supporting content, sections, visual separation
- `background="primary-inverse"` - Dark background for high contrast, headers, navigation

**Status backgrounds**:
- `background="success"` - Green background for positive feedback, completed tasks, success states
- `background="warning"` - Orange background for caution messages, pending actions, attention-required items
- `background="danger"` - Red background for critical issues, destructive actions, error states
- `background="alert"` - Blue background for important notifications, system alerts, information messages

## Text Colors

**Text colors provide semantic meaning and visual hierarchy** using the `color` prop on Text, Heading, and other text components:

```tsx
// ✓ Correct - Semantic color usage with proper contrast
<View background="success">
  <Text color="success-inverse">Operation completed successfully</Text>
</View>

// ✓ Correct - Status colors for contextual meaning
<Text color="danger">Validation error occurred</Text>
<Text color="secondary">Supporting information</Text>

// ✘ Wrong - Don't use status colors without context
<Text color="danger">Click here to continue</Text>
```

**Standard text colors**:
- **Default (no color prop)**: Standard black text for primary content, body text, main headings
- **`color="secondary"`**: Gray text for supporting information, metadata, timestamps, captions
- **`color="primary"`**: Brand blue for links, interactive elements, call-to-action text

**Status text colors**:
- **`color="success"`**: Green text for positive feedback, success messages, confirmation text
- **`color="warning"`**: Orange text for caution messages, pending status, attention-required text
- **`color="danger"`**: Red text for errors, validation messages, critical alerts
- **`color="alert"`**: Blue text for important notifications, system messages, informational updates

## Inverse Text Colors

**Inverse colors ensure proper contrast on colored backgrounds** - always pair colored backgrounds with their corresponding inverse text colors:

```tsx
// ✓ Correct - Inverse colors with matching backgrounds
<View background="danger">
  <Text color="danger-inverse">Error: Operation failed</Text>
</View>

<View background="primary-inverse">
  <Text color="primary-inverse">Navigation item</Text>
</View>

// ✘ Wrong - Don't use regular colors on colored backgrounds
<View background="success">
  <Text color="success">This will have poor contrast</Text>
</View>
```

**Inverse color system**:
- **`color="primary-inverse"`**: White text for dark backgrounds (`background="primary-inverse"`)
- **`color="success-inverse"`**: Light text optimized for success backgrounds
- **`color="warning-inverse"`**: Light text optimized for warning backgrounds
- **`color="danger-inverse"`**: Light text optimized for danger backgrounds
- **`color="alert-inverse"`**: Light text optimized for alert backgrounds

## Border Colors

**Border colors create visual emphasis and semantic context** using the `borderColor` prop with `borderWidth`:

**Border color options**:
- **`borderColor="primary"`**: Brand blue borders for emphasis, interactive elements, focused states
- **`borderColor="secondary"`**: Gray borders for standard cards, form fields, subtle separation
- **`borderColor="success"`**: Green borders for success states, positive validation, completed items
- **`borderColor="warning"`**: Orange borders for caution messages, pending validation
- **`borderColor="danger"`**: Red borders for errors, validation failures, critical issues
- **`borderColor="alert"`**: Blue borders for important notifications, information alerts

## Common Usage Patterns

```tsx
// ✓ Correct - Standard card with secondary border
<View 
  background="primary" 
  borderWidth="small" 
  borderColor="secondary"
  padding="paddingCardMedium"
  borderRadius="medium"
>
  <Text>Card content</Text>
</View>

// ✓ Correct - Success alert with proper inverse text
<View 
  background="success" 
  padding="paddingCardMedium"
  borderRadius="medium"
>
  <Text color="success-inverse">Operation completed successfully</Text>
</View>

// ✓ Correct - Error state with semantic colors
<View 
  background="secondary" 
  borderWidth="small" 
  borderColor="danger"
  padding="paddingCardMedium"
  borderRadius="medium"
>
  <Text color="danger">Validation error occurred</Text>
  <Text color="secondary">Please check your input and try again</Text>
</View>

// ✘ Wrong - Mixed semantic meanings
<View background="success" borderColor="danger">
  <Text color="warning-inverse">Confusing message</Text>
</View>
```

## Best Practices Summary

**Always**:
- Use semantic color names (success, warning, danger) over visual descriptions
- Pair colored backgrounds with their corresponding inverse text colors
- Apply color consistently across similar UI elements and states
- Choose colors based on semantic meaning rather than visual preference
- Reference InstUI color tokens instead of custom hex values

**Never**:
- Skip proper contrast testing when combining colors
- Apply status colors for non-status purposes (danger for emphasis, success for branding)
- Use color alone to convey critical information
- Mix semantic meanings (success background with danger border)
- Override InstUI color tokens with custom CSS colors

**Remember**: Colors in InstUI carry semantic weight - choose colors that match the meaning of your content, not just the visual effect you want to achieve.

## Color Token Reference

### Background Colors
- **`primary`** - White (#ffffff) - Default background for content areas
- **`secondary`** - Light gray (#f5f5f5) - Supporting sections and visual separation
- **`primary-inverse`** - Dark (#2d3b45) - High contrast backgrounds and navigation
- **`success`** - Green (#0b874b) - Positive feedback and success states
- **`warning`** - Orange (#fc5e13) - Caution messages and pending actions
- **`danger`** - Red (#ee0612) - Critical issues and error states
- **`alert`** - Blue (#0770a3) - Important notifications and information

### Text Colors
- **`primary`** - Brand blue (#0770a3) - Interactive text and emphasis
- **`secondary`** - Medium gray (#6b7780) - Supporting information and metadata
- **`primary-inverse`** - White (#ffffff) - Text on dark backgrounds
- **`success`** - Dark green (#0b874b) - Success messages and positive feedback
- **`warning`** - Dark orange (#fc5e13) - Warning messages and caution text
- **`danger`** - Dark red (#ee0612) - Error messages and critical alerts
- **`alert`** - Dark blue (#0770a3) - Information messages and notifications