# Table Component Pattern - Design Specifications

## Overview
This document provides detailed technical design specifications for implementing a comprehensive table component pattern using Instructure UI components. It translates the functional requirements into specific InstUI component usage patterns and implementation guidance.

## Design Architecture

### Component Hierarchy
```
TablePattern
├── TableContainer (View)
├── TableHeader (Table.Head)
│   ├── HeaderRow (Table.Row)
│   └── HeaderCells (Table.ColHeader)
├── TableBody (Table.Body)
│   ├── DataRows (Table.Row)
│   └── DataCells (Table.Cell)
├── TableFooter (View)
│   ├── SelectionSummary (Flex)
│   └── PaginationControls (Pagination)
└── TableStates
    ├── LoadingState (Spinner + Skeleton)
    ├── EmptyState (EmptyState)
    └── ErrorState (Alert)
```

## InstUI Component Specifications

### 1. Core Table Implementation (FR-1, FR-2, FR-3)

#### Primary Table Structure
```typescript
// Use @instructure/ui-table as the foundation
import { Table } from '@instructure/ui-table'
import { View } from '@instructure/ui-view'
import { Flex } from '@instructure/ui-flex'

// Container with card styling
<View
  as="div"
  background="primary"
  borderRadius="medium"
  borderWidth="small"
  shadow="above"
  padding="medium"
>
  <Table caption="Data table with sorting and selection">
    <Table.Head>
      <Table.Row>
        {/* Header cells with sorting capability */}
      </Table.Row>
    </Table.Head>
    <Table.Body>
      {/* Data rows */}
    </Table.Body>
  </Table>
</View>
```

#### Column Header Design (FR-2)
```typescript
import { Heading } from '@instructure/ui-heading'
import { IconButton } from '@instructure/ui-buttons'
import { IconArrowUpLine, IconArrowDownLine } from '@instructure/ui-icons'

// Sortable header cell implementation
<Table.ColHeader 
  id={`header-${column.key}`}
  scope="col"
  textAlign={column.align || 'start'}
>
  <Flex alignItems="center" gap="x-small">
    <Heading level="h4" as="span" margin="none">
      {column.label}
    </Heading>
    {column.sortable && (
      <IconButton
        size="small"
        withBackground={false}
        withBorder={false}
        screenReaderLabel={`Sort by ${column.label}`}
        renderIcon={getSortIcon(column.sortState)}
        onClick={() => handleSort(column.key)}
      />
    )}
  </Flex>
</Table.ColHeader>
```

#### Data Row Styling (FR-3)
```typescript
import { Text } from '@instructure/ui-text'

// Row with hover and selection states
<Table.Row 
  hover={true}
  selected={isRowSelected}
  onClick={onRowClick}
>
  <Table.Cell textAlign={cell.align || 'start'}>
    {renderCellContent(cell)}
  </Table.Cell>
</Table.Row>

// Cell content rendering with type support
const renderCellContent = (cell: CellData) => {
  switch (cell.type) {
    case 'text':
      return <Text size="medium">{cell.value}</Text>
    case 'number':
      return <Text size="medium" weight="bold">{cell.value}</Text>
    case 'component':
      return cell.component
    default:
      return <Text size="medium">{String(cell.value)}</Text>
  }
}
```

### 2. Responsive Design Implementation (FR-4)

#### Breakpoint Strategy
```typescript
import { Responsive } from '@instructure/ui-responsive'

// Responsive table container
<Responsive
  query={{
    small: { maxWidth: '767px' },
    medium: { minWidth: '768px', maxWidth: '1023px' },
    large: { minWidth: '1024px', maxWidth: '1439px' },
    'x-large': { minWidth: '1440px' }
  }}
  props={{
    small: { layout: 'stacked' },
    medium: { layout: 'horizontal', showColumns: 'essential' },
    large: { layout: 'horizontal', showColumns: 'all' },
    'x-large': { layout: 'horizontal', showColumns: 'all' }
  }}
>
  {({ layout, showColumns }) => (
    <TableComponent layout={layout} visibleColumns={showColumns} />
  )}
</Responsive>
```

