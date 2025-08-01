import { useState } from 'react'
import { View, Heading, Text, Flex, Responsive } from '@instructure/ui'
import { Tabs } from '@instructure/ui-tabs'
import { Pagination } from '@instructure/ui-pagination'
import { ToggleDetails } from '@instructure/ui-toggle-details'
import { Button } from '@instructure/ui-buttons'
import { List } from '@instructure/ui-list'
import { Badge } from '@instructure/ui-badge'
import { 
  IconDocumentLine,
  IconQuestionLine,
  IconSettingsLine,
  IconInfoLine,
  IconWarningLine
} from '@instructure/ui-icons'

// Sample content data for ToggleDetails
const contentSections = [
  {
    id: 'overview',
    title: 'Course Overview',
    summary: 'Introduction to Modern Web Development',
    content: `This comprehensive course covers the fundamentals of modern web development, including HTML5, CSS3, JavaScript ES6+, and popular frameworks like React. Students will learn best practices for responsive design, accessibility, and performance optimization.`,
    items: [
      'HTML5 semantic structure and forms',
      'CSS3 flexbox and grid layouts', 
      'JavaScript ES6+ features and async programming',
      'React components and state management',
      'Web accessibility standards (WCAG)',
      'Performance optimization techniques'
    ]
  },
  {
    id: 'assignments',
    title: 'Course Assignments',
    summary: '8 hands-on projects and assignments',
    content: `Students will complete a series of progressive assignments designed to reinforce learning objectives. Each assignment builds upon previous concepts while introducing new challenges and real-world scenarios.`,
    items: [
      'Assignment 1: Semantic HTML portfolio page',
      'Assignment 2: Responsive CSS layout design',
      'Assignment 3: Interactive JavaScript calculator',
      'Assignment 4: React component library',
      'Assignment 5: API integration and data fetching',
      'Assignment 6: Accessibility audit and improvements',
      'Assignment 7: Performance optimization project',
      'Assignment 8: Full-stack application deployment'
    ]
  },
  {
    id: 'resources',
    title: 'Learning Resources',
    summary: 'Documentation, tutorials, and external links',
    content: `A curated collection of high-quality resources to supplement course materials. These resources include official documentation, interactive tutorials, community forums, and industry best practices.`,
    items: [
      'MDN Web Docs - Comprehensive web standards reference',
      'React Official Documentation and Tutorial',
      'CSS-Tricks - Advanced CSS techniques and examples',
      'JavaScript.info - Modern JavaScript tutorial',
      'A11y Project - Web accessibility guidelines',
      'Google Web Fundamentals - Performance and UX',
      'Stack Overflow - Community Q&A and solutions',
      'GitHub - Version control and collaboration'
    ]
  },
  {
    id: 'schedule',
    title: 'Course Schedule',
    summary: '12-week program with flexible pacing',
    content: `The course is structured as a 12-week program with clearly defined learning milestones. Students can work at their own pace while meeting key deadlines for assignments and peer collaboration sessions.`,
    items: [
      'Weeks 1-2: HTML foundations and semantic markup',
      'Weeks 3-4: CSS fundamentals and responsive design',
      'Weeks 5-6: JavaScript basics and DOM manipulation',
      'Weeks 7-8: Introduction to React and component architecture',
      'Weeks 9-10: State management and API integration',
      'Weeks 11-12: Final project development and deployment'
    ]
  },
  {
    id: 'support',
    title: 'Student Support',
    summary: 'Office hours, forums, and peer collaboration',
    content: `Multiple support channels are available to ensure student success. From instructor office hours to peer study groups, students have access to help when they need it most.`,
    items: [
      'Weekly instructor office hours (Tuesdays 2-4 PM)',
      'Peer study groups and collaboration sessions',
      'Course discussion forum moderated by TAs',
      'One-on-one tutoring sessions (by appointment)',
      'Technical support for development environment setup',
      'Career guidance and portfolio review sessions'
    ]
  }
]

