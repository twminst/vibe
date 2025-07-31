import { View, Heading, Text, Button, Flex, Grid, Responsive } from '@instructure/ui'
import { IconAddLine, IconEditLine } from '@instructure/ui-icons'
import { useState } from 'react'

export default function TemplatePattern() {
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
          Pattern Template
        </Heading>
        <Text variant="descriptionPage">
          Template for creating consistent UI pattern documentation pages. Replace this content with your component's purpose and usage overview.
        </Text>
      </View>

      {/* BASIC VARIANTS SECTION */}
      <View as="section" margin="0 0 sections 0">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Basic Variants
          </Heading>
          <Text variant="descriptionSection">
            Core component variations demonstrating different visual styles
          </Text>
        </View>

        <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
          <Flex direction="column" gap="moduleElements">
            {/* Variant Group 1 */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Default Variant</Heading>
              </View>
              <Flex gap="moduleElements" wrap="wrap">
                <Button>Primary Button</Button>
                <Button color="secondary">Secondary Button</Button>
                <Button color="success">Success Button</Button>
              </Flex>
            </View>

            {/* Variant Group 2 */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Alternative Styles</Heading>
              </View>
              <Flex gap="moduleElements" wrap="wrap">
                <Button color="primary-inverse">Primary Inverse</Button>
                <Button color="danger">Danger Button</Button>
                <Button color="secondary">Secondary Alt</Button>
              </Flex>
            </View>
          </Flex>
        </View>
      </View>

      {/* SIZE VARIANTS SECTION */}
      <View as="section" margin="0 0 sections 0">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Size Variants
          </Heading>
          <Text variant="descriptionSection">
            Different sizing options for various interface contexts
          </Text>
        </View>

        <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
          <Flex direction="column" gap="moduleElements" alignItems="start">
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Small</Heading>
              </View>
              <Button size="small">Small Button</Button>
            </View>
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Medium (Default)</Heading>
              </View>
              <Button size="medium">Medium Button</Button>
            </View>
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Large</Heading>
              </View>
              <Button size="large">Large Button</Button>
            </View>
          </Flex>
        </View>
      </View>

      {/* INTERACTIVE STATES SECTION */}
      <View as="section" margin="0 0 sections 0">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Interactive States
          </Heading>
          <Text variant="descriptionSection">
            How components respond to user interaction and system states
          </Text>
        </View>

        <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
          <Flex direction="column" gap="moduleElements">
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Default States</Heading>
              </View>
              <Flex gap="moduleElements" wrap="wrap">
                <Button>Default</Button>
                <Button>Normal</Button>
                <Button interaction="disabled">Disabled</Button>
              </Flex>
            </View>

            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Interactive Example</Heading>
              </View>
              <Button 
                onClick={() => setInteractiveState(!interactiveState)}
                color={interactiveState ? "success" : "primary"}
              >
                {interactiveState ? "Active State" : "Click to Activate"}
              </Button>
            </View>
          </Flex>
        </View>
      </View>

      {/* WITH ICONS SECTION */}
      <View as="section" margin="0 0 sections 0">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Component Combinations
          </Heading>
          <Text variant="descriptionSection">
            Components paired with icons, text, or other elements
          </Text>
        </View>

        <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
          <Flex direction="column" gap="moduleElements">
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">With Leading Icons</Heading>
              </View>
              <Flex gap="moduleElements" wrap="wrap">
                <Button renderIcon={<IconAddLine />}>Add Item</Button>
                <Button renderIcon={<IconEditLine />} color="secondary">Edit</Button>
              </Flex>
            </View>

            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Icon Positioning</Heading>
              </View>
              <Flex gap="moduleElements" wrap="wrap">
                <Button renderIcon={<IconAddLine />}>Leading Icon</Button>
                <Button renderIcon={<IconAddLine />}>Icon Button</Button>
              </Flex>
            </View>
          </Flex>
        </View>
      </View>

      {/* LAYOUT PATTERNS SECTION */}
      <View as="section" margin="0 0 sections 0">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Layout Patterns
          </Heading>
          <Text variant="descriptionSection">
            Common arrangements and groupings for multiple components
          </Text>
        </View>

        <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
          <Flex direction="column" gap="moduleElements">
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Horizontal Group</Heading>
              </View>
              <Flex gap="moduleElements">
                <Button>Primary Action</Button>
                <Button color="secondary">Secondary</Button>
                <Button color="secondary">Cancel</Button>
              </Flex>
            </View>

            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Vertical Stack</Heading>
              </View>
              <Flex direction="column" gap="moduleElements" style={{ maxWidth: '200px' }}>
                <Button>First Action</Button>
                <Button color="secondary">Second Action</Button>
                <Button color="danger">Destructive Action</Button>
              </Flex>
            </View>
          </Flex>
        </View>
      </View>

      {/* RESPONSIVE GRID LAYOUTS SECTION */}
      <View as="section" margin="0 0 sections 0">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Responsive Grid Layouts
          </Heading>
          <Text variant="descriptionSection">
            Multi-column layouts that adapt to different screen sizes using InstUI Grid component
          </Text>
        </View>

        <View as="div" background="secondary" padding="paddingCardLarge" borderRadius="medium">
          <Flex direction="column" gap="sectionElements">
            {/* 2-Column Responsive Grid */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">2-Column Grid (Responsive)</Heading>
              </View>
              <Grid startAt="medium" vAlign="top" colSpacing="medium">
                <Grid.Row>
                  <Grid.Col width={6}>
                    <View as="div" background="primary" padding="paddingCardMedium" borderRadius="small" borderWidth="small" borderColor="secondary">
                      <Flex direction="column" gap="moduleElements">
                        <Heading level="h5" variant="label">Column 1</Heading>
                        <Text>Column 1 Content</Text>
                        <Text variant="contentSmall">Stacks on small screens, 2-column on medium+</Text>
                      </Flex>
                    </View>
                  </Grid.Col>
                  <Grid.Col width={6}>
                    <View as="div" background="primary" padding="paddingCardMedium" borderRadius="small" borderWidth="small" borderColor="secondary">
                      <Flex direction="column" gap="moduleElements">
                        <Heading level="h5" variant="label">Column 2</Heading>
                        <Text>Column 2 Content</Text>
                        <Text variant="contentSmall">Equal width columns</Text>
                      </Flex>
                    </View>
                  </Grid.Col>
                </Grid.Row>
              </Grid>
            </View>

            {/* 3-Column Responsive Grid */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">3-Column Grid (Responsive)</Heading>
              </View>
              <Grid startAt="large" vAlign="top" colSpacing="medium">
                <Grid.Row>
                  <Grid.Col width={4}>
                    <View as="div" background="primary" padding="paddingCardMedium" borderRadius="small" borderWidth="small" borderColor="secondary">
                      <Flex direction="column" gap="moduleElements">
                        <Heading level="h5" variant="label">Column 1</Heading>
                        <Text>Column 1</Text>
                        <Text variant="contentSmall">Stacks on small & medium</Text>
                      </Flex>
                    </View>
                  </Grid.Col>
                  <Grid.Col width={4}>
                    <View as="div" background="primary" padding="paddingCardMedium" borderRadius="small" borderWidth="small" borderColor="secondary">
                      <Flex direction="column" gap="moduleElements">
                        <Heading level="h5" variant="label">Column 2</Heading>
                        <Text>Column 2</Text>
                        <Text variant="contentSmall">3-column on large screens</Text>
                      </Flex>
                    </View>
                  </Grid.Col>
                  <Grid.Col width={4}>
                    <View as="div" background="primary" padding="paddingCardMedium" borderRadius="small" borderWidth="small" borderColor="secondary">
                      <Flex direction="column" gap="moduleElements">
                        <Heading level="h5" variant="label">Column 3</Heading>
                        <Text>Column 3</Text>
                        <Text variant="contentSmall">Equal width layout</Text>
                      </Flex>
                    </View>
                  </Grid.Col>
                </Grid.Row>
              </Grid>
            </View>

            {/* Mixed Width Grid */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Mixed Width Grid (2/3 + 1/3)</Heading>
              </View>
              <Grid startAt="medium" vAlign="top" colSpacing="medium">
                <Grid.Row>
                  <Grid.Col width={8}>
                    <View as="div" background="primary" padding="paddingCardMedium" borderRadius="small" borderWidth="small" borderColor="secondary">
                      <Flex direction="column" gap="moduleElements">
                        <Heading level="h5" variant="label">Main Content</Heading>
                        <Text>Main Content (2/3 width)</Text>
                        <Text variant="contentSmall">Larger column for primary content</Text>
                        <Button>Primary Action</Button>
                      </Flex>
                    </View>
                  </Grid.Col>
                  <Grid.Col width={4}>
                    <View as="div" background="primary" padding="paddingCardMedium" borderRadius="small" borderWidth="small" borderColor="secondary">
                      <Flex direction="column" gap="moduleElements">
                        <Heading level="h5" variant="label">Sidebar</Heading>
                        <Text>Sidebar (1/3 width)</Text>
                        <Text variant="contentSmall">Smaller column for secondary info</Text>
                        <Button color="secondary">Secondary</Button>
                      </Flex>
                    </View>
                  </Grid.Col>
                </Grid.Row>
              </Grid>
            </View>

            {/* Grid with Components */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Component Grid Example</Heading>
              </View>
              <Grid startAt="medium" vAlign="top" colSpacing="medium" rowSpacing="medium">
                <Grid.Row>
                  <Grid.Col width={4}>
                    <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary">
                      <Flex direction="column" gap="moduleElements">
                        <Heading level="h3" variant="titleCardMini">Card 1</Heading>
                        <Text variant="contentSmall">Card content with action button</Text>
                        <Button renderIcon={<IconAddLine />}>Add Item</Button>
                      </Flex>
                    </View>
                  </Grid.Col>
                  <Grid.Col width={4}>
                    <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary">
                      <Flex direction="column" gap="moduleElements">
                        <Heading level="h3" variant="titleCardMini">Card 2</Heading>
                        <Text variant="contentSmall">Another card with different action</Text>
                        <Button color="secondary" renderIcon={<IconEditLine />}>Edit</Button>
                      </Flex>
                    </View>
                  </Grid.Col>
                  <Grid.Col width={4}>
                    <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary">
                      <Flex direction="column" gap="moduleElements">
                        <Heading level="h3" variant="titleCardMini">Card 3</Heading>
                        <Text variant="contentSmall">Third card completes the row</Text>
                        <Button color="success">Success</Button>
                      </Flex>
                    </View>
                  </Grid.Col>
                </Grid.Row>
              </Grid>
            </View>
          </Flex>
        </View>
      </View>

      {/* USAGE GUIDELINES SECTION */}
      <View as="section" margin="0 0 sections 0">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Usage Guidelines
          </Heading>
          <Text variant="descriptionSection">
            Best practices and implementation notes for this component pattern
          </Text>
        </View>

        <Grid startAt="medium" vAlign="top" colSpacing="medium">
          <Grid.Row>
            <Grid.Col width={6}>
              <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
                <View>
                  <View as="div" margin="0 0 moduleElements 0">
                    <Heading level="h5" variant="label">Do ✓</Heading>
                  </View>
                  <Flex direction="column" gap="moduleElements">
                    <Text>• Use semantic colors that match the action's purpose</Text>
                    <Text>• Provide clear, action-oriented labels</Text>
                    <Text>• Use Flex containers with gaps for consistent spacing</Text>
                    <Text>• Group related actions together with consistent spacing</Text>
                  </Flex>
                </View>
              </View>
            </Grid.Col>
            <Grid.Col width={6}>
              <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
                <View>
                  <View as="div" margin="0 0 moduleElements 0">
                    <Heading level="h5" variant="label">Don't ✗</Heading>
                  </View>
                  <Flex direction="column" gap="moduleElements">
                    <Text>• Don't use status colors for non-status actions</Text>
                    <Text>• Don't apply margins directly to Text or Heading components</Text>
                    <Text>• Don't mix different visual styles without purpose</Text>
                    <Text>• Don't create overly complex component combinations</Text>
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