#### Mobile-First Approach
```typescript
// Small screen: horizontal scroll with sticky first column
<View
  maxWidth="100vw"
  overflowX="auto"
  position="relative"
>
  <Table layout="fixed" minWidth="800px">
    {/* Sticky first column for context */}
    <Table.ColHeader 
      position="sticky" 
      insetInlineStart="0"
      background="primary"
      zIndex="above"
    >
      Name
    </Table.ColHeader>
    {/* Remaining columns */}
  </Table>
</View>
```

### 3. Loading States Design (FR-5)

#### Loading Indicator Implementation
```typescript
import { Spinner } from '@instructure/ui-spinner'
import { SkeletonText } from '@instructure/ui-skeleton'

// Loading state overlay
<View
  position="relative"
  minHeight="400px"
>
  {isLoading && (
    <View
      position="absolute"
      insetBlockStart="0"
      insetInlineStart="0"
      width="100%"
      height="100%"
      background="primary-transparent"
      display="flex"
      justifyItems="center"
      alignItems="center"
      zIndex="above"
    >
      <Spinner
        renderTitle="Loading table data"
        size="large"
        margin="medium"
      />
    </View>
  )}
  
  {/* Skeleton rows for structure indication */}
  {isLoading && (
    <Table>
      <Table.Body>
        {Array.from({ length: 5 }).map((_, index) => (
          <Table.Row key={`skeleton-${index}`}>
            {columns.map((column) => (
              <Table.Cell key={column.key}>
                <SkeletonText width={column.skeletonWidth || '80%'} />
              </Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )}
</View>
```

### 4. Empty State Design (FR-6)

#### EmptyState Component Implementation
```typescript
import { EmptyState } from '@instructure/ui-empty-state'
import { IconDocumentLine } from '@instructure/ui-icons'
import { Button } from '@instructure/ui-buttons'

// Empty state with actionable guidance
<View
  textAlign="center"
  padding="xx-large"
  minHeight="400px"
  display="flex"
  justifyItems="center"
  alignItems="center"
>
  <EmptyState
    renderIcon={<IconDocumentLine size="large" />}
    iconColor="secondary"
    heading="No data available"
    description="There are currently no items to display in this table."
    renderAction={
      onCreateNew && (
        <Button
          color="primary"
          onClick={onCreateNew}
        >
          Add New Item
        </Button>
      )
    }
  />
</View>
```

### 5. Sorting Implementation (FR-7)

#### Visual Sort Indicators
```typescript
import { 
  IconArrowUpLine, 
  IconArrowDownLine,
  IconArrowUpDownLine 
} from '@instructure/ui-icons'

// Sort state visualization
const getSortIcon = (sortState: SortState) => {
  switch (sortState) {
    case 'asc':
      return IconArrowUpLine
    case 'desc':
      return IconArrowDownLine
    default:
      return IconArrowUpDownLine
  }
}

// Accessible sort button
<IconButton
  size="small"
  withBackground={false}
  withBorder={false}
  color={sortState !== 'none' ? 'primary' : 'secondary'}
  screenReaderLabel={`Sort by ${column.label} ${getSortLabel(sortState)}`}
  renderIcon={getSortIcon(sortState)}
  onClick={() => handleSort(column.key)}
/>
```

### 6. Row Selection Design (FR-8)

#### Selection Column Implementation
```typescript
import { Checkbox } from '@instructure/ui-checkbox'

// Selection header with select-all
<Table.ColHeader width="60px" textAlign="center">
  <Checkbox
    label="Select all rows"
    checked={allSelected}
    indeterminate={someSelected && !allSelected}
    onChange={handleSelectAll}
  />
</Table.ColHeader>

// Individual row selection
<Table.Cell textAlign="center">
  <Checkbox
    label={`Select row ${rowIndex + 1}`}
    checked={isRowSelected(row.id)}
    onChange={() => handleRowSelect(row.id)}
  />
</Table.Cell>

// Selection state styling
<Table.Row 
  selected={isRowSelected(row.id)}
  background={isRowSelected(row.id) ? 'primary-selected' : undefined}
>
```

#### Selection Summary Display
```typescript
// Selection count display
{selectedCount > 0 && (
  <View
    background="info"
    padding="small"
    borderRadius="medium"
    margin="0 0 medium 0"
  >
    <Flex alignItems="center" gap="small">
      <Text size="small" weight="bold">
        {selectedCount} item{selectedCount !== 1 ? 's' : ''} selected
      </Text>
      <Button
        size="small"
        color="secondary"
        onClick={clearSelection}
      >
        Clear Selection
      </Button>
    </Flex>
  </View>
)}
```

