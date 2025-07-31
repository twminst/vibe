import { View, Heading, Text, Link, List, ListItem, InlineList, InlineListItem, Flex, CondensedButton, Responsive } from '@instructure/ui'
import { useState } from 'react'
import { IconExternalLinkLine } from '@instructure/ui-icons'

export default function TextPattern() {
  const [showAllCourses, setShowAllCourses] = useState(false)
  
  const courses = [
    'Biology 101',
    'Chemistry 102', 
    'Physics 103',
    'Mathematics 104',
    'English 105',
    'History 106'
  ]
  
  const visibleCourses = showAllCourses ? courses : courses.slice(0, 3)
  
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
        <View as="main" maxWidth="1100px" width="100%" margin="0 auto" {...viewProps}>
      <Flex as="div" direction="column" gap="sections">
        {/* PAGE HEADER */}
        <Flex as="section" direction="column" gap="sectionElements">
          <View as="div">
            <Heading level="h1" variant={headingVariant}>
              Typography Pattern
            </Heading>
            <Text variant="descriptionPage">
              Typography components that provide semantic text styling and proper heading hierarchy. Typography ensures consistent visual presentation while maintaining accessibility through semantic meaning rather than purely visual styling.
            </Text>
          </View>
        </Flex>

        {/* Heading Examples */}
        <Flex as="section" direction="column" gap="sectionElements">
          <View as="div">
            <Heading level="h2" variant="titleSection">
              Heading Examples
            </Heading>
            <Text variant="descriptionSection">
              Semantic heading component that provides proper document structure and accessibility.
            </Text>
          </View>
          
          <Flex direction="column" gap="medium">
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
                <Heading level="h3" variant="titleCardMini">
                  Page Level Headings
                </Heading>
              </View>
              <View as="div" margin="0 0 small 0">
                <Heading level="h1" variant="titlePageDesktop">
                  Course Dashboard (Desktop) (H1)
                </Heading>
              </View>
              <View as="div">
                <Heading level="h1" variant="titlePageMobile">
                  Mobile Page Title (H1)
                </Heading>
              </View>
            </View>

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
                <Heading level="h3" variant="titleCardMini">
                  Section and Module Headings
                </Heading>
              </View>
              <View as="div" margin="0 0 small 0">
                <Heading level="h2" variant="titleSection">
                  Recent Activity (H2)
                </Heading>
              </View>
              <View as="div">
                <Heading level="h3" variant="titleModule">
                  Assignment Manager (H3)
                </Heading>
              </View>
            </View>

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
                <Heading level="h3" variant="titleCardMini">
                  Card Headings
                </Heading>
              </View>
              <View as="div" margin="0 0 small 0">
                <Heading level="h4" variant="titleCardLarge">
                  Large Card Title (H4)
                </Heading>
              </View>
              <View as="div" margin="0 0 small 0">
                <Heading level="h4" variant="titleCardRegular">
                  Introduction to Psychology (H4)
                </Heading>
              </View>
              <View as="div">
                <Heading level="h4" variant="titleCardMini">
                  Mini Card Title (H4)
                </Heading>
              </View>
            </View>

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
                <Heading level="h3" variant="titleCardMini">
                  Form Labels
                </Heading>
              </View>
              <View as="div" margin="0 0 small 0">
                <Heading level="h5" variant="label">
                  Course Settings (H5)
                </Heading>
              </View>
              <View as="div">
                <Heading level="h5" variant="labelInline">
                  Inline Label (H5)
                </Heading>
              </View>
            </View>
          </Flex>
        </Flex>

        {/* Text Examples */}
        <Flex as="section" direction="column" gap="sectionElements">
          <View as="div">
            <Heading level="h2" variant="titleSection">
              Text Examples
            </Heading>
            <Text variant="descriptionSection">
              General text component for body content, descriptions, and labels.
            </Text>
          </View>
          
          <Flex direction="column" gap="medium">
            <View 
              as="div" 
              background="primary" 
              padding="paddingCardMedium" 
              borderRadius="medium"
              borderWidth="small"
              borderColor="secondary"
            >
              <View as="header" margin="0 0 moduleElements 0">
                <Heading level="h3" variant="titleCardMini">
                  Page and Section Descriptions
                </Heading>
              </View>
              <View as="div" margin="0 0 medium 0">
                <Text variant="descriptionPage">
                  Welcome to your personalized dashboard
                </Text>
              </View>
              <View as="div">
                <Text variant="descriptionSection">
                  This section contains your recent activity and notifications
                </Text>
              </View>
            </View>

            <View 
              as="div" 
              background="primary" 
              padding="paddingCardMedium" 
              borderRadius="medium"
              borderWidth="small"
              borderColor="secondary"
            >
              <View as="header" margin="0 0 moduleElements 0">
                <Heading level="h3" variant="titleCardMini">
                  Content Variants
                </Heading>
              </View>
              <View as="div" margin="0 0 small 0">
                <Text variant="content">
                  Explore cellular processes and genetics in this comprehensive course.
                </Text>
              </View>
              <View as="div" margin="0 0 small 0">
                <Text variant="contentImportant">
                  Assignment due tomorrow
                </Text>
              </View>
              <View as="div" margin="0 0 small 0">
                <Text variant="contentQuote">
                  "Education is the most powerful weapon which you can use to change the world."
                </Text>
              </View>
              <View as="div" margin="0 0 small 0">
                <Text variant="contentSmall" color="secondary">
                  Last updated: 2 hours ago
                </Text>
              </View>
              <View as="div">
                <Text variant="legend">
                  Required field indicator
                </Text>
              </View>
            </View>
          </Flex>
        </Flex>

        {/* Link Examples */}
        <Flex as="section" direction="column" gap="sectionElements">
          <View as="div">
            <Heading level="h2" variant="titleSection">
              Link Examples
            </Heading>
            <Text variant="descriptionSection">
              Interactive link component for navigation and external references.
            </Text>
          </View>
          
          <Flex direction="column" gap="medium">
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
                <Heading level="h3" variant="titleCardMini">
                  Inline Links
                </Heading>
              </View>
              <Text variant="content">
                Please review the{' '}
                <Link href="/syllabus" variant="inline">
                  course syllabus
                </Link>
                {' '}before starting.
              </Text>
            </View>

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
                <Heading level="h3" variant="titleCardMini">
                  Standalone Links
                </Heading>
              </View>
              <View as="div" margin="0 0 small 0">
                <Link href="/assignments" variant="standalone">
                  View All Assignments
                </Link>
              </View>
              <View as="div" margin="0 0 small 0">
                <Link href="/help" variant="standalone-small">
                  Need help?
                </Link>
              </View>
              <View as="div">
                <Link 
                  href="https://example.com" 
                  variant="standalone"
                  renderIcon={IconExternalLinkLine}
                  iconPlacement="end"
                >
                  External Resource
                </Link>
              </View>
            </View>
          </Flex>
        </Flex>

        {/* List Examples */}
        <Flex as="section" direction="column" gap="sectionElements">
          <View as="div">
            <Heading level="h2" variant="titleSection">
              List Examples
            </Heading>
            <Text variant="descriptionSection">
              Structured list components for displaying related items.
            </Text>
          </View>
          
          <Flex direction="column" gap="medium">
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
                <Heading level="h3" variant="titleCardMini">
                  Vertical Lists
                </Heading>
              </View>
              <View as="div" margin="0 0 medium 0">
                <Text variant="contentSmall">Basic unordered list:</Text>
                <List as="ul" size="medium" itemSpacing="small">
                  <ListItem>Complete assignment readings</ListItem>
                  <ListItem>Submit discussion post</ListItem>
                  <ListItem>Review peer feedback</ListItem>
                </List>
              </View>
              
              <View as="div">
                <Text variant="contentSmall">Ordered list with delimiters:</Text>
                <List as="ol" delimiter="solid" size="large">
                  <ListItem>Introduction to the topic</ListItem>
                  <ListItem>Key concepts and definitions</ListItem>
                  <ListItem>Practical applications</ListItem>
                </List>
              </View>
            </View>

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
                <Heading level="h3" variant="titleCardMini">
                  Inline Lists
                </Heading>
              </View>
              <View as="div" margin="0 0 medium 0">
                <Text variant="contentSmall">Navigation breadcrumb:</Text>
                <InlineList delimiter="arrow" size="medium">
                  <InlineListItem>
                    <Link href="/courses">Courses</Link>
                  </InlineListItem>
                  <InlineListItem>
                    <Link href="/courses/bio101">Biology 101</Link>
                  </InlineListItem>
                  <InlineListItem>
                    <Text variant="content">Assignment 1</Text>
                  </InlineListItem>
                </InlineList>
              </View>

              <View as="div" margin="0 0 medium 0">
                <Text variant="contentSmall">Tag-like items:</Text>
                <InlineList delimiter="pipe" size="small">
                  <InlineListItem>Biology</InlineListItem>
                  <InlineListItem>Science</InlineListItem>
                  <InlineListItem>Undergraduate</InlineListItem>
                </InlineList>
              </View>

              <View as="div">
                <Text variant="contentSmall">Status indicators:</Text>
                <InlineList delimiter="slash" size="medium">
                  <InlineListItem>
                    <Text variant="contentSmall" color="success">Published</Text>
                  </InlineListItem>
                  <InlineListItem>
                    <Text variant="contentSmall" color="secondary">15 students</Text>
                  </InlineListItem>
                </InlineList>
              </View>
            </View>

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
                <Heading level="h3" variant="titleCardMini">
                  Truncate List
                </Heading>
              </View>
              <View as="div">
                <Text variant="contentSmall">Vertical list with truncate functionality (shows first 3 items):</Text>
                <View as="div" margin="small 0 0 0">
                  <List as="ul" itemSpacing="small">
                    {visibleCourses.map((course, index) => (
                      <ListItem key={index}>
                        <Text variant="content">{course}</Text>
                      </ListItem>
                    ))}
                    {courses.length > 3 && (
                      <ListItem>
                        <CondensedButton 
                          color="primary" 
                          onClick={() => setShowAllCourses(!showAllCourses)}
                        >
                          {showAllCourses 
                            ? 'Show less' 
                            : `Show ${courses.length - 3} more courses`
                          }
                        </CondensedButton>
                      </ListItem>
                    )}
                  </List>
                </View>
              </View>
            </View>
          </Flex>
        </Flex>
      </Flex>
        </View>
        )
      }}
    </Responsive>
  )
}