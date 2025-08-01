import { View, Heading, Text, Button, Flex, Grid, Responsive } from '@instructure/ui'
import { Badge, Pill, Tag } from '@instructure/ui'
import { IconCheckLine, IconWarningLine, IconInfoLine, IconXLine, IconAddLine, IconLockLine, IconUnlockLine, IconPublishSolid, IconUnpublishedLine, IconEyeLine, IconOffLine, IconClockLine, IconCalendarReservedLine, IconLockSolid, IconUnlockSolid, IconUnpublishedSolid, IconCheckSolid, IconClockSolid } from '@instructure/ui-icons'
import { useState } from 'react'

export default function StatusComponents() {
  const [tagList, setTagList] = useState(['React', 'TypeScript', 'Canvas'])
  const [badgeCount, setBadgeCount] = useState(5)
  const [interactiveDemo, setInteractiveDemo] = useState(false)

  const removeTag = (index: number) => {
    setTagList(tagList.filter((_, i) => i !== index))
  }

  const addTag = () => {
    const newTags = ['Vue', 'Angular', 'Svelte', 'Node.js', 'Python']
    const randomTag = newTags[Math.floor(Math.random() * newTags.length)]
    if (!tagList.includes(randomTag)) {
      setTagList([...tagList, randomTag])
    }
  }

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
        const { headingVariant, ...viewProps } = props as { headingVariant: "titlePageDesktop" | "titlePageMobile"; [key: string]: unknown }
        return (
        <View as="div" maxWidth="1100px" margin="0 auto" {...viewProps}>
      {/* PAGE HEADER */}
      <View as="header" margin="0 0 sections 0">
        <Heading level="h1" variant={headingVariant}>
          Status Components
        </Heading>
        <Text variant="descriptionPage">
          Visual indicators for status, categorization, and counts using Pill, Tag, and Badge components. Choose components based on semantic meaning rather than visual appearance.
        </Text>
      </View>

      {/* BASIC VARIANTS SECTION */}
      <View as="section" margin="0 0 sections 0">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Basic Variants
          </Heading>
          <Text variant="descriptionSection">
            Core status component variations demonstrating different semantic purposes
          </Text>
        </View>

        <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
          <Flex direction="column" gap="moduleElements">
            {/* Pills for Status */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Pills - Status Information</Heading>
              </View>
              <Flex gap="statusIndicators" wrap="wrap">
                <Pill color="success">Active</Pill>
                <Pill color="primary">Draft</Pill>
                <Pill color="info">Pending</Pill>
                <Pill color="warning">Review</Pill>
                <Pill color="danger">Failed</Pill>
                <Pill color="alert">Alert</Pill>
              </Flex>
            </View>

            {/* Tags for Categories */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Tags - Categories and Labels</Heading>
              </View>
              <Flex gap="tags" wrap="wrap">
                <Tag text="JavaScript" />
                <Tag text="React" />
                <Tag text="Canvas" />
                <Tag text="Education" />
                <Tag text="LMS" />
              </Flex>
            </View>

            {/* Badges for Counts */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Badges - Counts and Notifications</Heading>
              </View>
              <Flex gap="moduleElements" wrap="wrap" alignItems="center">
                <Badge count={3} variant="primary">
                  <Button>Messages</Button>
                </Badge>
                <Badge count={12} variant="success">
                  <Button color="secondary">Completed</Button>
                </Badge>
                <Badge type="notification" variant="danger">
                  <Button color="secondary">Alerts</Button>
                </Badge>
                <Badge count={99} variant="primary">
                  <Button color="secondary">Notifications</Button>
                </Badge>
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
            Different sizing options for various interface contexts and hierarchy
          </Text>
        </View>

        <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
          <Flex direction="column" gap="moduleElements">
            {/* Tag Sizes */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Tag Sizes</Heading>
              </View>
              <Flex gap="moduleElements" wrap="wrap" alignItems="center">
                <Tag text="Small Tag" size="small" />
                <Tag text="Medium Tag" size="medium" />
                <Tag text="Large Tag" size="large" />
              </Flex>
            </View>

            {/* Badge Size Comparison */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Badge Count Ranges</Heading>
              </View>
              <Flex gap="moduleElements" wrap="wrap" alignItems="center">
                <Badge count={1} variant="primary">
                  <Button size="small">Small Button</Button>
                </Badge>
                <Badge count={25} variant="success">
                  <Button size="medium">Medium Button</Button>
                </Badge>
                <Badge count={150} countUntil={99} variant="danger">
                  <Button size="large">Large Button</Button>
                </Badge>
              </Flex>
            </View>

            {/* Pills maintain consistent size */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Pills - Consistent Sizing</Heading>
              </View>
              <Flex gap="statusIndicators" wrap="wrap">
                <Pill color="primary">One</Pill>
                <Pill color="success">Two Words</Pill>
                <Pill color="info">Status Text</Pill>
              </Flex>
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
            {/* Dismissible Tags */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Dismissible Tags</Heading>
              </View>
              <Flex gap="tags" wrap="wrap">
                {tagList.map((tag, index) => (
                  <Tag 
                    key={index}
                    text={tag} 
                    dismissible 
                    onClick={() => removeTag(index)}
                  />
                ))}
                <Button 
                  size="small" 
                  color="secondary" 
                  renderIcon={<IconAddLine />}
                  onClick={addTag}
                >
                  Add Tag
                </Button>
              </Flex>
            </View>

            {/* Interactive Badge Count */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Dynamic Badge Count</Heading>
              </View>
              <Flex gap="moduleElements" wrap="wrap" alignItems="center">
                <Badge count={badgeCount} variant="primary">
                  <Button>Notifications</Button>
                </Badge>
                <Button 
                  size="small" 
                  onClick={() => setBadgeCount(Math.max(0, badgeCount - 1))}
                  interaction={badgeCount === 0 ? 'disabled' : 'enabled'}
                >
                  Decrease
                </Button>
                <Button 
                  size="small" 
                  onClick={() => setBadgeCount(badgeCount + 1)}
                >
                  Increase
                </Button>
              </Flex>
            </View>

            {/* Tag States */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Tag States</Heading>
              </View>
              <Flex gap="space12" wrap="wrap">
                <Tag text="Default" />
                <Tag text="Read Only" readOnly />
                <Tag text="Disabled" disabled />
                <Tag text="Clickable" onClick={() => setInteractiveDemo(!interactiveDemo)} />
                {interactiveDemo && (
                  <Pill color="success">Clicked!</Pill>
                )}
              </Flex>
            </View>
          </Flex>
        </View>
      </View>

      {/* COMPONENT COMBINATIONS SECTION */}
      <View as="section" margin="0 0 sections 0">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Component Combinations
          </Heading>
          <Text variant="descriptionSection">
            Components paired with icons, text, or other elements for enhanced meaning
          </Text>
        </View>

        <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
          <Flex direction="column" gap="moduleElements">
            {/* Pills with Icons */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Pills with Status Icons</Heading>
              </View>
              <Flex gap="statusIndicators" wrap="wrap">
                <Pill color="success" renderIcon={<IconCheckLine />}>Complete</Pill>
                <Pill color="warning" renderIcon={<IconWarningLine />}>Warning</Pill>
                <Pill color="info" renderIcon={<IconInfoLine />}>Info</Pill>
                <Pill color="danger" renderIcon={<IconXLine />}>Error</Pill>
              </Flex>
            </View>

            {/* Pills with Status Labels */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Pills with Status Labels</Heading>
              </View>
              <Flex gap="statusIndicators" wrap="wrap">
                <Pill color="primary" statusLabel="Course">Published</Pill>
                <Pill color="info" statusLabel="Assignment">Draft</Pill>
                <Pill color="success" statusLabel="Grade">Complete</Pill>
                <Pill color="warning" statusLabel="Review">Pending</Pill>
              </Flex>
            </View>

            {/* Mixed Component Usage */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Mixed Status Indicators</Heading>
              </View>
              <Flex gap="space12" wrap="wrap" alignItems="center">
                <Pill color="success">Active</Pill>
                <Tag text="JavaScript" size="small" />
                <Badge count={7} variant="primary">
                  <Button color="secondary" size="small">Tasks</Button>
                </Badge>
                <Tag text="Education" dismissible onClick={() => {}} />
                <Pill color="info" renderIcon={<IconInfoLine />}>Learning</Pill>
              </Flex>
            </View>
          </Flex>
        </View>
      </View>

      {/* STATUS ICONS SECTION */}
      <View as="section" margin="0 0 sections 0">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Status Icons
          </Heading>
          <Text variant="descriptionSection">
            Common status representations using icons with Pills and icon-only variants
          </Text>
        </View>

        <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
          <Flex direction="column" gap="moduleElements">
            {/* Pills with Status Icons */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Pills with Icons</Heading>
              </View>
              <Flex gap="statusIndicators" wrap="wrap">
                <Pill renderIcon={<IconLockLine />}>Locked</Pill>
                <Pill renderIcon={<IconUnlockLine />}>Unlocked</Pill>
                <Pill color="success" renderIcon={<IconPublishSolid />}>Published</Pill>
                <Pill color="primary" renderIcon={<IconUnpublishedLine />}>Unpublished</Pill>
                <Pill renderIcon={<IconEyeLine />}>Visible</Pill>
                <Pill renderIcon={<IconOffLine />}>Hidden</Pill>
                <Pill color="success" renderIcon={<IconCheckLine />}>Complete</Pill>
                <Pill color="danger" renderIcon={<IconClockLine />}>Overdue</Pill>
                <Pill renderIcon={<IconCalendarReservedLine />}>Concluded</Pill>
              </Flex>
            </View>

            {/* Icon Only Status */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Icon Only Status</Heading>
              </View>
              <Flex gap="statusIndicators" wrap="wrap" alignItems="center">
                <IconLockSolid size="x-small" />
                <IconUnlockSolid size="x-small" />
                <IconPublishSolid color="success" size="x-small" />
                <IconUnpublishedSolid color="primary" size="x-small" />
                <IconEyeLine size="x-small" />
                <IconOffLine size="x-small" />
                <IconCheckSolid color="success" size="x-small" />
                <IconClockSolid color="warning" size="x-small" />
                <IconCalendarReservedLine color="primary" size="x-small" />
              </Flex>
            </View>

            {/* Side by Side Comparison */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Side by Side Comparison</Heading>
              </View>
              <Flex direction="column" gap="moduleElements">
                <Flex gap="statusIndicators" wrap="wrap" alignItems="center">
                  <Pill renderIcon={<IconLockLine />}>Locked</Pill>
                  <IconLockSolid size="x-small" />
                </Flex>
                <Flex gap="statusIndicators" wrap="wrap" alignItems="center">
                  <Pill color="success" renderIcon={<IconPublishSolid />}>Published</Pill>
                  <IconPublishSolid color="success" size="x-small" />
                </Flex>
                <Flex gap="statusIndicators" wrap="wrap" alignItems="center">
                  <Pill color="success" renderIcon={<IconCheckLine />}>Complete</Pill>
                  <IconCheckSolid color="success" size="x-small" />
                </Flex>
                <Flex gap="statusIndicators" wrap="wrap" alignItems="center">
                  <Pill color="danger" renderIcon={<IconClockLine />}>Overdue</Pill>
                  <IconClockSolid color="warning" size="x-small" />
                </Flex>
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
            Common arrangements and groupings for status component collections
          </Text>
        </View>

        <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
          <Flex direction="column" gap="moduleElements">
            {/* Horizontal Status Group */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Horizontal Status Group</Heading>
              </View>
              <Flex gap="statusIndicators" wrap="wrap">
                <Pill color="success">Active</Pill>
                <Pill color="primary">Published</Pill>
                <Pill color="info">Draft</Pill>
              </Flex>
            </View>

            {/* Category Tag Collection */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Category Tag Collection</Heading>
              </View>
              <Flex gap="tags" wrap="wrap">
                <Tag text="Frontend" />
                <Tag text="Backend" />
                <Tag text="Database" />
                <Tag text="DevOps" />
                <Tag text="Testing" />
                <Tag text="Security" />
              </Flex>
            </View>

            {/* Badge Navigation Bar */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Badge Navigation Pattern</Heading>
              </View>
              <Flex gap="moduleElements" wrap="wrap" alignItems="center">
                <Badge count={12} variant="primary">
                  <Button color="secondary">Inbox</Button>
                </Badge>
                <Badge count={3} variant="success">
                  <Button color="secondary">Completed</Button>
                </Badge>
                <Badge type="notification" variant="danger">
                  <Button color="secondary">Alerts</Button>
                </Badge>
                <Button color="secondary">Archive</Button>
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
            Status components in multi-column layouts that adapt to different screen sizes
          </Text>
        </View>

        <View as="div" background="secondary" padding="paddingCardLarge" borderRadius="medium">
          <Flex direction="column" gap="sectionElements">
            {/* 2-Column Status Cards */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">2-Column Status Cards</Heading>
              </View>
              <Grid startAt="medium" vAlign="top" colSpacing="medium">
                <Grid.Row>
                  <Grid.Col width={6}>
                    <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary">
                      <Flex direction="column" gap="moduleElements">
                        <Heading level="h5" variant="label">Course Status</Heading>
                        <Flex gap="space12" wrap="wrap">
                          <Pill color="success">Published</Pill>
                          <Pill color="primary">4 Modules</Pill>
                          <Badge count={24} variant="primary">
                            <Button color="secondary" size="small">Students</Button>
                          </Badge>
                        </Flex>
                      </Flex>
                    </View>
                  </Grid.Col>
                  <Grid.Col width={6}>
                    <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary">
                      <Flex direction="column" gap="moduleElements">
                        <Heading level="h5" variant="label">Assignment Status</Heading>
                        <Flex gap="space12" wrap="wrap">
                          <Pill color="warning">Due Soon</Pill>
                          <Pill color="info">In Review</Pill>
                          <Badge count={8} variant="success">
                            <Button color="secondary" size="small">Submitted</Button>
                          </Badge>
                        </Flex>
                      </Flex>
                    </View>
                  </Grid.Col>
                </Grid.Row>
              </Grid>
            </View>

            {/* 3-Column Category Grid */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">3-Column Category Grid</Heading>
              </View>
              <Grid startAt="large" vAlign="top" colSpacing="medium">
                <Grid.Row>
                  <Grid.Col width={4}>
                    <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary">
                      <Flex direction="column" gap="moduleElements">
                        <Heading level="h5" variant="label">Development</Heading>
                        <Flex gap="tags" wrap="wrap">
                          <Tag text="React" size="small" />
                          <Tag text="TypeScript" size="small" />
                          <Tag text="Vite" size="small" />
                        </Flex>
                      </Flex>
                    </View>
                  </Grid.Col>
                  <Grid.Col width={4}>
                    <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary">
                      <Flex direction="column" gap="moduleElements">
                        <Heading level="h5" variant="label">Design</Heading>
                        <Flex gap="tags" wrap="wrap">
                          <Tag text="InstUI" size="small" />
                          <Tag text="Accessibility" size="small" />
                          <Tag text="Responsive" size="small" />
                        </Flex>
                      </Flex>
                    </View>
                  </Grid.Col>
                  <Grid.Col width={4}>
                    <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary">
                      <Flex direction="column" gap="moduleElements">
                        <Heading level="h5" variant="label">Education</Heading>
                        <Flex gap="tags" wrap="wrap">
                          <Tag text="Canvas" size="small" />
                          <Tag text="LMS" size="small" />
                          <Tag text="Learning" size="small" />
                        </Flex>
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
            Best practices for choosing and implementing status components
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
                    <Text>• Use Pills for system status and state information</Text>
                    <Text>• Use Tags for user-generated categories and labels</Text>
                    <Text>• Use Badges for counts and numeric notifications</Text>
                    <Text>• Keep Pill content to 2 words maximum for clarity</Text>
                    <Text>• Use semantic colors that match the status meaning</Text>
                    <Text>• Provide proper accessibility labels for screen readers</Text>
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
                    <Text>• Don't use Pills for user-editable categories</Text>
                    <Text>• Don't use Tags for system status information</Text>
                    <Text>• Don't use Badges for non-numeric content</Text>
                    <Text>• Don't exceed 2 words in Pill main content</Text>
                    <Text>• Don't use colors that don't match semantic meaning</Text>
                    <Text>• Don't forget accessibility support for interactive elements</Text>
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