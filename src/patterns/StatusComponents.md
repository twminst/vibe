# Status Components

## Reference

- **Badge props** - Count and notification indicators - `node_modules/@instructure/ui-badge/lib/Badge/props.js`
- **Pill props** - Status information display - `node_modules/@instructure/ui-pill/lib/Pill/props.js`
- **Tag props** - Category and label management - `node_modules/@instructure/ui-tag/lib/Tag/props.js`

## Core Principles

**Choose status components based on semantic meaning rather than visual appearance.** Each component serves a distinct purpose in communicating different types of information to users.

**Pills communicate system-generated status information** that users cannot directly modify, such as assignment states, course status, or system health indicators.

**Tags represent user-generated or user-manageable categories** like course topics, skill tags, or organizational labels that can be added, removed, or edited.

**Badges display numeric counts and notification indicators** positioned relative to other UI elements to show quantities, alerts, or updates.

## Status Information Display

**Pills are designed for system status communication** with clear semantic meaning:

**Status States**:
- `color="success"` - Completed, active, approved states
- `color="primary"` - Default, published, current states  
- `color="info"` - In progress, pending, informational states
- `color="warning"` - Attention needed, review required, caution states
- `color="danger"` - Failed, error, blocked, critical states
- `color="alert"` - High priority, urgent, immediate attention needed

**Enhanced Pills**:
- `statusLabel="Course"` - Contextual prefix for clarity
- `renderIcon={<IconName />}` - Visual reinforcement of status meaning

```tsx
// ✓ Correct - System status with semantic colors
<Pill color="success">Published</Pill>
<Pill color="warning">Under Review</Pill>
<Pill color="danger">Failed</Pill>

// ✓ Correct - Status with contextual labels
<Pill color="primary" statusLabel="Course">Draft</Pill>
<Pill color="info" statusLabel="Assignment">Pending</Pill>

// ✓ Correct - Status with reinforcing icons
<Pill color="success" renderIcon={<IconCheckLine />}>Complete</Pill>
<Pill color="warning" renderIcon={<IconWarningLine />}>Warning</Pill>

// ✘ Wrong - Pills for user-editable categories
<Pill color="primary">JavaScript</Pill>
<Pill color="secondary">Frontend</Pill>
```

**Content constraints ensure clarity**:
- **Main content**: Maximum 2 words for optimal readability
- **Status label**: Maximum 2 words for contextual clarity
- Use concise, descriptive language that clearly conveys state
- Avoid technical jargon or unclear abbreviations

## Category and Label Management

**Tags handle user-generated categorization** with interaction capabilities:

**Tag Variants**:
- `variant="default"` - Standard appearance for general categories
- `variant="inline"` - Reduced visual weight for embedded contexts
- `size="small|medium|large"` - Hierarchical importance and context

**Interactive Tags**:
- `dismissible={true}` - User can remove tags with close button
- `onClick={handler}` - Tags can trigger actions or navigation
- `readOnly={true}` - Visual tag styling without interaction
- `disabled={true}` - Disabled state for contextual restrictions

```tsx
// ✓ Correct - User-manageable categories
<Tag text="JavaScript" dismissible onClick={removeTag} />
<Tag text="Frontend Development" size="medium" />
<Tag text="Canvas Integration" />

// ✓ Correct - Interactive tag collections
{categories.map((category, index) => (
  <Tag 
    key={index}
    text={category.name} 
    dismissible 
    onClick={() => removeCategory(index)}
  />
))}

// ✓ Correct - Read-only category display
<Tag text="Course Material" readOnly />
<Tag text="Assignment" variant="inline" size="small" />

// ✘ Wrong - Tags for system status
<Tag text="Failed" />
<Tag text="In Progress" />
```

**Tag content follows user-centric patterns**:
- Represent categories users understand and manage
- Support user actions like removal or selection
- Use familiar terminology from the user's domain
- Group related concepts logically

## Count and Notification Display

**Badges show numeric information and alerts** with positioning flexibility:

**Badge Types**:
- `type="count"` - Displays numeric values with automatic formatting
- `type="notification"` - Small dot indicator for binary alert states
- `countUntil={99}` - Customizable overflow point with "+" indicator
- `standalone={true}` - Independent badge not positioned relative to child

**Badge Variants**:
- `variant="primary"` - Standard counts and general notifications
- `variant="success"` - Positive counts, completed items, achievements
- `variant="danger"` - Alerts, errors, critical notifications
- `variant="inverse"` - High contrast for dark backgrounds

**Badge Positioning**:
- `placement="top start"` - Top-left corner positioning
- `placement="top end"` - Top-right corner positioning (default)
- `placement="bottom start"` - Bottom-left corner positioning
- `placement="bottom end"` - Bottom-right corner positioning

