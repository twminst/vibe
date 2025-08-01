# Advanced Table Implementation Guide

This guide documents best practices for creating production-ready tables using Instructure UI components, based on comprehensive implementation and refinement experience.

## Core Architecture

### Required Imports
```tsx
import { View, Heading, Text, Flex, Responsive } from '@instructure/ui'
import { Table } from '@instructure/ui-table'
import { Checkbox } from '@instructure/ui-checkbox'
import { Alert } from '@instructure/ui-alerts'
import { Pagination } from '@instructure/ui-pagination'
import { ScreenReaderContent } from '@instructure/ui-a11y-content'
import { 
  IconPublishSolid,
  IconUnpublishedLine,
  IconCalendarReservedLine
} from '@instructure/ui-icons'
```

### Essential Component Structure
Use standard InstUI Table components instead of custom implementations:
- `Table` - Main table container with responsive layout support
- `Table.Head` - Header section with sorting capabilities
- `Table.Body` - Data rows container
- `Table.Row` - Individual table rows
- `Table.ColHeader` - Column headers with sorting support
- `Table.Cell` - Standard data cells
- `Table.RowHeader` - Use for checkbox columns to avoid colon rendering issues

## Responsive Design Implementation

### Breakpoint Strategy
```tsx
<Responsive
  query={{ small: { maxWidth: '40rem' }, large: { minWidth: '41rem' } }}
  props={{ small: { layout: 'stacked' }, large: { layout: 'auto' } }}
>
```

**Key Points:**
- Use `40rem` breakpoint for mobile/desktop transition
- `layout: 'stacked'` for mobile card view
- `layout: 'auto'` for desktop table view

### Mobile Alignment
```tsx
<Table.Cell textAlign={layout === 'stacked' ? 'start' : 'center'}>
```

**Critical Rule:** Always use conditional `textAlign` props for responsive alignment. Never use custom CSS.

### Card Styling for Desktop Only
```tsx
<Responsive
  query={{
    small: { maxWidth: '767px' },
    large: { minWidth: '768px' }
  }}
  props={{
    small: {},
    large: { 
      background: "primary", 
      padding: "paddingCardMedium", 
      borderRadius: "medium", 
      borderWidth: "small", 
      borderColor: "secondary" 
    }
  }}
>
```

## Row Selection Implementation

### Checkbox Column Structure
```tsx
<Table.ColHeader id="select-all" width="60px" textAlign="center">
  <Checkbox 
    label={<ScreenReaderContent>Select all assignments</ScreenReaderContent>} 
    checked={isAllSelected} 
    indeterminate={isSomeSelected} 
    onChange={handleSelectAll} 
  />
</Table.ColHeader>
```

**Critical:** Use `Table.RowHeader` (not `Table.Cell`) for checkbox cells to prevent colon rendering issues:
```tsx
<Table.RowHeader>
  <Checkbox 
    label={<ScreenReaderContent>Select assignment {row.title}</ScreenReaderContent>} 
    checked={selectedRows.has(row.id)} 
    onChange={() => handleRowSelect(row.id)} 
  />
</Table.RowHeader>
```

### Selection State Management
```tsx
const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set())

const isAllSelected = paginatedData.length > 0 && paginatedData.every(row => selectedRows.has(row.id))
const isSomeSelected = selectedRows.size > 0 && !isAllSelected
```

### Selection Feedback UI
```tsx
{selectedRows.size > 0 && (
  <View as="div" background="primary-inverse" padding="small" margin="0 0 small 0">
    <Text size="small" color="primary-inverse">
      {selectedRows.size} of {assignmentData.length} assignments selected
    </Text>
  </View>
)}
```

**Position:** Place selection feedback above the table for better visibility.

## Sorting Implementation

### Column Header Setup
```tsx
<Table.ColHeader 
  id="title" 
  width="30%" 
  textAlign="start" 
  onRequestSort={handleSort} 
  sortDirection={sortBy === 'title' ? direction : 'none'}
>
  {sortBy === 'title' ? ('Assignment') : (
    <>
      <span aria-hidden="true">Assignment</span>
      <ScreenReaderContent>sort by Assignment</ScreenReaderContent>
    </>
  )}
</Table.ColHeader>
```

### Sort Logic
```tsx
const sortedData = useMemo(() => {
  return [...assignmentData].sort((a, b) => {
    const aVal = a[sortBy]
    const bVal = b[sortBy]
    
    if (typeof aVal === 'string' && typeof bVal === 'string') {
      return ascending ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal)
    }
    
    if (aVal < bVal) return ascending ? -1 : 1
    if (aVal > bVal) return ascending ? 1 : -1
    return 0
  })
}, [sortBy, ascending])
```

## Status Indicators

### Icon-Only Status Implementation
Follow `@src\patterns\StatusComponents.md` guidelines for compact displays:

