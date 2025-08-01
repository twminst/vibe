# Forms Pattern Design Specifications

## Overview

This document provides comprehensive design specifications for implementing a complete forms pattern in the InstUI prototype system. The forms pattern demonstrates all InstUI form components, validation patterns, layout strategies, and accessibility considerations for Canvas/educational platform interfaces.

## Component Architecture

### Core Form Components

#### Text Input Components

**TextInput** - Primary text input for single-line text
```tsx
import { TextInput } from '@instructure/ui-text-input'

// Basic usage with required field indicator
<TextInput
  renderLabel="Assignment Title"
  placeholder="Enter assignment title"
  isRequired
  messages={[{ text: 'Assignment title is required', type: 'newError' }]}
  onChange={(e, value) => setValue(value)}
  value={value}
/>

// Password field variant
<TextInput
  renderLabel="Password"
  type="password"
  isRequired
  messages={passwordMessages}
  onChange={(e, value) => setPassword(value)}
  value={password}
/>

// Read-only state for display
<TextInput
  renderLabel="Course Code"
  value="ENG101"
  interaction="readonly"
/>
```

**TextArea** - Multi-line text input for longer content
```tsx
import { TextArea } from '@instructure/ui-text-area'

// Auto-resizing text area with character limit
<TextArea
  label="Assignment Description"
  placeholder="Describe the assignment requirements..."
  resize="vertical"
  height="8rem"
  messages={[{ text: `${description.length}/500 characters`, type: 'hint' }]}
  onChange={(e, value) => setDescription(value)}
  value={description}
  isRequired
/>

// Fixed height text area
<TextArea
  label="Additional Notes"
  height="4rem"
  resize="none"
  value={notes}
  onChange={(e, value) => setNotes(value)}
/>
```

#### Selection Components

**Select** - Advanced dropdown with search and multi-select capabilities
```tsx
import { Select } from '@instructure/ui-select'

// Single selection with search
<Select
  renderLabel="Choose Course"
  assistiveText="Type to search courses"
  placeholder="Search for a course..."
  isShowingOptions={isShowingOptions}
  onRequestShowOptions={() => setIsShowingOptions(true)}
  onRequestHideOptions={() => setIsShowingOptions(false)}
  onRequestHighlightOption={(e, { id }) => setHighlightedOptionId(id)}
  onRequestSelectOption={(e, { id }) => setSelectedOptionId(id)}
  messages={selectMessages}
>
  {filteredCourses.map(course => (
    <Select.Option
      key={course.id}
      id={course.id}
      value={course.id}
      isHighlighted={course.id === highlightedOptionId}
      isSelected={course.id === selectedOptionId}
    >
      {course.name}
    </Select.Option>
  ))}
</Select>

// Multi-select with grouped options
<Select
  renderLabel="Select Students"
  multiple
  placeholder="Choose students..."
  selectedOptionId={selectedStudents}
  onRequestSelectOption={handleStudentSelection}
>
  <Select.Group renderLabel="Section A">
    {sectionAStudents.map(student => (
      <Select.Option key={student.id} id={student.id}>
        {student.name}
      </Select.Option>
    ))}
  </Select.Group>
  <Select.Group renderLabel="Section B">
    {sectionBStudents.map(student => (
      <Select.Option key={student.id} id={student.id}>
        {student.name}
      </Select.Option>
    ))}
  </Select.Group>
</Select>
```

**SimpleSelect** - Basic dropdown for simple selection
```tsx
import { SimpleSelect } from '@instructure/ui-simple-select'

// Basic single selection
<SimpleSelect
  renderLabel="Grade Level"
  value={gradeLevel}
  onChange={(e, { value }) => setGradeLevel(value)}
  messages={gradeMessages}
>
  <SimpleSelect.Option id="freshman" value="freshman">
    Freshman
  </SimpleSelect.Option>
  <SimpleSelect.Option id="sophomore" value="sophomore">
    Sophomore
  </SimpleSelect.Option>
  <SimpleSelect.Option id="junior" value="junior">
    Junior
  </SimpleSelect.Option>
  <SimpleSelect.Option id="senior" value="senior">
    Senior
  </SimpleSelect.Option>
</SimpleSelect>

// With custom option icons
<SimpleSelect
  renderLabel="Assignment Type"
  value={assignmentType}
  onChange={(e, { value }) => setAssignmentType(value)}
>
  <SimpleSelect.Option 
    id="quiz" 
    value="quiz"
    renderBeforeLabel={IconQuizLine}
  >
    Quiz
  </SimpleSelect.Option>
  <SimpleSelect.Option 
    id="assignment" 
    value="assignment"
    renderBeforeLabel={IconAssignmentLine}
  >
    Assignment
  </SimpleSelect.Option>
</SimpleSelect>
```

#### Choice Components

**Checkbox and CheckboxGroup** - Multiple selection inputs
```tsx
import { Checkbox, CheckboxGroup } from '@instructure/ui-checkbox'

// Individual checkbox with validation
<Checkbox
  label="I agree to the terms and conditions"
  value="terms"
  checked={agreeToTerms}
  onChange={(e) => setAgreeToTerms(e.target.checked)}
  isRequired
  messages={termsMessages}
/>

// Toggle variant checkbox
<Checkbox
  label="Enable email notifications"
  value="notifications"
  variant="toggle"
  checked={emailNotifications}
  onChange={(e) => setEmailNotifications(e.target.checked)}
/>

// Checkbox group with stacked layout
<CheckboxGroup
  name="permissions"
  description="Select student permissions"
  layout="stacked"
  onChange={handlePermissionChange}
  defaultValue={selectedPermissions}
  messages={permissionMessages}
>
  <Checkbox label="View grades" value="view_grades" />
  <Checkbox label="Submit assignments" value="submit_assignments" />
  <Checkbox label="Participate in discussions" value="discussions" />
  <Checkbox label="Access course materials" value="materials" />
</CheckboxGroup>

// Inline checkbox group
<CheckboxGroup
  name="availability"
  description="Available days"
  layout="inline"
  onChange={handleDayChange}
  defaultValue={availableDays}
>
  <Checkbox label="Mon" value="monday" variant="toggle" />
  <Checkbox label="Tue" value="tuesday" variant="toggle" />
  <Checkbox label="Wed" value="wednesday" variant="toggle" />
  <Checkbox label="Thu" value="thursday" variant="toggle" />
  <Checkbox label="Fri" value="friday" variant="toggle" />
</CheckboxGroup>
```

**RadioInput and RadioInputGroup** - Single selection from multiple options
```tsx
import { RadioInput, RadioInputGroup } from '@instructure/ui-radio-input'

// Standard radio group
<RadioInputGroup
  name="gradingMethod"
  description="Select grading method"
  defaultValue="points"
  onChange={(e, value) => setGradingMethod(value)}
  messages={gradingMessages}
  isRequired
>
  <RadioInput label="Points" value="points" />
  <RadioInput label="Percentage" value="percentage" />
  <RadioInput label="Letter Grade" value="letter" />
  <RadioInput label="Pass/Fail" value="pass_fail" />
</RadioInputGroup>

// Toggle variant radio group (button-style)
<RadioInputGroup
  name="visibility"
  description="Course visibility"
  variant="toggle"
  layout="columns"
  value={visibility}
  onChange={(e, value) => setVisibility(value)}
>
  <RadioInput label="Public" value="public" />
  <RadioInput label="Institution" value="institution" />
  <RadioInput label="Private" value="private" />
</RadioInputGroup>
```

#### Date and Time Components

**DateInput2** - Modern date picker with calendar
```tsx
import { DateInput2 } from '@instructure/ui-date-input'

// Basic date input with validation
<DateInput2
  renderLabel="Assignment Due Date"
  value={dueDate}
  onChange={(e, inputValue, dateString) => {
    setDueDate(inputValue)
    setDueDateString(dateString)
  }}
  onRequestValidateDate={handleDateValidation}
  messages={dateMessages}
  screenReaderLabels={{
    calendarIcon: 'Calendar',
    nextMonthButton: 'Next month',
    prevMonthButton: 'Previous month'
  }}
  width="20rem"
  isRequired
  invalidDateErrorMessage="Please enter a valid date"
/>

// Date input with year picker and disabled dates
<DateInput2
  renderLabel="Event Date"
  value={eventDate}
  onChange={(e, inputValue, dateString) => setEventDate(inputValue)}
  disabledDates={holidayDates}
  withYearPicker={{
    screenReaderLabel: 'Year picker',
    startYear: 2024,
    endYear: 2030
  }}
  screenReaderLabels={{
    calendarIcon: 'Calendar',
    nextMonthButton: 'Next month',
    prevMonthButton: 'Previous month'
  }}
/>
```

