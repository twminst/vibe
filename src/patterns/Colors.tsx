import { View, Heading, Text, Grid, Responsive, List, ListItem, Flex } from '@instructure/ui'

export default function ColorsPattern() {
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
          Colors Style Guide
        </Heading>
        <Text variant="descriptionPage">
          Complete reference of all semantic color properties available in Instructure UI, with usage guidelines and examples.
        </Text>
      </View>

      {/* BACKGROUND COLORS */}
      <View as="section" margin="0 0 sections 0">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Background Colors
          </Heading>
          <Text variant="descriptionSection">
            Available values for the background prop on View and other components.
          </Text>
        </View>

        <View as="div" margin="0 0 moduleElements 0">
          <Grid startAt="medium" vAlign="top" colSpacing="medium" rowSpacing="medium">
            <Grid.Row>
              <Grid.Col width={6}>
                <View 
                  as="div" 
                  background="primary" 
                  padding="paddingCardMedium" 
                  borderRadius="medium"
                  borderWidth="small"
                  borderColor="secondary"
                  shadow="resting"
                >
                  <View as="header" margin="0 0 moduleElements 0">
                    <Heading level="h5" variant="label">
                      Neutral Backgrounds
                    </Heading>
                  </View>
                  <Flex direction="column" gap="moduleElements">
                    <View as="div" background="primary" padding="small" borderRadius="medium" borderWidth="small" borderColor="secondary">
                      <Flex direction="column" gap="x-small">
                        <Heading level="h5" variant="label">background="primary"</Heading>
                        <Text variant="content">Clean white background for main content areas, cards, and containers</Text>
                      </Flex>
                    </View>

                    <View as="div" background="secondary" padding="small" borderRadius="medium" shadow="resting">
                      <Flex direction="column" gap="x-small">
                        <Heading level="h5" variant="label">background="secondary"</Heading>
                        <Text variant="content">Light gray background for sections, supporting content, and visual separation</Text>
                      </Flex>
                    </View>

                    <View as="div" background="primary-inverse" padding="small" borderRadius="medium" shadow="resting">
                      <Flex direction="column" gap="x-small">
                        <Heading level="h5" variant="label" color="primary-inverse">background="primary-inverse"</Heading>
                        <Text variant="content" color="primary-inverse">Dark background for high contrast elements and emphasis</Text>
                      </Flex>
                    </View>
                  </Flex>
                </View>
              </Grid.Col>

              <Grid.Col width={6}>
                <View 
                  as="div" 
                  background="primary" 
                  padding="paddingCardMedium" 
                  borderRadius="medium"
                  borderWidth="small"
                  borderColor="secondary"
                  shadow="resting"
                >
                  <View as="header" margin="0 0 moduleElements 0">
                    <Heading level="h5" variant="label">
                      Semantic Backgrounds
                    </Heading>
                  </View>
                  <Flex direction="column" gap="moduleElements">
                    <View as="div" background="success" padding="small" borderRadius="medium" shadow="resting">
                      <Flex direction="column" gap="x-small">
                        <Heading level="h5" variant="label" color="primary-inverse">background="success"</Heading>
                        <Text variant="content" color="primary-inverse">Success states, positive feedback, completed tasks</Text>
                      </Flex>
                    </View>

                    <View as="div" background="warning" padding="small" borderRadius="medium" shadow="resting">
                      <Flex direction="column" gap="x-small">
                        <Heading level="h5" variant="label" color="primary-inverse">background="warning"</Heading>
                        <Text variant="content" color="primary-inverse">Warning states, caution messages, pending actions</Text>
                      </Flex>
                    </View>

                    <View as="div" background="danger" padding="small" borderRadius="medium" shadow="resting">
                      <Flex direction="column" gap="x-small">
                        <Heading level="h5" variant="label" color="primary-inverse">background="danger"</Heading>
                        <Text variant="content" color="primary-inverse">Error states, critical issues, destructive actions</Text>
                      </Flex>
                    </View>

                    <View as="div" background="alert" padding="small" borderRadius="medium" shadow="resting">
                      <Flex direction="column" gap="x-small">
                        <Heading level="h5" variant="label" color="primary-inverse">background="alert"</Heading>
                        <Text variant="content" color="primary-inverse">Important notifications, system alerts, attention-grabbing content</Text>
                      </Flex>
                    </View>
                  </Flex>
                </View>
              </Grid.Col>
            </Grid.Row>
          </Grid>
        </View>
      </View>

      {/* TEXT COLORS */}
      <View as="section" margin="0 0 sections 0">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Text Colors
          </Heading>
          <Text variant="descriptionSection">
            Available values for the color prop on Text, Heading, and other text components.
          </Text>
        </View>

        <View as="div" margin="0 0 moduleElements 0">
          <View 
            as="div" 
            background="primary" 
            padding="paddingCardLarge" 
            borderRadius="medium"
            borderWidth="small"
            borderColor="secondary"
            shadow="resting"
            margin="0 0 moduleElements 0"
          >
            <View as="header" margin="0 0 moduleElements 0">
              <Heading level="h5" variant="label">
                Standard Text Colors
              </Heading>
            </View>
            <Grid startAt="medium" vAlign="top" colSpacing="medium" rowSpacing="medium">
              <Grid.Row>
                <Grid.Col width={6}>
                  <Flex direction="column" gap="moduleElements">
                    <View>
                      <Flex direction="column" gap="x-small">
                        <Heading level="h5" variant="label">Default (no color prop)</Heading>
                        <Text variant="content">Standard black text for primary content and body text</Text>
                      </Flex>
                    </View>

                    <View>
                      <Flex direction="column" gap="x-small">
                        <Heading level="h5" variant="label" color="secondary">color="secondary"</Heading>
                        <Text variant="content" color="secondary">Gray text for supporting information, metadata, and captions</Text>
                      </Flex>
                    </View>

                    <View>
                      <Flex direction="column" gap="x-small">
                        <Heading level="h5" variant="label" color="primary">color="primary"</Heading>
                        <Text variant="content" color="primary">Brand blue for links, interactive elements, and emphasis</Text>
                      </Flex>
                    </View>

                    <View>
                      <Flex direction="column" gap="x-small">
                        <Heading level="h5" variant="label" color="primary">color="success"</Heading>
                        <Text variant="content" color="success">Green text for positive feedback and success states</Text>
                      </Flex>
                    </View>
                  </Flex>
                </Grid.Col>

                <Grid.Col width={6}>
                  <Flex direction="column" gap="moduleElements">
                    <View>
                      <Flex direction="column" gap="x-small">
                        <Heading level="h5" variant="label" color="primary">color="warning"</Heading>
                        <Text variant="content" color="warning">Orange text for caution messages and pending states</Text>
                      </Flex>
                    </View>

                    <View>
                      <Flex direction="column" gap="x-small">
                        <Heading level="h5" variant="label" color="primary">color="danger"</Heading>
                        <Text variant="content" color="danger">Red text for errors, validation messages, and critical issues</Text>
                      </Flex>
                    </View>

                    <View>
                      <Flex direction="column" gap="x-small">
                        <Heading level="h5" variant="label" color="primary">color="alert"</Heading>
                        <Text variant="content" color="alert">Blue text for important notifications and system messages</Text>
                      </Flex>
                    </View>
                  </Flex>
                </Grid.Col>
              </Grid.Row>
            </Grid>
          </View>

          {/* Inverse Text Colors */}
          <View 
            as="div" 
            background="primary-inverse" 
            padding="paddingCardLarge" 
            borderRadius="medium"
            borderWidth="small"
            borderColor="secondary"
            shadow="resting"
            margin="0 0 moduleElements 0"
          >
            <View as="header" margin="0 0 moduleElements 0">
              <Heading level="h5" variant="label" color="primary-inverse">
                Inverse Text Colors
              </Heading>
              <Text variant="contentSmall" color="primary-inverse">For dark backgrounds</Text>
            </View>
            
            <Grid startAt="medium" vAlign="top" colSpacing="medium" rowSpacing="medium">
              <Grid.Row>
                <Grid.Col width={6}>
                  <Flex direction="column" gap="moduleElements">
                    <View>
                      <Flex direction="column" gap="x-small">
                        <Heading level="h5" variant="label" color="primary-inverse">color="primary-inverse"</Heading>
                        <Text variant="content" color="primary-inverse">White text for dark backgrounds</Text>
                      </Flex>
                    </View>

                    <View>
                      <Flex direction="column" gap="x-small">
                        <Heading level="h5" variant="label" color="primary-inverse">color="success-inverse"</Heading>
                        <Text variant="content" color="primary-inverse">Light text for success backgrounds</Text>
                      </Flex>
                    </View>
                  </Flex>
                </Grid.Col>

                <Grid.Col width={6}>
                  <Flex direction="column" gap="moduleElements">
                    <View>
                      <Flex direction="column" gap="x-small">
                        <Heading level="h5" variant="label" color="primary-inverse">color="warning-inverse"</Heading>
                        <Text variant="content" color="primary-inverse">Light text for warning backgrounds</Text>
                      </Flex>
                    </View>

                    <View>
                      <Flex direction="column" gap="x-small">
                        <Heading level="h5" variant="label" color="primary-inverse">color="danger-inverse"</Heading>
                        <Text variant="content" color="primary-inverse">Light text for danger backgrounds</Text>
                      </Flex>
                    </View>
                  </Flex>
                </Grid.Col>
              </Grid.Row>
            </Grid>
          </View>
        </View>
      </View>

      {/* BORDER COLORS */}
      <View as="section" margin="0 0 sections 0">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Border Colors
          </Heading>
          <Text variant="descriptionSection">
            Available values for the borderColor prop when using borderWidth on components.
          </Text>
        </View>

        <View as="div" margin="0 0 moduleElements 0">
          <Grid startAt="medium" vAlign="top" colSpacing="medium" rowSpacing="medium">
            <Grid.Row>
              <Grid.Col width={6}>
                <View 
                  as="div" 
                  background="primary" 
                  padding="paddingCardMedium" 
                  borderRadius="medium"
                  borderWidth="small"
                  borderColor="primary"
                  shadow="resting"
                  margin="0 0 moduleElements 0"
                >
                  <Flex direction="column" gap="x-small">
                    <Heading level="h5" variant="label">borderColor="primary"</Heading>
                    <Text variant="content">Brand blue borders for emphasis and interactive elements</Text>
                  </Flex>
                </View>

                <View 
                  as="div" 
                  background="primary" 
                  padding="paddingCardMedium" 
                  borderRadius="medium"
                  borderWidth="small"
                  borderColor="secondary"
                  shadow="resting"
                  margin="0 0 moduleElements 0"
                >
                  <Flex direction="column" gap="x-small">
                    <Heading level="h5" variant="label">borderColor="secondary"</Heading>
                    <Text variant="content">Gray borders for cards, containers, and subtle separation</Text>
                  </Flex>
                </View>

                <View 
                  as="div" 
                  background="primary" 
                  padding="paddingCardMedium" 
                  borderRadius="medium"
                  borderWidth="small"
                  borderColor="success"
                  shadow="resting"
                  margin="0 0 moduleElements 0"
                >
                  <Flex direction="column" gap="x-small">
                    <Heading level="h5" variant="label">borderColor="success"</Heading>
                    <Text variant="content">Green borders for success states and positive feedback</Text>
                  </Flex>
                </View>
              </Grid.Col>

              <Grid.Col width={6}>
                <View 
                  as="div" 
                  background="primary" 
                  padding="paddingCardMedium" 
                  borderRadius="medium"
                  borderWidth="small"
                  borderColor="warning"
                  shadow="resting"
                  margin="0 0 moduleElements 0"
                >
                  <Flex direction="column" gap="x-small">
                    <Heading level="h5" variant="label">borderColor="warning"</Heading>
                    <Text variant="content">Orange borders for caution messages and pending states</Text>
                  </Flex>
                </View>

                <View 
                  as="div" 
                  background="primary" 
                  padding="paddingCardMedium" 
                  borderRadius="medium"
                  borderWidth="small"
                  borderColor="danger"
                  shadow="resting"
                  margin="0 0 moduleElements 0"
                >
                  <Flex direction="column" gap="x-small">
                    <Heading level="h5" variant="label">borderColor="danger"</Heading>
                    <Text variant="content">Red borders for errors, validation issues, and critical alerts</Text>
                  </Flex>
                </View>

                <View 
                  as="div" 
                  background="primary" 
                  padding="paddingCardMedium" 
                  borderRadius="medium"
                  borderWidth="small"
                  borderColor="alert"
                  shadow="resting"
                  margin="0 0 moduleElements 0"
                >
                  <Flex direction="column" gap="x-small">
                    <Heading level="h5" variant="label">borderColor="alert"</Heading>
                    <Text variant="content">Blue borders for important notifications and system messages</Text>
                  </Flex>
                </View>
              </Grid.Col>
            </Grid.Row>
          </Grid>
        </View>
      </View>

      {/* COLOR USAGE EXAMPLES */}
      <View as="section" margin="0 0 sections 0">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Common Usage Patterns
          </Heading>
          <Text variant="descriptionSection">
            Real-world examples of how to combine colors semantically for consistent Canvas interfaces.
          </Text>
        </View>

        <View as="div" margin="0 0 moduleElements 0">
          <Grid startAt="large" vAlign="top" colSpacing="medium" rowSpacing="medium">
            <Grid.Row>
              <Grid.Col width={4}>
                <View 
                  as="div" 
                  background="primary" 
                  padding="paddingCardMedium" 
                  borderRadius="medium"
                  borderWidth="small"
                  borderColor="secondary"
                  shadow="resting"
                  margin="0 0 moduleElements 0"
                >
                  <Flex direction="column" gap="small">
                    <Heading level="h5" variant="label">Standard Card</Heading>
                    <Text variant="content">Primary background with secondary border</Text>
                    <Text variant="contentSmall" color="secondary">Perfect for content cards and containers</Text>
                  </Flex>
                </View>
              </Grid.Col>

              <Grid.Col width={4}>
                <View 
                  as="div" 
                  background="success" 
                  padding="paddingCardMedium" 
                  borderRadius="medium"
                  shadow="resting"
                  margin="0 0 moduleElements 0"
                >
                  <Flex direction="column" gap="small">
                    <Heading level="h5" variant="label" color="primary-inverse">Success Alert</Heading>
                    <Text variant="content" color="primary-inverse">Success background with inverse text</Text>
                    <Text variant="contentSmall" color="primary-inverse">For positive feedback messages</Text>
                  </Flex>
                </View>
              </Grid.Col>

              <Grid.Col width={4}>
                <View 
                  as="div" 
                  background="primary" 
                  padding="paddingCardMedium" 
                  borderRadius="medium"
                  borderWidth="small"
                  borderColor="danger"
                  shadow="resting"
                  margin="0 0 moduleElements 0"
                >
                  <Flex direction="column" gap="small">
                    <Heading level="h5" variant="label" color="primary">Error State</Heading>
                    <Text variant="content">Primary background, danger border and text</Text>
                    <Text variant="contentSmall" color="secondary">For validation errors and warnings</Text>
                  </Flex>
                </View>
              </Grid.Col>
            </Grid.Row>
          </Grid>
        </View>
      </View>

      {/* COLOR REFERENCE TABLE */}
      <View as="section">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Complete Color Reference
          </Heading>
          <Text variant="descriptionSection">
            Quick reference table of all available semantic color values organized by property type.
          </Text>
        </View>
        
        <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting" margin="0 0 moduleElements 0">
          <Grid startAt="medium" vAlign="top" colSpacing="medium" rowSpacing="medium">
            <Grid.Row>
              <Grid.Col width={4}>
                <View as="div" margin="0 0 moduleElements 0">
                  <View margin="0 0 small 0">
                    <Text variant="contentImportant">Background Colors</Text>
                  </View>
                  <List as="ul" size="small" itemSpacing="x-small">
                    <ListItem>primary</ListItem>
                    <ListItem>secondary</ListItem>
                    <ListItem>primary-inverse</ListItem>
                    <ListItem>success</ListItem>
                    <ListItem>warning</ListItem>
                    <ListItem>danger</ListItem>
                    <ListItem>alert</ListItem>
                  </List>
                </View>
              </Grid.Col>

              <Grid.Col width={4}>
                <View as="div" margin="0 0 moduleElements 0">
                  <View margin="0 0 small 0">
                    <Text variant="contentImportant">Text Colors</Text>
                  </View>
                  <List as="ul" size="small" itemSpacing="x-small">
                    <ListItem>primary</ListItem>
                    <ListItem>secondary</ListItem>
                    <ListItem>primary-inverse</ListItem>
                    <ListItem>success</ListItem>
                    <ListItem>success-inverse</ListItem>
                    <ListItem>warning</ListItem>
                    <ListItem>warning-inverse</ListItem>
                    <ListItem>danger</ListItem>
                    <ListItem>danger-inverse</ListItem>
                    <ListItem>alert</ListItem>
                    <ListItem>alert-inverse</ListItem>
                  </List>
                </View>
              </Grid.Col>

              <Grid.Col width={4}>
                <View as="div" margin="0 0 moduleElements 0">
                  <View margin="0 0 small 0">
                    <Text variant="contentImportant">Border Colors</Text>
                  </View>
                  <List as="ul" size="small" itemSpacing="x-small">
                    <ListItem>primary</ListItem>
                    <ListItem>secondary</ListItem>
                    <ListItem>success</ListItem>
                    <ListItem>warning</ListItem>
                    <ListItem>danger</ListItem>
                    <ListItem>alert</ListItem>
                  </List>
                </View>
              </Grid.Col>
            </Grid.Row>
          </Grid>
        </View>
      </View>
        </View>
        )
      }}
    </Responsive>
  )
}