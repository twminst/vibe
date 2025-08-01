# Status Components Pattern - Design Specification

## Reference

- **Pill props** - Contextual status information with semantic colors - `node_modules/@instructure/ui-pill/lib/Pill/props.js`
- **Tag props** - Category/group representation with optional dismissal - `node_modules/@instructure/ui-tag/lib/Tag/props.js`
- **Badge props** - Count display and notification indicators - `node_modules/@instructure/ui-badge/lib/Badge/props.js`

## Core Principles

**Status components communicate different types of information through distinct visual patterns.** Each component serves a specific semantic purpose: Pills for contextual status, Tags for categorization, and Badges for counts and notifications.

**Content length constraints ensure optimal visual presentation.** Pills enforce a 2-word maximum for both main text and statusLabel to maintain consistent sizing and readability across the interface.

**Semantic color usage follows established conventions.** Status colors (success, warning, danger, info) convey meaning consistently across all status components, while neutral colors serve for general categorization.

## Pill Component Implementation

**Pills display contextual status information with semantic meaning**:

**Status Types**:
- `color="primary"` - Default neutral status
- `color="info"` - Informational status (Draft, In Progress)
- `color="success"` - Positive status (Completed, Approved)
- `color="warning"` - Cautionary status (Late, Pending)
- `color="danger"` - Critical status (Missing, Failed)
- `color="alert"` - Notification status (New, Updated)

**Content Structure**:
- Main text: Maximum 2 words for optimal display
- `statusLabel`: Optional prefix label, also 2-word maximum
- `renderIcon`: Leading icon for additional context
- Text overflow handled automatically with ellipsis

```tsx
// ✓ Correct - Proper status usage with semantic colors
<Pill color="success" renderIcon={<IconCheckLine />}>
  Completed
</Pill>

// ✓ Correct - Status label with appropriate length
<Pill statusLabel="Status" color="info">
  Draft
</Pill>

// ✗ Wrong - Text too long (exceeds 2-word guideline)
<Pill color="info">
  This assignment is currently in draft status
</Pill>

// ✗ Wrong - Using for dismissible content (use Tag instead)
<Pill onClick={handleDismiss}>
  Remove Me
</Pill>
```

## Tag Component Implementation

**Tags represent categories or groups with optional interaction capabilities**:

**Tag Variants**:
- `size="small"` - Compact display for dense layouts
- `size="medium"` - Default size for standard usage  
- `size="large"` - Prominent display for emphasis

**Interactive Features**:
- `dismissible={true}` - Enables removal functionality
- `onClick` handler - Required for dismissible behavior
- `disabled={true}` - Prevents interaction when needed

**Accessibility Requirements**:
- Use `AccessibleContent` with `alt` prop for dismissible tags
- Provide clear context about what removal means
- Ensure proper focus management for keyboard users

```tsx
// ✓ Correct - Basic category tag
<Tag text="JavaScript" margin="0 xx-small 0 0" />

// ✓ Correct - Dismissible tag with accessibility
<Tag
  text={
    <AccessibleContent alt="Remove JavaScript tag">
      JavaScript
    </AccessibleContent>
  }
  dismissible
  onClick={handleTagRemoval}
/>

// ✓ Correct - Size variants for different contexts
<Tag text="Small" size="small" />
<Tag text="Large" size="large" />

// ✗ Wrong - Missing accessibility for dismissible tag
<Tag text="Remove Me" dismissible onClick={handleRemove} />

// ✗ Wrong - Using for status information (use Pill instead)
<Tag text="Completed" color="success" />
```

## Badge Component Implementation

**Badges display numeric counts and notification indicators with flexible positioning**:

**Count Display**:
- `count={number}` - Shows numeric value up to 99
- `countUntil={99}` - Sets overflow threshold (displays "99+" when exceeded)
- `formatOutput` - Provides accessible description for screen readers

**Badge Types**:
- `type="count"` (default) - Numeric display for counts
- `type="notification"` - Small circle indicator for alerts

**Positioning Options**:
- `placement="top-end"` (default) - Upper right positioning
- `placement="top-start"` - Upper left positioning
- `placement="bottom-start"` - Lower left positioning
- `placement="bottom-end"` - Lower right positioning
- `placement="start-center"` - Left center positioning
- `placement="end-center"` - Right center positioning

**Display Modes**:
- Positioned - Overlays on child element (default)
- `standalone={true}` - Independent display without child wrapper