// Pagination Demo Component
const PaginationDemo = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [variant, setVariant] = useState<'compact' | 'full' | 'input'>('compact')
  
  const totalPages = 10

  const renderPaginationByVariant = () => {
    // Use stock InstUI API for all variants
    return (
      <Pagination
        variant={variant}
        labelNext="Next page"
        labelPrev="Previous page"
        as="nav"
        currentPage={currentPage}
        totalPageNumber={totalPages}
        onPageChange={setCurrentPage}
      />
    )
  }

  return (
    <View as="section" margin="0 0 sections 0">
      <View as="header" margin="0 0 sectionElements 0">
        <Heading level="h2" variant="titleSection">
          Pagination Variants
        </Heading>
        <Text variant="descriptionSection">
          Choose different pagination styles for various use cases and data sizes
        </Text>
      </View>

      <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
        <Flex direction="column" gap="moduleElements">
          {/* Variant Selection */}
          <View>
            <View as="div" margin="0 0 moduleElements 0">
              <Heading level="h5" variant="label">Interactive Variant Selector</Heading>
            </View>
            <Flex gap="moduleElements" wrap="wrap">
              <Button 
                color={variant === 'compact' ? 'primary' : 'secondary'}
                size="small"
                onClick={() => setVariant('compact')}
              >
                Compact
              </Button>
              <Button 
                color={variant === 'full' ? 'primary' : 'secondary'}
                size="small"
                onClick={() => setVariant('full')}
              >
                Full
              </Button>
              <Button 
                color={variant === 'input' ? 'primary' : 'secondary'}
                size="small"
                onClick={() => setVariant('input')}
              >
                Input
              </Button>
            </Flex>
          </View>

          {/* Pagination Display */}
          <View>
            <View as="div" margin="0 0 moduleElements 0">
              <Heading level="h5" variant="label">Live Preview</Heading>
            </View>
            <View as="div" background="secondary" padding="paddingCardMedium" borderRadius="medium">
              <Flex direction="column" gap="moduleElements" alignItems="center">
                {renderPaginationByVariant()}
                <Text size="small" color="secondary">
                  Page {currentPage} of {totalPages} - Variant: {variant}
                </Text>
              </Flex>
            </View>
          </View>
        </Flex>
      </View>
    </View>
  )
}

// Toggle Details Demo Component  
const ToggleDetailsDemo = () => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['overview']))

  const handleToggle = (sectionId: string, expanded: boolean) => {
    const newExpanded = new Set(expandedSections)
    if (expanded) {
      newExpanded.add(sectionId)
    } else {
      newExpanded.delete(sectionId)
    }
    setExpandedSections(newExpanded)
  }

  const getIconForSection = (sectionId: string) => {
    switch (sectionId) {
      case 'overview': return <IconDocumentLine />
      case 'assignments': return <IconQuestionLine />
      case 'resources': return <IconInfoLine />
      case 'schedule': return <IconSettingsLine />
      case 'support': return <IconWarningLine />
      default: return <IconDocumentLine />
    }
  }

  return (
    <View as="section" margin="0 0 sections 0">
      <View as="header" margin="0 0 sectionElements 0">
        <Heading level="h2" variant="titleSection">
          ToggleDetails Examples
        </Heading>
        <Text variant="descriptionSection">
          Expandable content sections with different styles, icons, and state management
        </Text>
      </View>

      <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
        <Flex direction="column" gap="moduleElements">
          {contentSections.map((section) => (
            <ToggleDetails
              key={section.id}
              summary={
                <Flex alignItems="center" gap="moduleElements">
                  <View as="span">
                    {getIconForSection(section.id)}
                  </View>
                  <View as="div">
                    <Text weight="bold">{section.title}</Text>
                    <View as="div">
                      <Text size="small" color="secondary">
                        {section.summary}
                      </Text>
                    </View>
                  </View>
                  <Badge 
                    count={section.items.length} 
                    variant="primary"
                    standalone
                  />
                </Flex>
              }
              expanded={expandedSections.has(section.id)}
              onToggle={(_event, expanded) => handleToggle(section.id, expanded)}
              variant="filled"
            >
              <View as="div" padding="paddingCardMedium">
                <View as="div" margin="0 0 moduleElements 0">
                  <Text>{section.content}</Text>
                </View>
                <List>
                  {section.items.map((item, index) => (
                    <List.Item key={index}>{item}</List.Item>
                  ))}
                </List>
              </View>
            </ToggleDetails>
          ))}

          {/* State Indicator */}
          <View>
            <View as="div" margin="0 0 moduleElements 0">
              <Heading level="h5" variant="label">State Management</Heading>
            </View>
            <View as="div" background="secondary" padding="paddingCardSmall" borderRadius="medium">
              <Text size="small" color="secondary">
                <strong>Expanded sections:</strong> {expandedSections.size > 0 ? Array.from(expandedSections).join(', ') : 'None'}
              </Text>
            </View>
          </View>
        </Flex>
      </View>
    </View>
  )
}