**DateTimeInput** - Combined date and time picker
```tsx
import { DateTimeInput } from '@instructure/ui-date-time-input'

// Column layout date-time input
<DateTimeInput
  description="Assignment Due Date and Time"
  datePlaceholder="Choose date"
  dateRenderLabel="Due Date"
  timeRenderLabel="Due Time"
  defaultValue="2024-12-15T23:59"
  layout="columns"
  locale="en-us"
  timezone="America/New_York"
  onChange={(e, isoString) => setDueDateTime(isoString)}
  invalidDateTimeMessage="Please enter a valid date and time"
  prevMonthLabel="Previous month"
  nextMonthLabel="Next month"
  isRequired
  messages={dateTimeMessages}
/>

// Stacked layout date-time input
<DateTimeInput
  description="Meeting Time"
  datePlaceholder="Select date"
  dateRenderLabel="Meeting Date"
  timeRenderLabel="Start Time"
  layout="stacked"
  defaultValue="2024-12-20T14:00"
  onChange={(e, isoString) => setMeetingTime(isoString)}
/>
```

**TimeSelect** - Time-only picker
```tsx
import { TimeSelect } from '@instructure/ui-time-select'

// Basic time selection
<TimeSelect
  renderLabel="Class Start Time"
  value={startTime}
  onChange={(e, { value }) => setStartTime(value)}
  onInputChange={(e, value, isoValue) => handleTimeChange(value, isoValue)}
  locale="en-us"
  timezone="America/New_York"
  step={15} // 15-minute intervals
  format="LT" // Locale time format
/>

// Time select with custom step and free input
<TimeSelect
  renderLabel="Custom Time"
  allowNonStepInput
  step={30}
  onChange={(e, { value }) => setCustomTime(value)}
  messages={timeMessages}
/>
```

#### Numeric and Range Components

**NumberInput** - Numeric input with increment/decrement controls
```tsx
import { NumberInput } from '@instructure/ui-number-input'

// Basic number input with range validation
<NumberInput
  renderLabel="Maximum Points"
  placeholder="Enter points (0-100)"
  value={maxPoints}
  onChange={(e, value) => setMaxPoints(value)}
  onBlur={handlePointsBlur}
  onIncrement={handleIncrement}
  onDecrement={handleDecrement}
  messages={pointsMessages}
  isRequired
  showArrows
  interaction={isDisabled ? 'disabled' : 'enabled'}
/>

// Currency-style number input
<NumberInput
  renderLabel="Budget Amount"
  value={budget}
  onChange={(e, value) => setBudget(value)}
  placeholder="$0.00"
  showArrows={false}
  messages={budgetMessages}
/>
```

**RangeInput** - Slider input for range selection
```tsx
import { RangeInput } from '@instructure/ui-range-input'

// Single value slider
<RangeInput
  label="Difficulty Level"
  min={1}
  max={10}
  step={1}
  value={difficulty}
  onChange={(value) => setDifficulty(value)}
  formatValue={(value) => `Level ${value}`}
  messages={difficultyMessages}
/>

// Range slider for min/max values
<RangeInput
  label="Grade Range"
  min={0}
  max={100}
  step={5}
  value={[minGrade, maxGrade]}
  onChange={([min, max]) => {
    setMinGrade(min)
    setMaxGrade(max)
  }}
  formatValue={(value) => Array.isArray(value) 
    ? `${value[0]}% - ${value[1]}%`
    : `${value}%`
  }
/>
```

#### File and Media Components

**FileDrop** - File upload with drag and drop
```tsx
import { FileDrop } from '@instructure/ui-file-drop'
import { Billboard } from '@instructure/ui-billboard'
import { IconUploadLine } from '@instructure/ui-icons'

// Basic file drop with type restrictions
<FileDrop
  accept=".pdf,.doc,.docx"
  onDropAccepted={handleFileAccepted}
  onDropRejected={handleFileRejected}
  messages={fileMessages}
  renderLabel={
    <Billboard
      size="small"
      message="Upload assignment files"
      hero={<IconUploadLine />}
    />
  }
  maxWidth="20rem"
/>

// Multiple file upload with progress
<FileDrop
  accept="image/*"
  allowMultiple
  onDropAccepted={handleMultipleFiles}
  onDropRejected={handleRejectedFiles}
  messages={uploadMessages}
  renderLabel={
    <Billboard
      size="medium"
      message="Drop images here or click to browse"
      hero={<IconImageLine />}
    />
  }
/>
```

#### Color and Advanced Components

**ColorPicker** - Color selection with validation
```tsx
import { ColorPicker } from '@instructure/ui-color-picker'

// Basic color picker
<ColorPicker
  label="Theme Color"
  value={themeColor}
  onChange={(value) => setThemeColor(value)}
  placeholderText="Enter HEX color"
  isRequired
  messages={colorMessages}
  popoverButtonScreenReaderLabel="Open color picker"
/>

// Color picker with alpha channel and contrast checking
<ColorPicker
  label="Background Color"
  value={backgroundColor}
  onChange={(value) => setBackgroundColor(value)}
  withAlpha
  checkContrast={{
    contrastAgainst: '#ffffff',
    contrastStrength: 'mid',
    isStrict: true,
    renderContrastErrorMessage: (contrast, minContrast) => [{
      type: 'error',
      text: `Contrast ratio ${contrast}:1 is below minimum ${minContrast}:1`
    }]
  }}
  renderInvalidColorMessage={(hexCode) => [{
    type: 'error',
    text: 'Please enter a valid hex color code'
  }]}
/>
```

**Rating** - Star rating input
```tsx
import { Rating } from '@instructure/ui-rating'

// Interactive rating input
<Rating
  label="Course Rating"
  valueMax={5}
  valueNow={rating}
  onClick={(value) => setRating(value)}
  iconCount={5}
  size="large"
  messages={ratingMessages}
/>

// Read-only rating display
<Rating
  label="Average Rating"
  valueMax={5}
  valueNow={averageRating}
  size="medium"
  interaction="disabled"
/>
```

### Form Layout Components

#### Field Organization

**FormField** - Individual field wrapper with label and messaging
```tsx
import { FormField } from '@instructure/ui-form-field'

// Stacked layout (default)
<FormField
  id="assignment-title"
  label="Assignment Title"
  layout="stacked"
  messages={[
    { text: 'Assignment title is required', type: 'newError' },
    { text: 'Keep titles concise and descriptive', type: 'hint' }
  ]}
  isRequired
>
  <TextInput id="assignment-title" />
</FormField>

// Inline layout for compact forms
<FormField
  id="points"
  label="Points"
  layout="inline"
  width="10rem"
  messages={pointsMessages}
>
  <NumberInput id="points" />
</FormField>
```

**FormFieldGroup** - Group related fields with shared styling
```tsx
import { FormFieldGroup } from '@instructure/ui-form-field'

// Stacked group with section description
<FormFieldGroup
  description="Assignment Settings"
  layout="stacked"
  rowSpacing="large"
  messages={groupMessages}
>
  <TextInput renderLabel="Assignment Name" />
  <TextArea label="Description" />
  <DateInput2 renderLabel="Due Date" />
  <NumberInput renderLabel="Points Possible" />
</FormFieldGroup>

// Column layout for side-by-side fields
<FormFieldGroup
  description="Course Information"
  layout="columns"
  colSpacing="medium"
  vAlign="top"
>
  <TextInput renderLabel="Course Name" />
  <SimpleSelect renderLabel="Department">
    <SimpleSelect.Option id="eng" value="english">English</SimpleSelect.Option>
    <SimpleSelect.Option id="math" value="math">Mathematics</SimpleSelect.Option>
  </SimpleSelect>
  <NumberInput renderLabel="Credits" />
</FormFieldGroup>

// Inline layout for compact forms
<FormFieldGroup
  description="Quick Settings"
  layout="inline"
  rowSpacing="small"
  vAlign="middle"
>
  <Checkbox label="Published" variant="toggle" />
  <Checkbox label="Allow Late Submissions" variant="toggle" />
  <SimpleSelect renderLabel="Grading Type">
    <SimpleSelect.Option id="points" value="points">Points</SimpleSelect.Option>
    <SimpleSelect.Option id="percent" value="percent">Percentage</SimpleSelect.Option>
  </SimpleSelect>
</FormFieldGroup>
```

**Fieldset** - Semantic grouping for accessibility
```tsx
import { Fieldset } from '@instructure/ui-form-field'

// Grouped related controls with legend
<Fieldset legend="Student Permissions" messages={permissionMessages}>
  <CheckboxGroup
    name="permissions"
    description="Select applicable permissions"
    layout="stacked"
    onChange={handlePermissionChange}
  >
    <Checkbox label="View grades" value="view_grades" />
    <Checkbox label="Submit assignments" value="submit_assignments" />
    <Checkbox label="Access discussions" value="discussions" />
  </CheckboxGroup>
</Fieldset>

// Fieldset with screen reader only legend
<Fieldset 
  legend={<ScreenReaderContent>Course Configuration</ScreenReaderContent>}
>
  <RadioInputGroup
    name="courseFormat"
    description="Course Format"
    onChange={handleFormatChange}
  >
    <RadioInput label="Online" value="online" />
    <RadioInput label="Hybrid" value="hybrid" />
    <RadioInput label="In-Person" value="in_person" />
  </RadioInputGroup>
</Fieldset>
```

