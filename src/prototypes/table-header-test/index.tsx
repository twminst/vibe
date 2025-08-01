import React, { useState, useContext } from 'react'
import { View, Heading, Text, Flex } from '@instructure/ui'
import { Table } from '@instructure/ui-table'
import { TableContext } from '@instructure/ui-table'

interface MovieData {
  id: string
  rank: number
  title: string
  year: number
  rating: number
}

const movieData: MovieData[] = [
  { id: '1', rank: 1, title: 'The Shawshank Redemption', year: 1994, rating: 9.3 },
  { id: '2', rank: 2, title: 'The Godfather', year: 1972, rating: 9.2 },
  { id: '3', rank: 3, title: 'The Godfather: Part II', year: 1974, rating: 9.0 }
]

// Current problematic implementation (for comparison)  
const ProblematicCustomTableCell = ({ 
  children, 
  textAlign = 'start',
  header,
  ...props 
}: { 
  children: React.ReactNode
  textAlign?: 'start' | 'center' | 'end'
  header?: string | React.ReactNode
  [key: string]: any
}) => {
  const { isStacked } = useContext(TableContext)
  
  return (
    <Table.Cell 
      textAlign={isStacked ? 'start' : textAlign} 
      header={header}
      {...props}
    >
      {children}
    </Table.Cell>
  )
}

// Solution 1: Custom stacked cell implementation with bold headers and hidden colon
const ImprovedCustomTableCell = ({ 
  children, 
  textAlign = 'start',
  header,
  hideHeaderColon = false,
  ...props 
}: { 
  children: React.ReactNode
  textAlign?: 'start' | 'center' | 'end'
  header?: string | React.ReactNode
  hideHeaderColon?: boolean
  [key: string]: any
}) => {
  const { isStacked } = useContext(TableContext)
  
  if (isStacked) {
    let headerTxt
    if (typeof header === 'function') {
      headerTxt = React.createElement(header)
    } else {
      headerTxt = header
    }
    
    return (
      <div role="cell" style={{ marginBottom: '8px' }}>
        {headerTxt && (
          <Text size="small" weight="bold" color="secondary">
            {headerTxt}{!hideHeaderColon && ': '}
          </Text>
        )}
        {children}
      </div>
    )
  }
  
  return (
    <Table.Cell 
      textAlign={textAlign} 
      {...props}
    >
      {children}
    </Table.Cell>
  )
}

// Solution 2: Using View with custom styling for headers
const StyledCustomTableCell = ({ 
  children, 
  textAlign = 'start',
  header,
  headerStyle = 'default', // 'default', 'bold', 'hidden', 'no-colon'
  ...props 
}: { 
  children: React.ReactNode
  textAlign?: 'start' | 'center' | 'end'
  header?: string | React.ReactNode
  headerStyle?: 'default' | 'bold' | 'hidden' | 'no-colon'
  [key: string]: any
}) => {
  const { isStacked } = useContext(TableContext)
  
  if (isStacked) {
    let headerTxt
    if (typeof header === 'function') {
      headerTxt = React.createElement(header)
    } else {
      headerTxt = header
    }
    
    const renderHeader = () => {
      if (!headerTxt || headerStyle === 'hidden') return null
      
      const headerContent = (() => {
        switch (headerStyle) {
          case 'bold':
            return (
              <Text size="small" weight="bold" color="primary">
                {headerTxt}{': '}
              </Text>
            )
          case 'no-colon':
            return (
              <Text size="small" weight="bold" color="secondary">
                {headerTxt}
              </Text>
            )
          default:
            return (
              <Text size="small" color="secondary">
                {headerTxt}{': '}
              </Text>
            )
        }
      })()
      
      return (
        <View as="div" margin="0 0 xx-small 0">
          {headerContent}
        </View>
      )
    }
    
    return (
      <View as="div" role="cell" margin="0 0 small 0">
        {renderHeader()}
        <View as="div">
          {children}
        </View>
      </View>
    )
  }
  
  return (
    <Table.Cell 
      textAlign={textAlign} 
      {...props}
    >
      {children}
    </Table.Cell>
  )
}