// Tabs Demo Component
const TabsDemo = () => {
  const [defaultTabIndex, setDefaultTabIndex] = useState(0)
  const [secondaryTabIndex, setSecondaryTabIndex] = useState(0)
  const [scrollTabIndex, setScrollTabIndex] = useState(2)

  return (
    <View as="section" margin="0 0 sections 0">
      <View as="header" margin="0 0 sectionElements 0">
        <Heading level="h2" variant="titleSection">
          Tab Variants
        </Heading>
        <Text variant="descriptionSection">
          Different tab styles and behaviors for various use cases and content organization
        </Text>
      </View>

      <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
        <Flex direction="column" gap="sections">

          {/* Default Tabs */}
          <View>
            <View as="div" margin="0 0 moduleElements 0">
              <Heading level="h5" variant="label">Default Variant</Heading>
            </View>
            <View as="div" margin="0 0 moduleElements 0">
              <Text size="small" color="secondary">
                Standard tab appearance for primary navigation with icon examples
              </Text>
            </View>
          <Tabs 
            onRequestTabChange={(_event, { index }) => setDefaultTabIndex(index)}
            padding="medium"
          >
            <Tabs.Panel
              renderTitle={
                <Flex alignItems="center" gap="x-small">
                  <IconDocumentLine />
                  <span>Overview</span>
                </Flex>
              }
              isSelected={defaultTabIndex === 0}
            >
              <View as="div" background="secondary" padding="paddingCardMedium" borderRadius="medium" textAlign="center">
                <Text>This is the overview tab content using the default variant. Default tabs are best for primary navigation within a page or section.</Text>
              </View>
            </Tabs.Panel>
            <Tabs.Panel
              renderTitle={
                <Flex alignItems="center" gap="x-small">
                  <IconInfoLine />
                  <span>Details</span>
                </Flex>
              }
              isSelected={defaultTabIndex === 1}
            >
              <View as="div" background="secondary" padding="paddingCardMedium" borderRadius="medium" textAlign="center">
                <Text>Details tab content. Default tabs provide clear visual hierarchy and are the standard choice for most tabbed interfaces.</Text>
              </View>
            </Tabs.Panel>
            <Tabs.Panel
              renderTitle="Disabled Tab"
              isDisabled
            >
              <View as="div" background="secondary" padding="paddingCardMedium" borderRadius="medium" textAlign="center">
                <Text>This tab is disabled and cannot be selected.</Text>
              </View>
            </Tabs.Panel>
            <Tabs.Panel
              renderTitle={
                <Flex alignItems="center" gap="x-small">
                  <IconSettingsLine />
                  <span>Settings</span>
                </Flex>
              }
              isSelected={defaultTabIndex === 3}
            >
              <View as="div" background="secondary" padding="paddingCardMedium" borderRadius="medium" textAlign="center">
                <Text>Settings tab content with configuration options.</Text>
              </View>
            </Tabs.Panel>
          </Tabs>
        </View>

          {/* Secondary Tabs */}
          <View>
            <View as="div" margin="0 0 moduleElements 0">
              <Heading level="h5" variant="label">Secondary Variant</Heading>
            </View>
            <View as="div" margin="0 0 moduleElements 0">
              <Text size="small" color="secondary">
                Lighter appearance for secondary navigation or nested content
              </Text>
            </View>
          <Tabs 
            variant="secondary"
            onRequestTabChange={(_event, { index }) => setSecondaryTabIndex(index)}
            padding="medium"
          >
            <Tabs.Panel
              renderTitle="Basic Info"
              isSelected={secondaryTabIndex === 0}
            >
              <View as="div" background="secondary" padding="paddingCardMedium" borderRadius="medium" textAlign="center">
                <Text>Secondary tabs have a lighter visual treatment, making them ideal for nested navigation or when tabs need to be less prominent.</Text>
              </View>
            </Tabs.Panel>
            <Tabs.Panel
              renderTitle="Advanced"
              isSelected={secondaryTabIndex === 1}
            >
              <View as="div" background="secondary" padding="paddingCardMedium" borderRadius="medium" textAlign="center">
                <Text>Advanced configuration options. Secondary tabs work well within cards or as sub-navigation.</Text>
              </View>
            </Tabs.Panel>
            <Tabs.Panel
              renderTitle="History"
              isSelected={secondaryTabIndex === 2}
            >
              <View as="div" background="secondary" padding="paddingCardMedium" borderRadius="medium" textAlign="center">
                <Text>History and audit information. The secondary variant maintains functionality while reducing visual weight.</Text>
              </View>
            </Tabs.Panel>
          </Tabs>
        </View>

          {/* Scrollable Tabs */}
          <View>
            <View as="div" margin="0 0 moduleElements 0">
              <Heading level="h5" variant="label">Scrollable Tabs</Heading>
            </View>
            <View as="div" margin="0 0 moduleElements 0">
              <Text size="small" color="secondary">
                Horizontal scrolling when there are many tabs or limited space with icon examples
              </Text>
            </View>
            <View as="div" maxWidth="30rem">
            <Tabs 
              onRequestTabChange={(_event, { index }) => setScrollTabIndex(index)}
              tabOverflow="scroll"
              padding="medium"
            >
              <Tabs.Panel
                renderTitle={
                  <Flex alignItems="center" gap="x-small">
                    <IconDocumentLine />
                    <span>Course Materials</span>
                  </Flex>
                }
                isSelected={scrollTabIndex === 0}
              >
                <View as="div" background="secondary" padding="paddingCardMedium" borderRadius="medium" textAlign="center">
                  <Text>Course materials and resources. Scrollable tabs automatically handle overflow when tabs exceed container width.</Text>
                </View>
              </Tabs.Panel>
              <Tabs.Panel
                renderTitle={
                  <Flex alignItems="center" gap="x-small">
                    <IconQuestionLine />
                    <span>Assignments</span>
                  </Flex>
                }
                isSelected={scrollTabIndex === 1}
              >
                <View as="div" background="secondary" padding="paddingCardMedium" borderRadius="medium" textAlign="center">
                  <Text>Assignment management and submissions. Users can scroll horizontally to access all tabs.</Text>
                </View>
              </Tabs.Panel>
              <Tabs.Panel
                renderTitle="Discussions"
                isSelected={scrollTabIndex === 2}
              >
                <View as="div" background="secondary" padding="paddingCardMedium" borderRadius="medium" textAlign="center">
                  <Text>Discussion forums and collaboration. This tab is initially selected to demonstrate scrolling behavior.</Text>
                </View>
              </Tabs.Panel>
              <Tabs.Panel
                renderTitle="Grades & Feedback"
                isSelected={scrollTabIndex === 3}
              >
                <View as="div" background="secondary" padding="paddingCardMedium" borderRadius="medium" textAlign="center">
                  <Text>Grading and feedback tools. Scroll left and right to see all available tabs.</Text>
                </View>
              </Tabs.Panel>
              <Tabs.Panel
                renderTitle="Analytics"
                isSelected={scrollTabIndex === 4}
              >
                <View as="div" background="secondary" padding="paddingCardMedium" borderRadius="medium" textAlign="center">
                  <Text>Course analytics and insights. The scroll behavior maintains usability even with many tabs.</Text>
                </View>
              </Tabs.Panel>
              <Tabs.Panel
                renderTitle={
                  <Flex alignItems="center" gap="x-small">
                    <IconSettingsLine />
                    <span>Settings & Config</span>
                  </Flex>
                }
                isSelected={scrollTabIndex === 5}
              >
                <View as="div" background="secondary" padding="paddingCardMedium" borderRadius="medium" textAlign="center">
                  <Text>Configuration and administrative settings. Scrollable tabs are perfect for feature-rich interfaces.</Text>
                </View>
              </Tabs.Panel>
            </Tabs>
            </View>
          </View>
        </Flex>
      </View>
    </View>
  )
}


