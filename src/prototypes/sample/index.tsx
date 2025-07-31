import { 
  View, 
  Heading, 
  Button, 
  Text, 
  Grid,
  TextInput,
  Checkbox,
  RadioInputGroup,
  RadioInput
} from '@instructure/ui'
import { useState } from 'react'

export default function Sample() {
  const [inputValue, setInputValue] = useState('')
  const [checkboxValue, setCheckboxValue] = useState(false)
  const [radioValue, setRadioValue] = useState('')

  return (
    <View as="div" padding="large">

      <View as="div" margin="0 0 medium 0">          
        <Heading variant="titlePageDesktop" margin="0 0 0 0">
          Default Instructure UI Prototype
        </Heading>
        <Text variant="descriptionPage">
          This prototype demonstrates various Instructure UI components that you might use in Canvas prototypes.
        </Text>
      </View>
      
      <Grid>
        <Grid.Row>
          <Grid.Col width={6}>
            <View as="div" background="secondary" padding="medium" borderRadius="medium">
              <Heading variant="titleModule" margin="0 0 medium 0">
                Form Components
              </Heading>
                <View as="div" margin="0 0 medium 0">
                  <TextInput
                    renderLabel="Course Name"
                    placeholder="Enter course name..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </View>

                <View as="div" margin="0 0 medium 0">
                  <Text variant="content">
                    <Text variant="contentImportant">Course Term:</Text> Fall 2024 (Select component demo)
                  </Text>
                </View>

                <View as="div" margin="0 0 medium 0">
                  <Checkbox
                    label="Published"
                    checked={checkboxValue}
                    onChange={(e) => setCheckboxValue(e.target.checked)}
                  />
                </View>

                <RadioInputGroup
                  name="visibility"
                  description="Course Visibility"
                  value={radioValue}
                  onChange={(e) => setRadioValue(e.target.value)}
                >
                  <RadioInput label="Public" value="public" />
                  <RadioInput label="Institution" value="institution" />
                  <RadioInput label="Course" value="course" />
                </RadioInputGroup>
            </View>
          </Grid.Col>

          <Grid.Col width={6}>
            <View as="div" background="secondary" padding="medium" borderRadius="medium">
              <Heading variant="titleModule" margin="0 0 medium 0">
                Actions & Display
              </Heading>
                <View as="div" margin="0 0 medium 0">
                  <Button color="primary" margin="0 small small 0">
                    Save Changes
                  </Button>
                  <Button color="secondary" margin="0 small small 0">
                    Cancel
                  </Button>
                  <Button color="success" margin="0 small small 0">
                    Publish
                  </Button>
                </View>

                <View as="div" background="primary" padding="small" margin="0 0 medium 0">
                  <Text variant="contentImportant" color="primary-inverse">
                    Primary Background Example
                  </Text>
                </View>

                <View as="div" background="secondary" padding="small" margin="0 0 medium 0">
                  <Text variant="content">Secondary Background Example</Text>
                </View>

                <Text variant="contentSmall" color="secondary">
                  <Text variant="contentImportant">Form Values:</Text><br />
                  Course Name: {inputValue || 'None'}<br />
                  Published: {checkboxValue ? 'Yes' : 'No'}<br />
                  Visibility: {radioValue || 'None'}
                </Text>
            </View>
          </Grid.Col>
        </Grid.Row>
      </Grid>
    </View>
  )
}