### Form Action Components

**Button Integration** - Form submission and action buttons
```tsx
import { Button } from '@instructure/ui-buttons'
import { Flex } from '@instructure/ui-flex'

// Form submission buttons
<Flex gap="buttons" justifyItems="end">
  <Button color="secondary" onClick={handleCancel}>
    Cancel
  </Button>
  <Button color="secondary" onClick={handleSaveDraft}>
    Save Draft
  </Button>
  <Button type="submit" color="primary">
    Save Assignment
  </Button>
</Flex>

// Form with destructive action
<Flex gap="buttons" justifyItems="space-between">
  <Button color="danger" onClick={handleDelete}>
    Delete Course
  </Button>
  <Flex gap="buttons">
    <Button color="secondary">Cancel</Button>
    <Button type="submit" color="primary">Save Changes</Button>
  </Flex>
</Flex>
```

### Feedback and Validation Components

#### Messaging Components

**Alert** - Form-level notifications and status messages
```tsx
import { Alert } from '@instructure/ui-alerts'

// Success message after form submission
<Alert
  variant="success"
  margin="medium 0"
  renderCloseButtonLabel="Close success message"
  transition="fade"
>
  Assignment has been successfully created and published to students.
</Alert>

// Error summary for form validation
<Alert
  variant="error"
  margin="medium 0"
  renderCloseButtonLabel="Close error summary"
>
  <View>
    <Text weight="bold">Please correct the following errors:</Text>
    <List margin="small 0 0 0">
      <List.Item>Assignment title is required</List.Item>
      <List.Item>Due date must be in the future</List.Item>
      <List.Item>Points must be between 0 and 100</List.Item>
    </List>
  </View>
</Alert>

// Warning message for form changes
<Alert
  variant="warning"
  margin="medium 0"
>
  You have unsaved changes. These will be lost if you navigate away from this page.
</Alert>

// Info message with instructions
<Alert
  variant="info"
  margin="medium 0"
>
  <View>
    <Text weight="bold">Assignment Creation Tips:</Text>
    <List margin="small 0 0 0">
      <List.Item>Use clear, descriptive titles</List.Item>
      <List.Item>Set realistic due dates</List.Item>
      <List.Item>Provide detailed instructions</List.Item>
    </List>
  </View>
</Alert>
```

**Message** - Field-level validation and help text
```tsx
import { Message } from '@instructure/ui-message'

// Success message for field validation
<Message variant="success">
  Email address is valid and available
</Message>

// Error message with specific guidance
<Message variant="error">
  Password must contain at least 8 characters, including uppercase, lowercase, and numbers
</Message>

// Warning message for field changes
<Message variant="warning">
  Changing the course code will affect existing enrollments
</Message>

// Hint message with helpful information
<Message variant="hint">
  Due dates are displayed in each student's local timezone
</Message>
```

#### Progress and Status Components

**Spinner** - Loading states during form operations
```tsx
import { Spinner } from '@instructure/ui-spinner'

// Form submission loading state
<Flex gap="buttons" alignItems="center" justifyItems="end">
  {isSubmitting && (
    <Flex gap="small" alignItems="center">
      <Spinner renderTitle="Saving assignment" size="small" />
      <Text>Saving...</Text>
    </Flex>
  )}
  <Button 
    type="submit" 
    color="primary" 
    interaction={isSubmitting ? 'disabled' : 'enabled'}
  >
    {isSubmitting ? 'Saving...' : 'Save Assignment'}
  </Button>
</Flex>

// Field validation loading
<View position="relative">
  <TextInput
    renderLabel="Username"
    value={username}
    onChange={handleUsernameChange}
    renderAfterInput={() => 
      isValidatingUsername && <Spinner size="x-small" />
    }
    messages={usernameMessages}
  />
</View>
```

**ProgressBar** - Multi-step form progress
```tsx
import { ProgressBar } from '@instructure/ui-progress'

// Linear progress for multi-step forms
<View margin="0 0 large 0">
  <ProgressBar
    label="Form completion progress"
    valueMax={totalSteps}
    valueNow={currentStep}
    formatDisplayedValue={(valueNow, valueMax) => 
      `Step ${valueNow} of ${valueMax}`
    }
    size="large"
  />
</View>

// File upload progress
<View margin="small 0">
  <ProgressBar
    label="File upload progress"
    valueMax={100}
    valueNow={uploadProgress}
    formatDisplayedValue={(valueNow) => `${valueNow}%`}
    variant="color-brand"
  />
</View>
```

### Modal and Dialog Components

**Modal** - Modal forms and dialogs
```tsx
import { Modal } from '@instructure/ui-modal'

// Assignment creation modal
<Modal
  open={isModalOpen}
  onDismiss={() => setIsModalOpen(false)}
  size="medium"
  label="Create New Assignment"
  shouldCloseOnDocumentClick={false}
>
  <Modal.Header>
    <CloseButton
      placement="end"
      onClick={() => setIsModalOpen(false)}
      screenReaderLabel="Close assignment creation modal"
    />
    <Heading level="h2">Create New Assignment</Heading>
  </Modal.Header>
  
  <Modal.Body>
    <FormFieldGroup
      description="Assignment Details"
      layout="stacked"
      rowSpacing="medium"
    >
      <TextInput renderLabel="Assignment Title" isRequired />
      <TextArea label="Instructions" height="8rem" />
      <DateInput2 renderLabel="Due Date" isRequired />
      <NumberInput renderLabel="Points Possible" />
    </FormFieldGroup>
  </Modal.Body>
  
  <Modal.Footer>
    <Button onClick={() => setIsModalOpen(false)} margin="0 x-small 0 0">
      Cancel
    </Button>
    <Button color="primary" type="submit">
      Create Assignment
    </Button>
  </Modal.Footer>
</Modal>
```

**Tray** - Side panel forms
```tsx
import { Tray } from '@instructure/ui-tray'

// Settings panel tray
<Tray
  label="Course Settings"
  open={isTrayOpen}
  onDismiss={() => setIsTrayOpen(false)}
  size="medium"
  placement="end"
>
  <View as="div" padding="medium">
    <Flex direction="column" gap="large">
      <View>
        <CloseButton
          placement="end"
          onClick={() => setIsTrayOpen(false)}
          screenReaderLabel="Close settings panel"
        />
        <Heading level="h2" margin="0 0 medium 0">Course Settings</Heading>
      </View>
      
      <FormFieldGroup
        description="General Settings"
        layout="stacked"
        rowSpacing="medium"
      >
        <TextInput renderLabel="Course Name" />
        <TextArea label="Course Description" />
        <CheckboxGroup
          name="features"
          description="Course Features"
          layout="stacked"
        >
          <Checkbox label="Enable discussions" variant="toggle" />
          <Checkbox label="Allow late submissions" variant="toggle" />
          <Checkbox label="Show gradebook to students" variant="toggle" />
        </CheckboxGroup>
      </FormFieldGroup>
      
      <Flex gap="buttons" justifyItems="end">
        <Button color="secondary">Reset</Button>
        <Button color="primary">Save Settings</Button>
      </Flex>
    </Flex>
  </View>
</Tray>
```

## Form Validation Patterns

### Validation Strategy

**Real-time Validation** - Validate as user types
```tsx
const [email, setEmail] = useState('')
const [emailMessages, setEmailMessages] = useState([])

const validateEmail = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!value) {
    return [{ type: 'newError', text: 'Email address is required' }]
  }
  if (!emailRegex.test(value)) {
    return [{ type: 'newError', text: 'Please enter a valid email address' }]
  }
  if (value.includes('student.edu')) {
    return [{ type: 'success', text: 'Valid student email address' }]
  }
  return []
}

const handleEmailChange = (e, value) => {
  setEmail(value)
  setEmailMessages(validateEmail(value))
}

<TextInput
  renderLabel="Email Address"
  type="email"
  value={email}
  onChange={handleEmailChange}
  messages={emailMessages}
  isRequired
/>
```

**On-blur Validation** - Validate when field loses focus
```tsx
const [password, setPassword] = useState('')
const [passwordMessages, setPasswordMessages] = useState([])

const validatePassword = (value) => {
  const messages = []
  if (!value) {
    messages.push({ type: 'newError', text: 'Password is required' })
  } else {
    if (value.length < 8) {
      messages.push({ type: 'newError', text: 'Password must be at least 8 characters' })
    }
    if (!/[A-Z]/.test(value)) {
      messages.push({ type: 'newError', text: 'Password must contain uppercase letters' })
    }
    if (!/[a-z]/.test(value)) {
      messages.push({ type: 'newError', text: 'Password must contain lowercase letters' })
    }
    if (!/\d/.test(value)) {
      messages.push({ type: 'newError', text: 'Password must contain numbers' })
    }
  }
  return messages
}

const handlePasswordBlur = () => {
  setPasswordMessages(validatePassword(password))
}

<TextInput
  renderLabel="Password"
  type="password"
  value={password}
  onChange={(e, value) => setPassword(value)}
  onBlur={handlePasswordBlur}
  messages={passwordMessages}
  isRequired
/>
```

