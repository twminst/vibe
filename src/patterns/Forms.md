# Form Components

## Reference

- **TextInput props** - Standard text input fields - `node_modules/@instructure/ui-text-input/lib/TextInput/props.js`
- **TextArea props** - Multi-line text inputs - `node_modules/@instructure/ui-text-area/lib/TextArea/props.js`
- **SimpleSelect props** - Dropdown selection components - `node_modules/@instructure/ui-simple-select/lib/SimpleSelect/props.js`
- **Checkbox props** - Checkbox input components - `node_modules/@instructure/ui-checkbox/lib/Checkbox/props.js`
- **RadioInput props** - Radio button components - `node_modules/@instructure/ui-radio-input/lib/RadioInput/props.js`
- **NumberInput props** - Numeric input fields - `node_modules/@instructure/ui-number-input/lib/NumberInput/props.js`
- **FormField props** - Form field wrapper and layout - `node_modules/@instructure/ui-form-field/lib/FormField/props.js`

## Core Principles

**Choose form components based on data type and user interaction patterns.** Each component serves a specific purpose in collecting and validating user input while maintaining accessibility and usability standards.

**Form validation should be layered** with real-time feedback, on-blur validation, and form-level submission checks to provide the best user experience.

**Accessibility must be built-in** from the start, with proper labeling, error announcements, and keyboard navigation support for all form components.

## Basic Text Inputs

**TextInput handles single-line text entry** with comprehensive validation and accessibility features:

**Input Types**:
- `type="text"` - Standard text input for names, titles, general text
- `type="email"` - Email address input with built-in validation hints
- `type="password"` - Password input with masked characters
- `type="url"` - URL input with validation support
- `type="search"` - Search input with clear functionality

**Size Variants**:
- `size="small"` - Compact inputs for dense layouts
- `size="medium"` - Default size for most use cases
- `size="large"` - Emphasized inputs for primary fields

**State Management**:
- `value` and `onChange` - Controlled component pattern
- `onBlur` - Trigger validation when field loses focus
- `interaction="disabled"` - Disabled state for readonly forms
- `readOnly` - Read-only state for display-only fields

```tsx
// ✓ Correct - Basic text input with validation
<FormField id="fullName" label="Full Name" required>
  <TextInput
    renderLabel=""
    placeholder="Enter your full name"
    value={formData.fullName}
    onChange={(e, value) => handleInputChange('fullName', value)}
    onBlur={(e) => handleBlur('fullName', e.target.value)}
    messages={errors.fullName ? [{ text: errors.fullName, type: 'error' }] : undefined}
  />
</FormField>

// ✓ Correct - Email input with icon
<FormField id="email" label="Email Address" required>
  <TextInput
    renderLabel=""
    type="email"
    placeholder="name@example.com"
    value={formData.email}
    onChange={(e, value) => handleInputChange('email', value)}
    renderBeforeInput={<IconEmailLine />}
    messages={errors.email ? [{ text: errors.email, type: 'error' }] : undefined}
  />
</FormField>

// ✘ Wrong - Missing FormField wrapper
<TextInput label="Name" value={name} onChange={handleChange} />
```

## Multi-line Text Input

**TextArea provides expandable text input** for longer content with automatic resizing:

**Resize Options**:
- `resize="vertical"` - Allow vertical resizing only
- `resize="horizontal"` - Allow horizontal resizing only  
- `resize="both"` - Allow both directions (default)
- `resize="none"` - Disable manual resizing

**Height Controls**:
- `maxHeight="200px"` - Limit maximum height
- `minHeight="80px"` - Set minimum height
- Auto-resize based on content

```tsx
// ✓ Correct - Text area with proper configuration
<FormField id="description" label="Course Description">
  <TextArea
    label=""
    placeholder="Enter a detailed description of the course content and objectives..."
    value={formData.description}
    onChange={(e, value) => handleInputChange('description', value)}
    resize="vertical"
    maxHeight="200px"
  />
</FormField>

// ✓ Correct - Required text area with character limit feedback
<FormField id="feedback" label="Feedback" required>
  <TextArea
    label=""
    value={formData.feedback}
    onChange={(e, value) => handleInputChange('feedback', value)}
    messages={[
      { text: `${formData.feedback.length}/500 characters`, type: 'hint' }
    ]}
  />
</FormField>
```

## Selection Components

**SimpleSelect provides dropdown selection** for single-choice scenarios:

