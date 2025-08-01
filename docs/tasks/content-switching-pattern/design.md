# ContentSwitching Pattern - Design Specifications

## Design Overview

The ContentSwitching pattern provides a comprehensive showcase of InstUI's content navigation and organization components. This design specification outlines the visual hierarchy, component relationships, and interaction patterns that create an intuitive and accessible user experience for content switching mechanisms.

## Visual Design Principles

### 1. Hierarchical Organization
- **Primary Navigation**: Tabs serve as the main content organization layer
- **Secondary Navigation**: Pagination handles data subset navigation within tabs
- **Tertiary Navigation**: ToggleDetails provide granular content access
- **Clear Visual Hierarchy**: Each navigation level uses distinct visual weight and spacing

### 2. Consistency Standards
- **Spacing**: Use InstUI's standard spacing scale with Flex gaps for consistent layouts
- **Typography**: Follow InstUI heading and text variants for appropriate content hierarchy
- **Color Scheme**: Utilize InstUI's semantic color palette for states and interactions
- **Border Radius**: All card elements use `borderRadius="medium"` for system consistency

### 3. Responsive Design Strategy
- **Breakpoint Utilization**: Small, medium, large, x-large breakpoints for adaptive layouts
- **Content Prioritization**: Most important navigation remains visible at all screen sizes
- **Progressive Disclosure**: Advanced features become available as screen real estate increases

## Component Design Specifications

### Pagination Component Design

#### Full Pagination Variant
```typescript
// Visual Structure
<Pagination
  variant="full"
  page={currentPage}
  pageCount={totalPages}
  pageSize={itemsPerPage}
  pageSizeOption={[10, 25, 50, 100]}
  margin="medium"
/>
```

**Design Properties:**
- **Layout**: Horizontal flow with page numbers, navigation arrows, and page size selector
- **Visual Weight**: Medium emphasis to balance with surrounding content
- **Spacing**: `margin="medium"` for consistent separation from content
- **Interactive States**: Hover, focus, and active states follow InstUI button patterns

#### Compact Pagination Variant
```typescript
// Visual Structure
<Pagination
  variant="compact"
  page={currentPage}
  pageCount={totalPages}
  margin="small"
/>
```

**Design Properties:**
- **Layout**: Minimal horizontal layout with navigation arrows and current page indicator
- **Visual Weight**: Low emphasis for secondary navigation contexts
- **Spacing**: `margin="small"` for tighter integration with content
- **Use Cases**: Embedded within cards, modals, or sidebar contexts

#### Input Pagination Variant
```typescript
// Visual Structure  
<Pagination
  variant="full"
  page={currentPage}
  pageCount={totalPages}
  showFirstButton={false}
  showLastButton={false}
  margin="medium"
/>
```

**Design Properties:**
- **Layout**: Direct input field with validation and navigation controls
- **Visual Weight**: Medium emphasis with focus on input interaction
- **Validation**: Real-time feedback for invalid page numbers
- **Use Cases**: Large datasets where direct navigation is preferred

### Tabs Component Design

#### Basic Horizontal Tabs
```typescript
// Visual Structure
<Tabs margin="medium">
  <Tabs.Panel
    renderTitle="Tab Title"
    isSelected={selectedIndex === 0}
  >
    {/* Tab content with proper spacing */}
  </Tabs.Panel>
</Tabs>
```

**Design Properties:**
- **Layout**: Horizontal tab bar with content panels below
- **Visual Hierarchy**: Active tab uses primary color, inactive tabs use neutral
- **Content Spacing**: Tab panels use consistent padding and margin
- **Responsive Behavior**: Tabs stack or scroll on smaller screens

#### Vertical Tabs Layout
```typescript
// Visual Structure
<Grid startAt="medium" vAlign="top">
  <Grid.Row>
    <Grid.Col width={3}>
      <Tabs variant="secondary" margin="small">
        {/* Vertical tab navigation */}
      </Tabs>
    </Grid.Col>
    <Grid.Col width={9}>
      {/* Tab content area */}
    </Grid.Col>
  </Grid.Row>
</Grid>
```