// Main Content Switching Component
export default function ContentSwitching() {
  const [selectedTab, setSelectedTab] = useState<number>(0)

  const tabs = [
    { 
      id: 'pagination', 
      label: 'Pagination'
    },
    { 
      id: 'toggle-details', 
      label: 'Toggle Details'
    },
    { 
      id: 'tabs-demo', 
      label: 'Tabs Demo'
    }
  ]

  return (
    <Responsive
      query={{
        small: { maxWidth: '767px' },
        large: { minWidth: '768px' }
      }}
      props={{
        small: { padding: 'paddingCardSmall', headingVariant: 'titlePageMobile' },
        large: { padding: 'paddingCardSmall', headingVariant: 'titlePageDesktop' }
      }}
    >
      {(props) => {
        const { headingVariant, ...viewProps } = props as { headingVariant: 'titlePageDesktop' | 'titlePageMobile'; padding: string }
        return (
          <View as="div" maxWidth="1100px" margin="0 auto" {...viewProps}>
            {/* PAGE HEADER */}
            <View as="header" margin="0 0 sections 0">
              <Heading level="h1" variant={headingVariant}>
                Content Switching Patterns
              </Heading>
              <Text variant="descriptionPage">
                Explore pagination, toggle details, and tabbed navigation using Instructure UI components
              </Text>
            </View>

            {/* MAIN CONTENT */}
            <View as="section">
              <Tabs 
                onRequestTabChange={(_event, { index }) => setSelectedTab(index)}
              >
                {tabs.map((tab, index) => (
                  <Tabs.Panel
                    key={tab.id}
                    renderTitle={tab.label}
                    isSelected={selectedTab === index}
                  >
                    <View as="div" padding="medium 0">
                      {tab.id === 'pagination' && <PaginationDemo />}
                      {tab.id === 'toggle-details' && <ToggleDetailsDemo />}
                      {tab.id === 'tabs-demo' && <TabsDemo />}
                    </View>
                  </Tabs.Panel>
                ))}
              </Tabs>
            </View>
          </View>
        )
      }}
    </Responsive>
  )
}