// Solution 3: CSS-based approach (using style props)
const CSSStyledCustomTableCell = ({ 
  children, 
  textAlign = 'start',
  header,
  headerBold = false,
  showColon = true,
  ...props 
}: { 
  children: React.ReactNode
  textAlign?: 'start' | 'center' | 'end'
  header?: string | React.ReactNode
  headerBold?: boolean
  showColon?: boolean
  [key: string]: any
}) => {
  const { isStacked } = useContext(TableContext)
  
  if (isStacked) {
    let headerTxt
    if (typeof header === 'function') {
      headerTxt = React.createElement(header)
    } else {
      headerTxt = header
    }
    
    return (
      <div 
        role="cell" 
        style={{ 
          marginBottom: '12px',
          fontSize: '14px',
          lineHeight: '1.4'
        }}
      >
        {headerTxt && (
          <div style={{ 
            fontWeight: headerBold ? 'bold' : 'normal',
            color: '#556572',
            fontSize: '12px',
            marginBottom: '4px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            {headerTxt}{showColon && ': '}
          </div>
        )}
        <div style={{ color: '#2D3B45' }}>
          {children}
        </div>
      </div>
    )
  }
  
  return (
    <Table.Cell 
      textAlign={textAlign} 
      {...props}
    >
      {children}
    </Table.Cell>
  )
}

export default function TableHeaderTest() {
  const [layout, setLayout] = useState<'auto' | 'stacked' | 'fixed'>('stacked')
  
  return (
    <View as="div" maxWidth="800px" margin="0 auto" padding="medium">
      <View as="header" margin="0 0 large 0">
        <Heading level="h1" variant="titlePageDesktop">
          Table Header Styling Solutions
        </Heading>
        <Text variant="descriptionPage">
          Testing different approaches to fix header styling issues in stacked mode
        </Text>
      </View>

      {/* Layout Controls */}
      <View as="div" margin="0 0 large 0" background="secondary" padding="small" borderRadius="medium">
        <Flex gap="medium" alignItems="center">
          <Text weight="bold">Layout:</Text>
          <button 
            onClick={() => setLayout('auto')} 
            style={{ 
              padding: '4px 8px', 
              background: layout === 'auto' ? '#0374B5' : '#f5f5f5',
              color: layout === 'auto' ? 'white' : 'black',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Auto
          </button>
          <button 
            onClick={() => setLayout('stacked')} 
            style={{ 
              padding: '4px 8px', 
              background: layout === 'stacked' ? '#0374B5' : '#f5f5f5',
              color: layout === 'stacked' ? 'white' : 'black',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Stacked
          </button>
          <button 
            onClick={() => setLayout('fixed')} 
            style={{ 
              padding: '4px 8px', 
              background: layout === 'fixed' ? '#0374B5' : '#f5f5f5',
              color: layout === 'fixed' ? 'white' : 'black',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Fixed
          </button>
        </Flex>
      </View>

      {/* Problem: Current Implementation */}
      <View as="section" margin="0 0 xlarge 0">
        <View as="header" margin="0 0 medium 0">
          <Heading level="h2" variant="titleSection">
            Problem: Current Implementation
          </Heading>
          <Text variant="descriptionSection">
            Headers may not be bold and colon cannot be hidden
          </Text>
        </View>
        
        <View as="div" background="primary" padding="medium" borderRadius="medium" borderWidth="small" shadow="resting">
          <Table caption="Current problematic implementation" layout={layout}>
            <Table.Head>
              <Table.Row>
                <Table.ColHeader id="rank">Rank</Table.ColHeader>
                <Table.ColHeader id="title">Title</Table.ColHeader>
                <Table.ColHeader id="year">Year</Table.ColHeader>
                <Table.ColHeader id="rating">Rating</Table.ColHeader>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {movieData.map((row) => (
                <Table.Row key={row.id}>
                  <ProblematicCustomTableCell header="Rank">{row.rank}</ProblematicCustomTableCell>
                  <ProblematicCustomTableCell header="Title">{row.title}</ProblematicCustomTableCell>
                  <ProblematicCustomTableCell header="Year">{row.year}</ProblematicCustomTableCell>
                  <ProblematicCustomTableCell header="Rating">{row.rating.toFixed(1)}</ProblematicCustomTableCell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </View>
      </View>

      {/* Solution 1: Improved Custom Implementation */}
      <View as="section" margin="0 0 xlarge 0">
        <View as="header" margin="0 0 medium 0">
          <Heading level="h2" variant="titleSection">
            Solution 1: Improved Custom Implementation
          </Heading>
          <Text variant="descriptionSection">
            Bold headers with option to hide colon
          </Text>
        </View>
        
        <View as="div" background="primary" padding="medium" borderRadius="medium" borderWidth="small" shadow="resting">
          <Table caption="Improved implementation with bold headers" layout={layout}>
            <Table.Head>
              <Table.Row>
                <Table.ColHeader id="rank">Rank</Table.ColHeader>
                <Table.ColHeader id="title">Title</Table.ColHeader>
                <Table.ColHeader id="year">Year</Table.ColHeader>
                <Table.ColHeader id="rating">Rating</Table.ColHeader>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {movieData.map((row) => (
                <Table.Row key={row.id}>
                  <ImprovedCustomTableCell header="Rank">{row.rank}</ImprovedCustomTableCell>
                  <ImprovedCustomTableCell header="Title">{row.title}</ImprovedCustomTableCell>
                  <ImprovedCustomTableCell header="Year">{row.year}</ImprovedCustomTableCell>
                  <ImprovedCustomTableCell header="Rating" hideHeaderColon>{row.rating.toFixed(1)}</ImprovedCustomTableCell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </View>
      </View>

      {/* Solution 2: Styled with View Components */}
      <View as="section" margin="0 0 xlarge 0">
        <View as="header" margin="0 0 medium 0">
          <Heading level="h2" variant="titleSection">
            Solution 2: Styled with View Components
          </Heading>
          <Text variant="descriptionSection">
            Different header styles using InstUI View and Text components
          </Text>
        </View>
        
        <View as="div" background="primary" padding="medium" borderRadius="medium" borderWidth="small" shadow="resting">
          <Table caption="Styled headers with View components" layout={layout}>
            <Table.Head>
              <Table.Row>
                <Table.ColHeader id="rank">Rank</Table.ColHeader>
                <Table.ColHeader id="title">Title</Table.ColHeader>
                <Table.ColHeader id="year">Year</Table.ColHeader>
                <Table.ColHeader id="rating">Rating</Table.ColHeader>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {movieData.map((row) => (
                <Table.Row key={row.id}>
                  <StyledCustomTableCell header="Rank" headerStyle="bold">{row.rank}</StyledCustomTableCell>
                  <StyledCustomTableCell header="Title" headerStyle="default">{row.title}</StyledCustomTableCell>
                  <StyledCustomTableCell header="Year" headerStyle="no-colon">{row.year}</StyledCustomTableCell>
                  <StyledCustomTableCell header="Rating" headerStyle="hidden">{row.rating.toFixed(1)}</StyledCustomTableCell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </View>
      </View>

      {/* Solution 3: CSS-based Styling */}
      <View as="section" margin="0 0 xlarge 0">
        <View as="header" margin="0 0 medium 0">
          <Heading level="h2" variant="titleSection">
            Solution 3: CSS-based Styling
          </Heading>
          <Text variant="descriptionSection">
            Custom CSS styling for headers with full control
          </Text>
        </View>
        
        <View as="div" background="primary" padding="medium" borderRadius="medium" borderWidth="small" shadow="resting">
          <Table caption="CSS-styled headers" layout={layout}>
            <Table.Head>
              <Table.Row>
                <Table.ColHeader id="rank">Rank</Table.ColHeader>
                <Table.ColHeader id="title">Title</Table.ColHeader>
                <Table.ColHeader id="year">Year</Table.ColHeader>
                <Table.ColHeader id="rating">Rating</Table.ColHeader>
              </Table.Row>
            </Table.Head>
            <Table.Body>
              {movieData.map((row) => (
                <Table.Row key={row.id}>
                  <CSSStyledCustomTableCell header="Rank" headerBold>{row.rank}</CSSStyledCustomTableCell>
                  <CSSStyledCustomTableCell header="Title" headerBold>{row.title}</CSSStyledCustomTableCell>
                  <CSSStyledCustomTableCell header="Year" headerBold showColon={false}>{row.year}</CSSStyledCustomTableCell>
                  <CSSStyledCustomTableCell header="Rating" headerBold showColon={false}>{row.rating.toFixed(1)}</CSSStyledCustomTableCell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </View>
      </View>

      {/* Usage Guidelines */}
      <View as="section" margin="0 0 xlarge 0">
        <View as="header" margin="0 0 medium 0">
          <Heading level="h2" variant="titleSection">
            Implementation Guidelines
          </Heading>
        </View>
        
        <View as="div" background="primary" padding="medium" borderRadius="medium" borderWidth="small" shadow="resting">
          <Flex direction="column" gap="medium">
            <View as="div">
              <Heading level="h5" variant="label" margin="0 0 small 0">Key Findings</Heading>
              <Text>• InstUI Table.Cell uses the header prop to display labels in stacked mode</Text>
              <Text>• By default, headers are not bold and always include a colon</Text>
              <Text>• Custom implementations can override this behavior for better UX</Text>
            </View>
            
            <View as="div">
              <Heading level="h5" variant="label" margin="0 0 small 0">Recommended Approach</Heading>
              <Text>• Use Solution 1 (ImprovedCustomTableCell) for most cases</Text>
              <Text>• Use Solution 2 for more complex styling with InstUI components</Text>
              <Text>• Use Solution 3 when you need precise control over styling</Text>
            </View>
            
            <View as="div">
              <Heading level="h5" variant="label" margin="0 0 small 0">Props Available</Heading>
              <Text>• hideHeaderColon: boolean - hide the colon after headers</Text>
              <Text>• headerStyle: 'default' | 'bold' | 'hidden' | 'no-colon'</Text>
              <Text>• headerBold: boolean - make headers bold</Text>
              <Text>• showColon: boolean - control colon display</Text>
            </View>
          </Flex>
        </View>
      </View>
    </View>
  )
}