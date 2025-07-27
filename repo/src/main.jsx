import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Logo from './react-components/Logo.jsx'
import Form from './react-components/Form.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div class="form-section">
      <Logo />
      <Form />
    </div>
  </StrictMode>
)
