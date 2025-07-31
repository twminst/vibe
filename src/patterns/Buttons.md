# Buttons

## Reference

- **Button props** - All button components with color, size, and interaction props - `node_modules/@instructure/ui-buttons/lib/Button/props.js`
- **Flex props** - Layout container for button groups with gap spacing - `node_modules/@instructure/ui-flex/lib/Flex/props.js`
- **View props** - Container for button positioning and spacing - `node_modules/@instructure/ui-view/lib/View/props.js`

## Button Semantic Colors and Usage

**Buttons communicate action intent through semantic colors** that should match the consequences of the action:

**Primary buttons** (`color="primary"`) - Main action, most important on the page:
- Submit forms, save changes, continue workflows
- Only one primary button per interface section
- Blue color conveys importance and user confidence

**Secondary buttons** (`color="secondary"`) - Supporting actions, less emphasis:
- Cancel, back, alternative options
- Gray color provides clear hierarchy without competing with primary
- Use for actions that don't change critical state

**Success buttons** (`color="success"`) - Positive outcomes, completion states:
- Approve, accept, confirm positive actions
- Green color reinforces positive consequences
- Use when action results in beneficial state change

**Danger buttons** (`color="danger"`) - Destructive or risky actions:
- Delete, remove, destructive operations that cannot be undone
- Red color warns users of permanent consequences
- Always require confirmation for critical destructive actions

**Primary-inverse buttons** (`color="primary-inverse"`) - Dark backgrounds:
- White button appearance on dark surfaces (traditionally called "ghost" buttons)
- Maintains primary action hierarchy on inverse backgrounds
- Use when primary action needs emphasis on dark themes
- Note: InstUI uses `primary-inverse` instead of the common "ghost" terminology

## Icon Declaration and Button Usage

**Icons must be imported and declared before use** in button `renderIcon` props:

```tsx
// ✓ Correct - Import icons before using in buttons
import { 
  IconPlusLine,
  IconEditLine,
  IconTrashLine,
  IconSettingsLine
} from '@instructure/ui-icons'

// ✓ Correct - Use imported icons in buttons
<Button color="primary" renderIcon={IconPlusLine}>
  Add Assignment
</Button>

// ✓ Correct - Declare icon variables for dynamic rendering
const actionIcons = {
  edit: IconEditLine,
  delete: IconTrashLine,
  settings: IconSettingsLine
}

<Button color="secondary" renderIcon={actionIcons.edit}>
  Edit Item
</Button>

// ✘ Wrong - Cannot use unimported icons
<Button renderIcon={IconSaveLine}> // Error: IconSaveLine not imported
  Save Changes
</Button>
```

## Button Types and Specialized Usage

**Standard Button** - Primary interactive component for most actions:

```tsx
import { Button } from '@instructure/ui-buttons'
import { IconPlusLine } from '@instructure/ui-icons'

// ✓ Correct - Primary action with clear text
<Button color="primary" onClick={handleSave}>
  Save Assignment
</Button>

// ✓ Correct - Secondary action with icon
<Button color="secondary" renderIcon={IconPlusLine}>
  Add Item
</Button>

// ✓ Correct - Destructive action with danger color
<Button color="danger" onClick={handleDelete}>
  Delete Course
</Button>
```

**IconButton** - Icon-only buttons requiring screen reader labels:

```tsx
import { IconButton } from '@instructure/ui-buttons'
import { IconSettingsLine, IconTrashLine } from '@instructure/ui-icons'

// ✓ Correct - Icon button with required accessibility
<IconButton 
  screenReaderLabel="Open settings"
  renderIcon={IconSettingsLine}
  color="secondary"
  onClick={handleSettings}
/>

// ✓ Correct - Destructive icon button with proper styling
<IconButton 
  screenReaderLabel="Delete assignment"
  renderIcon={IconTrashLine}
  color="danger"
  withBackground
  onClick={handleDelete}
/>

// ✘ Wrong - Missing required screenReaderLabel
<IconButton renderIcon={IconSettingsLine} /> // Fails accessibility
```

