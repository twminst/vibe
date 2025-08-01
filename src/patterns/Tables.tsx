import { View, Heading, Text, Flex, Responsive } from '@instructure/ui'
import { Table } from '@instructure/ui-table'
import { Checkbox } from '@instructure/ui-checkbox'
import { Alert } from '@instructure/ui-alerts'
import { Pagination } from '@instructure/ui-pagination'
import { ScreenReaderContent } from '@instructure/ui-a11y-content'
import { 
  IconPublishSolid,
  IconUnpublishedLine,
  IconCalendarReservedLine
} from '@instructure/ui-icons'
import { useState, useCallback, useMemo } from 'react'
import React from 'react'

// Assignment Data Interface
interface AssignmentData {
  id: string
  title: string
  course: string
  dueDate: string
  points: number
  status: 'Published' | 'Concluded' | 'Unpublished'
  submissions: number
}

// Generate comprehensive assignment dataset
const generateAssignmentData = (): AssignmentData[] => {
  const courses = ['English 100', 'Math 101', 'Physics 201', 'Chemistry 150', 'Biology 120', 'History 105', 'Art 110', 'Music 115']
  const statuses: ('Published' | 'Concluded' | 'Unpublished')[] = ['Published', 'Concluded', 'Unpublished']
  const assignmentTypes = ['Essay', 'Quiz', 'Lab Report', 'Project', 'Discussion', 'Exam', 'Presentation', 'Homework']
  
  return Array.from({ length: 50 }, (_, i) => {
    const course = courses[i % courses.length]
    const type = assignmentTypes[i % assignmentTypes.length]
    const status = statuses[i % statuses.length]
    const baseDate = new Date(2024, 0, 1)
    const dueDate = new Date(baseDate.getTime() + (i * 7 * 24 * 60 * 60 * 1000))
    
    return {
      id: `assignment-${i + 1}`,
      title: `${type} ${i + 1}: ${course.split(' ')[0]} Assignment`,
      course,
      dueDate: dueDate.toISOString().split('T')[0],
      points: Math.floor(Math.random() * 100) + 10,
      status,
      submissions: Math.floor(Math.random() * 35) + 5
    }
  })
}