**Cross-field Validation** - Validate dependencies between fields
```tsx
const [startDate, setStartDate] = useState('')
const [endDate, setEndDate] = useState('')
const [dateMessages, setDateMessages] = useState({ start: [], end: [] })

const validateDateRange = (start, end) => {
  const messages = { start: [], end: [] }
  
  if (start && end) {
    const startDateObj = new Date(start)
    const endDateObj = new Date(end)
    
    if (startDateObj >= endDateObj) {
      messages.end.push({
        type: 'newError',
        text: 'End date must be after start date'
      })
    }
    
    const daysDiff = (endDateObj - startDateObj) / (1000 * 60 * 60 * 24)
    if (daysDiff > 365) {
      messages.end.push({
        type: 'warning',
        text: 'Course duration exceeds one year'
      })
    }
  }
  
  return messages
}

const handleDateChange = (type, value) => {
  if (type === 'start') {
    setStartDate(value)
    setDateMessages(validateDateRange(value, endDate))
  } else {
    setEndDate(value)
    setDateMessages(validateDateRange(startDate, value))
  }
}

<FormFieldGroup
  description="Course Duration"
  layout="columns"
  colSpacing="medium"
>
  <DateInput2
    renderLabel="Start Date"
    value={startDate}
    onChange={(e, value) => handleDateChange('start', value)}
    messages={dateMessages.start}
    isRequired
  />
  <DateInput2
    renderLabel="End Date"
    value={endDate}
    onChange={(e, value) => handleDateChange('end', value)}
    messages={dateMessages.end}
    isRequired
  />
</FormFieldGroup>
```

**Async Validation** - Server-side validation integration
```tsx
const [username, setUsername] = useState('')
const [usernameMessages, setUsernameMessages] = useState([])
const [isValidatingUsername, setIsValidatingUsername] = useState(false)

const validateUsernameAvailability = async (value) => {
  if (!value || value.length < 3) return
  
  setIsValidatingUsername(true)
  try {
    const response = await fetch(`/api/validate-username?username=${value}`)
    const result = await response.json()
    
    if (result.available) {
      setUsernameMessages([{
        type: 'success',
        text: 'Username is available'
      }])
    } else {
      setUsernameMessages([{
        type: 'newError',
        text: 'Username is already taken'
      }])
    }
  } catch (error) {
    setUsernameMessages([{
      type: 'warning',
      text: 'Unable to check username availability'
    }])
  } finally {
    setIsValidatingUsername(false)
  }
}

const handleUsernameBlur = () => {
  validateUsernameAvailability(username)
}

<TextInput
  renderLabel="Username"
  value={username}
  onChange={(e, value) => setUsername(value)}
  onBlur={handleUsernameBlur}
  renderAfterInput={() => 
    isValidatingUsername && <Spinner size="x-small" />
  }
  messages={usernameMessages}
  isRequired
/>
```

### Form Submission Patterns

**Standard Form Submission** - Basic form handling with validation
```tsx
const [formData, setFormData] = useState({
  title: '',
  description: '',
  dueDate: '',
  points: ''
})
const [formMessages, setFormMessages] = useState([])
const [isSubmitting, setIsSubmitting] = useState(false)

const validateForm = () => {
  const errors = []
  
  if (!formData.title.trim()) {
    errors.push('Assignment title is required')
  }
  
  if (!formData.dueDate) {
    errors.push('Due date is required')
  } else if (new Date(formData.dueDate) < new Date()) {
    errors.push('Due date must be in the future')
  }
  
  if (!formData.points || formData.points < 0 || formData.points > 100) {
    errors.push('Points must be between 0 and 100')
  }
  
  return errors
}

const handleSubmit = async (e) => {
  e.preventDefault()
  
  const validationErrors = validateForm()
  if (validationErrors.length > 0) {
    setFormMessages([{
      type: 'error',
      text: (
        <View>
          <Text weight="bold">Please correct the following errors:</Text>
          <List margin="small 0 0 0">
            {validationErrors.map((error, index) => (
              <List.Item key={index}>{error}</List.Item>
            ))}
          </List>
        </View>
      )
    }])
    return
  }
  
  setIsSubmitting(true)
  setFormMessages([])
  
  try {
    const response = await fetch('/api/assignments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    
    if (response.ok) {
      setFormMessages([{
        type: 'success',
        text: 'Assignment created successfully!'
      }])
      // Reset form or redirect
      setFormData({ title: '', description: '', dueDate: '', points: '' })
    } else {
      throw new Error('Failed to create assignment')
    }
  } catch (error) {
    setFormMessages([{
      type: 'error',
      text: 'Failed to create assignment. Please try again.'
    }])
  } finally {
    setIsSubmitting(false)
  }
}

<form onSubmit={handleSubmit}>
  {formMessages.map((message, index) => (
    <Alert
      key={index}
      variant={message.type}
      margin="0 0 medium 0"
      renderCloseButtonLabel="Close message"
    >
      {message.text}
    </Alert>
  ))}
  
  <FormFieldGroup
    description="Assignment Details"
    layout="stacked"
    rowSpacing="medium"
  >
    <TextInput
      renderLabel="Assignment Title"
      value={formData.title}
      onChange={(e, value) => setFormData({...formData, title: value})}
      isRequired
    />
    <TextArea
      label="Description"
      value={formData.description}
      onChange={(e, value) => setFormData({...formData, description: value})}
    />
    <DateInput2
      renderLabel="Due Date"
      value={formData.dueDate}
      onChange={(e, value) => setFormData({...formData, dueDate: value})}
      isRequired
    />
    <NumberInput
      renderLabel="Points Possible"
      value={formData.points}
      onChange={(e, value) => setFormData({...formData, points: value})}
      isRequired
    />
  </FormFieldGroup>
  
  <Flex gap="buttons" justifyItems="end" margin="large 0 0 0">
    <Button color="secondary" type="button">
      Cancel
    </Button>
    <Button 
      type="submit" 
      color="primary"
      interaction={isSubmitting ? 'disabled' : 'enabled'}
    >
      {isSubmitting ? 'Creating...' : 'Create Assignment'}
    </Button>
  </Flex>
</form>
```

**Auto-save Functionality** - Periodic form data preservation
```tsx
const [formData, setFormData] = useState({})
const [lastSaved, setLastSaved] = useState(null)
const [isDirty, setIsDirty] = useState(false)
const [isSaving, setIsSaving] = useState(false)

const autoSave = useCallback(async (data) => {
  if (!isDirty) return
  
  setIsSaving(true)
  try {
    await fetch('/api/assignments/draft', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    setLastSaved(new Date())
    setIsDirty(false)
  } catch (error) {
    console.error('Auto-save failed:', error)
  } finally {
    setIsSaving(false)
  }
}, [isDirty])

// Auto-save every 30 seconds
useEffect(() => {
  const interval = setInterval(() => {
    if (isDirty) {
      autoSave(formData)
    }
  }, 30000)
  
  return () => clearInterval(interval)
}, [formData, isDirty, autoSave])

const handleFieldChange = (field, value) => {
  setFormData(prev => ({ ...prev, [field]: value }))
  setIsDirty(true)
}

// Auto-save status indicator
<Flex gap="small" alignItems="center" margin="0 0 medium 0">
  {isSaving && (
    <>
      <Spinner size="x-small" />
      <Text size="small" color="secondary">Saving draft...</Text>
    </>
  )}
  {lastSaved && !isSaving && (
    <Text size="small" color="secondary">
      Last saved: {lastSaved.toLocaleTimeString()}
    </Text>
  )}
  {isDirty && !isSaving && (
    <Text size="small" color="warning">
      Unsaved changes
    </Text>
  )}
</Flex>
```

## Multi-step Forms and Wizards

### Step Management Pattern