**CloseButton** - Specialized component for dismissing content:

```tsx
import { CloseButton } from '@instructure/ui-buttons'

// ✓ Correct - Modal close button
<CloseButton 
  screenReaderLabel="Close assignment details"
  placement="end"
  onClick={handleCloseModal}
/>

// ✓ Correct - Panel close with positioning
<CloseButton 
  screenReaderLabel="Close notification"
  placement="end"
  offset="small"
  onClick={handleDismiss}
/>

// ✘ Wrong - Using CloseButton for non-dismissive actions
<CloseButton screenReaderLabel="Delete item" /> // Should use IconButton
```

**ToggleButton** - Stateful buttons for on/off functionality:

```tsx
import { ToggleButton } from '@instructure/ui-buttons'
import { IconStarLine, IconStarSolid } from '@instructure/ui-icons'

// ✓ Correct - Toggle with state-appropriate icons
<ToggleButton
  screenReaderLabel="Toggle favorite"
  renderTooltipContent="Add to favorites"
  renderIcon={isFavorited ? IconStarSolid : IconStarLine}
  status={isFavorited ? 'pressed' : 'unpressed'}
  color={isFavorited ? 'success' : 'secondary'}
  onClick={handleToggleFavorite}
/>

// ✘ Wrong - Missing required tooltip content
<ToggleButton 
  screenReaderLabel="Toggle"
  renderIcon={IconStarLine}
  status="unpressed"
/> // Missing renderTooltipContent prop
```

**CondensedButton** - Compact buttons for dense interfaces:

```tsx
import { CondensedButton } from '@instructure/ui-buttons'
import { IconEditLine } from '@instructure/ui-icons'

// ✓ Correct - Toolbar button with minimal space
<CondensedButton 
  color="secondary"
  size="small"
  renderIcon={IconEditLine}
  onClick={handleQuickEdit}
>
  Edit
</CondensedButton>

// ✘ Wrong - Using CondensedButton where standard Button is better
<CondensedButton color="primary" size="large"> // Defeats compact purpose
  Save Assignment
</CondensedButton>
```

## Button Layout and Spacing

**Button groups require Flex containers** with semantic gap spacing:

```tsx
import { Flex } from '@instructure/ui-flex'

// ✓ Correct - Button group with semantic spacing
<Flex gap="buttons" justifyItems="end">
  <Button color="secondary">Cancel</Button>
  <Button color="primary">Save Changes</Button>
</Flex>

// ✓ Correct - Multiple action buttons with wrapping
<Flex gap="buttons" wrap="wrap">
  <Button color="primary">Save</Button>
  <Button color="secondary">Save Draft</Button>
  <Button color="danger">Delete</Button>
</Flex>

// ✓ Correct - Toolbar with condensed buttons
<Flex gap="small" alignItems="center">
  <CondensedButton color="secondary" renderIcon={IconEditLine}>
    Edit
  </CondensedButton>
  <CondensedButton color="secondary" renderIcon={IconCopyLine}>
    Copy
  </CondensedButton>
</Flex>

// ✘ Wrong - Never apply margin directly to buttons
<Button color="primary" margin="0 small 0 0">Save</Button>
<Button color="secondary">Cancel</Button>
```

## Button Sizing and Visual Hierarchy

**Button sizes communicate action importance** and interface density:

**Size guidelines**:
- `size="small"` - Secondary actions, toolbars, compact interfaces
- `size="medium"` - Default size for most button usage
- `size="large"` - Primary calls-to-action, prominent form submissions

```tsx
// ✓ Correct - Size matches action importance
<Flex gap="buttons" alignItems="center">
  <Button color="primary" size="large">
    Submit Assignment
  </Button>
  <Button color="secondary" size="medium">
    Save Draft
  </Button>
  <Button color="secondary" size="small">
    Cancel
  </Button>
</Flex>

// ✘ Wrong - Random size mixing without hierarchy purpose
<Flex gap="buttons">
  <Button size="small">Save</Button>
  <Button size="large">Cancel</Button> // Size doesn't match importance
</Flex>
```

