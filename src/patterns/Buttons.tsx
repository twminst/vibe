import { View, Heading, Text, Button, IconButton, CloseButton, CondensedButton, ToggleButton, Flex, Responsive } from '@instructure/ui'
import { IconAddLine, IconEditLine, IconTrashLine, IconAiSolid, IconAiColoredSolid, IconArrowOpenEndLine, IconSettingsLine, IconBookmarkLine, IconBookmarkSolid, IconLockSolid, IconUnlockLine } from '@instructure/ui-icons'
import { useState } from 'react'

export default function ButtonsPattern() {
  const [bookmarkPressed, setBookmarkPressed] = useState(false)
  const [lockPressed, setLockPressed] = useState(false)

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
          Buttons
        </Heading>
        <Text variant="descriptionPage">
          Interactive components that trigger actions when activated. See buttons.md for complete documentation.
        </Text>
      </View>

      {/* BUTTON COLORS */}
      <View as="section" margin="0 0 sections 0">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Button Colors
          </Heading>
          <Text variant="descriptionSection">
            Semantic color variants for different types of actions
          </Text>
        </View>

        <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
          <Flex gap="buttons" wrap="wrap">
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="primary-inverse">Primary Inverse</Button>
            <Button color="success">Success</Button>
            <Button color="danger">Danger</Button>
            <Button color="ai-primary" renderIcon={() => <IconAiSolid />}>AI Primary</Button>
            <Button color="ai-secondary" renderIcon={() => <IconAiColoredSolid />}>AI Secondary</Button>
          </Flex>
        </View>
      </View>

      {/* BUTTON SIZES */}
      <View as="section" margin="0 0 sections 0">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Button Sizes
          </Heading>
          <Text variant="descriptionSection">
            Size variants for different interface contexts
          </Text>
        </View>

        <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
          <Flex gap="buttons" wrap="wrap" alignItems="end">
            <Button color="primary" size="small">Small</Button>
            <Button color="primary" size="medium">Medium</Button>
            <Button color="primary" size="large">Large</Button>
          </Flex>
        </View>
      </View>

      {/* BUTTONS WITH ICONS */}
      <View as="section" margin="0 0 sections 0">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Buttons with Icons
          </Heading>
          <Text variant="descriptionSection">
            Buttons enhanced with icons for better recognition
          </Text>
        </View>

        <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
          <Flex gap="buttons" wrap="wrap">
            <Button color="primary" renderIcon={() => <IconAddLine />}>Add Item</Button>
            <Button color="secondary" renderIcon={() => <IconEditLine />}>Edit</Button>
            <Button color="danger" renderIcon={() => <IconTrashLine />}>Delete</Button>
            <Button color="success" renderIcon={() => <IconArrowOpenEndLine />}>Continue</Button>
          </Flex>
        </View>
      </View>

      {/* ICON BUTTONS */}
      <View as="section" margin="0 0 sections 0">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Icon Buttons
          </Heading>
          <Text variant="descriptionSection">
            Icon-only buttons for compact interfaces
          </Text>
        </View>

        <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
          <Flex direction="column" gap="moduleElements">
            <View>
              <Text variant="contentImportant">Rectangle Shape</Text>
              <Flex gap="buttons" wrap="wrap" margin="buttons 0 0 0">
                <IconButton
                  screenReaderLabel="Add item"
                  renderIcon={() => <IconAddLine />}
                  color="primary"
                  shape="rectangle"
                />
                <IconButton
                  screenReaderLabel="Edit item"
                  renderIcon={() => <IconEditLine />}
                  color="secondary"
                  shape="rectangle"
                />
                <IconButton
                  screenReaderLabel="Delete item"
                  renderIcon={() => <IconTrashLine />}
                  color="danger"
                  shape="rectangle"
                />
                <IconButton
                  screenReaderLabel="Settings"
                  renderIcon={() => <IconSettingsLine />}
                  color="secondary"
                  shape="rectangle"
                  withBackground
                />
              </Flex>
            </View>

            <View>
              <Text variant="contentImportant">Circle Shape</Text>
              <Flex gap="buttons" wrap="wrap" margin="buttons 0 0 0">
                <IconButton
                  screenReaderLabel="Add item"
                  renderIcon={() => <IconAddLine />}
                  color="primary"
                  shape="circle"
                />
                <IconButton
                  screenReaderLabel="Edit item"
                  renderIcon={() => <IconEditLine />}
                  color="secondary"
                  shape="circle"
                />
                <IconButton
                  screenReaderLabel="Delete item"
                  renderIcon={() => <IconTrashLine />}
                  color="danger"
                  shape="circle"
                />
                <IconButton
                  screenReaderLabel="Settings"
                  renderIcon={() => <IconSettingsLine />}
                  color="secondary"
                  shape="circle"
                  withBackground
                />
              </Flex>
            </View>
          </Flex>
        </View>
      </View>

      {/* CONDENSED BUTTONS */}
      <View as="section" margin="0 0 sections 0">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Condensed Buttons
          </Heading>
          <Text variant="descriptionSection">
            Compact buttons for toolbars and dense interfaces
          </Text>
        </View>

        <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
          <Flex gap="buttons" wrap="wrap">
            <CondensedButton color="primary">Small Example</CondensedButton>
            <CondensedButton color="primary" size="large">Large Example</CondensedButton>
          </Flex>
        </View>
      </View>

      {/* CLOSE BUTTONS */}
      <View as="section" margin="0 0 sections 0">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Close Buttons
          </Heading>
          <Text variant="descriptionSection">
            Specialized buttons for dismissing dialogs and panels
          </Text>
        </View>

        <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
          <Flex gap="buttons" wrap="wrap" alignItems="center">
            <View padding="buttons" background="primary-inverse">
              <CloseButton
                screenReaderLabel="Close dialog"
                color="primary-inverse"
              />
            </View>
            <CloseButton
              screenReaderLabel="Close panel"
              color="primary"
            />
            <CloseButton
              screenReaderLabel="Close small"
              color="primary"
              size="small"
            />
            <CloseButton
              screenReaderLabel="Close large"
              color="primary"
              size="large"
            />
          </Flex>
        </View>
      </View>

      {/* TOGGLE BUTTONS */}
      <View as="section" margin="0 0 sections 0">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Toggle Buttons
          </Heading>
          <Text variant="descriptionSection">
            Stateful buttons that can be pressed or unpressed
          </Text>
        </View>

        <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
          <Flex gap="buttons" wrap="wrap">
            <ToggleButton
              screenReaderLabel={bookmarkPressed ? "Remove bookmark" : "Add bookmark"}
              renderTooltipContent={bookmarkPressed ? "Remove bookmark" : "Bookmark this item"}
              renderIcon={() => bookmarkPressed ? <IconBookmarkSolid /> : <IconBookmarkLine />}
              status={bookmarkPressed ? "pressed" : "unpressed"}
              onClick={() => setBookmarkPressed(!bookmarkPressed)}
            />
            <ToggleButton
              screenReaderLabel={lockPressed ? "Unlock assignment" : "Lock assignment"}
              renderTooltipContent={lockPressed ? "Unlock" : "Lock"}
              renderIcon={() => lockPressed ? <IconLockSolid /> : <IconUnlockLine />}
              status={lockPressed ? "pressed" : "unpressed"}
              color={lockPressed ? "danger" : "secondary"}
              onClick={() => setLockPressed(!lockPressed)}
            />
          </Flex>
        </View>
      </View>

      {/* BUTTON STATES */}
      <View as="section" margin="0 0 sections 0">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Button States
          </Heading>
          <Text variant="descriptionSection">
            Different interaction states for buttons
          </Text>
        </View>

        <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
          <Flex gap="buttons" wrap="wrap">
            <Button color="primary" interaction="enabled">Enabled</Button>
            <Button color="primary" interaction="disabled">Disabled</Button>
            <Button color="primary" interaction="readonly">Readonly</Button>
          </Flex>
        </View>
      </View>

      {/* BUTTON GROUPS */}
      <View as="section" margin="0 0 sections 0">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Button Groups
          </Heading>
          <Text variant="descriptionSection">
            Properly spaced button combinations using Flex with gap
          </Text>
        </View>

        <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
          <Flex direction="column" gap="moduleElements">
            <View>
              <Text variant="contentImportant">Dialog Actions</Text>
              <Flex gap="buttons" margin="buttons 0 0 0">
                <Button color="primary">Save Changes</Button>
                <Button color="secondary">Cancel</Button>
              </Flex>
            </View>

            <View>
              <Text variant="contentImportant">Destructive Actions</Text>
              <Flex gap="buttons" margin="buttons 0 0 0">
                <Button color="secondary">Cancel</Button>
                <Button color="danger">Delete Account</Button>
              </Flex>
            </View>

            <View>
              <Text variant="contentImportant">Multiple Actions</Text>
              <Flex gap="buttons" wrap="wrap" margin="buttons 0 0 0">
                <Button color="primary">Save</Button>
                <Button color="secondary">Save Draft</Button>
                <Button color="secondary">Preview</Button>
                <Button color="secondary">Cancel</Button>
              </Flex>
            </View>
          </Flex>
        </View>
      </View>
        </View>
        )
      }}
    </Responsive>
  )
}