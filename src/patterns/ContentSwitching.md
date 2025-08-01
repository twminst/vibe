# Content Switching Patterns

This pattern demonstrates various content navigation and organization techniques using Instructure UI components including pagination, toggle details, and tabbed interfaces.

## Components Used

### Core Navigation
- **Tabs** - Primary content organization with icon-enhanced labels
- **Pagination** - Multi-variant page navigation (compact, full, input)
- **ToggleDetails** - Expandable content sections with state management

### Supporting Components
- **Button** - Variant selection and interactive controls
- **Badge** - Content quantity indicators
- **List** - Structured content presentation
- **Flex** - Responsive layout and alignment
- **Icons** - Visual content categorization

## Key Features

### Pagination Variants
- **Compact**: Space-efficient pagination for constrained layouts
- **Full**: Prominent pagination with generous spacing
- **Input**: Direct page entry with arrow navigation for large datasets

### Toggle Details Implementation
- **Filled variant** for better visual hierarchy
- **Icon-enhanced summaries** with semantic color coding
- **State management** tracking expanded sections
- **Badge integration** showing item counts

### Tabbed Navigation
- **Secondary variant** tabs with icon and text labels
- **Responsive behavior** adapting to screen size
- **Accessible navigation** with proper ARIA labels

## Use Cases

### When to Use Pagination
- **Large datasets** requiring page-by-page navigation
- **Performance optimization** when loading all content would be slow
- **User control** over content consumption pace

### When to Use ToggleDetails
- **Progressive disclosure** of detailed information
- **Content organization** reducing cognitive load
- **Optional content** that not all users need to see

### When to Use Tabs
- **Related content** that can be logically grouped
- **Context switching** within the same workflow
- **Persistent navigation** where users frequently switch between views

## Implementation Patterns

### State Management
```tsx
const [selectedTab, setSelectedTab] = useState<number>(0)
const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set())
const [currentPage, setCurrentPage] = useState(1)
```

### Dynamic Content Loading
```tsx
{tab.id === 'pagination' && <PaginationDemo />}
{tab.id === 'toggle-details' && <ToggleDetailsDemo />}
{tab.id === 'documentation' && <DocumentationContent />}
```

### Pagination Variant Handling
```tsx
const renderPaginationByVariant = () => {
  if (variant === 'input') {
    return (
      <Pagination
        variant="input"
        currentPage={currentPage}
        totalPageNumber={totalPages}
        onPageChange={setCurrentPage}
      />
    )
  }
  
  // Manual approach for compact/full variants with chevron arrows
  return (
    <Pagination variant={variant}>
      <Pagination.Page onClick={handlePrevious} disabled={isFirstPage}>
        <IconArrowOpenStartLine />
      </Pagination.Page>
      {/* Page numbers */}
      <Pagination.Page onClick={handleNext} disabled={isLastPage}>
        <IconArrowOpenEndLine />
      </Pagination.Page>
    </Pagination>
  )
}
```

### Responsive Considerations
- Tab labels may need abbreviation on mobile
- Pagination controls should maintain touch-friendly sizing
- ToggleDetails summaries should remain scannable on small screens

## Accessibility Features

### Screen Reader Support
- Proper ARIA labels for pagination controls
- Semantic heading structure within toggle sections
- Tab navigation with keyboard support

### Visual Indicators
- Icons provide additional context beyond text
- Badge counts help users understand content scope
- Color coding follows InstUI semantic guidelines

## Best Practices

### Cognitive Load Management
- Don't hide critical information behind toggles
- Limit tab count to 7 or fewer
- Provide clear indicators of content type and quantity

### Performance Considerations
- Lazy load toggle content when possible
- Consider virtual scrolling for very large paginated datasets
- Cache expanded state to improve perceived performance

### User Experience
- Preserve navigation state during page interactions
- Provide feedback for loading states
- Consider default expanded state for important content

## Code Examples

### Basic Tab Structure
```tsx
<Tabs variant="secondary" onRequestTabChange={handleTabChange}>
  {tabs.map((tab, index) => (
    <Tabs.Panel
      key={tab.id}
      renderTitle={
        <Flex alignItems="center" gap="x-small">
          {tab.icon}
          <span>{tab.label}</span>
        </Flex>
      }
      isSelected={selectedTab === index}
    >
      {/* Tab content */}
    </Tabs.Panel>
  ))}
</Tabs>
```

### ToggleDetails with State Management
```tsx
<ToggleDetails
  summary={
    <Flex alignItems="center" gap="small">
      <IconDocumentLine color="primary" />
      <View as="div">
        <Text weight="bold">{section.title}</Text>
        <Text size="small" color="secondary">{section.summary}</Text>
      </View>
      <Badge count={section.items.length} variant="primary" standalone />
    </Flex>
  }
  expanded={expandedSections.has(section.id)}
  onToggle={(event, expanded) => handleToggle(section.id, expanded)}
  variant="filled"
>
  {/* Content */}
</ToggleDetails>
```

### Interactive Pagination Variants
```tsx
<Flex gap="small">
  <Button 
    color={variant === 'compact' ? 'primary' : 'secondary'}
    onClick={() => setVariant('compact')}
  >
    Compact
  </Button>
  <Button 
    color={variant === 'full' ? 'primary' : 'secondary'}
    onClick={() => setVariant('full')}
  >
    Full
  </Button>
  <Button 
    color={variant === 'input' ? 'primary' : 'secondary'}
    onClick={() => setVariant('input')}
  >
    Input
  </Button>
</Flex>
```

This pattern provides a comprehensive foundation for content organization and navigation, supporting both casual browsing and targeted information seeking behaviors while maintaining accessibility and performance standards.