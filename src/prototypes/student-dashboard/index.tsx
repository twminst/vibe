import { 
  View, 
  Heading, 
  Text, 
  Grid,
  Flex,
  Button,
  ProgressBar,
  Responsive
} from '@instructure/ui'
import { IconAssignmentLine, IconQuizLine, IconDiscussionLine, IconGradebookLine } from '@instructure/ui-icons'

export default function StudentDashboard() {
  const courses = [
    {
      id: 1,
      name: "Introduction to Psychology",
      code: "PSY 101",
      grade: "A-",
      progress: 85,
      assignments: 3,
      color: "info"
    },
    {
      id: 2,
      name: "Calculus I",
      code: "MATH 151",
      grade: "B+",
      progress: 78,
      assignments: 2,
      color: "success"
    },
    {
      id: 3,
      name: "English Composition",
      code: "ENG 110",
      grade: "A",
      progress: 92,
      assignments: 1,
      color: "success"
    }
  ]

  const upcomingTasks = [
    {
      id: 1,
      title: "Psychology Essay",
      course: "PSY 101",
      type: "assignment",
      dueDate: "Today",
      urgent: true
    },
    {
      id: 2,
      title: "Calculus Quiz 3",
      course: "MATH 151",
      type: "quiz",
      dueDate: "Tomorrow",
      urgent: false
    },
    {
      id: 3,
      title: "Discussion Post",
      course: "ENG 110",
      type: "discussion",
      dueDate: "Friday",
      urgent: false
    }
  ]

  const getTaskIcon = (type: string) => {
    switch (type) {
      case 'assignment': return IconAssignmentLine
      case 'quiz': return IconQuizLine
      case 'discussion': return IconDiscussionLine
      default: return IconAssignmentLine
    }
  }

  return (
    <Responsive
      query={{
        small: { maxWidth: '767px' },
        large: { minWidth: '768px' }
      }}
      props={{
        small: { padding: 'medium', headingVariant: 'titlePageMobile' },
        large: { padding: 'large', headingVariant: 'titlePageDesktop' }
      }}
    >
      {(props) => {
        const { headingVariant, ...viewProps } = props as any
        return (
          <View as="div" {...viewProps}>
            <View as="div" margin="0 0 large 0">
              <Flex gap="moduleElements" alignItems="center">
                <Heading level="h1" variant={headingVariant}>
                  Student Dashboard
                </Heading>
              </Flex>
              <Text variant="descriptionPage">
                Stay on top of your coursework and track your academic progress
              </Text>
            </View>

      <Grid>
        <Grid.Row>
          <Grid.Col width={{small: 12, medium: 12, large: 8}}>
            <View as="div" background="secondary" padding="medium" borderRadius="medium" margin="0 0 medium 0">
              <Flex justifyItems="space-between" alignItems="center" margin="0 0 sectionElements 0">
                <Heading level="h2" variant="titleModule">
                  Upcoming Tasks
                </Heading>
                <Text variant="contentSmall" color="secondary">({upcomingTasks.length})</Text>
              </Flex>

              <View as="div" width="100%">
                {upcomingTasks.map((task) => (
                  <View 
                    key={task.id} 
                    as="div" 
                    background="primary" 
                    padding="medium" 
                    borderRadius="medium"
                    borderWidth="small"
                    margin="0 0 moduleElements 0"
                    display="block"
                    width="100%"
                  >
                    <Flex justifyItems="space-between" alignItems="center" width="100%">
                      <Flex gap="moduleElements" alignItems="center">
                        {(() => {
                          const IconComponent = getTaskIcon(task.type)
                          return <IconComponent size="x-small" />
                        })()}
                        <Flex direction="column">
                          <Text color="brand">
                            {task.title}
                          </Text>
                          <Text variant="contentSmall" color="secondary">
                            {task.course}
                          </Text>
                        </Flex>
                      </Flex>
                      <Flex gap="moduleElements" alignItems="center">
                        {task.urgent && (
                          <Text variant="contentSmall" color="danger">Due Today</Text>
                        )}
                        <Text variant="contentSmall" color="secondary">
                          {task.dueDate}
                        </Text>
                        <Button size="small" color="primary">
                          View
                        </Button>
                      </Flex>
                    </Flex>
                  </View>
                ))}
              </View>
            </View>

            <View as="div" background="secondary" padding="medium" borderRadius="medium">
              <View as="div" margin="0 0 sectionElements 0">
                <Heading level="h2" variant="titleModule">
                  Course Progress
                </Heading>
              </View>
              
              <Flex direction="column" gap="moduleElements">
                {courses.map((course) => (
                  <View key={course.id} as="div" background="primary" padding="small" borderRadius="medium">
                    <Flex justifyItems="space-between" alignItems="center" margin="0 0 moduleElements 0">
                      <Flex direction="column">
                        <Text variant="contentImportant">{course.name}</Text>
                        <Text variant="contentSmall" color="secondary">{course.code}</Text>
                      </Flex>
                        <Text variant="contentSmall" color="secondary">{course.assignments} pending</Text>
                    </Flex>
                    
                    <Flex alignItems="center" gap="moduleElements">
                      <View as="div" width="100%">
                        <ProgressBar 
                          screenReaderLabel={`${course.name} progress`}
                          valueNow={course.progress}
                          valueMax={100}
                        />
                      </View>
                      <Text variant="contentSmall" color="secondary">
                        {course.progress}%
                      </Text>
                    </Flex>
                  </View>
                ))}
              </Flex>
            </View>
          </Grid.Col>

          <Grid.Col width={{small: 12, medium: 12, large: 4}}>
            <View as="div" background="secondary" padding="medium" borderRadius="medium" margin="0 0 medium 0">
              <View as="div" margin="0 0 sectionElements 0">
                <Heading level="h2" variant="titleModule" renderIcon={IconGradebookLine}>
                  Recent Grades
                </Heading>
              </View>
              
              <Flex direction="column" gap="moduleElements">
                {courses.map((course) => (
                  <View key={course.id} as="div" background="primary" padding="small" borderRadius="medium">
                    <Flex justifyItems="space-between" alignItems="center">
                      <Flex direction="column">
                        <Text variant="content">{course.code}</Text>
                        <Text variant="contentSmall" color="secondary">{course.name}</Text>
                      </Flex>
                      <Text variant="contentImportant" color="success">
                        {course.grade}
                      </Text>
                    </Flex>
                  </View>
                ))}
              </Flex>
            </View>

            <View as="div" background="secondary" padding="medium" borderRadius="medium">
              <View as="div" margin="0 0 sectionElements 0">
                <Heading level="h2" variant="titleModule">
                  Quick Actions
                </Heading>
              </View>
              
              <Flex direction="column" gap="buttons">
                <Button color="primary" width="100%">
                  View All Assignments
                </Button>
                <Button color="secondary" width="100%">
                  Check Grades
                </Button>
                <Button color="secondary" width="100%">
                  Course Calendar
                </Button>
              </Flex>
            </View>
          </Grid.Col>
        </Grid.Row>
      </Grid>
          </View>
        )
      }}
    </Responsive>
  )
}