**Multi-step Form with Progress Tracking**
```tsx
const [currentStep, setCurrentStep] = useState(1)
const [formData, setFormData] = useState({
  // Step 1: Basic Info
  title: '',
  description: '',
  
  // Step 2: Settings
  dueDate: '',
  points: '',
  
  // Step 3: Advanced Options
  allowLateSubmissions: false,
  groupAssignment: false
})
const [stepValidation, setStepValidation] = useState({})

const steps = [
  { id: 1, title: 'Basic Information', description: 'Assignment title and description' },
  { id: 2, title: 'Settings', description: 'Due date and grading options' },
  { id: 3, title: 'Advanced Options', description: 'Additional assignment settings' },
  { id: 4, title: 'Review', description: 'Review and submit assignment' }
]

const validateStep = (step) => {
  const errors = []
  
  switch (step) {
    case 1:
      if (!formData.title.trim()) errors.push('Title is required')
      break
    case 2:
      if (!formData.dueDate) errors.push('Due date is required')
      if (!formData.points) errors.push('Points are required')
      break
    case 3:
      // Advanced options validation
      break
  }
  
  return errors
}

const handleNext = () => {
  const errors = validateStep(currentStep)
  setStepValidation({ ...stepValidation, [currentStep]: errors })
  
  if (errors.length === 0) {
    setCurrentStep(prev => Math.min(prev + 1, steps.length))
  }
}

const handlePrevious = () => {
  setCurrentStep(prev => Math.max(prev - 1, 1))
}

<View as="main" maxWidth="1100px" margin="0 auto" padding="large">
  {/* Progress indicator */}
  <View margin="0 0 xx-large 0">
    <ProgressBar
      label="Form completion progress"
      valueMax={steps.length}
      valueNow={currentStep}
      formatDisplayedValue={(valueNow, valueMax) => 
        `Step ${valueNow} of ${valueMax}`
      }
      size="large"
      margin="0 0 medium 0"
    />
    
    {/* Step breadcrumb */}
    <Breadcrumb label="Form steps">
      {steps.map((step, index) => (
        <Breadcrumb.Link
          key={step.id}
          onClick={() => setCurrentStep(step.id)}
          disabled={index + 1 > currentStep}
        >
          {step.title}
        </Breadcrumb.Link>
      ))}
    </Breadcrumb>
  </View>

  {/* Step content */}
  <View as="div" borderRadius="medium" borderWidth="small" borderColor="secondary" padding="large">
    <View margin="0 0 large 0">
      <Heading level="h2">{steps[currentStep - 1].title}</Heading>
      <Text color="secondary">{steps[currentStep - 1].description}</Text>
    </View>

    {/* Step 1: Basic Information */}
    {currentStep === 1 && (
      <FormFieldGroup
        description="Assignment Details"
        layout="stacked"
        rowSpacing="medium"
        messages={stepValidation[1]?.map(error => ({ type: 'error', text: error }))}
      >
        <TextInput
          renderLabel="Assignment Title"
          value={formData.title}
          onChange={(e, value) => setFormData({...formData, title: value})}
          isRequired
        />
        <TextArea
          label="Assignment Description"
          value={formData.description}
          onChange={(e, value) => setFormData({...formData, description: value})}
          height="8rem"
        />
      </FormFieldGroup>
    )}

    {/* Step 2: Settings */}
    {currentStep === 2 && (
      <FormFieldGroup
        description="Assignment Configuration"
        layout="stacked"
        rowSpacing="medium"
        messages={stepValidation[2]?.map(error => ({ type: 'error', text: error }))}
      >
        <DateInput2
          renderLabel="Due Date"
          value={formData.dueDate}
          onChange={(e, value) => setFormData({...formData, dueDate: value})}
          isRequired
        />
        <NumberInput
          renderLabel="Points Possible"
          value={formData.points}
          onChange={(e, value) => setFormData({...formData, points: value})}
          isRequired
        />
      </FormFieldGroup>
    )}

    {/* Step 3: Advanced Options */}
    {currentStep === 3 && (
      <FormFieldGroup
        description="Additional Settings"
        layout="stacked"
        rowSpacing="medium"
      >
        <CheckboxGroup
          name="options"
          description="Assignment Options"
          layout="stacked"
        >
          <Checkbox
            label="Allow late submissions"
            value="late"
            variant="toggle"
            checked={formData.allowLateSubmissions}
            onChange={(e) => setFormData({
              ...formData, 
              allowLateSubmissions: e.target.checked
            })}
          />
          <Checkbox
            label="Group assignment"
            value="group"
            variant="toggle"
            checked={formData.groupAssignment}
            onChange={(e) => setFormData({
              ...formData, 
              groupAssignment: e.target.checked
            })}
          />
        </CheckboxGroup>
      </FormFieldGroup>
    )}

    {/* Step 4: Review */}
    {currentStep === 4 && (
      <View>
        <Heading level="h3" margin="0 0 medium 0">Review Assignment</Heading>
        <View as="div" borderRadius="medium" background="secondary" padding="medium">
          <Flex direction="column" gap="small">
            <Flex gap="medium">
              <Text weight="bold" width="8rem">Title:</Text>
              <Text>{formData.title}</Text>
            </Flex>
            <Flex gap="medium">
              <Text weight="bold" width="8rem">Description:</Text>
              <Text>{formData.description || 'No description provided'}</Text>
            </Flex>
            <Flex gap="medium">
              <Text weight="bold" width="8rem">Due Date:</Text>
              <Text>{formData.dueDate}</Text>
            </Flex>
            <Flex gap="medium">
              <Text weight="bold" width="8rem">Points:</Text>
              <Text>{formData.points}</Text>
            </Flex>
            <Flex gap="medium">
              <Text weight="bold" width="8rem">Options:</Text>
              <Flex direction="column" gap="xx-small">
                {formData.allowLateSubmissions && <Text>• Late submissions allowed</Text>}
                {formData.groupAssignment && <Text>• Group assignment</Text>}
                {!formData.allowLateSubmissions && !formData.groupAssignment && (
                  <Text color="secondary">No additional options selected</Text>
                )}
              </Flex>
            </Flex>
          </Flex>
        </View>
      </View>
    )}

    {/* Navigation buttons */}
    <Flex gap="buttons" justifyItems="space-between" margin="xx-large 0 0 0">
      <Button 
        color="secondary" 
        onClick={handlePrevious}
        interaction={currentStep === 1 ? 'disabled' : 'enabled'}
      >
        Previous
      </Button>
      
      <Flex gap="buttons">
        <Button color="secondary">Save Draft</Button>
        {currentStep < steps.length ? (
          <Button color="primary" onClick={handleNext}>
            Next
          </Button>
        ) : (
          <Button color="primary" type="submit">
            Create Assignment
          </Button>
        )}
      </Flex>
    </Flex>
  </View>
</View>
```

### Conditional Fields Pattern

