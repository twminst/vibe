import { View, Heading, Text, Button, Flex, Grid, Responsive } from '@instructure/ui'
import { 
  TextInput, 
  TextArea, 
  Select,
  SimpleSelect,
  Checkbox,
  CheckboxGroup,
  RadioInput,
  RadioInputGroup,
  NumberInput,
  FormField,
  FormFieldGroup,
  FileDrop,
  DateInput2,
  TimeSelect,
  ColorPicker,
  RangeInput,
  Alert,
  Spinner
} from '@instructure/ui'
import { 
  IconAddLine,
  IconEmailLine,
  IconUploadLine
} from '@instructure/ui-icons'
import { useState } from 'react'

export default function Forms() {
  const [formData, setFormData] = useState({
    basicText: '',
    email: '',
    password: '',
    description: '',
    country: '',
    notification: false,
    contactMethod: 'email',
    age: '',
    isLoading: false,
    showValidation: false,
    // New form fields
    subjects: [] as string[],
    skills: [] as string[],
    courseDate: '',
    courseTime: '',
    selectedColor: '#0374B5',
    difficultyLevel: 5,
    uploadedFiles: [] as File[]
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (field: string, value: string | boolean | number | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  const validateField = (field: string, value: string | boolean | number) => {
    const newErrors: Record<string, string> = {}
    
    switch (field) {
      case 'email':
        if (typeof value === 'string' && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          newErrors[field] = 'Please enter a valid email address'
        }
        break
      case 'password':
        if (typeof value === 'string' && value && value.length < 8) {
          newErrors[field] = 'Password must be at least 8 characters long'
        }
        break
      case 'age':
        if (typeof value === 'string' && value && (isNaN(Number(value)) || Number(value) < 1 || Number(value) > 120)) {
          newErrors[field] = 'Please enter a valid age between 1 and 120'
        }
        break
    }
    
    return newErrors
  }

  const handleBlur = (field: string, value: string | boolean | number) => {
    const fieldErrors = validateField(field, value)
    setErrors(prev => ({ ...prev, ...fieldErrors }))
  }

  const handleSubmit = () => {
    setFormData(prev => ({ ...prev, isLoading: true }))
    
    // Simulate API call
    setTimeout(() => {
      setFormData(prev => ({ ...prev, isLoading: false }))
    }, 2000)
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
          Form Components
        </Heading>
        <Text variant="descriptionPage">
          Comprehensive examples of InstUI form components, validation patterns, and accessibility considerations for building Canvas/educational platform interfaces.
        </Text>
      </View>

      {/* BASIC TEXT INPUTS SECTION */}
      <View as="section" margin="0 0 sections 0">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Basic Text Inputs
          </Heading>
          <Text variant="descriptionSection">
            Essential text input components with validation, accessibility, and different configurations
          </Text>
        </View>

        <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
          <Flex direction="column" gap="moduleElements">
            {/* Standard Text Inputs */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Standard Text Inputs</Heading>
              </View>
              <Grid startAt="medium" vAlign="top" colSpacing="medium">
                <Grid.Row>
                  <Grid.Col width={6}>
                    <FormField id="basicText" label="Full Name" required>
                      <TextInput
                        renderLabel=""
                        placeholder="Enter your full name"
                        value={formData.basicText}
                        onChange={(_e, value) => handleInputChange('basicText', value)}
                        onBlur={(e) => handleBlur('basicText', e.target.value)}
                        messages={errors.basicText ? [{ text: errors.basicText, type: 'error' }] : undefined}
                      />
                    </FormField>
                  </Grid.Col>
                  <Grid.Col width={6}>
                    <FormField id="email" label="Email Address" required>
                      <TextInput
                        renderLabel=""
                        type="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={(_e, value) => handleInputChange('email', value)}
                        onBlur={(e) => handleBlur('email', e.target.value)}
                        messages={errors.email ? [{ text: errors.email, type: 'error' }] : undefined}
                        renderBeforeInput={<IconEmailLine />}
                      />
                    </FormField>
                  </Grid.Col>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Col width={6}>
                    <FormField id="password" label="Password" required>
                      <TextInput
                        renderLabel=""
                        type="password"
                        placeholder="Minimum 8 characters"
                        value={formData.password}
                        onChange={(_e, value) => handleInputChange('password', value)}
                        onBlur={(e) => handleBlur('password', e.target.value)}
                        messages={errors.password ? [{ text: errors.password, type: 'error' }] : undefined}
                      />
                    </FormField>
                  </Grid.Col>
                  <Grid.Col width={6}>
                    <FormField id="age" label="Age">
                      <NumberInput
                        renderLabel=""
                        placeholder="Enter age"
                        value={formData.age}
                        onChange={(_e, value) => handleInputChange('age', value)}
                        onBlur={(e) => handleBlur('age', e.target.value)}
                        messages={errors.age ? [{ text: errors.age, type: 'error' }] : undefined}
                        showArrows={false}
                      />
                    </FormField>
                  </Grid.Col>
                </Grid.Row>
              </Grid>
            </View>

            {/* Text Area */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Multi-line Text Input</Heading>
              </View>
              <FormField id="description" label="Description">
                <TextArea
                  label=""
                  placeholder="Enter a detailed description..."
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  resize="vertical"
                  maxHeight="200px"
                />
              </FormField>
            </View>

            {/* Select Dropdown */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Selection Components</Heading>
              </View>
              <Grid startAt="medium" vAlign="top" colSpacing="medium">
                <Grid.Row>
                  <Grid.Col width={6}>
                    <FormField id="country" label="Country" required>
                      <SimpleSelect
                        renderLabel=""
                        value={formData.country}
                        onChange={(_e, { value }) => handleInputChange('country', value || '')}
                        placeholder="Select your country"
                      >
                        <SimpleSelect.Option id="us" value="us">United States</SimpleSelect.Option>
                        <SimpleSelect.Option id="ca" value="ca">Canada</SimpleSelect.Option>
                        <SimpleSelect.Option id="uk" value="uk">United Kingdom</SimpleSelect.Option>
                        <SimpleSelect.Option id="au" value="au">Australia</SimpleSelect.Option>
                        <SimpleSelect.Option id="de" value="de">Germany</SimpleSelect.Option>
                      </SimpleSelect>
                    </FormField>
                  </Grid.Col>
                  <Grid.Col width={6}>
                    <FormField id="contactMethod" label="Preferred Contact Method">
                      <RadioInputGroup
                        name="contactMethod"
                        description=""
                        value={formData.contactMethod}
                        onChange={(_e, value) => handleInputChange('contactMethod', value)}
                      >
                        <RadioInput label="Email" value="email" />
                        <RadioInput label="Phone" value="phone" />
                        <RadioInput label="Text Message" value="text" />
                      </RadioInputGroup>
                    </FormField>
                  </Grid.Col>
                </Grid.Row>
              </Grid>
            </View>

            {/* Checkbox */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Checkbox Controls</Heading>
              </View>
              <Checkbox
                label="Send me email notifications about updates"
                checked={formData.notification}
                onChange={(e) => handleInputChange('notification', e.target.checked)}
              />
            </View>

            {/* Form Actions */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Form Actions</Heading>
              </View>
              <Flex gap="moduleElements" wrap="wrap">
                <Button 
                  color="primary" 
                  onClick={handleSubmit}
                  interaction={formData.isLoading ? 'disabled' : 'enabled'}
                  renderIcon={formData.isLoading ? <Spinner size="x-small" /> : undefined}
                >
                  {formData.isLoading ? 'Submitting...' : 'Submit Form'}
                </Button>
                <Button color="secondary">Cancel</Button>
                <Button color="secondary" renderIcon={<IconAddLine />}>
                  Add New Field
                </Button>
              </Flex>
            </View>

            {/* Success Message */}
            {!formData.isLoading && formData.basicText && formData.email && (
              <Alert variant="success" margin="moduleElements 0 0 0">
                <Text>Form validation successful! All required fields are completed.</Text>
              </Alert>
            )}
          </Flex>
        </View>
      </View>

      {/* FIELD SIZES AND VARIANTS SECTION */}
      <View as="section" margin="0 0 sections 0">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Field Sizes and Variants
          </Heading>
          <Text variant="descriptionSection">
            Different sizing options and visual variants for form components
          </Text>
        </View>

        <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
          <Flex direction="column" gap="moduleElements">
            {/* Input Sizes */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Input Field Sizes</Heading>
              </View>
              <Flex direction="column" gap="moduleElements">
                <FormField id="smallInput" label="Small Input">
                  <TextInput
                    renderLabel=""
                    size="small"
                    placeholder="Small size input"
                    value=""
                    onChange={() => {}}
                  />
                </FormField>
                <FormField id="mediumInput" label="Medium Input (Default)">
                  <TextInput
                    renderLabel=""
                    size="medium"
                    placeholder="Medium size input"
                    value=""
                    onChange={() => {}}
                  />
                </FormField>
                <FormField id="largeInput" label="Large Input">
                  <TextInput
                    renderLabel=""
                    size="large"
                    placeholder="Large size input"
                    value=""
                    onChange={() => {}}
                  />
                </FormField>
              </Flex>
            </View>

            {/* Read-only and Disabled States */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Field States</Heading>
              </View>
              <Grid startAt="medium" vAlign="top" colSpacing="medium">
                <Grid.Row>
                  <Grid.Col width={6}>
                    <FormField id="readonlyInput" label="Read-only Field">
                      <TextInput
                        renderLabel=""
                        value="This field is read-only"
                        readOnly
                        onChange={() => {}}
                      />
                    </FormField>
                  </Grid.Col>
                  <Grid.Col width={6}>
                    <FormField id="disabledInput" label="Disabled Field">
                      <TextInput
                        renderLabel=""
                        value="This field is disabled"
                        interaction="disabled"
                        onChange={() => {}}
                      />
                    </FormField>
                  </Grid.Col>
                </Grid.Row>
              </Grid>
            </View>
          </Flex>
        </View>
      </View>

      {/* VALIDATION PATTERNS SECTION */}
      <View as="section" margin="0 0 sections 0">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Validation Patterns
          </Heading>
          <Text variant="descriptionSection">
            Real-time validation, error handling, and user feedback patterns
          </Text>
        </View>

        <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
          <Flex direction="column" gap="moduleElements">
            {/* Validation Examples */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Field Validation Examples</Heading>
              </View>
              <Flex direction="column" gap="moduleElements">
                <FormField id="errorExample" label="Field with Error">
                  <TextInput
                    renderLabel=""
                    value="invalid@"
                    onChange={() => {}}
                    messages={[{ text: 'Please enter a valid email address', type: 'error' }]}
                  />
                </FormField>
                <FormField id="successExample" label="Valid Field">
                  <TextInput
                    renderLabel=""
                    value="user@example.com"
                    onChange={() => {}}
                    messages={[{ text: 'Email format is valid', type: 'success' }]}
                  />
                </FormField>
              </Flex>
            </View>

            {/* Form-level Alerts */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Form-level Feedback</Heading>
              </View>
              <Flex direction="column" gap="moduleElements">
                <Alert variant="error">
                  <Text>Form submission failed. Please correct the errors below and try again.</Text>
                </Alert>
                <Alert variant="warning">
                  <Text>You have unsaved changes. Please save your work before leaving this page.</Text>
                </Alert>
                <Alert variant="success">
                  <Text>Form submitted successfully! You will receive a confirmation email shortly.</Text>
                </Alert>
              </Flex>
            </View>
          </Flex>
        </View>
      </View>

      {/* ADVANCED FORM COMPONENTS SECTION */}
      <View as="section" margin="0 0 sections 0">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Advanced Form Components
          </Heading>
          <Text variant="descriptionSection">
            Specialized form components for complex data entry and Canvas-specific use cases
          </Text>
        </View>

        <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
          <Flex direction="column" gap="moduleElements">
            {/* FormFieldGroup */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Field Grouping with FormFieldGroup</Heading>
              </View>
              <FormFieldGroup description="Student Information" layout="stacked">
                <Grid startAt="medium" vAlign="top" colSpacing="medium">
                  <Grid.Row>
                    <Grid.Col width={6}>
                      <FormField id="firstName" label="First Name" required>
                        <TextInput
                          renderLabel=""
                          placeholder="Student's first name"
                          value=""
                          onChange={() => {}}
                        />
                      </FormField>
                    </Grid.Col>
                    <Grid.Col width={6}>
                      <FormField id="lastName" label="Last Name" required>
                        <TextInput
                          renderLabel=""
                          placeholder="Student's last name"
                          value=""
                          onChange={() => {}}
                        />
                      </FormField>
                    </Grid.Col>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Col width={12}>
                      <FormField id="studentId" label="Student ID">
                        <TextInput
                          renderLabel=""
                          placeholder="e.g., STU123456"
                          value=""
                          onChange={() => {}}
                        />
                      </FormField>
                    </Grid.Col>
                  </Grid.Row>
                </Grid>
              </FormFieldGroup>
            </View>

            {/* CheckboxGroup */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Multi-Select with CheckboxGroup</Heading>
              </View>
              <FormFieldGroup description="Course Subjects" layout="stacked">
                <CheckboxGroup
                  name="subjects"
                  description="Select all subjects this course covers"
                  value={formData.subjects}
                  onChange={(value) => handleInputChange('subjects', value as string[])}
                >
                  <Checkbox label="Mathematics" value="math" />
                  <Checkbox label="Science" value="science" />
                  <Checkbox label="Literature" value="literature" />
                  <Checkbox label="History" value="history" />
                  <Checkbox label="Computer Science" value="cs" />
                </CheckboxGroup>
              </FormFieldGroup>
            </View>

            {/* FileDrop */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">File Upload with FileDrop</Heading>
              </View>
              <FormField id="courseFiles" label="Course Materials">
                <FileDrop
                  accept=".pdf,.doc,.docx,.ppt,.pptx"
                  onDropAccepted={(files) => {
                    console.log('Files accepted:', files)
                    const fileArray = Array.from(files).filter((item): item is File => item instanceof File)
                    setFormData(prev => ({ 
                      ...prev, 
                      uploadedFiles: [...prev.uploadedFiles, ...fileArray] 
                    }))
                  }}
                  onDropRejected={(files) => {
                    console.log('Files rejected:', files)
                  }}
                  renderLabel={
                    <View as="div" textAlign="center" padding="medium">
                      <IconUploadLine size="large" color="secondary" />
                      <View as="div" margin="small 0 0 0">
                        <Text size="medium">
                          Drop course materials here or click to browse
                        </Text>
                      </View>
                      <View as="div" margin="small 0 0 0">
                        <Text size="small" color="secondary">
                          Supports PDF, Word, and PowerPoint files
                        </Text>
                      </View>
                    </View>
                  }
                />
              </FormField>
              {formData.uploadedFiles.length > 0 && (
                <View as="div" margin="small 0 0 0">
                  <Text size="small" weight="bold">Uploaded files ({formData.uploadedFiles.length}):</Text>
                  <View as="ul" margin="small 0 0 0">
                    {formData.uploadedFiles.map((file, index) => (
                      <View as="li" key={index}>
                        <Text size="small">{file.name}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              )}
            </View>

            {/* Date and Time Inputs */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Date and Time Selection</Heading>
              </View>
              <Grid startAt="medium" vAlign="top" colSpacing="medium">
                <Grid.Row>
                  <Grid.Col width={6}>
                    <FormField id="courseDate" label="Course Start Date" required>
                      <DateInput2
                        renderLabel=""
                        screenReaderLabels={{
                          calendarIcon: 'Calendar',
                          prevMonthButton: 'Previous month',
                          nextMonthButton: 'Next month'
                        }}
                        value={formData.courseDate}
                        onChange={(_e, value) => handleInputChange('courseDate', value)}
                        placeholder="Select start date"
                      />
                    </FormField>
                  </Grid.Col>
                  <Grid.Col width={6}>
                    <FormField id="courseTime" label="Class Time">
                      <TimeSelect
                        renderLabel=""
                        value={formData.courseTime}
                        onChange={(_e, value) => {
                          const timeValue = typeof value === 'object' && value !== null && 'value' in value ? value.value : value
                          handleInputChange('courseTime', timeValue as string)
                        }}
                        placeholder="Select time"
                        step={15}
                      />
                    </FormField>
                  </Grid.Col>
                </Grid.Row>
              </Grid>
            </View>

            {/* Color Picker */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Color Selection</Heading>
              </View>
              <FormField id="courseColor" label="Course Theme Color">
                <ColorPicker
                  label=""
                  value={formData.selectedColor}
                  onChange={(value) => handleInputChange('selectedColor', value)}
                  placeholderText="Choose color"
                />
              </FormField>
            </View>

            {/* Range Input */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Difficulty Level with RangeInput</Heading>
              </View>
              <FormField id="difficultyLevel" label={`Course Difficulty Level: ${formData.difficultyLevel}/10`}>
                <RangeInput
                  label=""
                  min={1}
                  max={10}
                  step={1}
                  value={formData.difficultyLevel}
                  onChange={(value) => handleInputChange('difficultyLevel', value)}
                  formatValue={(value) => `${value}/10`}
                />
              </FormField>
            </View>

            {/* Select with Search */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Searchable Select Component</Heading>
              </View>
              <FormField id="instructor" label="Course Instructor">
                <Select
                  renderLabel=""
                  placeholder="Search for instructor..."
                  inputValue=""
                  isShowingOptions={false}
                  onInputChange={() => {}}
                  onRequestShowOptions={() => {}}
                  onRequestHideOptions={() => {}}
                >
                  <Select.Option id="john" value="john">
                    Dr. John Smith - Computer Science
                  </Select.Option>
                  <Select.Option id="jane" value="jane">
                    Prof. Jane Doe - Mathematics  
                  </Select.Option>
                  <Select.Option id="bob" value="bob">
                    Dr. Bob Johnson - Physics
                  </Select.Option>
                </Select>
              </FormField>
            </View>

            {/* Toggle Switches */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Toggle Switches</Heading>
              </View>
              <FormFieldGroup description="Course Settings" layout="stacked">
                <Flex direction="column" gap="small">
                  <Checkbox
                    label="Enable email notifications"
                    variant="toggle"
                    checked={formData.notification}
                    onChange={(e) => handleInputChange('notification', e.target.checked)}
                  />
                  <Checkbox
                    label="Allow student discussions"
                    variant="toggle"
                    size="medium"
                    checked={true}
                    onChange={() => {}}
                  />
                  <Checkbox
                    label="Publish course immediately"
                    variant="toggle"
                    size="small"
                    labelPlacement="start"
                    checked={false}
                    onChange={() => {}}
                  />
                </Flex>
              </FormFieldGroup>
            </View>
          </Flex>
        </View>
      </View>

      {/* CANVAS-SPECIFIC EXAMPLES SECTION */}
      <View as="section" margin="0 0 sections 0">
        <View as="header" margin="0 0 sectionElements 0">
          <Heading level="h2" variant="titleSection">
            Canvas-Specific Form Examples
          </Heading>
          <Text variant="descriptionSection">
            Real-world form patterns commonly used in educational platforms and LMS interfaces
          </Text>
        </View>

        <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
          <Flex direction="column" gap="moduleElements">
            {/* Assignment Creation Form */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Assignment Creation Form</Heading>
              </View>
              <FormFieldGroup description="Create New Assignment" layout="stacked">
                <Grid startAt="medium" vAlign="top" colSpacing="medium">
                  <Grid.Row>
                    <Grid.Col width={8}>
                      <FormField id="assignmentTitle" label="Assignment Title" required>
                        <TextInput
                          renderLabel=""
                          placeholder="e.g., Module 3 Research Paper"
                          value=""
                          onChange={() => {}}
                        />
                      </FormField>
                    </Grid.Col>
                    <Grid.Col width={4}>
                      <FormField id="points" label="Total Points">
                        <NumberInput
                          renderLabel=""
                          placeholder="100"
                          value=""
                          onChange={() => {}}
                          showArrows={false}
                        />
                      </FormField>
                    </Grid.Col>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Col width={6}>
                      <FormField id="dueDate" label="Due Date" required>
                        <DateInput2
                          renderLabel=""
                          screenReaderLabels={{
                            calendarIcon: 'Calendar',
                            prevMonthButton: 'Previous month',
                            nextMonthButton: 'Next month'
                          }}
                          value=""
                          onChange={() => {}}
                          placeholder="Select due date"
                        />
                      </FormField>
                    </Grid.Col>
                    <Grid.Col width={6}>
                      <FormField id="dueTime" label="Due Time">
                        <TimeSelect
                          renderLabel=""
                          value=""
                          onChange={() => {}}
                          placeholder="11:59 PM"
                          step={15}
                        />
                      </FormField>
                    </Grid.Col>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Col width={12}>
                      <FormField id="instructions" label="Assignment Instructions">
                        <TextArea
                          label=""
                          placeholder="Provide detailed instructions for students..."
                          value=""
                          onChange={() => {}}
                          resize="vertical"
                          maxHeight="150px"
                        />
                      </FormField>
                    </Grid.Col>
                  </Grid.Row>
                  <Grid.Row>
                    <Grid.Col width={12}>
                      <CheckboxGroup
                        name="assignmentOptions"
                        description="Assignment Settings"
                        value={[]}
                        onChange={() => {}}
                      >
                        <Checkbox label="Allow late submissions" value="allowLate" />
                        <Checkbox label="Enable peer review" value="peerReview" />
                        <Checkbox label="Show rubric to students" value="showRubric" />
                        <Checkbox label="Anonymous grading" value="anonymousGrading" />
                      </CheckboxGroup>
                    </Grid.Col>
                  </Grid.Row>
                </Grid>
              </FormFieldGroup>
            </View>

            {/* Grade Entry Form */}
            <View>
              <View as="div" margin="0 0 moduleElements 0">
                <Heading level="h5" variant="label">Grade Entry Interface</Heading>
              </View>
              <FormFieldGroup description="Student Grade Entry" layout="columns">
                <Grid startAt="medium" vAlign="top" colSpacing="medium">
                  <Grid.Row>
                    <Grid.Col width={4}>
                      <FormField id="studentName" label="Student">
                        <TextInput
                          renderLabel=""
                          value="Sarah Johnson"
                          readOnly
                          onChange={() => {}}
                        />
                      </FormField>
                    </Grid.Col>
                    <Grid.Col width={3}>
                      <FormField id="grade" label="Grade" required>
                        <NumberInput
                          renderLabel=""
                          placeholder="95"
                          value=""
                          onChange={() => {}}
                          min={0}
                          max={100}
                          showArrows={true}
                        />
                      </FormField>
                    </Grid.Col>
                    <Grid.Col width={5}>
                      <FormField id="feedback" label="Feedback">
                        <TextArea
                          label=""
                          placeholder="Excellent work on the analysis section..."
                          value=""
                          onChange={() => {}}
                          resize="vertical"
                          maxHeight="100px"
                        />
                      </FormField>
                    </Grid.Col>
                  </Grid.Row>
                </Grid>
              </FormFieldGroup>
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