```tsx
// ✓ Correct - Count badges with semantic variants
<Badge count={12} variant="primary">
  <Button>Messages</Button>
</Badge>
<Badge count={3} variant="success">
  <Button>Completed Tasks</Button>
</Badge>

// ✓ Correct - Notification badges for alerts
<Badge type="notification" variant="danger" pulse>
  <Button>Alerts</Button>
</Badge>

// ✓ Correct - Overflow handling for large counts
<Badge count={150} countUntil={99} variant="primary">
  <Button>Notifications</Button>
</Badge>

// ✓ Correct - Standalone badges in layouts
<Flex gap="moduleElements" alignItems="center">
  <Text>Total Items:</Text>
  <Badge count={42} standalone variant="primary" />
</Flex>

// ✘ Wrong - Badges for non-numeric content
<Badge text="JavaScript" />
<Badge label="Category" />
```

**Badge accessibility requires proper context**:
- Use AccessibleContent for screen reader descriptions
- Provide meaningful labels that explain the count's purpose
- Ensure badge content is announced clearly
- Consider colorblind users with sufficient contrast

## Spacing and Layout Guidelines

**Consistent spacing enhances visual hierarchy and readability** through semantic spacing tokens:

**Pill Collections**:
- Use `gap="statusIndicators"` for groups of Pills
- Maintains proper visual separation for status information
- Ensures consistent spacing across different pill types

**Tag Collections**:
- Use `gap="tags"` for groups of Tags
- Optimized spacing for category and label management
- Provides appropriate separation for user interaction

**Mixed Component Layouts**:
- Use `gap="space12"` when combining Pills, Tags, and Badges
- Ensures balanced spacing between different component types
- Maintains visual harmony in complex status displays

```tsx
// ✓ Correct - Pill collections with proper spacing
<Flex gap="statusIndicators" wrap="wrap">
  <Pill color="success">Published</Pill>
  <Pill color="info">Draft</Pill>
  <Pill color="warning">Review</Pill>
</Flex>

// ✓ Correct - Tag collections with proper spacing
<Flex gap="tags" wrap="wrap">
  <Tag text="JavaScript" />
  <Tag text="React" />
  <Tag text="Canvas" />
</Flex>

// ✓ Correct - Mixed components with balanced spacing
<Flex gap="space12" wrap="wrap">
  <Pill color="success">Active</Pill>
  <Tag text="Frontend" />
  <Badge count={5} variant="primary">
    <Button color="secondary">Tasks</Button>
  </Badge>
</Flex>

// ✘ Wrong - Generic spacing that doesn't match component purpose
<Flex gap="moduleElements" wrap="wrap">
  <Pill color="primary">Status</Pill>
  <Tag text="Category" />
</Flex>
```

## Component Selection Strategy

**Choose components based on data type and user interaction**:
- **System-generated status** → Pill with semantic colors
- **User-manageable categories** → Tag with interaction options
- **Numeric counts or alerts** → Badge with appropriate positioning

**Content characteristics guide selection**:
- **Short status words** (1-2 words) → Pill
- **Category names** (flexible length) → Tag  
- **Numbers or notification dots** → Badge

**User interaction patterns inform choice**:
- **Read-only status display** → Pill
- **Add/remove functionality** → Tag with dismissible option
- **Click to view details** → Badge wrapping interactive element

## Best Practices Summary

**Always**:
- Use semantic colors that match the meaning (success=green, danger=red, warning=yellow)
- Choose components based on data type and interaction patterns
- Keep Pill content to 2 words maximum for clarity
- Use `gap="statusIndicators"` for Pill collections
- Use `gap="tags"` for Tag collections
- Use `gap="space12"` for mixed status component layouts
- Provide AccessibleContent for screen readers when needed

**Never**:
- Use Pills for user-editable categories or tags
- Use Tags for system status that users cannot modify
- Use Badges for non-numeric or non-notification content
- Exceed 2-word limits in Pill main content or statusLabel
- Mix component types without clear semantic reasoning

**Remember**: Status components communicate different types of information - choose them based on what the data represents and how users interact with it, not just visual preference.

## Common Status Use Cases

**Educational Platform Status Indicators** follow established patterns for course management, assignments, and user access:

### Course and Content Status
```tsx
// Course publishing states
<Pill color="success" renderIcon={<IconPublishSolid />}>Published</Pill>
<Pill color="primary" renderIcon={<IconUnpublishedLine />}>Unpublished</Pill>

// Visibility and access control  
<Pill renderIcon={<IconEyeLine />}>Visible</Pill>
<Pill renderIcon={<IconOffLine />}>Hidden</Pill>
<Pill renderIcon={<IconLockLine />}>Locked</Pill>
<Pill renderIcon={<IconUnlockLine />}>Unlocked</Pill>
```