## Accessibility and Screen Reader Support

**Button accessibility requires meaningful labels** and proper semantic usage:

**Standard buttons** with clear text are automatically accessible:
```tsx
// ✓ Correct - Self-explanatory button text
<Button color="primary">Submit Assignment</Button>

// ✘ Wrong - Vague button text
<Button color="primary">OK</Button> // Unclear action
```

**Icon-only buttons require explicit screen reader labels**:
```tsx
// ✓ Correct - Descriptive screen reader label
<IconButton 
  screenReaderLabel="Delete this assignment"
  renderIcon={IconTrashLine}
  color="danger"
/>

// ✘ Wrong - Generic or missing labels
<IconButton 
  screenReaderLabel="Delete" // Too generic
  renderIcon={IconTrashLine}
/>
```

**Toggle buttons need state-aware labels**:
```tsx
// ✓ Correct - Label reflects current state and action
<ToggleButton
  screenReaderLabel={isLocked ? 'Unlock assignment' : 'Lock assignment'}
  renderTooltipContent={isLocked ? 'Unlock' : 'Lock'}
  renderIcon={isLocked ? IconLockSolid : IconUnlockLine}
  status={isLocked ? 'pressed' : 'unpressed'}
/>

// ✘ Wrong - Static label doesn't reflect state
<ToggleButton
  screenReaderLabel="Toggle lock" // Doesn't indicate current state
  status={isLocked ? 'pressed' : 'unpressed'}
/>
```

## Form Integration and Button Behavior

**Form buttons use proper HTML types** for semantic form behavior:

```tsx
// ✓ Correct - Form submission button
<Button type="submit" color="primary">
  Submit Assignment
</Button>

// ✓ Correct - Form reset button
<Button type="reset" color="secondary">
  Clear Form
</Button>

// ✓ Correct - Regular action button (default type="button")
<Button color="secondary" onClick={handleCancel}>
  Cancel
</Button>

// ✘ Wrong - Missing type attribute in forms
<form onSubmit={handleSubmit}>
  <Button color="primary"> // Missing type="submit"
    Submit
  </Button>
</form>
```

## Best Practices Summary

**Always**:
- Import icons before using in `renderIcon` props
- Use semantic colors that match action consequences
- Provide descriptive `screenReaderLabel` for IconButton, CloseButton, ToggleButton
- Use Flex containers with gap spacing for button groups
- Match button size to action importance and interface hierarchy
- Use proper HTML `type` attributes in forms
- Place primary action buttons first (right-aligned) in button groups

**Never**:
- Reference unimported icons in button components
- Use danger colors for non-destructive actions
- Apply margin props directly to buttons - use Flex containers
- Use vague button text like "OK", "Submit", or "Click here"
- Mix button sizes randomly without hierarchical purpose
- Omit required accessibility props (screenReaderLabel, renderTooltipContent)
- Use more than one primary button per interface section

**Remember**: Buttons are the primary way users interact with your interface. Clear labeling, appropriate colors, and consistent spacing create confident user experiences and accessible interactions.

## Button Color Reference

### Semantic Button Colors
- **`primary`** - Blue - Main actions, form submissions, continue workflows
- **`secondary`** - Gray - Supporting actions, cancel, alternative options  
- **`success`** - Green - Positive actions, approve, accept, complete
- **`danger`** - Red - Destructive actions, delete, remove, permanent changes
- **`primary-inverse`** - White - Primary actions on dark backgrounds
- **`ai-primary`** - Purple - AI-powered primary actions and features
- **`ai-secondary`** - Light purple - AI-powered supporting actions

### Button Size Guidelines
- **`small`** - Compact interfaces, toolbars, secondary actions
- **`medium`** - Default size for most button usage scenarios
- **`large`** - Primary calls-to-action, prominent form submissions