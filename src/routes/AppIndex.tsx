import { View, Heading, Text, List, Responsive, Link } from '@instructure/ui'
import { Link as RouterLink } from 'react-router-dom'

const patterns = [
  { name: 'Template', path: '/patterns/template', description: 'Documentation template for creating consistent UI pattern pages' },
  { name: 'Layout', path: '/patterns/layout', description: 'Content structure and hierarchy best practices' },
  { name: 'Text', path: '/patterns/text', description: 'Semantic text variants and accessibility guidelines' },
  { name: 'Colors', path: '/patterns/colors', description: 'Semantic color tokens for branding, accessibility, and consistent theming' },
  { name: 'Buttons', path: '/patterns/buttons', description: 'Interactive button components with semantic colors, sizes, and proper spacing' },
  { name: 'Icons', path: '/patterns/icons', description: 'Icon usage guidelines with semantic sizing, colors, and accessibility practices' },
  { name: 'Status', path: '/patterns/status-components', description: 'Visual indicators for status, categorization, and counts using Pill, Tag, and Badge components' },
  { name: 'Forms', path: '/patterns/forms', description: 'Comprehensive form components with validation patterns, accessibility, and Canvas-specific examples' },
  { name: 'Tables', path: '/patterns/tables', description: 'Comprehensive table implementation with sorting, selection, and responsive design' },
  { name: 'Switching', path: '/patterns/content-switching', description: 'Navigation patterns using pagination, tabs, and toggle details for content organization' },
  // Add new patterns here
]

const prototypes = [
  { name: 'Sample', path: '/prototypes/sample', description: 'Original no-context test' },
  // Add new prototypes here
]

export default function AppIndex() {
  return (
    <Responsive
      query={{
        small: { maxWidth: '767px' },
        large: { minWidth: '768px' }
      }}
      props={{
        small: { padding: 'paddingCardSmall', headingVariant: 'titlePageMobile' },
        large: { padding: 'paddingCardLarge', headingVariant: 'titlePageDesktop' }
      }}
    >
      {(props) => {
        const { headingVariant, ...viewProps } = props as any
        return (
        <View as="div" maxWidth="1100px" margin="0 auto" {...viewProps}>
          {/* PAGE HEADER */}
          <View as="header" margin="0 0 sections 0">
            <Heading level="h1" variant={headingVariant}>
              Canvas Prototype System
            </Heading>
            <Text variant="descriptionPage">
              Interactive design system showcasing InstUI components and patterns for rapid Canvas prototyping
            </Text>
          </View>

          {/* PATTERNS SECTION */}
          <View as="section" margin="0 0 sections 0">
            <View as="header" margin="0 0 sectionElements 0">
              <Heading level="h2" variant="titleSection">
                Patterns
              </Heading>
              <Text variant="descriptionSection">
                Design pattern contexts the agent understands
              </Text>
            </View>

            <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
              <List>
                {patterns.map((pattern) => (
                  <List.Item key={pattern.path}>
                    <Link as={RouterLink} to={pattern.path}>
                      {pattern.name}
                    </Link>
                    {' - ' + pattern.description}
                  </List.Item>
                ))}
              </List>
            </View>
          </View>

          {/* PROTOTYPES SECTION */}
          <View as="section" margin="0 0 sections 0">
            <View as="header" margin="0 0 sectionElements 0">
              <Heading level="h2" variant="titleSection">
                Prototypes
              </Heading>
              <Text variant="descriptionSection">
                TBD example prototypes
              </Text>
            </View>

            <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
              <List>
                {prototypes.map((prototype) => (
                  <List.Item key={prototype.path}>
                    <Link as={RouterLink} to={prototype.path}>
                      {prototype.name}
                    </Link>
                    {' - ' + prototype.description}
                  </List.Item>
                ))}
              </List>
            </View>
          </View>
        </View>
        )
      }}
    </Responsive>
  )
}