**Design Properties:**
- **Layout**: Sidebar navigation with main content area
- **Grid System**: 3-column navigation, 9-column content split
- **Visual Separation**: Clear distinction between navigation and content zones
- **Content Scrolling**: Independent scroll areas for navigation and content

### ToggleDetails Component Design

#### Basic Toggle Structure
```typescript
// Visual Structure
<ToggleDetails
  summary="Toggle Summary Text"
  iconExpanded={IconExpandStartLine}
  iconCollapsed={IconArrowOpenEndLine}
>
  <View as="div" padding="small" margin="x-small 0 0 0">
    {/* Toggle content with proper spacing */}
  </View>
</ToggleDetails>
```

**Design Properties:**
- **Icon Usage**: Consistent expand/collapse icons across all toggles
- **Content Padding**: `padding="small"` for comfortable content spacing
- **Summary Formatting**: Support for rich text and InstUI components in summaries
- **Animation**: Smooth expand/collapse transitions

#### Nested Toggle Hierarchy
```typescript
// Visual Structure - Level 1
<ToggleDetails summary="Parent Section">
  <View padding="small">
    {/* Level 1 content */}
    
    {/* Level 2 nested toggle */}
    <ToggleDetails summary="Subsection" margin="small 0 0 medium">
      <View padding="small">
        {/* Level 2 content */}
        
        {/* Level 3 nested toggle */}
        <ToggleDetails summary="Sub-subsection" margin="small 0 0 medium">
          {/* Level 3 content */}
        </ToggleDetails>
      </View>
    </ToggleDetails>
  </View>
</ToggleDetails>
```

**Design Properties:**
- **Indentation Pattern**: Progressive left margin for each nesting level
- **Visual Hierarchy**: Consistent spacing and typography across levels
- **Icon Consistency**: Same icons used at all nesting levels
- **Content Organization**: Clear parent-child relationships

## Layout Design Patterns

### Main Pattern Container
```typescript
// Overall layout structure
<View as="div" padding="large">
  <Heading level="h1" margin="0 0 large 0">
    ContentSwitching Pattern
  </Heading>
  
  {/* Pattern sections with consistent spacing */}
  <View as="div" margin="0 0 x-large 0">
    {/* Section content */}
  </View>
</View>
```

**Design Properties:**
- **Container Padding**: `padding="large"` for comfortable page margins
- **Section Spacing**: `margin="0 0 x-large 0"` between major sections
- **Typography Hierarchy**: Proper heading levels for content organization

### Card-Based Content Organization
```typescript
// Content card pattern
<View
  as="div"
  background="primary"
  padding="medium"
  borderRadius="medium"
  borderWidth="small"
  margin="0 0 medium 0"
>
  <Flex direction="column" gap="small">
    <Heading level="h3" margin="0">
      Section Title
    </Heading>
    {/* Section content */}
  </Flex>
</View>
```

**Design Properties:**
- **Card Styling**: Standard card appearance with background, border, and radius
- **Content Spacing**: Flex with `gap="small"` for consistent internal spacing
- **Border Radius**: `borderRadius="medium"` following system standards
- **Typography**: No margins on headings within cards

### Integration Example Layouts

#### Tabs with Paginated Content
```typescript
// Design pattern for tabs containing pagination
<Tabs>
  <Tabs.Panel renderTitle="Data Table">
    <View padding="medium">
      {/* Table or list content */}
      <View margin="medium 0 0 0">
        <Pagination variant="full" />
      </View>
    </View>
  </Tabs.Panel>
</Tabs>
```

**Design Properties:**
- **Content Padding**: Consistent padding within tab panels
- **Pagination Placement**: Clear separation between content and navigation
- **Visual Balance**: Pagination doesn't overpower tab content

#### ToggleDetails within Tabs
```typescript
// Design pattern for nested content organization
<Tabs>
  <Tabs.Panel renderTitle="Course Details">
    <View padding="medium">
      <ToggleDetails summary="Course Information">
        {/* Course details content */}
      </ToggleDetails>
      
      <ToggleDetails summary="Assignment List" margin="medium 0 0 0">
        {/* Assignment content with pagination */}
        <View margin="small 0 0 0">
          <Pagination variant="compact" />
        </View>
      </ToggleDetails>
    </View>
  </Tabs.Panel>
</Tabs>
```

