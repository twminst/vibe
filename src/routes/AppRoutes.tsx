import { Routes, Route } from 'react-router-dom'
import AppIndex from './AppIndex'
import SamplePrototype from '../prototypes/sample'
import StudentDashboard from '../prototypes/student-dashboard'
import TableHeaderTest from '../prototypes/table-header-test'
import LayoutPattern from '../patterns/Layout'
import TextPattern from '../patterns/Text'
import ColorsPattern from '../patterns/Colors'
import ButtonsPattern from '../patterns/Buttons'
import IconsPattern from '../patterns/Icons'
import StatusComponentsPattern from '../patterns/StatusComponents'
import FormsPattern from '../patterns/Forms'
import TemplatePattern from '../patterns/.template'
import TablesPattern from '../patterns/Tables'
import ContentSwitchingPattern from '../patterns/ContentSwitching'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppIndex />} />
      <Route path="/prototypes/sample" element={<SamplePrototype />} />
      <Route path="/prototypes/student-dashboard" element={<StudentDashboard />} />
      <Route path="/prototypes/table-header-test" element={<TableHeaderTest />} />
      <Route path="/patterns/layout" element={<LayoutPattern />} />
      <Route path="/patterns/text" element={<TextPattern />} />
      <Route path="/patterns/colors" element={<ColorsPattern />} />
      <Route path="/patterns/buttons" element={<ButtonsPattern />} />
      <Route path="/patterns/icons" element={<IconsPattern />} />
      <Route path="/patterns/status-components" element={<StatusComponentsPattern />} />
      <Route path="/patterns/forms" element={<FormsPattern />} />
      <Route path="/patterns/template" element={<TemplatePattern />} />
      <Route path="/patterns/tables" element={<TablesPattern />} />
      <Route path="/patterns/content-switching" element={<ContentSwitchingPattern />} />
      {/* Add new prototype routes here */}
      {/* Add new pattern routes here */}
    </Routes>
  )
}