**Dynamic Form Behavior Based on User Selections**
```tsx
const [assignmentType, setAssignmentType] = useState('')
const [gradingMethod, setGradingMethod] = useState('points')
const [enableRubric, setEnableRubric] = useState(false)
const [formData, setFormData] = useState({})

// Conditional field rendering based on assignment type
const renderAssignmentSpecificFields = () => {
  switch (assignmentType) {
    case 'quiz':
      return (
        <FormFieldGroup
          description="Quiz Settings"
          layout="stacked"
          rowSpacing="medium"
        >
          <NumberInput
            renderLabel="Time Limit (minutes)"
            value={formData.timeLimit}
            onChange={(e, value) => setFormData({...formData, timeLimit: value})}
          />
          <NumberInput
            renderLabel="Allowed Attempts"
            value={formData.attempts}
            onChange={(e, value) => setFormData({...formData, attempts: value})}
          />
          <CheckboxGroup
            name="quizOptions"
            description="Quiz Options"
            layout="stacked"
          >
            <Checkbox 
              label="Shuffle questions" 
              variant="toggle"
              value="shuffle"
            />
            <Checkbox 
              label="Show correct answers after submission" 
              variant="toggle"
              value="showAnswers"
            />
            <Checkbox 
              label="Allow multiple attempts" 
              variant="toggle"
              value="multipleAttempts"
            />
          </CheckboxGroup>
        </FormFieldGroup>
      )
    
    case 'discussion':
      return (
        <FormFieldGroup
          description="Discussion Settings"
          layout="stacked"
          rowSpacing="medium"
        >
          <CheckboxGroup
            name="discussionOptions"
            description="Discussion Options"
            layout="stacked"
          >
            <Checkbox 
              label="Require students to post before seeing replies" 
              variant="toggle"
              value="postFirst"
            />
            <Checkbox 
              label="Allow anonymous posting" 
              variant="toggle"
              value="anonymous"
            />
            <Checkbox 
              label="Enable podcast feed" 
              variant="toggle"
              value="podcast"
            />
          </CheckboxGroup>
        </FormFieldGroup>
      )
    
    case 'assignment':
      return (
        <FormFieldGroup
          description="Assignment Settings"
          layout="stacked"
          rowSpacing="medium"
        >
          <SimpleSelect
            renderLabel="Submission Type"
            value={formData.submissionType}
            onChange={(e, { value }) => setFormData({...formData, submissionType: value})}
          >
            <SimpleSelect.Option id="online" value="online_text_entry">
              Online Text Entry
            </SimpleSelect.Option>
            <SimpleSelect.Option id="upload" value="online_upload">
              File Upload
            </SimpleSelect.Option>
            <SimpleSelect.Option id="url" value="online_url">
              Website URL
            </SimpleSelect.Option>
            <SimpleSelect.Option id="media" value="media_recording">
              Media Recording
            </SimpleSelect.Option>
          </SimpleSelect>
          
          {formData.submissionType === 'online_upload' && (
            <TextInput
              renderLabel="Allowed file types"
              placeholder="e.g., pdf,doc,docx"
              value={formData.allowedExtensions}
              onChange={(e, value) => setFormData({...formData, allowedExtensions: value})}
            />
          )}
          
          <Checkbox
            label="Enable group assignment"
            variant="toggle"
            checked={formData.groupAssignment}
            onChange={(e) => setFormData({
              ...formData, 
              groupAssignment: e.target.checked
            })}
          />
          
          {formData.groupAssignment && (
            <NumberInput
              renderLabel="Maximum group size"
              value={formData.maxGroupSize}
              onChange={(e, value) => setFormData({...formData, maxGroupSize: value})}
              showArrows
            />
          )}
        </FormFieldGroup>
      )
    
    default:
      return null
  }
}

// Conditional grading fields
const renderGradingFields = () => {
  if (gradingMethod === 'rubric' || enableRubric) {
    return (
      <FormFieldGroup
        description="Rubric Settings"
        layout="stacked"
        rowSpacing="medium"
      >
        <SimpleSelect
          renderLabel="Select Rubric"
          value={formData.rubricId}
          onChange={(e, { value }) => setFormData({...formData, rubricId: value})}
        >
          <SimpleSelect.Option id="rubric1" value="1">
            Standard Essay Rubric
          </SimpleSelect.Option>
          <SimpleSelect.Option id="rubric2" value="2">
            Research Project Rubric
          </SimpleSelect.Option>
          <SimpleSelect.Option id="rubric3" value="3">
            Presentation Rubric
          </SimpleSelect.Option>
        </SimpleSelect>
        
        <CheckboxGroup
          name="rubricOptions"
          description="Rubric Options"
          layout="stacked"
        >
          <Checkbox 
            label="Hide rubric from students" 
            variant="toggle"
            value="hideRubric"
          />
          <Checkbox 
            label="Use rubric for grading" 
            variant="toggle"
            value="useForGrading"
          />
          <Checkbox 
            label="Hide points from students" 
            variant="toggle"
            value="hidePoints"
          />
        </CheckboxGroup>
      </FormFieldGroup>
    )
  }
  
  return (
    <FormFieldGroup
      description="Grading"
      layout="columns"
      colSpacing="medium"
    >
      <NumberInput
        renderLabel="Points Possible"
        value={formData.points}
        onChange={(e, value) => setFormData({...formData, points: value})}
        isRequired
      />
      <SimpleSelect
        renderLabel="Grading Type"
        value={gradingMethod}
        onChange={(e, { value }) => setGradingMethod(value)}
      >
        <SimpleSelect.Option id="points" value="points">Points</SimpleSelect.Option>
        <SimpleSelect.Option id="percent" value="percent">Percentage</SimpleSelect.Option>
        <SimpleSelect.Option id="letter" value="letter_grade">Letter Grade</SimpleSelect.Option>
        <SimpleSelect.Option id="gpa" value="gpa_scale">GPA Scale</SimpleSelect.Option>
        <SimpleSelect.Option id="pass_fail" value="pass_fail">Pass/Fail</SimpleSelect.Option>
        <SimpleSelect.Option id="not_graded" value="not_graded">Not Graded</SimpleSelect.Option>
      </SimpleSelect>
    </FormFieldGroup>
  )
}

// Main form with conditional rendering
<form>
  <FormFieldGroup
    description="Assignment Type"
    layout="stacked"
    rowSpacing="large"
  >
    <RadioInputGroup
      name="assignmentType"
      description="What type of assignment is this?"
      value={assignmentType}
      onChange={(e, value) => {
        setAssignmentType(value)
        setFormData({}) // Clear form data when type changes
      }}
      isRequired
    >
      <RadioInput label="Assignment" value="assignment" />
      <RadioInput label="Quiz" value="quiz" />
      <RadioInput label="Discussion" value="discussion" />
    </RadioInputGroup>

    {/* Basic fields always shown */}
    <TextInput
      renderLabel="Assignment Name"
      value={formData.name}
      onChange={(e, value) => setFormData({...formData, name: value})}
      isRequired
    />
    
    <TextArea
      label="Instructions"
      value={formData.instructions}
      onChange={(e, value) => setFormData({...formData, instructions: value})}
      height="6rem"
    />

    {/* Conditional fields based on assignment type */}
    {renderAssignmentSpecificFields()}

    {/* Grading section */}
    {renderGradingFields()}
    
    {/* Enable rubric option if not already using rubric grading */}
    {gradingMethod !== 'rubric' && (
      <Checkbox
        label="Use rubric for grading"
        variant="toggle"
        checked={enableRubric}
        onChange={(e) => setEnableRubric(e.target.checked)}
      />
    )}

    {/* Due dates section */}
    <FormFieldGroup
      description="Due Dates"
      layout="columns"
      colSpacing="medium"
    >
      <DateTimeInput
        description="Due Date"
        datePlaceholder="Select date"
        dateRenderLabel="Due Date"
        timeRenderLabel="Due Time"
        layout="stacked"
        value={formData.dueAt}
        onChange={(e, value) => setFormData({...formData, dueAt: value})}
      />
      
      <DateTimeInput
        description="Available From"
        datePlaceholder="Select date"
        dateRenderLabel="Available Date"
        timeRenderLabel="Available Time"
        layout="stacked"
        value={formData.unlockAt}
        onChange={(e, value) => setFormData({...formData, unlockAt: value})}
      />
      
      <DateTimeInput
        description="Available Until"
        datePlaceholder="Select date"
        dateRenderLabel="Lock Date"
        timeRenderLabel="Lock Time"
        layout="stacked"
        value={formData.lockAt}
        onChange={(e, value) => setFormData({...formData, lockAt: value})}
      />
    </FormFieldGroup>
  </FormFieldGroup>
  
  <Flex gap="buttons" justifyItems="end" margin="xx-large 0 0 0">
    <Button color="secondary">Cancel</Button>
    <Button color="secondary">Save & Publish Later</Button>
    <Button type="submit" color="primary">Save & Publish</Button>
  </Flex>
</form>
```

## Accessibility Implementation

### Screen Reader Support

**Proper Label Association and Descriptions**
```tsx
import { ScreenReaderContent } from '@instructure/ui-a11y-content'

// Explicit label association with describedBy
<View>
  <TextInput
    renderLabel="Course Name"
    value={courseName}
    onChange={handleCourseNameChange}
    describedBy="course-name-help"
    isRequired
    messages={courseNameMessages}
  />
  <Text id="course-name-help" size="small" color="secondary">
    This will be displayed to students in their course list
  </Text>
</View>

// Screen reader only content for context
<FormFieldGroup
  description={
    <View>
      <Heading level="h3">Student Information</Heading>
      <ScreenReaderContent>
        The following fields collect basic student information for enrollment
      </ScreenReaderContent>
    </View>
  }
  layout="stacked"
  rowSpacing="medium"
>
  <TextInput
    renderLabel="Student ID"
    value={studentId}
    onChange={handleStudentIdChange}
    isRequired
  />
  <TextInput
    renderLabel="Full Name"
    value={fullName}
    onChange={handleFullNameChange}
    isRequired
  />
</FormFieldGroup>

// Required field indicators
<TextInput
  renderLabel={
    <View>
      Email Address
      <ScreenReaderContent> (required)</ScreenReaderContent>
    </View>
  }
  value={email}
  onChange={handleEmailChange}
  isRequired
  type="email"
/>
```

**Error Announcements and Live Regions**
```tsx
import { Alert } from '@instructure/ui-alerts'

// Live region for dynamic error announcements
const [announcement, setAnnouncement] = useState('')

const handleValidationError = (fieldName, error) => {
  setAnnouncement(`${fieldName}: ${error}`)
  // Clear announcement after it's been read
  setTimeout(() => setAnnouncement(''), 1000)
}

<View>
  {/* Live region for screen reader announcements */}
  <Alert
    liveRegion={() => document.getElementById('sr-live-region')}
    liveRegionPoliteness="assertive"
    screenReaderOnly
  >
    {announcement}
  </Alert>
  
  {/* Hidden live region element */}
  <div id="sr-live-region" aria-live="assertive" aria-atomic="true" className="sr-only" />
  
  <TextInput
    renderLabel="Username"
    value={username}
    onChange={handleUsernameChange}
    onBlur={() => {
      const error = validateUsername(username)
      if (error) {
        handleValidationError('Username', error)
      }
    }}
    messages={usernameMessages}
  />
</View>

// Form submission feedback
const handleSubmit = async (e) => {
  e.preventDefault()
  setIsSubmitting(true)
  
  try {
    await submitForm(formData)
    setAnnouncement('Form submitted successfully')
  } catch (error) {
    setAnnouncement('Form submission failed. Please review errors and try again.')
  } finally {
    setIsSubmitting(false)
  }
}
```