**Option Configuration**:
- Basic text options with `SimpleSelect.Option`
- Custom option rendering with `renderBeforeLabel`
- Grouped options for organized selections
- Placeholder text for initial state

```tsx
// ✓ Correct - Basic dropdown selection
<FormField id="country" label="Country" required>
  <SimpleSelect
    renderLabel=""
    value={formData.country}
    onChange={(e, { value }) => handleInputChange('country', value || '')}
    placeholder="Select your country"
  >
    <SimpleSelect.Option id="us" value="us">United States</SimpleSelect.Option>
    <SimpleSelect.Option id="ca" value="ca">Canada</SimpleSelect.Option>
    <SimpleSelect.Option id="uk" value="uk">United Kingdom</SimpleSelect.Option>
  </SimpleSelect>
</FormField>

// ✓ Correct - Select with custom option icons
<SimpleSelect renderLabel="Course Status" placeholder="Select status">
  <SimpleSelect.Option 
    id="published" 
    value="published"
    renderBeforeLabel={<IconPublishSolid color="success" />}
  >
    Published
  </SimpleSelect.Option>
  <SimpleSelect.Option 
    id="draft" 
    value="draft"
    renderBeforeLabel={<IconUnpublishedLine color="primary" />}
  >
    Draft
  </SimpleSelect.Option>
</SimpleSelect>
```

## Choice Components

**Checkbox components handle boolean and multi-select scenarios**:

**Individual Checkboxes**:
- Single boolean choices
- Terms acceptance
- Feature toggles
- Optional settings

**RadioInputGroup for exclusive choices**:
- Single selection from multiple options
- Layout variants (stacked, inline)
- Group-level validation

```tsx
// ✓ Correct - Individual checkbox
<Checkbox
  label="Send me email notifications about course updates"
  checked={formData.notifications}
  onChange={(e) => handleInputChange('notifications', e.target.checked)}
/>

// ✓ Correct - Radio button group
<FormField id="contactMethod" label="Preferred Contact Method">
  <RadioInputGroup
    name="contactMethod"
    description=""
    value={formData.contactMethod}
    onChange={(e, value) => handleInputChange('contactMethod', value)}
  >
    <RadioInput label="Email" value="email" />
    <RadioInput label="Phone" value="phone" />
    <RadioInput label="Text Message" value="text" />
  </RadioInputGroup>
</FormField>
```

## Numeric Input

**NumberInput provides validated numeric entry** with increment controls:

**Configuration Options**:
- `showArrows={false}` - Hide increment/decrement arrows
- Min/max value constraints
- Step increment controls
- Currency and unit formatting

```tsx
// ✓ Correct - Numeric input with validation
<FormField id="age" label="Age">
  <NumberInput
    renderLabel=""
    placeholder="Enter age"
    value={formData.age}
    onChange={(e, value) => handleInputChange('age', value)}
    onBlur={(e) => handleBlur('age', e.target.value)}
    messages={errors.age ? [{ text: errors.age, type: 'error' }] : undefined}
    showArrows={false}
  />
</FormField>

// ✓ Correct - Currency input with constraints
<NumberInput
  renderLabel="Course Price"
  value={price}
  onChange={(e, value) => setPrice(value)}
  min={0}
  max={10000}
  step={0.01}
  format="currency"
/>
```

## Form Validation Patterns

**Validation should be layered and user-friendly** with clear error messages and recovery paths:

**Validation Types**:
- **Real-time**: Validate as user types (use sparingly)
- **On-blur**: Validate when field loses focus (recommended)
- **Form-level**: Validate entire form on submission
- **Async**: Server-side validation for uniqueness checks

**Message Types**:
- `type: 'error'` - Validation errors requiring correction
- `type: 'success'` - Positive feedback for valid input
- `type: 'hint'` - Helpful information and guidance
- `type: 'screenreader-only'` - Additional context for screen readers

```tsx
// ✓ Correct - Comprehensive validation pattern
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
  }
  
  return newErrors
}

// ✓ Correct - Form submission with loading state
<Button 
  color="primary" 
  onClick={handleSubmit}
  interaction={formData.isLoading ? 'disabled' : 'enabled'}
  renderIcon={formData.isLoading ? <Spinner size="x-small" /> : undefined}
>
  {formData.isLoading ? 'Submitting...' : 'Submit Form'}
</Button>
```

## Form Layout and Structure

**FormField provides consistent layout and labeling** for all form components:

**Label Positioning**:
- Default top positioning for most layouts
- Required field indicators with asterisk
- Help text association with `describedby`
- Proper error message display

