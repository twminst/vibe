import { View, Heading, Text, Flex, Grid, Button, Badge, Avatar, IconButton } from '@instructure/ui'
import { IconMoreSolid } from '@instructure/ui-icons'

export default function LayoutPattern() {
  return (
    <View as="main" maxWidth="1100px" width="100%" margin="0 auto">
      <Flex as="div" direction="column" gap="sections">
        
        {/* Pattern Header */}
        <Flex as="section" direction="column" gap="sectionElements">
          <View as="div">
            <Heading level="h1" variant="titlePageDesktop">
              Layout & Card Pattern
            </Heading>
            <Text variant="descriptionPage">
              Consistent content structure, visual hierarchy, and card-based layouts for Canvas prototypes
            </Text>
          </View>
        </Flex>

        {/* Core Layout Structure */}
        <Flex as="section" direction="column" gap="sectionElements">
          <View as="div">
            <Heading level="h2" variant="titleSection">
              Core Layout Structure
            </Heading>
            <Text variant="descriptionSection">
              Semantic HTML structure with proper heading hierarchy and spacing
            </Text>
          </View>
          
          <Flex as="div" direction="column" gap="moduleElements">
            <View as="div">
              <Heading level="h3" variant="titleModule">
                Main Container Pattern
              </Heading>
              <Text variant="content">
                All content wrapped in centered container with maximum width
              </Text>
            </View>
            
            <View 
              as="div" 
              background="secondary" 
              padding="paddingCardMedium" 
              borderRadius="medium"
              borderWidth="small"
              borderColor="primary"
            >
              <Text variant="content">
                View as="main" maxWidth="1100px" width="100%" margin="0 auto"
              </Text>
            </View>
          </Flex>
        </Flex>

        {/* Card System Examples */}
        <Flex as="section" direction="column" gap="sectionElements">
          <View as="div">
            <Heading level="h2" variant="titleSection">
              Card System
            </Heading>
            <Text variant="descriptionSection">
              Visual containers with consistent styling for organizing content
            </Text>
          </View>

          {/* Primary Cards */}
          <Flex as="div" direction="column" gap="moduleElements">
            <View as="div">
              <Heading level="h3" variant="titleModule">
                Primary Cards (White Background)
              </Heading>
              <Text variant="content">
                Main content, important information, primary data display
              </Text>
            </View>
            
            <Grid colSpacing="medium" rowSpacing="medium">
              <Grid.Row>
                <Grid.Col width={4}>
                  <View 
                    as="div" 
                    background="primary" 
                    padding="paddingCardMedium" 
                    borderRadius="medium"
                  >
                    <Heading level="h4" variant="titleCardRegular">Basic Primary Card</Heading>
                    <Text variant="content">Standard white background card</Text>
                  </View>
                </Grid.Col>
                <Grid.Col width={4}>
                  <View 
                    as="div" 
                    background="primary" 
                    padding="paddingCardMedium" 
                    borderRadius="medium"
                    borderWidth="small"
                    borderColor="secondary"
                  >
                    <Heading level="h4" variant="titleCardRegular">Primary + Border</Heading>
                    <Text variant="content">Defined boundaries and structure</Text>
                  </View>
                </Grid.Col>
                <Grid.Col width={4}>
                  <View 
                    as="div" 
                    background="primary" 
                    padding="paddingCardMedium" 
                    borderRadius="medium"
                    shadow="resting"
                  >
                    <Heading level="h4" variant="titleCardRegular">Primary + Shadow</Heading>
                    <Text variant="content">Elevated importance and interactivity</Text>
                  </View>
                </Grid.Col>
              </Grid.Row>
            </Grid>
          </Flex>

          {/* Secondary Cards */}
          <Flex as="div" direction="column" gap="moduleElements">
            <View as="div">
              <Heading level="h3" variant="titleModule">
                Secondary Cards (Gray Background)
              </Heading>
              <Text variant="content">
                Supporting content, backgrounds, secondary information
              </Text>
            </View>
            
            <Grid colSpacing="medium" rowSpacing="medium">
              <Grid.Row>
                <Grid.Col width={6}>
                  <View 
                    as="div" 
                    background="secondary" 
                    padding="paddingCardMedium" 
                    borderRadius="medium"
                  >
                    <Heading level="h4" variant="titleCardRegular">Basic Secondary Card</Heading>
                    <Text variant="content">Supporting content and backgrounds</Text>
                  </View>
                </Grid.Col>
                <Grid.Col width={6}>
                  <View 
                    as="div" 
                    background="secondary" 
                    padding="paddingCardMedium" 
                    borderRadius="medium"
                    borderWidth="small"
                    borderColor="primary"
                  >
                    <Heading level="h4" variant="titleCardRegular">Secondary + Border</Heading>
                    <Text variant="content">Structured secondary content</Text>
                  </View>
                </Grid.Col>
              </Grid.Row>
            </Grid>
          </Flex>
        </Flex>

        {/* Grid Layout Examples */}
        <Flex as="section" direction="column" gap="sectionElements">
          <View as="div">
            <Heading level="h2" variant="titleSection">
              Grid Layouts
            </Heading>
            <Text variant="descriptionSection">
              Organizing multiple cards and content blocks with responsive grids
            </Text>
          </View>

          {/* Responsive Card Grid */}
          <Flex as="div" direction="column" gap="moduleElements">
            <View as="div">
              <Heading level="h3" variant="titleModule">
                Responsive Card Grid
              </Heading>
              <Text variant="content">
                Cards that adapt to different screen sizes
              </Text>
            </View>
            
            <Grid colSpacing="medium" rowSpacing="medium" startAt="medium">
              <Grid.Row>
                <Grid.Col width={{medium: 6, large: 4}}>
                  <View background="primary" padding="paddingCardMedium" borderRadius="medium" shadow="resting">
                    <Heading level="h4" variant="titleCardRegular">Course 1</Heading>
                    <Text variant="content">Biology 101</Text>
                    <Text variant="contentSmall" color="success">Completed</Text>
                  </View>
                </Grid.Col>
                <Grid.Col width={{medium: 6, large: 4}}>
                  <View background="primary" padding="paddingCardMedium" borderRadius="medium" shadow="resting">
                    <Heading level="h4" variant="titleCardRegular">Course 2</Heading>
                    <Text variant="content">Chemistry 201</Text>
                    <Text variant="contentSmall" color="warning">In Progress</Text>
                  </View>
                </Grid.Col>
                <Grid.Col width={{medium: 12, large: 4}}>
                  <View background="secondary" padding="paddingCardMedium" borderRadius="medium">
                    <Heading level="h4" variant="titleCardRegular">Add Course</Heading>
                    <Text variant="content">Browse available courses</Text>
                  </View>
                </Grid.Col>
              </Grid.Row>
            </Grid>
          </Flex>

          {/* Header with Actions */}
          <Flex as="div" direction="column" gap="moduleElements">
            <View as="div">
              <Heading level="h3" variant="titleModule">
                Header with Actions
              </Heading>
              <Text variant="content">
                Auto-width columns for flexible layouts
              </Text>
            </View>
            
            <View 
              as="div" 
              background="primary" 
              padding="paddingCardMedium" 
              borderRadius="medium"
              borderWidth="small"
              borderColor="secondary"
            >
              <Grid hAlign="space-between" vAlign="middle" colSpacing="medium">
                <Grid.Row>
                  <Grid.Col>
                    <Heading level="h4" variant="titleCardRegular">Dashboard Section</Heading>
                  </Grid.Col>
                  <Grid.Col width="auto">
                    <Button>Add New</Button>
                  </Grid.Col>
                </Grid.Row>
              </Grid>
            </View>
          </Flex>
        </Flex>

        {/* Nested Card Layout Example */}
        <Flex as="section" direction="column" gap="sectionElements">
          <View as="div">
            <Heading level="h2" variant="titleSection">
              Nested Card Layout
            </Heading>
            <Text variant="descriptionSection">
              Complex layouts with cards containing other cards
            </Text>
          </View>
          
          <View 
            as="div" 
            background="secondary" 
            padding="paddingCardLarge" 
            borderRadius="medium"
            borderWidth="small"
            borderColor="primary"
          >
            <View as="header" margin="0 0 sectionElements 0">
              <Heading level="h3" variant="titleModule">
                Course Module: Cell Biology
              </Heading>
              <Text variant="descriptionSection">
                Complete module with lessons and assignments
              </Text>
            </View>

            <Grid colSpacing="medium" rowSpacing="medium">
              <Grid.Row>
                <Grid.Col width={6}>
                  <View background="primary" padding="paddingCardMedium" borderRadius="medium" shadow="resting">
                    <Heading level="h4" variant="titleCardRegular">Lesson 1</Heading>
                    <Text variant="content">Cell structure basics</Text>
                    <Text variant="contentSmall" color="success">Completed</Text>
                  </View>
                </Grid.Col>
                <Grid.Col width={6}>
                  <View background="primary" padding="paddingCardMedium" borderRadius="medium" shadow="resting">
                    <Heading level="h4" variant="titleCardRegular">Lesson 2</Heading>
                    <Text variant="content">Cell division process</Text>
                    <Text variant="contentSmall" color="warning">In Progress</Text>
                  </View>
                </Grid.Col>
              </Grid.Row>
            </Grid>
          </View>
        </Flex>

        {/* Horizontal Layout with Flex */}
        <Flex as="section" direction="column" gap="sectionElements">
          <View as="div">
            <Heading level="h2" variant="titleSection">
              Horizontal Layout with Flex
            </Heading>
            <Text variant="descriptionSection">
              Using Flex direction="row" with gaps for horizontal layouts - content should NEVER be flush together
            </Text>
          </View>

          {/* Button Groups */}
          <Flex as="div" direction="column" gap="moduleElements">
            <View as="div">
              <Heading level="h3" variant="titleModule">
                Button Groups
              </Heading>
              <Text variant="content">
                Standard and compact button groupings with appropriate spacing
              </Text>
            </View>
            
            <Grid colSpacing="medium" rowSpacing="medium">
              <Grid.Row>
                <Grid.Col width={6}>
                  <View 
                    as="div" 
                    background="primary" 
                    padding="paddingCardMedium" 
                    borderRadius="medium"
                    borderWidth="small"
                    borderColor="secondary"
                  >
                    <Heading level="h4" variant="titleCardRegular">Primary Action Group</Heading>
                    <Text variant="content">Standard spacing (16px gap):</Text>
                    <View margin="small 0 0 0">
                      <Flex as="div" direction="row" gap="medium">
                        <Button color="primary">Save Changes</Button>
                        <Button>Cancel</Button>
                      </Flex>
                    </View>
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
                  >
                    <Heading level="h4" variant="titleCardRegular">Secondary Action Group</Heading>
                    <Text variant="content">Compact spacing (12px gap):</Text>
                    <View margin="small 0 0 0">
                      <Flex as="div" direction="row" gap="small">
                        <Button size="small">Edit</Button>
                        <Button size="small">Copy</Button>
                        <Button size="small">Delete</Button>
                      </Flex>
                    </View>
                  </View>
                </Grid.Col>
              </Grid.Row>
            </Grid>
          </Flex>

          {/* Status and Metadata */}
          <Flex as="div" direction="column" gap="moduleElements">
            <View as="div">
              <Heading level="h3" variant="titleModule">
                Status and Metadata
              </Heading>
              <Text variant="content">
                Compact horizontal layouts for badges, tags, status indicators, and data points
              </Text>
            </View>
            
            <Grid colSpacing="medium" rowSpacing="medium">
              <Grid.Row>
                <Grid.Col width={6}>
                  <View 
                    as="div" 
                    background="secondary" 
                    padding="paddingCardMedium" 
                    borderRadius="medium"
                    borderWidth="small"
                    borderColor="primary"
                  >
                    <Heading level="h4" variant="titleCardRegular">Course Metadata</Heading>
                    <Text variant="content">Small gap (12px) for data points:</Text>
                    <View margin="small 0 0 0">
                      <Flex as="div" direction="row" gap="small" alignItems="center">
                        <Badge count={24} />
                        <Text variant="contentSmall">Students</Text>
                        <Text variant="contentSmall" color="success">Active</Text>
                        <Text variant="contentSmall">Updated 2 hours ago</Text>
                      </Flex>
                    </View>
                  </View>
                </Grid.Col>
                <Grid.Col width={6}>
                  <View 
                    as="div" 
                    background="secondary" 
                    padding="paddingCardMedium" 
                    borderRadius="medium"
                    borderWidth="small"
                    borderColor="primary"
                  >
                    <Heading level="h4" variant="titleCardRegular">User Status</Heading>
                    <Text variant="content">Avatar with status indicators:</Text>
                    <View margin="small 0 0 0">
                      <Flex as="div" direction="row" gap="small" alignItems="center">
                        <Avatar name="John Doe" size="x-small" />
                        <Text variant="content">John Doe</Text>
                        <Text variant="contentSmall" color="success">Online</Text>
                      </Flex>
                    </View>
                  </View>
                </Grid.Col>
              </Grid.Row>
            </Grid>
          </Flex>

          {/* Card Headers with Actions */}
          <Flex as="div" direction="column" gap="moduleElements">
            <View as="div">
              <Heading level="h3" variant="titleModule">
                Card Headers with Actions
              </Heading>
              <Text variant="content">
                Flex layouts with space-between alignment for content and actions
              </Text>
            </View>
            
            <View 
              as="div" 
              background="primary" 
              padding="paddingCardMedium" 
              borderRadius="medium"
              shadow="resting"
            >
              <Flex as="div" direction="row" justifyItems="space-between" alignItems="start">
                <View as="div">
                  <Heading level="h4" variant="titleCardRegular">Assignment Title</Heading>
                  <Text variant="content">Due: March 15, 2024</Text>
                  <Flex as="div" direction="row" gap="small" alignItems="center" margin="small 0 0 0">
                    <Text variant="contentSmall" color="warning">In Progress</Text>
                    <Text variant="contentSmall">•</Text>
                    <Text variant="contentSmall">3 submissions</Text>
                  </Flex>
                </View>
                <Flex as="div" direction="row" gap="small">
                  <Button size="small">Edit</Button>
                  <IconButton screenReaderLabel="More options">
                    <IconMoreSolid />
                  </IconButton>
                </Flex>
              </Flex>
            </View>
          </Flex>

          {/* Horizontal Spacing Guidelines */}
          <Flex as="div" direction="column" gap="moduleElements">
            <View as="div">
              <Heading level="h3" variant="titleModule">
                Horizontal Spacing Guidelines
              </Heading>
              <Text variant="content">
                Visual examples of different gap sizes for various content types
              </Text>
            </View>
            
            <Grid colSpacing="medium" rowSpacing="medium">
              <Grid.Row>
                <Grid.Col width={4}>
                  <View 
                    as="div" 
                    background="primary" 
                    padding="paddingCardMedium" 
                    borderRadius="medium"
                    borderWidth="small"
                    borderColor="secondary"
                  >
                    <Heading level="h4" variant="titleCardRegular">Large Gap (24px)</Heading>
                    <Text variant="content">Major content sections:</Text>
                    <View margin="small 0 0 0">
                      <Flex as="div" direction="row" gap="large">
                        <Button size="small">Section A</Button>
                        <Button size="small">Section B</Button>
                      </Flex>
                    </View>
                  </View>
                </Grid.Col>
                <Grid.Col width={4}>
                  <View 
                    as="div" 
                    background="primary" 
                    padding="paddingCardMedium" 
                    borderRadius="medium"
                    borderWidth="small"
                    borderColor="secondary"
                  >
                    <Heading level="h4" variant="titleCardRegular">Medium Gap (16px)</Heading>
                    <Text variant="content">Standard elements:</Text>
                    <View margin="small 0 0 0">
                      <Flex as="div" direction="row" gap="medium">
                        <Button size="small">Save</Button>
                        <Button size="small">Cancel</Button>
                      </Flex>
                    </View>
                  </View>
                </Grid.Col>
                <Grid.Col width={4}>
                  <View 
                    as="div" 
                    background="primary" 
                    padding="paddingCardMedium" 
                    borderRadius="medium"
                    borderWidth="small"
                    borderColor="secondary"
                  >
                    <Heading level="h4" variant="titleCardRegular">Small Gap (12px)</Heading>
                    <Text variant="content">Compact elements:</Text>
                    <View margin="small 0 0 0">
                      <Flex as="div" direction="row" gap="small">
                        <Badge count={5} />
                        <Text variant="contentSmall">Status</Text>
                      </Flex>
                    </View>
                  </View>
                </Grid.Col>
              </Grid.Row>
            </Grid>
          </Flex>
        </Flex>

        {/* Spacing Reference */}
        <Flex as="section" direction="column" gap="sectionElements">
          <View as="div">
            <Heading level="h2" variant="titleSection">
              Spacing Reference
            </Heading>
            <Text variant="descriptionSection">
              Semantic spacing tokens for consistent layouts
            </Text>
          </View>
          
          <Grid colSpacing="medium" rowSpacing="medium">
            <Grid.Row>
              <Grid.Col width={4}>
                <View 
                  as="div" 
                  background="primary" 
                  padding="paddingCardMedium" 
                  borderRadius="medium"
                  borderWidth="small"
                  borderColor="secondary"
                >
                  <Heading level="h4" variant="titleCardRegular">Semantic Spacing</Heading>
                  <Text variant="content">sections: 36px</Text>
                  <Text variant="content">sectionElements: 24px</Text>
                  <Text variant="content">moduleElements: 16px</Text>
                  <Text variant="content">small: 8px</Text>
                  <Text variant="content">medium: 16px</Text>
                  <Text variant="content">large: 24px</Text>
                </View>
              </Grid.Col>
              <Grid.Col width={4}>
                <View 
                  as="div" 
                  background="primary" 
                  padding="paddingCardMedium" 
                  borderRadius="medium"
                  borderWidth="small"
                  borderColor="secondary"
                >
                  <Heading level="h4" variant="titleCardRegular">Padding Tokens</Heading>
                  <Text variant="content">paddingCardSmall: 12px</Text>
                  <Text variant="content">paddingCardMedium: 16px</Text>
                  <Text variant="content">paddingCardLarge: 24px</Text>
                </View>
              </Grid.Col>
              <Grid.Col width={4}>
                <View 
                  as="div" 
                  background="primary" 
                  padding="paddingCardMedium" 
                  borderRadius="medium"
                  borderWidth="small"
                  borderColor="secondary"
                >
                  <Heading level="h4" variant="titleCardRegular">Usage Guidelines</Heading>
                  <Text variant="content">large (24px): Major sections</Text>
                  <Text variant="content">medium (16px): Standard elements</Text>
                  <Text variant="content">small (12px): Compact elements</Text>
                  <Text variant="content" color="danger">Never: Flush content together</Text>
                </View>
              </Grid.Col>
            </Grid.Row>
          </Grid>
        </Flex>

        {/* Best Practices */}
        <Flex as="section" direction="column" gap="sectionElements">
          <View as="div">
            <Heading level="h2" variant="titleSection">
              Best Practices
            </Heading>
            <Text variant="descriptionSection">
              Key guidelines for implementing consistent layouts
            </Text>
          </View>
          
          <Grid colSpacing="medium" rowSpacing="medium">
            <Grid.Row>
              <Grid.Col width={6}>
                <View 
                  as="div" 
                  background="primary" 
                  padding="paddingCardMedium" 
                  borderRadius="medium"
                  borderWidth="small"
                  borderColor="secondary"
                >
                  <Heading level="h4" variant="titleCardRegular">Do ✅</Heading>
                  <Flex as="div" direction="column" gap="small">
                    <Text variant="content">• Follow semantic heading hierarchy (h1 → h2 → h3 → h4 → h5)</Text>
                    <Text variant="content">• Always wrap headings and descriptions in containers</Text>
                    <Text variant="content">• Use appropriate card variants based on content importance</Text>
                    <Text variant="content">• Use Grid spacing properties instead of individual margins</Text>
                    <Text variant="content">• Apply consistent border radius (borderRadius="medium")</Text>
                    <Text variant="content">• Use semantic spacing tokens throughout</Text>
                    <Text variant="content">• Use Flex direction="row" with gaps for all horizontal layouts</Text>
                    <Text variant="content">• Apply appropriate gap sizes: medium (16px) for standard elements, small (12px) for compact elements</Text>
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
                >
                  <Heading level="h4" variant="titleCardRegular">Don't ❌</Heading>
                  <Flex as="div" direction="column" gap="small">
                    <Text variant="content">• Skip heading levels for visual purposes</Text>
                    <Text variant="content">• Apply margins directly to Text components</Text>
                    <Text variant="content">• Mix different padding tokens within the same layout</Text>
                    <Text variant="content">• Nest cards more than 2 levels deep</Text>
                    <Text variant="content">• Use custom border radius values</Text>
                    <Text variant="content">• Use primary and secondary backgrounds inconsistently</Text>
                    <Text variant="content">• Place content flush together without spacing</Text>
                    <Text variant="content">• Use margins for horizontal spacing - use Flex gaps instead</Text>
                  </Flex>
                </View>
              </Grid.Col>
            </Grid.Row>
          </Grid>
        </Flex>

      </Flex>
    </View>
  )
}