### 7. Pagination Design (FR-9)

#### Pagination Component Integration
```typescript
import { Pagination } from '@instructure/ui-pagination'

// Footer with pagination and summary
<View
  background="secondary"
  padding="small medium"
  borderRadius="0 0 medium medium"
  borderWidth="small 0 0 0"
>
  <Flex justifyItems="space-between" alignItems="center">
    <Text size="small" color="secondary">
      Showing {startRecord}-{endRecord} of {totalRecords} results
    </Text>
    
    <Pagination
      variant="compact"
      labelNext="Next page"
      labelPrev="Previous page"
      onSetPage={handlePageChange}
      currentPage={currentPage}
      totalPageCount={totalPages}
      pageSize={pageSize}
      onSetPageSize={handlePageSizeChange}
      pageSizeOptions={[10, 25, 50, 100]}
    />
  </Flex>
</View>
```

### 8. Accessibility Implementation (FR-10)

#### ARIA Labels and Roles
```typescript
// Main table with comprehensive accessibility
<Table
  caption="Student grades table with sorting and selection capabilities"
  role="table"
  aria-label="Student data"
  aria-rowcount={totalRows}
  aria-colcount={columns.length}
>
  <Table.Head role="rowgroup">
    <Table.Row role="row" aria-rowindex={1}>
      <Table.ColHeader
        role="columnheader"
        aria-sort={getSortAriaValue(sortState)}
        scope="col"
      >
        {/* Header content */}
      </Table.ColHeader>
    </Table.Row>
  </Table.Head>
  
  <Table.Body role="rowgroup">
    {data.map((row, index) => (
      <Table.Row
        key={row.id}
        role="row"
        aria-rowindex={index + 2}
        aria-selected={isRowSelected(row.id)}
      >
        {/* Cell content */}
      </Table.Row>
    ))}
  </Table.Body>
</Table>
```

#### Keyboard Navigation Support
```typescript
// Keyboard event handling
const handleKeyDown = (event: KeyboardEvent) => {
  switch (event.key) {
    case 'ArrowUp':
      event.preventDefault()
      navigateRow(-1)
      break
    case 'ArrowDown':
      event.preventDefault()
      navigateRow(1)
      break
    case 'ArrowLeft':
    case 'ArrowRight':
      // Handle column navigation
      break
    case ' ':
      event.preventDefault()
      toggleRowSelection(focusedRowId)
      break
    case 'Enter':
      event.preventDefault()
      activateRow(focusedRowId)
      break
  }
}
```

## Component Interface Design

### TypeScript Interface Definitions
```typescript
// Core data structures
interface TableColumn {
  key: string
  label: string
  sortable?: boolean
  align?: 'start' | 'center' | 'end'
  width?: string | number
  type?: 'text' | 'number' | 'date' | 'component'
  renderCell?: (value: any, row: TableRow) => React.ReactNode
}

interface TableRow {
  id: string | number
  [key: string]: any
}

interface TableState {
  data: TableRow[]
  sortColumn?: string
  sortDirection?: 'asc' | 'desc'
  selectedRows: Set<string | number>
  currentPage: number
  pageSize: number
  loading: boolean
  error?: string
}

// Component props interface
interface TablePatternProps {
  columns: TableColumn[]
  data: TableRow[]
  caption?: string
  selectable?: boolean
  sortable?: boolean
  paginated?: boolean
  pageSize?: number
  loading?: boolean
  emptyStateMessage?: string
  onRowSelect?: (rowIds: (string | number)[]) => void
  onSort?: (column: string, direction: 'asc' | 'desc') => void
  onPageChange?: (page: number, pageSize: number) => void
}
```

## Styling Specifications

### InstUI Design Token Usage
```typescript
// Consistent spacing and colors
const tableStyles = {
  container: {
    background: 'primary',
    borderRadius: 'medium',
    borderWidth: 'small',
    shadow: 'above',
    padding: 'medium'
  },
  
  header: {
    background: 'secondary',
    borderWidth: '0 0 small 0',
    padding: 'small medium'
  },
  
  row: {
    hover: {
      background: 'primary-hover'
    },
    selected: {
      background: 'primary-selected'
    }
  },
  
  cell: {
    padding: 'small medium',
    borderWidth: '0 0 small 0'
  }
}
```