**Layout Patterns**:
- Grid-based layouts for multi-column forms
- Flex layouts for button groups and inline elements
- Responsive breakpoints for mobile adaptation

```tsx
// ✓ Correct - Grid layout for form fields
<Grid startAt="medium" vAlign="top" colSpacing="medium">
  <Grid.Row>
    <Grid.Col width={6}>
      <FormField id="firstName" label="First Name" required>
        <TextInput
          renderLabel=""
          value={formData.firstName}
          onChange={(e, value) => handleInputChange('firstName', value)}
        />
      </FormField>
    </Grid.Col>
    <Grid.Col width={6}>
      <FormField id="lastName" label="Last Name" required>
        <TextInput
          renderLabel=""
          value={formData.lastName}
          onChange={(e, value) => handleInputChange('lastName', value)}
        />
      </FormField>
    </Grid.Col>
  </Grid.Row>
</Grid>

// ✓ Correct - Button group layout
<Flex gap="moduleElements" wrap="wrap">
  <Button color="primary" onClick={handleSubmit}>
    Submit Form
  </Button>
  <Button color="secondary" onClick={handleCancel}>
    Cancel
  </Button>
  <Button color="secondary" renderIcon={<IconAddLine />}>
    Add Field
  </Button>
</Flex>
```

## Accessibility Considerations

**Form accessibility is essential** for inclusive user experiences:

**Required Elements**:
- Proper label association with `FormField`
- Error message announcements via `messages` prop
- Required field indicators
- Keyboard navigation support

**Screen Reader Support**:
- Clear field purposes and instructions
- Error descriptions and recovery guidance
- Form progress and submission feedback
- Proper focus management

```tsx
// ✓ Correct - Accessible form field
<FormField 
  id="courseTitle" 
  label="Course Title" 
  required
  messages={[
    { text: 'Choose a descriptive title for your course', type: 'hint' },
    ...(errors.courseTitle ? [{ text: errors.courseTitle, type: 'error' }] : [])
  ]}
>
  <TextInput
    renderLabel=""
    value={formData.courseTitle}
    onChange={(e, value) => handleInputChange('courseTitle', value)}
    onBlur={(e) => handleBlur('courseTitle', e.target.value)}
  />
</FormField>

// ✓ Correct - Form-level success feedback
{!formData.isLoading && formData.basicText && formData.email && (
  <Alert variant="success" margin="moduleElements 0 0 0">
    <Text>Form validation successful! All required fields are completed.</Text>
  </Alert>
)}
```

## Canvas/Educational Context

**Forms in educational platforms require special considerations**:

**Common Use Cases**:
- Course creation and configuration
- Assignment submission interfaces
- Grade entry and feedback forms
- Student information management
- Discussion and collaboration tools

**Educational-Specific Patterns**:
- Date/time inputs for assignment deadlines
- File upload for assignment submissions
- Rich text areas for course descriptions
- Bulk operations for grade entry
- Multi-step wizards for complex workflows

## Best Practices Summary

**Always**:
- Wrap form inputs with `FormField` for proper layout and accessibility
- Use semantic input types (`email`, `password`, `url`) for better UX
- Implement progressive validation (on-blur preferred over real-time)
- Provide clear error messages with recovery guidance
- Use loading states during form submission
- Test with keyboard navigation and screen readers

**Never**:
- Use form components without proper labels and accessibility
- Validate aggressively while users are typing (except for real-time requirements)
- Disable form submission buttons without clear feedback
- Use generic error messages that don't help users fix issues
- Forget to handle loading and error states properly

**Remember**: Forms are the primary interface between users and your application - invest in making them accessible, usable, and reliable for all users.

## Component Reference

### Input Types
- **`text`** - General text input for names, titles, descriptions
- **`email`** - Email address input with validation hints
- **`password`** - Masked password input
- **`url`** - URL input with validation support
- **`search`** - Search input with clear functionality

### Size Variants
- **`small`** - Compact inputs for dense layouts
- **`medium`** - Default size for most use cases (recommended)
- **`large`** - Emphasized inputs for primary fields

### Message Types
- **`error`** - Validation errors requiring user correction
- **`success`** - Positive feedback for valid input
- **`hint`** - Helpful information and guidance text
- **`screenreader-only`** - Additional context for assistive technology

### State Options
- **`enabled`** - Default interactive state
- **`disabled`** - Non-interactive state for readonly forms
- **`readonly`** - Display-only state with visible content
- **`required`** - Indicates mandatory field completion