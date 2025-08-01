import { View, Heading, Text, Button, Flex, Grid, Responsive } from '@instructure/ui'
import { IconAddLine, IconEditLine, IconSettingsLine } from '@instructure/ui-icons'
import { useState } from 'react'

export default function LayoutPattern() {
  const [interactiveState, setInteractiveState] = useState(false)

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
          Building Layouts with Flex and View Components
        </Heading>
        <Text variant="descriptionPage">
          Comprehensive guide to creating consistent, responsive layouts using InstUI's Flex, View, and Grid components with semantic spacing tokens.
        </Text>
      </View>

      {/* FLEX LAYOUTS SECTION */}
      <View as="section" margin="0 0 sections 0">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Flex Layouts with Semantic Spacing
          </Heading>
          <Text variant="descriptionSection">
            Vertical and horizontal layouts using Flex containers with semantic spacing tokens
          </Text>
        </View>

        <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
          <Flex direction="column" gap="moduleElements">
            {/* Vertical Layout */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Vertical Layout (sections gap)</Heading>
              </View>
              <Flex direction="column" gap="sections">
                <View as="div" background="secondary" padding="paddingCardSmall" borderRadius="medium">
                  <Text>Section 1 - 36px gap below</Text>
                </View>
                <View as="div" background="secondary" padding="paddingCardSmall" borderRadius="medium">
                  <Text>Section 2 - Major page sections</Text>
                </View>
              </Flex>
            </View>

            {/* Horizontal Layout */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Horizontal Layout (moduleElements gap)</Heading>
              </View>
              <Flex gap="moduleElements" wrap="wrap">
                <Button>Primary Action</Button>
                <Button color="secondary">Secondary Action</Button>
                <Button color="success">Success Action</Button>
              </Flex>
            </View>

            {/* Section Elements Gap */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Section Elements Gap (24px)</Heading>
              </View>
              <Flex direction="column" gap="sectionElements">
                <View>
                  <Heading level="h4" variant="titleCardMini">Section Header</Heading>
                </View>
                <View as="div" background="secondary" padding="paddingCardSmall" borderRadius="medium">
                  <Text>Section content with proper 24px spacing from header</Text>
                </View>
              </Flex>
            </View>
          </Flex>
        </View>
      </View>

      {/* CARD SYSTEM SECTION */}
      <View as="section" margin="0 0 sections 0">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Card System with Proper Structure
          </Heading>
          <Text variant="descriptionSection">
            Primary and secondary cards with consistent styling and proper HTML structure using as="div"
          </Text>
        </View>

        <View as="div" background="secondary" padding="paddingCardLarge" borderRadius="medium">
          <Flex direction="column" gap="sectionElements">
            {/* Primary Cards */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Primary Cards (White Background)</Heading>
              </View>
              <Grid startAt="medium" vAlign="top" colSpacing="medium">
                <Grid.Row>
                  <Grid.Col width={4}>
                    <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary">
                      <Flex direction="column" gap="moduleElements">
                        <Heading level="h4" variant="titleCardMini">Standard Card</Heading>
                        <Text variant="contentSmall">Medium padding (16px), secondary border</Text>
                        <Button size="small">Action</Button>
                      </Flex>
                    </View>
                  </Grid.Col>
                  <Grid.Col width={4}>
                    <View as="div" background="primary" padding="paddingCardLarge" borderRadius="medium" borderWidth="small" borderColor="secondary">
                      <Flex direction="column" gap="moduleElements">
                        <Heading level="h4" variant="titleCardMini">Large Padding</Heading>
                        <Text variant="contentSmall">Large padding (24px) for spacious cards</Text>
                        <Button size="small">Action</Button>
                      </Flex>
                    </View>
                  </Grid.Col>
                  <Grid.Col width={4}>
                    <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="primary" shadow="resting">
                      <Flex direction="column" gap="moduleElements">
                        <Heading level="h4" variant="titleCardMini">Primary Border + Shadow</Heading>
                        <Text variant="contentSmall">Emphasized card with primary border and shadow</Text>
                        <Button size="small" color="primary">Primary Action</Button>
                      </Flex>
                    </View>
                  </Grid.Col>
                </Grid.Row>
              </Grid>
            </View>

            {/* Nested Cards */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Nested Cards (Max 2 Levels)</Heading>
              </View>
              <View as="div" background="primary" padding="paddingCardLarge" borderRadius="medium" borderWidth="small" borderColor="secondary">
                <Flex direction="column" gap="sectionElements">
                  <View>
                    <Heading level="h4" variant="titleCardMini">Parent Card</Heading>
                    <Text>This is the outer container card</Text>
                  </View>
                  <View as="div" background="secondary" padding="paddingCardMedium" borderRadius="medium">
                    <Flex direction="column" gap="moduleElements">
                      <Heading level="h5" variant="label">Nested Secondary Card</Heading>
                      <Text variant="contentSmall">Secondary background for visual hierarchy</Text>
                      <Button size="small" color="secondary">Nested Action</Button>
                    </Flex>
                  </View>
                </Flex>
              </View>
            </View>
          </Flex>
        </View>
      </View>

      {/* TEXT SPACING RULES SECTION */}
      <View as="section" margin="0 0 sections 0">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Text Component Spacing Rules
          </Heading>
          <Text variant="descriptionSection">
            Correct and incorrect ways to handle spacing with Text and Heading components
          </Text>
        </View>

        <Grid startAt="medium" vAlign="top" colSpacing="medium">
          <Grid.Row>
            <Grid.Col width={6}>
              <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
                <View>
                  <View as="div" margin="0 0 moduleElements 0">
                    <Heading level="h5" variant="label">✓ Correct - Use Flex Gaps</Heading>
                  </View>
                  <Flex direction="column" gap="moduleElements">
                    <Text variant="contentSmall">Label text</Text>
                    <Button>Action Button</Button>
                    <Text variant="contentSmall">Another text element</Text>
                  </Flex>
                </View>
              </View>
            </Grid.Col>
            <Grid.Col width={6}>
              <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
                <View>
                  <View as="div" margin="0 0 moduleElements 0">
                    <Heading level="h5" variant="label">✓ Correct - View Wrappers</Heading>
                  </View>
                  <Flex direction="column" gap="moduleElements">
                    <View margin="0 0 moduleElements 0">
                      <Text variant="contentSmall">Label with View wrapper</Text>
                    </View>
                    <Button>Action Button</Button>
                  </Flex>
                </View>
              </View>
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </View>

      {/* GRID RESPONSIVE LAYOUTS SECTION */}
      <View as="section" margin="0 0 sections 0">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Responsive Grid Layouts
          </Heading>
          <Text variant="descriptionSection">
            Multi-column layouts with proper responsive breakpoints and spacing
          </Text>
        </View>

        <View as="div" background="secondary" padding="paddingCardLarge" borderRadius="medium">
          <Flex direction="column" gap="sectionElements">
            {/* 2-Column Grid */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">2-Column Grid (startAt="medium")</Heading>
              </View>
              <Grid startAt="medium" vAlign="top" colSpacing="medium">
                <Grid.Row>
                  <Grid.Col width={6}>
                    <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary">
                      <Flex direction="column" gap="moduleElements">
                        <Heading level="h4" variant="titleCardMini">Column 1</Heading>
                        <Text>Equal width columns that stack on small screens</Text>
                        <Button renderIcon={<IconAddLine />} size="small">Add Item</Button>
                      </Flex>
                    </View>
                  </Grid.Col>
                  <Grid.Col width={6}>
                    <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary">
                      <Flex direction="column" gap="moduleElements">
                        <Heading level="h4" variant="titleCardMini">Column 2</Heading>
                        <Text>Responsive layout with medium colSpacing</Text>
                        <Button renderIcon={<IconEditLine />} size="small" color="secondary">Edit</Button>
                      </Flex>
                    </View>
                  </Grid.Col>
                </Grid.Row>
              </Grid>
            </View>

            {/* 3-Column Grid */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">3-Column Grid (startAt="large")</Heading>
              </View>
              <Grid startAt="large" vAlign="top" colSpacing="medium">
                <Grid.Row>
                  <Grid.Col width={4}>
                    <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary">
                      <Flex direction="column" gap="moduleElements">
                        <Heading level="h5" variant="label">Card 1</Heading>
                        <Text variant="contentSmall">Stacks on small & medium screens</Text>
                      </Flex>
                    </View>
                  </Grid.Col>
                  <Grid.Col width={4}>
                    <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary">
                      <Flex direction="column" gap="moduleElements">
                        <Heading level="h5" variant="label">Card 2</Heading>
                        <Text variant="contentSmall">3-column on large screens only</Text>
                      </Flex>
                    </View>
                  </Grid.Col>
                  <Grid.Col width={4}>
                    <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary">
                      <Flex direction="column" gap="moduleElements">
                        <Heading level="h5" variant="label">Card 3</Heading>
                        <Text variant="contentSmall">Equal width layout</Text>
                      </Flex>
                    </View>
                  </Grid.Col>
                </Grid.Row>
              </Grid>
            </View>

            {/* Header with Actions Pattern */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Header with Actions (hAlign="space-between")</Heading>
              </View>
              <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary">
                <Grid hAlign="space-between" vAlign="middle">
                  <Grid.Row>
                    <Grid.Col>
                      <Flex direction="column" gap="moduleElements">
                        <Heading level="h4" variant="titleCardMini">Section Title</Heading>
                        <Text variant="contentSmall">Section description with actions on the right</Text>
                      </Flex>
                    </Grid.Col>
                    <Grid.Col width="auto">
                      <Flex gap="moduleElements">
                        <Button renderIcon={<IconSettingsLine />} size="small" color="secondary">Settings</Button>
                        <Button renderIcon={<IconAddLine />} size="small">Add</Button>
                      </Flex>
                    </Grid.Col>
                  </Grid.Row>
                </Grid>
              </View>
            </View>
          </Flex>
        </View>
      </View>

      {/* SEMANTIC SPACING TOKENS SECTION */}
      <View as="section" margin="0 0 sections 0">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Semantic Spacing Tokens Reference
          </Heading>
          <Text variant="descriptionSection">
            Visual reference for semantic spacing tokens with their pixel values
          </Text>
        </View>

        <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
          <Grid startAt="medium" vAlign="top" colSpacing="medium">
            <Grid.Row>
              <Grid.Col width={6}>
                <Flex direction="column" gap="moduleElements">
                  <View>
                    <View as="div" margin="0 0 moduleElements 0">
                      <Heading level="h5" variant="label">Layout Structure</Heading>
                    </View>
                    <Flex direction="column" gap="moduleElements">
                      <View as="div" background="secondary" padding="sections" borderRadius="medium">
                        <Text variant="contentSmall"><strong>sections</strong> - 36px - Major page sections</Text>
                      </View>
                      <View as="div" background="secondary" padding="sectionElements" borderRadius="medium">
                        <Text variant="contentSmall"><strong>sectionElements</strong> - 24px - Within sections</Text>
                      </View>
                      <View as="div" background="secondary" padding="moduleElements" borderRadius="medium">
                        <Text variant="contentSmall"><strong>moduleElements</strong> - 16px - Module components</Text>
                      </View>
                    </Flex>
                  </View>
                </Flex>
              </Grid.Col>
              <Grid.Col width={6}>
                <Flex direction="column" gap="moduleElements">
                  <View>
                    <View as="div" margin="0 0 moduleElements 0">
                      <Heading level="h5" variant="label">Container Padding</Heading>
                    </View>
                    <Flex direction="column" gap="moduleElements">
                      <View as="div" background="secondary" padding="paddingCardLarge" borderRadius="medium">
                        <Text variant="contentSmall"><strong>paddingCardLarge</strong> - 24px</Text>
                      </View>
                      <View as="div" background="secondary" padding="paddingCardMedium" borderRadius="medium">
                        <Text variant="contentSmall"><strong>paddingCardMedium</strong> - 16px</Text>
                      </View>
                      <View as="div" background="secondary" padding="paddingCardSmall" borderRadius="medium">
                        <Text variant="contentSmall"><strong>paddingCardSmall</strong> - 12px</Text>
                      </View>
                    </Flex>
                  </View>
                </Flex>
              </Grid.Col>
            </Grid.Row>
          </Grid>
        </View>
      </View>

      {/* INTERACTIVE EXAMPLE SECTION */}
      <View as="section" margin="0 0 sections 0">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Interactive Layout Example
          </Heading>
          <Text variant="descriptionSection">
            Dynamic layout that demonstrates proper spacing and responsive behavior
          </Text>
        </View>

        <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
          <Flex direction="column" gap="sectionElements">
            <Grid hAlign="space-between" vAlign="middle">
              <Grid.Row>
                <Grid.Col>
                  <Heading level="h4" variant="titleCardMini">Dynamic Content Area</Heading>
                </Grid.Col>
                <Grid.Col width="auto">
                  <Button 
                    onClick={() => setInteractiveState(!interactiveState)}
                    color={interactiveState ? "success" : "primary"}
                    size="small"
                  >
                    {interactiveState ? "Hide Details" : "Show Details"}
                  </Button>
                </Grid.Col>
              </Grid.Row>
            </Grid>
            
            {interactiveState && (
              <View as="div" background="secondary" padding="paddingCardMedium" borderRadius="medium">
                <Flex direction="column" gap="moduleElements">
                  <Text>This content appears with proper semantic spacing using moduleElements gap.</Text>
                  <Text variant="contentSmall">Notice how the layout maintains consistent spacing patterns.</Text>
                  <Flex gap="moduleElements">
                    <Button size="small" renderIcon={<IconAddLine />}>Add</Button>
                    <Button size="small" color="secondary" renderIcon={<IconEditLine />}>Edit</Button>
                  </Flex>
                </Flex>
              </View>
            )}
          </Flex>
        </View>
      </View>

      {/* USAGE GUIDELINES SECTION */}
      <View as="section" margin="0 0 sections 0">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Layout Best Practices
          </Heading>
          <Text variant="descriptionSection">
            Essential guidelines for creating consistent, maintainable layouts
          </Text>
        </View>

        <Grid startAt="medium" vAlign="top" colSpacing="medium">
          <Grid.Row>
            <Grid.Col width={6}>
              <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
                <View>
                  <View as="div" margin="0 0 moduleElements 0">
                    <Heading level="h5" variant="label">Always Do ✓</Heading>
                  </View>
                  <Flex direction="column" gap="moduleElements">
                    <Text>• Use semantic spacing tokens (sections, sectionElements, moduleElements)</Text>
                    <Text>• Add as="div" to all card View components</Text>
                    <Text>• Use Flex gaps instead of margins for spacing</Text>
                    <Text>• Apply consistent borderRadius="medium" to all cards</Text>
                    <Text>• Wrap related headings and descriptions together</Text>
                  </Flex>
                </View>
              </View>
            </Grid.Col>
            <Grid.Col width={6}>
              <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
                <View>
                  <View as="div" margin="0 0 moduleElements 0">
                    <Heading level="h5" variant="label">Never Do ✗</Heading>
                  </View>
                  <Flex direction="column" gap="moduleElements">
                    <Text>• Apply margins directly to Text or Heading components</Text>
                    <Text>• Place content flush together without gaps</Text>
                    <Text>• Nest cards more than 2 levels deep</Text>
                    <Text>• Mix different padding tokens in the same layout</Text>
                    <Text>• Skip heading levels for visual effect</Text>
                  </Flex>
                </View>
              </View>
            </Grid.Col>
          </Grid.Row>
        </Grid>
      </View>
        </View>
        )
      }}
    </Responsive>
  )
}