### Assignment and Task Status
```tsx
// Completion states
<Pill color="success" renderIcon={<IconCheckLine />}>Complete</Pill>
<Pill color="danger" renderIcon={<IconClockLine />}>Overdue</Pill>
<Pill renderIcon={<IconCalendarReservedLine />}>Concluded</Pill>
```

### Status Color Guidelines
- **`success`** - Published, Complete, Unlocked (positive states)
- **`danger`** - Overdue (urgent/critical states)  
- **`primary`** - Unpublished (neutral system states)
- **`info`** - Concluded (informational states)
- **No color** - Locked, Unlocked, Visible, Hidden (default states)

## Icon-Only Status Indicators

**Use icon-only indicators when space is constrained** or when icons provide clear, universally understood meaning without text labels.

### Implementation Pattern
```tsx
// Solid icons with semantic colors for standalone use
<IconLockSolid size="x-small" />
<IconPublishSolid color="success" size="x-small" />
<IconCheckSolid color="success" size="x-small" />
<IconClockSolid color="danger" size="x-small" />
```

### Icon Selection Guidelines
- **Use solid variants** for icon-only displays (better visual weight)
- **Use line variants** for visible/hidden states (IconEyeLine, IconOffLine)
- **Use line variants** for concluded state (IconCalendarReservedLine)
- **Size `x-small`** for compact displays, inline with text
- **Apply semantic colors** to reinforce meaning without text

### When to Use Icon-Only vs Pills
```tsx
// ✓ Icon-only for compact table cells, inline status
<Flex gap="statusIndicators" alignItems="center">
  <Text>Assignment 1</Text>
  <IconCheckSolid color="success" size="x-small" />
</Flex>

// ✓ Pills for primary status display, clear communication
<Flex gap="statusIndicators">
  <Pill color="success" renderIcon={<IconCheckLine />}>Complete</Pill>
  <Pill color="danger" renderIcon={<IconClockLine />}>Overdue</Pill>
</Flex>

// ✓ Side-by-side comparison for design systems
<Flex gap="statusIndicators" alignItems="center">
  <Pill color="success" renderIcon={<IconCheckLine />}>Complete</Pill>
  <IconCheckSolid color="success" size="x-small" />
</Flex>
```

### Accessibility for Icon-Only Status
```tsx
// ✓ Proper accessibility with screen reader support
<View 
  as="span" 
  title="Complete"
  role="img"
  aria-label="Assignment complete"
>
  <IconCheckSolid color="success" size="x-small" />
</View>

// ✓ Interactive icon-only with accessible labeling
<IconButton
  screenReaderLabel="Toggle course visibility"
  size="small"
  withBackground={false}
>
  <IconEyeLine size="x-small" />
</IconButton>
```

## Icon Color Options

**InstUI icons support semantic color values** that align with the design system:

### Standard Colors
- **`primary`** - Default blue, system states
- **`secondary`** - Muted colors, secondary information  
- **`brand`** - Brand-specific theming
- **`success`** - Green, positive states, completion
- **`danger`/`error`** - Red, errors, urgent states
- **`warning`** - Orange/yellow, caution states
- **`info`** - Blue, informational states
- **`alert`** - High contrast urgent states

### Inverse Colors
- **`primary-inverse`** - Light colors for dark backgrounds
- **`secondary-inverse`** - Light secondary for dark backgrounds

### AI-Themed Colors
- **`ai-primary`** - AI-specific primary theming
- **`ai-secondary`** - AI-specific secondary theming

### Color Usage Examples
```tsx
// Status-appropriate colors
<IconCheckLine color="success" />        // Green checkmark
<IconClockLine color="danger" />         // Red clock for overdue
<IconWarningLine color="warning" />      // Orange warning
<IconInfoLine color="info" />            // Blue information

// Default inheritance (inherits parent color)
<IconLockLine />                         // Uses parent/default color
<IconEyeLine />                          // Uses parent/default color
```

## Component Reference

### Color Variants
- **`primary`** - Default, neutral, general purpose
- **`success`** - Positive states, completed, approved
- **`info`** - Informational, in progress, pending
- **`warning`** - Caution, review needed, attention required
- **`danger`** - Error, failed, critical issues
- **`alert`** - Urgent, high priority, immediate attention

### Icon Size Options
- **`x-small`** - Compact inline indicators, table cells
- **`small`** - Standard inline with text
- **`medium`** - Default standalone icons
- **`large`** - Emphasis, primary displays
- **`x-large`** - Maximum emphasis, hero elements

### Size Variants (Tags)
- **`small`** - Compact contexts, secondary information
- **`medium`** - Standard size for most use cases
- **`large`** - Emphasis, primary category displays

### Badge Placement Options
- **`top start`** - Top-left corner
- **`top end`** - Top-right corner (default)
- **`bottom start`** - Bottom-left corner
- **`bottom end`** - Bottom-right corner
- **`start center`** - Left side, vertically centered
- **`end center`** - Right side, vertically centered