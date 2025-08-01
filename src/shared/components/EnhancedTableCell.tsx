import React, { useContext } from 'react'
import { Table } from '@instructure/ui-table'
import { TableContext } from '@instructure/ui-table'
import { Text, Flex, View } from '@instructure/ui'

/**
 * Enhanced Table Cell component that provides better header styling in stacked mode
 * 
 * Fixes two main issues with InstUI Table.Cell in stacked mode:
 * 1. Headers are not bold by default
 * 2. Cannot hide the colon separator
 * 
 * @param children - Cell content
 * @param textAlign - Text alignment for regular table mode
 * @param header - Header text to display in stacked mode
 * @param headerStyle - Style variant for headers: 'default', 'bold', 'hidden'
 * @param hideHeaderColon - Whether to hide the colon after header text
 * @param props - Additional props passed to Table.Cell
 */
export const EnhancedTableCell = ({ 
  children, 
  textAlign = 'start',
  header,
  headerStyle = 'bold', // 'default', 'bold', 'hidden'
  hideHeaderColon = false,
  ...props 
}: { 
  children: React.ReactNode
  textAlign?: 'start' | 'center' | 'end'
  header?: string | React.ReactNode
  headerStyle?: 'default' | 'bold' | 'hidden'
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
    
    // No header case
    if (headerStyle === 'hidden' || !headerTxt) {
      return (
        <Table.Cell 
          textAlign="start" 
          header={null}
          {...props}
        >
          {children}
        </Table.Cell>
      )
    }
    
    // Render header with appropriate styling using InstUI components
    const headerElement = headerStyle === 'bold' ? (
      <Text variant="contentImportant">
        {headerTxt}{!hideHeaderColon && ':'}
      </Text>
    ) : (
      <Text variant="contentSmall">
        {headerTxt}{!hideHeaderColon && ':'}
      </Text>
    )
    
    return (
      <Table.Cell 
        textAlign="start" 
        header={null}
        {...props}
      >
        <Flex direction="column" gap="xxx-small">
          {headerElement}
          <View>{children}</View>
        </Flex>
      </Table.Cell>
    )
  }
  
  // Regular table mode - use InstUI Table.Cell
  return (
    <Table.Cell 
      textAlign={textAlign} 
      {...props}
    >
      {children}
    </Table.Cell>
  )
}

export default EnhancedTableCell