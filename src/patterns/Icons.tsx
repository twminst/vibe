import { View, Heading, Text, Button, Flex, Grid, Responsive } from '@instructure/ui'
import { 
  IconDocumentLine, 
  IconDocumentSolid,
  IconHeartLine,
  IconHeartSolid,
  IconCheckLine,
  IconWarningLine,
  IconXLine,
  IconHomeLine,
  IconPlusLine,
  IconAssignmentLine,
  IconUserLine,
  IconUserSolid,
  IconCalendarMonthLine,
  IconCalendarMonthSolid,
  IconSettingsLine,
  IconSettingsSolid,
  IconGradebookLine,
  IconGradebookSolid,
  IconDiscussionLine,
  IconDiscussionSolid,
  IconEmailLine,
  IconEmailSolid,
  IconEditLine,
  IconTrashLine,
  IconDownloadLine,
  IconSearchLine,
  IconEyeLine,
  IconStarLine,
  IconLikeLine,
  IconQuizLine,
  IconInfoLine,
  IconArrowOpenEndLine,
  IconArrowOpenDownLine,
  IconArrowOpenUpLine,
  IconArrowOpenStartLine
} from '@instructure/ui-icons'

export default function IconsPattern() {
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
          Icons
        </Heading>
        <Text variant="descriptionPage">
          InstUI icon usage patterns demonstrating sizes, colors, line vs solid styles, semantic meaning, and accessibility considerations.
        </Text>
      </View>

      {/* ICON STYLES SECTION */}
      <View as="section" margin="0 0 sections 0">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Line vs Solid Styles
          </Heading>
          <Text variant="descriptionSection">
            Choose Line icons for light backgrounds and Solid icons for dark backgrounds or high contrast needs
          </Text>
        </View>

        <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
          <Flex direction="column" gap="moduleElements">
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Line Icons (Light Backgrounds)</Heading>
              </View>
              <Flex gap="moduleElements" wrap="wrap" alignItems="center">
                <IconDocumentLine size="medium" />
                <IconUserLine size="medium" />
                <IconHeartLine size="medium" />
                <IconCalendarMonthLine size="medium" />
                <IconSettingsLine size="medium" />
                <IconGradebookLine size="medium" />
                <IconDiscussionLine size="medium" />
                <IconEmailLine size="medium" />
              </Flex>
            </View>

            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Solid Icons (High Contrast)</Heading>
              </View>
              <Flex gap="moduleElements" wrap="wrap" alignItems="center">
                <IconDocumentSolid size="medium" />
                <IconUserSolid size="medium" />
                <IconHeartSolid size="medium" />
                <IconCalendarMonthSolid size="medium" />
                <IconSettingsSolid size="medium" />
                <IconGradebookSolid size="medium" />
                <IconDiscussionSolid size="medium" />
                <IconEmailSolid size="medium" />
              </Flex>
            </View>
          </Flex>
        </View>
      </View>

      {/* ICON SIZES SECTION */}
      <View as="section" margin="0 0 sections 0">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Icon Sizes
          </Heading>
          <Text variant="descriptionSection">
            Icons scale from 16px (x-small) to 64px (x-large) for different interface contexts
          </Text>
        </View>

        <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
          <Flex direction="column" gap="moduleElements">
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Size Scale (16px - 64px)</Heading>
              </View>
              <Flex gap="moduleElements" wrap="wrap" alignItems="center">
                <Flex direction="column" gap="x-small" alignItems="center">
                  <IconDocumentLine size="x-small" />
                  <Text size="x-small">x-small (16px)</Text>
                </Flex>
                <Flex direction="column" gap="x-small" alignItems="center">
                  <IconDocumentLine size="small" />
                  <Text size="x-small">small (24px)</Text>
                </Flex>
                <Flex direction="column" gap="x-small" alignItems="center">
                  <IconDocumentLine size="medium" />
                  <Text size="x-small">medium (32px)</Text>
                </Flex>
                <Flex direction="column" gap="x-small" alignItems="center">
                  <IconDocumentLine size="large" />
                  <Text size="x-small">large (48px)</Text>
                </Flex>
                <Flex direction="column" gap="x-small" alignItems="center">
                  <IconDocumentLine size="x-large" />
                  <Text size="x-small">x-large (64px)</Text>
                </Flex>
              </Flex>
            </View>

            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Icons with Text (Default Sizing)</Heading>
              </View>
              <Flex direction="column" gap="small">
                <Flex gap="x-small" alignItems="center">
                  <IconDocumentLine />
                  <Text>Assignment Document (Default)</Text>
                </Flex>
                <Flex gap="x-small" alignItems="center">
                  <IconUserLine />
                  <Text>Student Profile (Inherits text size)</Text>
                </Flex>
                <Flex gap="x-small" alignItems="center">
                  <IconCalendarMonthLine />
                  <Text>Due Date Calendar</Text>
                </Flex>
              </Flex>
            </View>
          </Flex>
        </View>
      </View>

      {/* SEMANTIC COLORS SECTION */}
      <View as="section" margin="0 0 sections 0">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Semantic Colors
          </Heading>
          <Text variant="descriptionSection">
            Icons use semantic colors to communicate status, importance, and context-specific meaning
          </Text>
        </View>

        <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
          <Flex direction="column" gap="moduleElements">
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Status Colors</Heading>
              </View>
              <Flex direction="column" gap="small">
                <Flex gap="x-small" alignItems="center">
                  <IconCheckLine color="success" />
                  <Text>Assignment submitted successfully</Text>
                </Flex>
                <Flex gap="x-small" alignItems="center">
                  <IconWarningLine color="warning" />
                  <Text>Missing rubric - needs attention</Text>
                </Flex>
                <Flex gap="x-small" alignItems="center">
                  <IconXLine color="error" />
                  <Text>Submission failed - retry required</Text>
                </Flex>
              </Flex>
            </View>

            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Content Hierarchy</Heading>
              </View>
              <Flex direction="column" gap="small">
                <Flex gap="x-small" alignItems="center">
                  <IconHomeLine color="primary" />
                  <Text>Dashboard (Primary navigation)</Text>
                </Flex>
                <Flex gap="x-small" alignItems="center">
                  <IconAssignmentLine color="secondary" />
                  <Text>Assignment details (Secondary info)</Text>
                </Flex>
                <Flex gap="x-small" alignItems="center">
                  <IconInfoLine />
                  <Text>Additional information (Default/inherited)</Text>
                </Flex>
              </Flex>
            </View>

            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">All Semantic Colors</Heading>
              </View>
              <Flex gap="moduleElements" wrap="wrap" alignItems="center">
                <Flex direction="column" gap="x-small" alignItems="center">
                  <IconStarLine color="success" />
                  <Text size="x-small">success</Text>
                </Flex>
                <Flex direction="column" gap="x-small" alignItems="center">
                  <IconWarningLine color="warning" />
                  <Text size="x-small">warning</Text>
                </Flex>
                <Flex direction="column" gap="x-small" alignItems="center">
                  <IconXLine color="error" />
                  <Text size="x-small">error</Text>
                </Flex>
                <Flex direction="column" gap="x-small" alignItems="center">
                  <IconHomeLine color="primary" />
                  <Text size="x-small">primary</Text>
                </Flex>
                <Flex direction="column" gap="x-small" alignItems="center">
                  <IconUserLine color="secondary" />
                  <Text size="x-small">secondary</Text>
                </Flex>
              </Flex>
            </View>
          </Flex>
        </View>
      </View>

      {/* NAVIGATION PATTERNS SECTION */}
      <View as="section" margin="0 0 sections 0">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Navigation Patterns
          </Heading>
          <Text variant="descriptionSection">
            Common navigation and interface patterns using consistent icon styles and spacing
          </Text>
        </View>

        <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
          <Flex direction="column" gap="moduleElements">
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Primary Navigation</Heading>
              </View>
              <Flex direction="column" gap="small">
                <Flex gap="small" alignItems="center">
                  <IconHomeLine />
                  <Text>Dashboard</Text>
                </Flex>
                <Flex gap="small" alignItems="center">
                  <IconAssignmentLine />
                  <Text>Assignments</Text>
                </Flex>
                <Flex gap="small" alignItems="center">
                  <IconGradebookLine />
                  <Text>Gradebook</Text>
                </Flex>
                <Flex gap="small" alignItems="center">
                  <IconDiscussionLine />
                  <Text>Discussions</Text>
                </Flex>
                <Flex gap="small" alignItems="center">
                  <IconQuizLine />
                  <Text>Quizzes</Text>
                </Flex>
              </Flex>
            </View>

            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Action Buttons with Icons</Heading>
              </View>
              <Flex gap="moduleElements" wrap="wrap">
                <Button renderIcon={<IconPlusLine />}>Add Assignment</Button>
                <Button renderIcon={<IconEditLine />} color="secondary">Edit Content</Button>
                <Button renderIcon={<IconDownloadLine />} color="secondary">Download</Button>
                <Button renderIcon={<IconTrashLine />} color="danger">Delete</Button>
              </Flex>
            </View>

            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Directional Icons</Heading>
              </View>
              <Flex gap="moduleElements" wrap="wrap" alignItems="center">
                <Flex gap="x-small" alignItems="center">
                  <IconArrowOpenStartLine />
                  <Text>Previous</Text>
                </Flex>
                <Flex gap="x-small" alignItems="center">
                  <Text>Next</Text>
                  <IconArrowOpenEndLine />
                </Flex>
                <Flex gap="x-small" alignItems="center">
                  <Text>Expand</Text>
                  <IconArrowOpenDownLine />
                </Flex>
                <Flex gap="x-small" alignItems="center">
                  <Text>Collapse</Text>
                  <IconArrowOpenUpLine />
                </Flex>
              </Flex>
            </View>
          </Flex>
        </View>
      </View>

      {/* EMPTY STATES SECTION */}
      <View as="section" margin="0 0 sections 0">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Empty States and Focal Content
          </Heading>
          <Text variant="descriptionSection">
            Large icons for empty states, onboarding, and drawing user attention to important content
          </Text>
        </View>

        <View as="div" background="secondary" padding="paddingCardLarge" borderRadius="medium">
          <Flex direction="column" gap="sectionElements">
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Assignment Empty State</Heading>
              </View>
              <View textAlign="center" padding="x-large">
                <View margin="0 0 medium 0" textAlign="center">
                  <IconAssignmentLine size="large" color="secondary" />
                </View>
                <Heading level="h4" margin="0 0 small 0">
                  No assignments yet
                </Heading>
                <Text size="small" color="secondary">
                  Create your first assignment to get started
                </Text>
              </View>
            </View>

            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Discussion Empty State</Heading>
              </View>
              <View textAlign="center" padding="x-large">
                <View margin="0 0 medium 0" textAlign="center">
                  <IconDiscussionLine size="large" color="secondary" />
                </View>
                <Heading level="h4" margin="0 0 small 0">
                  No discussions started
                </Heading>
                <Text size="small" color="secondary">
                  Begin a conversation with your students
                </Text>
              </View>
            </View>
          </Flex>
        </View>
      </View>

      {/* ICON GRID SHOWCASE SECTION */}
      <View as="section" margin="0 0 sections 0">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Icon Collection
          </Heading>
          <Text variant="descriptionSection">
            Available InstUI icons demonstrating the breadth of the icon library
          </Text>
        </View>

        <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
          <Grid startAt="medium" vAlign="top" colSpacing="medium" rowSpacing="medium">
            <Grid.Row>
              <Grid.Col width={3}>
                <Flex direction="column" gap="small" alignItems="center">
                  <IconDocumentLine size="medium" />
                  <Text size="x-small">Document</Text>
                </Flex>
              </Grid.Col>
              <Grid.Col width={3}>
                <Flex direction="column" gap="small" alignItems="center">
                  <IconUserLine size="medium" />
                  <Text size="x-small">User</Text>
                </Flex>
              </Grid.Col>
              <Grid.Col width={3}>
                <Flex direction="column" gap="small" alignItems="center">
                  <IconCalendarMonthLine size="medium" />
                  <Text size="x-small">Calendar</Text>
                </Flex>
              </Grid.Col>
              <Grid.Col width={3}>
                <Flex direction="column" gap="small" alignItems="center">
                  <IconSettingsLine size="medium" />
                  <Text size="x-small">Settings</Text>
                </Flex>
              </Grid.Col>
            </Grid.Row>
            <Grid.Row>
              <Grid.Col width={3}>
                <Flex direction="column" gap="small" alignItems="center">
                  <IconGradebookLine size="medium" />
                  <Text size="x-small">Gradebook</Text>
                </Flex>
              </Grid.Col>
              <Grid.Col width={3}>
                <Flex direction="column" gap="small" alignItems="center">
                  <IconDiscussionLine size="medium" />
                  <Text size="x-small">Discussion</Text>
                </Flex>
              </Grid.Col>
              <Grid.Col width={3}>
                <Flex direction="column" gap="small" alignItems="center">
                  <IconEmailLine size="medium" />
                  <Text size="x-small">Email</Text>
                </Flex>
              </Grid.Col>
              <Grid.Col width={3}>
                <Flex direction="column" gap="small" alignItems="center">
                  <IconQuizLine size="medium" />
                  <Text size="x-small">Quiz</Text>
                </Flex>
              </Grid.Col>
            </Grid.Row>
            <Grid.Row>
              <Grid.Col width={3}>
                <Flex direction="column" gap="small" alignItems="center">
                  <IconEditLine size="medium" />
                  <Text size="x-small">Edit</Text>
                </Flex>
              </Grid.Col>
              <Grid.Col width={3}>
                <Flex direction="column" gap="small" alignItems="center">
                  <IconTrashLine size="medium" />
                  <Text size="x-small">Delete</Text>
                </Flex>
              </Grid.Col>
              <Grid.Col width={3}>
                <Flex direction="column" gap="small" alignItems="center">
                  <IconDownloadLine size="medium" />
                  <Text size="x-small">Download</Text>
                </Flex>
              </Grid.Col>
              <Grid.Col width={3}>
                <Flex direction="column" gap="small" alignItems="center">
                  <IconSearchLine size="medium" />
                  <Text size="x-small">Search</Text>
                </Flex>
              </Grid.Col>
            </Grid.Row>
            <Grid.Row>
              <Grid.Col width={3}>
                <Flex direction="column" gap="small" alignItems="center">
                  <IconStarLine size="medium" />
                  <Text size="x-small">Star</Text>
                </Flex>
              </Grid.Col>
              <Grid.Col width={3}>
                <Flex direction="column" gap="small" alignItems="center">
                  <IconHeartLine size="medium" />
                  <Text size="x-small">Heart</Text>
                </Flex>
              </Grid.Col>
              <Grid.Col width={3}>
                <Flex direction="column" gap="small" alignItems="center">
                  <IconLikeLine size="medium" />
                  <Text size="x-small">Like</Text>
                </Flex>
              </Grid.Col>
              <Grid.Col width={3}>
                <Flex direction="column" gap="small" alignItems="center">
                  <IconEyeLine size="medium" />
                  <Text size="x-small">View</Text>
                </Flex>
              </Grid.Col>
            </Grid.Row>
          </Grid>
        </View>
      </View>

      {/* USAGE GUIDELINES SECTION */}
      <View as="section" margin="0 0 sections 0">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Usage Guidelines
          </Heading>
          <Text variant="descriptionSection">
            Best practices for implementing icons effectively in InstUI applications
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
                    <Text>• Import icons explicitly before using them</Text>
                    <Text>• Use default sizing (1em) when icons accompany text</Text>
                    <Text>• Apply semantic colors (success, warning, danger)</Text>
                    <Text>• Choose Line icons for light backgrounds</Text>
                    <Text>• Add title/description only when icons convey unique info</Text>
                    <Text>• Maintain consistent icon styles within interfaces</Text>
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
                    <Text>• Don't reference unimported icons</Text>
                    <Text>• Don't override size when text has same importance</Text>
                    <Text>• Don't use color without semantic meaning</Text>
                    <Text>• Don't mix Line and Solid styles inconsistently</Text>
                    <Text>• Don't add accessibility props to decorative icons</Text>
                    <Text>• Don't use icons as sole means of critical communication</Text>
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