```tsx
<Table.Cell textAlign={layout === 'stacked' ? 'start' : 'center'}>
  <View 
    as="span" 
    title={row.status}
    role="img"
    aria-label={`Assignment status: ${row.status}`}
  >
    {row.status === 'Published' && <IconPublishSolid color="success" size="x-small" />}
    {row.status === 'Concluded' && <IconCalendarReservedLine color="primary" size="x-small" />}
    {row.status === 'Unpublished' && <IconUnpublishedLine color="primary" size="x-small" />}
  </View>
</Table.Cell>
```

**Key Principles:**
- Use solid icons for better visual weight in compact displays
- Apply semantic colors (`success`, `primary`, etc.)
- Use `size="x-small"` for table cells
- Always include accessibility attributes (`title`, `role="img"`, `aria-label`)

## Pagination Implementation

### Basic Pagination Structure
```tsx
<Pagination
  variant="compact"
  labelNext="Next page"
  labelPrev="Previous page"
  as="nav"
  margin="small"
>
  <Pagination.Page
    current={false}
    onClick={() => handlePageChange(currentPage - 1)}
    disabled={currentPage === 1}
  >
    Prev
  </Pagination.Page>
  {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => {
    const page = i + 1
    return (
      <Pagination.Page
        key={page}
        current={currentPage === page}
        onClick={() => handlePageChange(page)}
      >
        {page}
      </Pagination.Page>
    )
  })}
  <Pagination.Page
    current={false}
    onClick={() => handlePageChange(currentPage + 1)}
    disabled={currentPage === totalPages}
  >
    Next
  </Pagination.Page>
</Pagination>
```

### Pagination Info Display
```tsx
<View as="div" background="primary" margin="small 0 0">
  <Flex justifyItems="space-between" alignItems="center">
    <Text size="small" color="secondary">
      Showing {startIndex + 1}-{Math.min(startIndex + pageSize, sortedData.length)} of {sortedData.length} assignments
    </Text>
    <Pagination>...</Pagination>
  </Flex>
</View>
```

## Accessibility Implementation

### Screen Reader Support
```tsx
<Alert liveRegion={() => document.getElementById('flash-messages') || document.body} liveRegionPoliteness="polite" screenReaderOnly>
  {selectedRows.size > 0 ? `${selectedRows.size} assignments selected. ` : ''}
  Sorted by {sortBy} in {direction} order. Page {currentPage} of {totalPages}.
</Alert>
```

### Live Region Setup
```tsx
<div id="flash-messages" role="alert" aria-live="polite" aria-atomic="true" style={{ position: 'absolute', left: '-10000px' }} />
```

### Table Caption
```tsx
<Table caption={`Comprehensive assignment list: sorted by ${sortBy} in ${direction} order`} layout={layout}>
```

## Critical "Never Do" Rules

### 1. Never Use Custom CSS
- **Wrong:** Custom stylesheets or inline styles
- **Right:** InstUI props only (`background`, `padding`, `margin`, `borderRadius`)

### 2. Never Use Table.Cell for Checkboxes
- **Wrong:** `<Table.Cell><Checkbox /></Table.Cell>` (causes colon rendering)
- **Right:** `<Table.RowHeader><Checkbox /></Table.RowHeader>`

### 3. Never Use Custom Table Components
- **Wrong:** Custom `TableRow`, `TableCell` components
- **Right:** Standard `Table.Row`, `Table.Cell` components

### 4. Never Use Hacky TypeScript
- **Wrong:** `as any` type assertions for layout props
- **Right:** Proper type handling with standard InstUI components

### 5. Never Apply Margins to Text Components
- **Wrong:** `<Text margin="small">Content</Text>`
- **Right:** Wrap in `View` or use `Flex` gaps

## Performance Optimizations

### Memoization Strategy
```tsx
const sortedData = useMemo(() => {
  // Sorting logic
}, [sortBy, ascending])

const handleSort = useCallback((event, { id }) => {
  // Sort handling
}, [sortBy, ascending])
```

### Pagination Calculations
```tsx
const startIndex = (currentPage - 1) * pageSize
const paginatedData = sortedData.slice(startIndex, startIndex + pageSize)
const totalPages = Math.ceil(sortedData.length / pageSize)
```

## Complete Implementation Checklist

- [ ] Use standard InstUI Table components (no custom implementations)
- [ ] Implement responsive design with proper breakpoints (40rem)
- [ ] Add conditional `textAlign` for mobile left-alignment
- [ ] Use `Table.RowHeader` for checkbox columns
- [ ] Implement proper selection state management
- [ ] Add sorting with memoized data processing
- [ ] Use icon-only status indicators with accessibility
- [ ] Include explicit Prev/Next pagination buttons
- [ ] Add comprehensive screen reader support
- [ ] Position selection feedback above table
- [ ] Apply card styling only on desktop
- [ ] Use semantic spacing and colors throughout
- [ ] Test responsive behavior at 40rem breakpoint
- [ ] Verify all accessibility attributes are present
- [ ] Ensure no custom CSS or TypeScript hacks

This implementation creates production-ready tables that are fully accessible, responsive, and aligned with InstUI design principles.