### Responsive Breakpoint Handling
```typescript
// Mobile-specific styling adjustments
const mobileStyles = {
  table: {
    minWidth: 'min-content',
    maxWidth: '100%'
  },
  
  cell: {
    minWidth: '120px',
    padding: 'x-small small'
  },
  
  // Sticky first column
  firstColumn: {
    position: 'sticky',
    insetInlineStart: 0,
    background: 'primary',
    zIndex: 'above'
  }
}
```

## Performance Optimization Strategies

### Virtualization Implementation
```typescript
// Virtual scrolling for large datasets
import { FixedSizeList as List } from 'react-window'

// Virtualized table body for > 100 rows
const VirtualizedTableBody = ({ 
  items, 
  itemHeight = 48,
  containerHeight = 400 
}) => (
  <List
    height={containerHeight}
    itemCount={items.length}
    itemSize={itemHeight}
    itemData={items}
  >
    {({ index, style, data }) => (
      <div style={style}>
        <TableRow data={data[index]} />
      </div>
    )}
  </List>
)
```

### Memory Optimization
```typescript
// Memoized components for performance
import { memo, useMemo, useCallback } from 'react'

const TableCell = memo(({ value, type, align }) => {
  const content = useMemo(() => {
    return renderCellContent(value, type)
  }, [value, type])
  
  return (
    <Table.Cell textAlign={align}>
      {content}
    </Table.Cell>
  )
})

const TableRow = memo(({ row, columns, selected, onSelect }) => {
  const handleSelect = useCallback(() => {
    onSelect(row.id)
  }, [row.id, onSelect])
  
  return (
    <Table.Row selected={selected} onClick={handleSelect}>
      {columns.map(column => (
        <TableCell
          key={column.key}
          value={row[column.key]}
          type={column.type}
          align={column.align}
        />
      ))}
    </Table.Row>
  )
})
```

## Error Handling Design

### Error State Display
```typescript
import { Alert } from '@instructure/ui-alerts'

// Error state component
const TableErrorState = ({ error, onRetry }) => (
  <View padding="large" textAlign="center">
    <Alert
      variant="error"
      margin="medium"
      renderCloseButtonLabel="Dismiss"
    >
      <Text weight="bold">Error loading table data</Text>
      <Text as="div" margin="x-small 0 0 0">
        {error.message || 'An unexpected error occurred while loading the data.'}
      </Text>
    </Alert>
    
    {onRetry && (
      <Button
        color="primary"
        margin="medium 0 0 0"
        onClick={onRetry}
      >
        Retry Loading
      </Button>
    )}
  </View>
)
```

## Testing Considerations

### Accessibility Testing Requirements
- Screen reader compatibility (JAWS, NVDA, VoiceOver)
- Keyboard navigation functionality
- ARIA label accuracy and completeness
- Focus management during interactions
- Color contrast compliance

### Performance Testing Benchmarks
- Initial render time: < 100ms for 50 rows
- Sort operation: < 200ms for 1000 rows
- Selection state updates: < 50ms
- Page navigation: < 100ms

### Cross-browser Testing Matrix
- Chrome 120+ (primary)
- Firefox 120+ 
- Safari 17+
- Edge 120+
- Mobile Safari (iOS 16+)
- Chrome Mobile (Android 12+)

## Implementation Notes

### InstUI-Specific Considerations
1. **Component Limitations**: InstUI Table component may not support all advanced features; custom extensions may be needed
2. **Theming Integration**: Ensure all custom styling uses InstUI design tokens
3. **Icon Usage**: Import icons from @instructure/ui-icons and render with renderIcon prop
4. **Responsive Behavior**: Leverage InstUI's Responsive component for breakpoint handling

### Development Best Practices
1. **Type Safety**: Implement comprehensive TypeScript interfaces
2. **Performance**: Use React.memo and useMemo for expensive operations
3. **Accessibility**: Test with screen readers throughout development
4. **Testing**: Write unit tests for all interactive behaviors

This design specification provides the technical foundation for implementing a comprehensive, accessible, and performant table component pattern using InstUI components and established React patterns.