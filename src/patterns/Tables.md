# Table Component Pattern

## Reference

- **Table props** - Table component with responsive layout capabilities - `node_modules/@instructure/ui-table/lib/Table/props.js`
- **Responsive props** - Responsive breakpoint management for layout switching - `node_modules/@instructure/ui-responsive/lib/Responsive/props.js`
- **Alert props** - Screen reader announcements for dynamic content - `node_modules/@instructure/ui-alerts/lib/Alert/props.js`

## Core Principles

**All tables MUST be implemented with responsive behavior** to ensure accessibility and usability across all device sizes.

**Tables MUST use InstUI native sorting with `onRequestSort`** rather than custom icon implementations for consistent user experience and proper accessibility.

**Screen reader announcements MUST be implemented** for all dynamic table operations including sorting and selection state changes.

## Responsive Implementation

**Responsive tables automatically adapt to screen size** using InstUI's Responsive component with proper breakpoint management:

**Required Implementation**:
- `layout="auto"` - Standard table layout for screens ≥41rem
- `layout="stacked"` - Card-like mobile layout for screens <40rem
- `renderSortLabel="Sort by"` - Provides context for screen readers
- Touch-friendly interactions on mobile devices

**Breakpoint Configuration**:
- `small: { maxWidth: '40rem' }` - Mobile and narrow viewports
- `large: { minWidth: '41rem' }` - Desktop and tablet viewports

## Sorting Implementation

**InstUI native sorting provides consistent user experience** with built-in accessibility features:

```tsx
// ✓ Correct - Use InstUI native sorting
<Table.ColHeader
  onRequestSort={handleSort}
  sortDirection={column === sortColumn ? sortDirection : 'none'}
  stackedSortByLabel={columnLabel}
>
  {column === sortColumn ? (
    columnLabel
  ) : (
    <>
      <span aria-hidden="true">{columnLabel}</span>
      <ScreenReaderContent>sort by {columnLabel}</ScreenReaderContent>
    </>
  )}
</Table.ColHeader>

// ✓ Correct - Screen reader announcements
<Alert
  liveRegion={() => document.getElementById('flash-messages')}
  liveRegionPoliteness="polite"
  screenReaderOnly
>
  {`Sorted by ${sortColumn} in ${sortDirection} order`}
</Alert>

// ✘ Wrong - Custom sort icons without accessibility
<IconButton
  renderIcon={getSortIcon(column)}
  onClick={() => handleSort(column)}
/>
```

**Sort State Management**:
- **Initial State**: Default to first column, ascending order
- **Toggle Logic**: Same column toggles direction, new column resets to ascending
- **Screen Reader**: Announce all sort changes via Alert component
- **Visual Feedback**: InstUI handles sort direction indicators automatically

## Selection Patterns

**Row selection enhances table functionality** for bulk operations and user workflow:

**Selection Components**:
- `checked` - Individual row selection state
- `indeterminate` - Partial selection indicator for select-all
- Selection count display with proper pluralization
- Visual highlighting for selected rows

## Responsive Layout Patterns

**Table layouts transform for optimal mobile experience**:

```tsx
// ✓ Correct - Responsive wrapper with proper breakpoints
<Responsive
  query={{
    small: { maxWidth: '40rem' },
    large: { minWidth: '41rem' }
  }}
  props={{
    small: { layout: 'stacked' },
    large: { layout: 'auto' }
  }}
>
  {(props) => (
    <Table caption="Descriptive table caption" {...props}>
      <Table.Head renderSortLabel="Sort by">
        {/* Column headers with sorting */}
      </Table.Head>
      <Table.Body>
        {/* Data rows */}
      </Table.Body>
    </Table>
  )}
</Responsive>

// ✘ Wrong - Fixed layout without responsive behavior
<Table>
  <Table.Head>
    {/* Headers without responsive consideration */}
  </Table.Head>
</Table>
```

**Mobile Optimization Patterns**:
- **Stacked Layout**: Each row becomes a card-like display
- **Touch Targets**: Minimum 44px interaction areas
- **Horizontal Scroll**: When stacked layout isn't suitable
- **Readable Text**: Appropriate font sizes for mobile screens

## Accessibility Implementation

**Tables require comprehensive accessibility features** for screen reader users and keyboard navigation:

**Required ARIA Patterns**:
- `caption` - Describes table purpose and current sort state
- `scope="col"` - Column header identification
- `aria-selected` - Row selection states
- `aria-live="polite"` - Dynamic content announcements

**Keyboard Navigation**:
- Tab order through interactive elements
- Enter/Space for selection actions
- Arrow keys for table navigation (when implemented)
- Focus management during state changes

## Best Practices Summary

**Always**:
- Use Responsive component with 40rem breakpoint
- Implement InstUI native sorting with onRequestSort
- Provide screen reader announcements for dynamic changes
- Test on actual mobile devices for touch interactions
- Include descriptive table captions with current sort state

**Never**:
- Create fixed-width tables without responsive behavior
- Use custom sort icons without proper accessibility
- Skip screen reader announcements for dynamic content
- Apply margins directly to Table components (use View containers)
- Implement tables without proper ARIA labels and roles

**Remember**: Tables are complex interface elements that must work seamlessly across all devices and assistive technologies. Responsive design and accessibility are not optional features but fundamental requirements.

## Component Reference

### Responsive Breakpoints
- **`small`** - maxWidth: 40rem (640px) - Mobile and narrow viewports
- **`large`** - minWidth: 41rem (656px) - Desktop and tablet viewports

### Table Layout Options
- **`layout="auto"`** - Standard table layout for desktop
- **`layout="stacked"`** - Mobile-optimized card layout
- **`layout="fixed"`** - Fixed column widths (use sparingly)

### Sort Direction Values
- **`"ascending"`** - A to Z, 1 to 9, oldest to newest
- **`"descending"`** - Z to A, 9 to 1, newest to oldest
- **`"none"`** - No sorting applied to column

---

## Implementation Notes

This pattern demonstrates responsive-first table design using InstUI components. Key structural principles:

**Architecture**:
1. **Responsive wrapper** - Controls layout switching based on viewport
2. **Native sorting** - Uses InstUI's built-in sort functionality
3. **Screen reader support** - Alert component announces state changes
4. **Touch optimization** - Mobile-friendly interactions and layouts
5. **Semantic markup** - Proper table structure with ARIA labels

**Design Philosophy**:
- Mobile-first approach with desktop enhancement
- Accessibility as a core requirement, not an afterthought
- Consistent with Canvas design system patterns
- Performance-optimized with proper state management
- Extensible architecture for additional table features