### Keyboard Navigation

**Focus Management and Tab Order**
```tsx
import { useRef, useEffect } from 'react'

// Focus management for modal forms
const firstFieldRef = useRef(null)
const submitButtonRef = useRef(null)

useEffect(() => {
  if (isModalOpen && firstFieldRef.current) {
    firstFieldRef.current.focus()
  }
}, [isModalOpen])

const handleKeyDown = (e) => {
  // Custom keyboard shortcuts
  if (e.ctrlKey || e.metaKey) {
    switch (e.key) {
      case 's':
        e.preventDefault()
        handleSave()
        break
      case 'Enter':
        e.preventDefault()
        handleSubmit()
        break
    }
  }
  
  // Escape key handling
  if (e.key === 'Escape' && isModalOpen) {
    setIsModalOpen(false)
  }
}

<Modal
  open={isModalOpen}
  onDismiss={() => setIsModalOpen(false)}
  onKeyDown={handleKeyDown}
>
  <Modal.Body>
    <FormFieldGroup layout="stacked" rowSpacing="medium">
      <TextInput
        ref={firstFieldRef}
        renderLabel="Assignment Title"
        value={title}
        onChange={handleTitleChange}
        isRequired
      />
      
      <TextArea
        label="Description"
        value={description}
        onChange={handleDescriptionChange}
      />
      
      <DateInput2
        renderLabel="Due Date"
        value={dueDate}
        onChange={handleDueDateChange}
      />
    </FormFieldGroup>
  </Modal.Body>
  
  <Modal.Footer>
    <Flex gap="buttons">
      <Button onClick={() => setIsModalOpen(false)}>
        Cancel
      </Button>
      <Button
        ref={submitButtonRef}
        type="submit"
        color="primary"
        onClick={handleSubmit}
      >
        Save Assignment
      </Button>
    </Flex>
  </Modal.Footer>
</Modal>

// Skip navigation for long forms
<View>
  <Link href="#form-actions" size="small">
    Skip to form actions
  </Link>
  
  <FormFieldGroup layout="stacked" rowSpacing="medium">
    {/* Many form fields */}
  </FormFieldGroup>
  
  <View id="form-actions">
    <Flex gap="buttons" justifyItems="end">
      <Button color="secondary">Cancel</Button>
      <Button type="submit" color="primary">Submit</Button>
    </Flex>
  </View>
</View>
```

### Accessible Error Handling

**Comprehensive Error Communication**
```tsx
// Error summary component
const ErrorSummary = ({ errors, onErrorClick }) => {
  if (!errors || errors.length === 0) return null
  
  return (
    <Alert
      variant="error"
      margin="0 0 large 0"
      renderCloseButtonLabel="Close error summary"
    >
      <View>
        <Heading level="h4" margin="0 0 small 0">
          Please correct the following errors:
        </Heading>
        <List>
          {errors.map((error, index) => (
            <List.Item key={index}>
              <Link
                href={`#${error.fieldId}`}
                onClick={(e) => {
                  e.preventDefault()
                  onErrorClick(error.fieldId)
                }}
              >
                {error.fieldLabel}: {error.message}
              </Link>
            </List.Item>
          ))}
        </List>
      </View>
    </Alert>
  )
}

// Form with comprehensive error handling
const [formErrors, setFormErrors] = useState([])
const fieldRefs = useRef({})

const validateForm = () => {
  const errors = []
  
  if (!formData.title.trim()) {
    errors.push({
      fieldId: 'assignment-title',
      fieldLabel: 'Assignment Title',
      message: 'Title is required'
    })
  }
  
  if (!formData.dueDate) {
    errors.push({
      fieldId: 'due-date',
      fieldLabel: 'Due Date',
      message: 'Due date is required'
    })
  }
  
  if (formData.points && (formData.points < 0 || formData.points > 1000)) {
    errors.push({
      fieldId: 'points',
      fieldLabel: 'Points',
      message: 'Points must be between 0 and 1000'
    })
  }
  
  return errors
}

const handleErrorClick = (fieldId) => {
  const field = fieldRefs.current[fieldId]
  if (field) {
    field.focus()
  }
}

const handleSubmit = (e) => {
  e.preventDefault()
  
  const errors = validateForm()
  setFormErrors(errors)
  
  if (errors.length > 0) {
    // Focus first error field
    handleErrorClick(errors[0].fieldId)
    return
  }
  
  // Submit form
  submitForm(formData)
}

<form onSubmit={handleSubmit}>
  <ErrorSummary errors={formErrors} onErrorClick={handleErrorClick} />
  
  <FormFieldGroup layout="stacked" rowSpacing="medium">
    <TextInput
      id="assignment-title"
      ref={(ref) => fieldRefs.current['assignment-title'] = ref}
      renderLabel="Assignment Title"
      value={formData.title}
      onChange={handleTitleChange}
      messages={getFieldMessages('assignment-title', formErrors)}
      isRequired
    />
    
    <DateInput2
      id="due-date"
      ref={(ref) => fieldRefs.current['due-date'] = ref}
      renderLabel="Due Date"
      value={formData.dueDate}
      onChange={handleDueDateChange}
      messages={getFieldMessages('due-date', formErrors)}
      isRequired
    />
    
    <NumberInput
      id="points"
      ref={(ref) => fieldRefs.current['points'] = ref}
      renderLabel="Points Possible"
      value={formData.points}
      onChange={handlePointsChange}
      messages={getFieldMessages('points', formErrors)}
    />
  </FormFieldGroup>
  
  <Flex gap="buttons" justifyItems="end" margin="large 0 0 0">
    <Button type="submit" color="primary">
      Save Assignment
    </Button>
  </Flex>
