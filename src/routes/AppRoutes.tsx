import { Routes, Route } from 'react-router-dom'
import AppIndex from './AppIndex'
import SamplePrototype from '../prototypes/sample'
import LayoutPattern from '../patterns/Layout'
import TextPattern from '../patterns/Text'
import ColorsPattern from '../patterns/Colors'
import ButtonsPattern from '../patterns/Buttons'
import IconsPattern from '../patterns/Icons'
import TemplatePattern from '../patterns/.template'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AppIndex />} />
      <Route path="/prototypes/sample" element={<SamplePrototype />} />
      <Route path="/patterns/layout" element={<LayoutPattern />} />
      <Route path="/patterns/text" element={<TextPattern />} />
      <Route path="/patterns/colors" element={<ColorsPattern />} />
      <Route path="/patterns/buttons" element={<ButtonsPattern />} />
      <Route path="/patterns/icons" element={<IconsPattern />} />
      <Route path="/patterns/template" element={<TemplatePattern />} />
      {/* Add new prototype routes here */}
      {/* Add new pattern routes here */}
    </Routes>
  )
}