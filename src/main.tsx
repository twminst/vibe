import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { InstUISettingsProvider } from '@instructure/ui'
import { BrowserRouter } from 'react-router-dom'
import PrototypeRoutes from './routes/AppRoutes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <InstUISettingsProvider>
      <BrowserRouter>
        <PrototypeRoutes />
      </BrowserRouter>
    </InstUISettingsProvider>
  </StrictMode>,
)