```tsx
// ✓ Correct - Count badge with accessibility
<Badge 
  count={99} 
  formatOutput={(count) => (
    <AccessibleContent alt={`You have ${count} new messages`}>
      {count}
    </AccessibleContent>
  )}
>
  <Button>Messages</Button>
</Badge>

// ✓ Correct - Notification badge with accessible output
<Badge
  type="notification"
  formatOutput={() => (
    <ScreenReaderContent>
      You have new notifications
    </ScreenReaderContent>
  )}
>
  <IconButton renderIcon={<IconBellLine />} />
</Badge>

// ✓ Correct - Overflow handling with custom threshold
<Badge count={150} countUntil={100}>
  <Button>Assignments</Button>
</Badge>

// ✓ Correct - Standalone badge for layout flexibility
<Badge standalone count={5} />

// ✗ Wrong - Missing formatOutput for accessibility
<Badge count={99}>
  <Button>Items</Button>
</Badge>

// ✗ Wrong - Using for text display (use Pill or Tag instead)
<Badge text="New Status">
  <Button>Status</Button>
</Badge>
```

## Component Selection Guidelines

**Choose components based on semantic meaning and interaction patterns**:

**Use Pill when**:
- Displaying contextual status information
- Showing system-generated states
- Communicating process completion or alerts
- Content is descriptive but not interactive

**Use Tag when**:
- Representing user-assigned categories
- Showing filterable or groupable attributes  
- Enabling removal or modification of assignments
- Content represents organizational metadata

**Use Badge when**:
- Displaying numeric counts or quantities
- Indicating presence of new/unread items
- Showing notification states
- Overlaying status on interactive elements

## Layout and Spacing Patterns

**Consistent spacing maintains visual hierarchy across status components**:

**Horizontal Arrangements**:
- Use `margin="0 xx-small 0 0"` for tag sequences
- Use `margin="x-small"` for pill collections
- Apply consistent gaps in Flex containers

**Vertical Stacking**:
- Use Flex `direction="column"` with appropriate gaps
- Apply `margin="0 0 moduleElements 0"` for section separation
- Maintain semantic spacing tokens throughout

**Grid Layouts**:
- Use InstUI Grid for responsive arrangements
- Apply `colSpacing="medium"` for balanced distribution
- Ensure proper alignment with `vAlign="top"`

## Responsive Behavior

**Status components adapt gracefully across different screen sizes**:

**Mobile Considerations**:
- Pill content remains readable at smaller sizes
- Tag dismissal targets meet 44px minimum touch size
- Badge positioning adjusts to prevent content overlap

**Desktop Optimization**:
- Multiple status items arrange horizontally when space allows
- Hover states provide clear interaction feedback
- Focus indicators maintain accessibility standards

## Accessibility Implementation

**Comprehensive accessibility support ensures inclusive user experience**:

**Screen Reader Support**:
- All interactive elements include proper ARIA labels
- `formatOutput` provides context for Badge counts
- `AccessibleContent` clarifies dismissible Tag actions

**Keyboard Navigation**:
- Dismissible Tags respond to Enter and Space keys
- Focus management follows logical tab order
- Visual focus indicators remain clearly visible

**Color Accessibility**:
- Status colors meet WCAG contrast requirements
- Semantic meaning supplements color-based information
- Icons provide additional visual context where needed

## Best Practices Summary

**Always**:
- Use semantic colors that match the content's meaning
- Provide accessible descriptions for interactive elements
- Follow the 2-word maximum guideline for Pill content
- Apply consistent spacing using InstUI tokens
- Choose components based on semantic purpose rather than appearance

**Never**:
- Use status colors for non-status information
- Skip accessibility props for interactive components
- Apply margins directly to status component text content
- Mix component types without clear semantic distinction
- Override system spacing with custom CSS margins

**Remember**: Status components communicate meaning through both visual design and semantic structure. Choose the component that best represents the relationship between the user and the information, not just the desired visual appearance.

## Component/Token/Value Reference

### Spacing Tokens
- **`xx-small`** - 0.25rem (4px) - Tight spacing between related tags
- **`x-small`** - 0.5rem (8px) - Standard pill margins and small gaps
- **`small`** - 0.75rem (12px) - Section element spacing
- **`medium`** - 1rem (16px) - Module-level spacing and card padding
- **`large`** - 1.5rem (24px) - Major section separation

### Color Variants
- **`primary`** - Standard brand color - Default neutral status
- **`info`** - Information blue - Draft, informational states  
- **`success`** - Success green - Completed, approved states
- **`warning`** - Warning yellow - Cautionary, pending states
- **`danger`** - Error red - Failed, missing, critical states
- **`alert`** - Alert orange - Notifications, updates