**Design Properties:**
- **Nested Organization**: Clear hierarchy between tabs and toggles
- **Spacing Consistency**: Proper margins between toggle sections
- **Component Integration**: Seamless combination of navigation elements

## Interaction Design Specifications

### Navigation State Management
- **Active States**: Clear visual indication of current page, tab, or toggle state
- **Focus Management**: Proper keyboard focus flow through all interactive elements
- **Loading States**: Consistent loading indicators during content transitions
- **Error States**: Clear error messaging with recovery options

### Animation and Transitions
- **Toggle Animations**: Smooth expand/collapse with appropriate timing
- **Tab Transitions**: Instant content switching with optional fade effects
- **Pagination Updates**: Loading states during page changes
- **Hover Effects**: Subtle interactive feedback following InstUI patterns

### Accessibility Design Considerations
- **ARIA Labels**: Descriptive labels for all interactive elements
- **Keyboard Navigation**: Tab order follows logical content flow
- **Screen Reader Support**: Proper announcements for state changes
- **Color Independence**: Information conveyed through multiple visual cues

## Responsive Design Breakpoints

### Small Screens (< 768px)
- **Tab Layout**: Stack tabs vertically or use horizontal scrolling
- **Pagination**: Switch to compact variant automatically
- **Toggle Content**: Full-width expansion with adjusted padding
- **Grid Layouts**: Single-column layouts for better readability

### Medium Screens (768px - 1024px)
- **Tab Layout**: Horizontal tabs with responsive content areas
- **Pagination**: Full variant with abbreviated page numbers
- **Grid Systems**: 2-column layouts where appropriate
- **Content Spacing**: Optimized padding and margins

### Large Screens (1024px - 1440px)
- **Tab Layout**: Full horizontal tabs with generous content areas
- **Pagination**: Complete full variant with all options
- **Grid Systems**: Multi-column layouts for complex content
- **Visual Hierarchy**: Enhanced spacing and typography scaling

### Extra Large Screens (> 1440px)
- **Content Containment**: Maximum width constraints to prevent over-extension
- **Enhanced Layouts**: Side-by-side content organization
- **Advanced Features**: Additional interactive elements and details
- **Generous Spacing**: Comfortable white space for improved readability

## Code Example Templates

### Complete Integration Example
```typescript
// Comprehensive component integration
const ContentSwitchingExample: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [toggleStates, setToggleStates] = useState<Record<string, boolean>>({});

  return (
    <View as="div" padding="large">
      <Tabs
        onRequestTabChange={(event, { index }) => setSelectedTab(index)}
        margin="0 0 large 0"
      >
        <Tabs.Panel
          renderTitle="Paginated Content"
          isSelected={selectedTab === 0}
        >
          <View padding="medium">
            {/* Content with pagination */}
            <View margin="medium 0 0 0">
              <Pagination
                variant="full"
                page={currentPage}
                pageCount={10}
                onPageClick={(page) => setCurrentPage(page)}
              />
            </View>
          </View>
        </Tabs.Panel>
        
        <Tabs.Panel
          renderTitle="Expandable Sections"
          isSelected={selectedTab === 1}
        >
          <View padding="medium">
            <ToggleDetails summary="Section 1">
              {/* Expandable content */}
            </ToggleDetails>
          </View>
        </Tabs.Panel>
      </Tabs>
    </View>
  );
};
```

## Design System Compliance

### InstUI Component Usage
- **Approved Components**: Only use official InstUI components with documented props
- **Color Palette**: Utilize semantic color names (primary, secondary, success, danger)
- **Typography Scale**: Follow InstUI text and heading variant specifications
- **Spacing System**: Use InstUI's spacing scale for all margins and padding

### Brand Consistency
- **Visual Language**: Maintain consistency with Canvas design patterns
- **Interaction Patterns**: Follow established InstUI interaction conventions
- **Accessibility Standards**: Meet or exceed WCAG 2.1 AA requirements
- **Performance Standards**: Optimize for smooth 60fps interactions

This design specification provides the visual and interaction foundation for implementing the ContentSwitching pattern while maintaining full compliance with InstUI design standards and accessibility requirements.