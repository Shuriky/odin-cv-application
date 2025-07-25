import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Logo from './react-components/Logo.jsx'
import SectionsButtons from './react-components/SectionsButtons.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Logo />
    <SectionsButtons />
  </StrictMode>,
)