</form>
```

## Canvas-Specific Form Patterns

### Grade Entry Forms

**Grade Passback and Gradebook Integration**
```tsx
const GradeEntryForm = ({ assignment, students, onGradeUpdate }) => {
  const [grades, setGrades] = useState({})
  const [comments, setComments] = useState({})
  const [isSaving, setIsSaving] = useState(false)

  const handleGradeChange = (studentId, grade) => {
    setGrades(prev => ({ ...prev, [studentId]: grade }))
  }

  const handleCommentChange = (studentId, comment) => {
    setComments(prev => ({ ...prev, [studentId]: comment }))
  }

  const validateGrade = (grade, maxPoints) => {
    const numGrade = parseFloat(grade)
    if (isNaN(numGrade)) return 'Please enter a valid number'
    if (numGrade < 0) return 'Grade cannot be negative'
    if (numGrade > maxPoints) return `Grade cannot exceed ${maxPoints} points`
    return null
  }

  return (
    <View as="div" borderRadius="medium" borderWidth="small" borderColor="secondary">
      <View as="div" background="secondary" padding="medium" borderRadius="medium medium 0 0">
        <Flex justifyItems="space-between" alignItems="center">
          <View>
            <Heading level="h2">{assignment.name}</Heading>
            <Text color="secondary">Total Points: {assignment.pointsPossible}</Text>
          </View>
          <Button
            color="primary"
            onClick={handleSaveAllGrades}
            interaction={isSaving ? 'disabled' : 'enabled'}
          >
            {isSaving ? 'Saving...' : 'Save All Grades'}
          </Button>
        </Flex>
      </View>

      <View padding="medium">
        <Table caption="Student grades for assignment">
          <Table.Head>
            <Table.Row>
              <Table.ColHeader id="student">Student</Table.ColHeader>
              <Table.ColHeader id="grade">Grade</Table.ColHeader>
              <Table.ColHeader id="comment">Comment</Table.ColHeader>
              <Table.ColHeader id="actions">Actions</Table.ColHeader>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            {students.map(student => (
              <Table.Row key={student.id}>
                <Table.RowHeader>
                  <View>
                    <Text weight="bold">{student.name}</Text>
                    <Text size="small" color="secondary">{student.email}</Text>
                  </View>
                </Table.RowHeader>
                <Table.Cell>
                  <NumberInput
                    renderLabel={<ScreenReaderContent>Grade for {student.name}</ScreenReaderContent>}
                    value={grades[student.id] || ''}
                    onChange={(e, value) => handleGradeChange(student.id, value)}
                    placeholder={`0-${assignment.pointsPossible}`}
                    width="6rem"
                    messages={(() => {
                      const error = validateGrade(grades[student.id], assignment.pointsPossible)
                      return error ? [{ type: 'error', text: error }] : []
                    })()}
                  />
                </Table.Cell>
                <Table.Cell>
                  <TextArea
                    label={<ScreenReaderContent>Comment for {student.name}</ScreenReaderContent>}
                    value={comments[student.id] || ''}
                    onChange={(e, value) => handleCommentChange(student.id, value)}
                    height="3rem"
                    resize="vertical"
                    placeholder="Add feedback..."
                  />
                </Table.Cell>
                <Table.Cell>
                  <Flex gap="small">
                    <Button
                      size="small"
                      color="secondary"
                      onClick={() => handleViewSubmission(student.id)}
                    >
                      View Submission
                    </Button>
                    <Button
                      size="small"
                      color="secondary"
                      onClick={() => handleSendMessage(student.id)}
                    >
                      Message
                    </Button>
                  </Flex>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </View>
    </View>
  )
}
```

### Assignment Creation Interface

**Complete Assignment Builder with All Options**
```tsx
const AssignmentCreationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    pointsPossible: '',
    dueAt: '',
    unlockAt: '',
    lockAt: '',
    assignmentGroupId: '',
    submissionTypes: [],
    allowedExtensions: '',
    peerReviews: false,
    groupCategoryId: '',
    gradingType: 'points',
    published: false
  })

  return (
    <View as="main" maxWidth="1100px" margin="0 auto" padding="large">
      <form onSubmit={handleSubmit}>
        <Flex direction="column" gap="sections">
          {/* Header */}
          <View>
            <Heading level="h1">Create Assignment</Heading>
            <Text color="secondary">
              Create a new assignment for your course. All fields marked with an asterisk (*) are required.
            </Text>
          </View>

          {/* Basic Information */}
          <View as="div" borderRadius="medium" borderWidth="small" borderColor="secondary" padding="large">
            <View margin="0 0 large 0">
              <Heading level="h2">Assignment Details</Heading>
              <Text color="secondary">Basic information about the assignment</Text>
            </View>

            <FormFieldGroup layout="stacked" rowSpacing="medium">
              <TextInput
                renderLabel="Assignment Name"
                value={formData.name}
                onChange={(e, value) => setFormData({...formData, name: value})}
                placeholder="Enter assignment name"
                isRequired
              />

              <View>
                <Text weight="bold" margin="0 0 small 0">Assignment Instructions</Text>
                <TextArea
                  label={<ScreenReaderContent>Assignment Instructions</ScreenReaderContent>}
                  value={formData.description}
                  onChange={(e, value) => setFormData({...formData, description: value})}
                  height="12rem"
                  placeholder="Provide detailed instructions for students..."
                />
                <Text size="small" color="secondary" margin="small 0 0 0">
                  Use the rich content editor to format text, add links, images, and media.
                </Text>
              </View>

              <Grid startAt="medium" colSpacing="medium">
                <Grid.Row>
                  <Grid.Col width={6}>
                    <NumberInput
                      renderLabel="Points"
                      value={formData.pointsPossible}
                      onChange={(e, value) => setFormData({...formData, pointsPossible: value})}
                      placeholder="Points possible"
                      showArrows
                      isRequired
                    />
                  </Grid.Col>
                  <Grid.Col width={6}>
                    <SimpleSelect
                      renderLabel="Assignment Group"
                      value={formData.assignmentGroupId}
                      onChange={(e, { value }) => setFormData({...formData, assignmentGroupId: value})}
                    >
                      <SimpleSelect.Option id="assignments" value="1">
                        Assignments
                      </SimpleSelect.Option>
                      <SimpleSelect.Option id="quizzes" value="2">
                        Quizzes
                      </SimpleSelect.Option>
                      <SimpleSelect.Option id="projects" value="3">
                        Projects
                      </SimpleSelect.Option>
                    </SimpleSelect>
                  </Grid.Col>
                </Grid.Row>
              </Grid>
            </FormFieldGroup>
          </View>

          {/* Submission Settings */}
          <View as="div" borderRadius="medium" borderWidth="small" borderColor="secondary" padding="large">
            <View margin="0 0 large 0">
              <Heading level="h2">Submission</Heading>
              <Text color="secondary">Configure how students will submit their work</Text>
            </View>

            <FormFieldGroup layout="stacked" rowSpacing="medium">
              <CheckboxGroup
                name="submissionTypes"
                description="Submission Types"
                layout="stacked"
                onChange={(value) => setFormData({...formData, submissionTypes: value})}
              >
                <Checkbox label="Online Text Entry" value="online_text_entry" />
                <Checkbox label="Website URL" value="online_url" />
                <Checkbox label="File Uploads" value="online_upload" />
                <Checkbox label="Media Recordings" value="media_recording" />
              </CheckboxGroup>

              {formData.submissionTypes.includes('online_upload') && (
                <TextInput
                  renderLabel="Allowed File Types"
                  value={formData.allowedExtensions}
                  onChange={(e, value) => setFormData({...formData, allowedExtensions: value})}
                  placeholder="e.g., pdf,doc,docx,jpg,png"
                />
              )}

              <CheckboxGroup
                name="submissionOptions"
                description="Submission Options"
                layout="stacked"
              >
                <Checkbox 
                  label="Require peer reviews" 
                  value="peer_reviews"
                  variant="toggle"
                  checked={formData.peerReviews}
                  onChange={(e) => setFormData({...formData, peerReviews: e.target.checked})}
                />
                <Checkbox 
                  label="Group assignment" 
                  value="group_assignment"
                  variant="toggle"
                />
                <Checkbox 
                  label="Plagiarism review" 
                  value="plagiarism_review"
                  variant="toggle"
                />
              </CheckboxGroup>
            </FormFieldGroup>
          </View>

          {/* Due Dates */}
          <View as="div" borderRadius="medium" borderWidth="small" borderColor="secondary" padding="large">
            <View margin="0 0 large 0">
              <Heading level="h2">Due Dates</Heading>
              <Text color="secondary">Set availability and due dates for the assignment</Text>
            </View>

            <Grid startAt="medium" colSpacing="medium" rowSpacing="medium">
              <Grid.Row>
                <Grid.Col width={4}>
                  <DateTimeInput
                    description="Due Date"
                    datePlaceholder="Select date"
                    dateRenderLabel="Due Date"
                    timeRenderLabel="Due Time"
                    layout="stacked"
                    value={formData.dueAt}
                    onChange={(e, value) => setFormData({...formData, dueAt: value})}
                    isRequired
                  />
                </Grid.Col>
                <Grid.Col width={4}>
                  <DateTimeInput
                    description="Available From"
                    datePlaceholder="Select date"
                    dateRenderLabel="Available Date"
                    timeRenderLabel="Available Time"
                    layout="stacked"
                    value={formData.unlockAt}
                    onChange={(e, value) => setFormData({...formData, unlockAt: value})}
                  />
                </Grid.Col>
                <Grid.Col width={4}>
                  <DateTimeInput
                    description="Available Until"
                    datePlaceholder="Select date"
                    dateRenderLabel="Lock Date"
                    timeRenderLabel="Lock Time"
                    layout="stacked"
                    value={formData.lockAt}
                    onChange={(e, value) => setFormData({...formData, lockAt: value})}
                  />
                </Grid.Col>
              </Grid.Row>
            </Grid>

            <Alert variant="info" margin="medium 0 0 0">
              <Text>
                <strong>Note:</strong> All times are displayed in your local timezone. 
                Students will see dates and times in their own timezone.
              </Text>
            </Alert>
          </View>

          {/* Actions */}
          <Flex gap="buttons" justifyItems="space-between">
            <Button color="secondary" href="/courses/1/assignments">
              Cancel
            </Button>
            
            <Flex gap="buttons">
              <Button 
                color="secondary"
                onClick={() => setFormData({...formData, published: false})}
                type="submit"
              >
                Save as Draft
              </Button>
              <Button 
                color="primary"
                onClick={() => setFormData({...formData, published: true})}
                type="submit"
              >
                Save & Publish
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </form>
    </View>
  )
}
```

## Implementation Notes

### Key InstUI Form Component Considerations

1. **Component Naming**: InstUI uses unique naming conventions:
   - Use `primary-inverse` instead of "ghost" for buttons
   - Use `newError` message type for the latest error styling
   - Use proper InstUI color variants only

2. **Layout Requirements**:
   - All card-like elements must use `borderRadius="medium"`
   - Never apply margins to Text/Heading components - use Flex gaps or View wrappers
   - Use semantic spacing tokens (`sectionElements`, `moduleElements`, etc.)

3. **Form Field Integration**:
   - Use `isRequired` prop instead of HTML `required` attribute
   - Use `messages` prop for validation feedback
   - Use `interaction` prop for disabled/readonly states
   - Provide `renderLabel` or `label` for all form fields

4. **Accessibility Requirements**:
   - All IconButtons require `screenReaderLabel`
   - Use `ScreenReaderContent` for hidden context
   - Provide `describedBy` for complex field relationships
   - Use proper ARIA labeling for form groups

5. **Validation Patterns**:
   - Real-time validation for immediate feedback
   - On-blur validation for comprehensive checks
   - Form submission validation as final gate
   - Clear, actionable error messages

This design specification provides the foundation for implementing comprehensive, accessible, and Canvas-appropriate form patterns using InstUI components. The patterns follow educational platform conventions while maintaining strict adherence to InstUI design principles and accessibility standards.