function ComprehensiveTable() {
  const assignmentData = generateAssignmentData()
  const [sortBy, setSortBy] = useState<keyof AssignmentData>('title')
  const [ascending, setAscending] = useState(true)
  const [selectedRows, setSelectedRows] = useState<Set<string>>(new Set())
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 15

  const direction = ascending ? 'ascending' : 'descending'

  // Sort data
  const sortedData = useMemo(() => {
    return [...assignmentData].sort((a, b) => {
      const aVal = a[sortBy]
      const bVal = b[sortBy]
      
      if (typeof aVal === 'string' && typeof bVal === 'string') {
        return ascending ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal)
      }
      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return ascending ? aVal - bVal : bVal - aVal
      }
      return 0
    })
  }, [assignmentData, sortBy, ascending])

  // Paginate data
  const startIndex = (currentPage - 1) * pageSize
  const paginatedData = sortedData.slice(startIndex, startIndex + pageSize)
  const totalPages = Math.ceil(sortedData.length / pageSize)

  const handleSort = useCallback((_event: React.SyntheticEvent, { id }: { id: string }) => {
    const sortKey = id as keyof AssignmentData
    if (sortKey === sortBy) {
      setAscending(!ascending)
    } else {
      setSortBy(sortKey)
      setAscending(true)
    }
  }, [sortBy, ascending])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  // Row selection handlers
  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedRows(new Set())
    } else {
      setSelectedRows(new Set(paginatedData.map(row => row.id)))
    }
  }

  const handleRowSelect = (rowId: string) => {
    const newSelection = new Set(selectedRows)
    if (newSelection.has(rowId)) {
      newSelection.delete(rowId)
    } else {
      newSelection.add(rowId)
    }
    setSelectedRows(newSelection)
  }

  const isAllSelected = paginatedData.length > 0 && paginatedData.every(row => selectedRows.has(row.id))
  const isSomeSelected = selectedRows.size > 0 && !isAllSelected

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
        const { headingVariant, ...viewProps } = props as { headingVariant: 'titlePageDesktop' | 'titlePageMobile'; padding: string }
        return (
          <View as="div" maxWidth="1100px" margin="0 auto" {...viewProps}>
            <div id="flash-messages" role="alert" aria-live="polite" aria-atomic="true" style={{ position: 'absolute', left: '-10000px' }} />
            
            {/* PAGE HEADER */}
            <View as="header" margin="0 0 sections 0">
              <Heading level="h1" variant={headingVariant}>
                Tables
              </Heading>
              <Text variant="descriptionPage">
                Comprehensive table implementation with sorting, selection, and responsive design
              </Text>
            </View>

            {/* SELECTION INDICATOR */}
            {selectedRows.size > 0 && (
              <View as="div" background="primary-inverse" padding="paddingCardSmall" margin="0 0 sections 0" borderRadius="medium">
                <Text size="small" color="primary-inverse">
                  {selectedRows.size} of {assignmentData.length} assignments selected
                </Text>
              </View>
            )}

            {/* COMPREHENSIVE TABLE SECTION */}
            <View as="section" margin="0 0 sections 0">
              <View as="header" margin="0 0 sectionElements 0">
                <Heading level="h2" variant="titleSection">
                  Comprehensive Assignment Table
                </Heading>
                <Text variant="descriptionSection">
                  Interactive table combining sorting, row selection, and pagination with responsive design
                </Text>
              </View>

              <View as="div" background="primary" padding="paddingCardMedium" borderRadius="medium" borderWidth="small" borderColor="secondary" shadow="resting">
                <Responsive
                  query={{ small: { maxWidth: '40rem' }, large: { minWidth: '41rem' } }}
                  props={{ small: { layout: 'stacked' }, large: { layout: 'auto' } }}
                >
                  {(responsiveProps) => {
                    const { layout, ...props } = responsiveProps as { layout: 'auto' | 'stacked' | 'fixed'; [key: string]: unknown }
                    return (
                      <Table caption={`Comprehensive assignment list: sorted by ${sortBy} in ${direction} order`} layout={layout} {...props} >
                        <Table.Head renderSortLabel={<ScreenReaderContent>Sort by</ScreenReaderContent>} >
                          <Table.Row>
                            <Table.ColHeader id="select-all" width="60px" textAlign="center">
                              <Checkbox label={<ScreenReaderContent>Select all assignments</ScreenReaderContent>} checked={isAllSelected} indeterminate={isSomeSelected} onChange={handleSelectAll} />
                            </Table.ColHeader>
                            <Table.ColHeader id="title" width="30%" textAlign="start" onRequestSort={handleSort} sortDirection={sortBy === 'title' ? direction : 'none'}>
                              Title
                            </Table.ColHeader>
                            <Table.ColHeader id="course" width="20%" textAlign="start" onRequestSort={handleSort} sortDirection={sortBy === 'course' ? direction : 'none'}>
                              Course
                            </Table.ColHeader>
                            <Table.ColHeader id="dueDate" width="15%" textAlign="start" onRequestSort={handleSort} sortDirection={sortBy === 'dueDate' ? direction : 'none'}>
                              Due Date
                            </Table.ColHeader>
                            <Table.ColHeader id="points" width="10%" textAlign="center" onRequestSort={handleSort} sortDirection={sortBy === 'points' ? direction : 'none'}>
                              Points
                            </Table.ColHeader>
                            <Table.ColHeader id="status" width="15%" textAlign="center" onRequestSort={handleSort} sortDirection={sortBy === 'status' ? direction : 'none'}>
                              Status
                            </Table.ColHeader>
                            <Table.ColHeader id="submissions" width="10%" textAlign="center" onRequestSort={handleSort} sortDirection={sortBy === 'submissions' ? direction : 'none'}>
                              Submissions
                            </Table.ColHeader>
                          </Table.Row>
                        </Table.Head>
                        <Table.Body>
                          {paginatedData.map((assignment) => (
                            <Table.Row key={assignment.id}>
                              <Table.RowHeader>
                                <Checkbox 
                                  label={<ScreenReaderContent>Select {assignment.title}</ScreenReaderContent>}
                                  checked={selectedRows.has(assignment.id)}
                                  onChange={() => handleRowSelect(assignment.id)}
                                />
                              </Table.RowHeader>
                              <Table.Cell textAlign={layout === 'stacked' ? 'start' : 'start'}>
                                <Text weight="bold">{assignment.title}</Text>
                              </Table.Cell>
                              <Table.Cell textAlign={layout === 'stacked' ? 'start' : 'start'}>
                                <Text>{assignment.course}</Text>
                              </Table.Cell>
                              <Table.Cell textAlign={layout === 'stacked' ? 'start' : 'start'}>
                                <Text>{assignment.dueDate}</Text>
                              </Table.Cell>
                              <Table.Cell textAlign={layout === 'stacked' ? 'start' : 'center'}>
                                <Text>{assignment.points}</Text>
                              </Table.Cell>
                              <Table.Cell textAlign={layout === 'stacked' ? 'start' : 'center'}>
                                {assignment.status === 'Published' && <IconPublishSolid color="success" size="x-small" />}
                                {assignment.status === 'Concluded' && <IconCalendarReservedLine color="primary" size="x-small" />}
                                {assignment.status === 'Unpublished' && <IconUnpublishedLine color="secondary" size="x-small" />}
                                <ScreenReaderContent>{assignment.status}</ScreenReaderContent>
                              </Table.Cell>
                              <Table.Cell textAlign={layout === 'stacked' ? 'start' : 'center'}>
                                <Text>{assignment.submissions}</Text>
                              </Table.Cell>
                            </Table.Row>
                          ))}
                        </Table.Body>
                      </Table>
                    )
                  }}
                </Responsive>

                {/* Pagination */}
                <View as="div" margin="moduleElements 0 0 0">
                  <Flex justifyItems="space-between" alignItems="center">
                    <Text size="small" color="secondary">
                      Showing {startIndex + 1}-{Math.min(startIndex + pageSize, sortedData.length)} of {sortedData.length} assignments
                    </Text>
                    <Pagination
                      variant="compact"
                      labelNext="Next page"
                      labelPrev="Previous page"
                      as="nav"
                      currentPage={currentPage}
                      totalPageNumber={totalPages}
                      onPageChange={handlePageChange}
                    />
                  </Flex>
                </View>
              </View>

              <Alert liveRegion={() => document.getElementById('flash-messages') || document.body} liveRegionPoliteness="polite" screenReaderOnly>
                {selectedRows.size > 0 ? `${selectedRows.size} assignments selected. ` : ''}Sorted by {sortBy} in {direction} order. Page {currentPage} of {totalPages}.
              </Alert>
            </View>
          </View>
        )
      }}
    </Responsive>
  )
}

export default ComprehensiveTable