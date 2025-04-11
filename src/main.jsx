import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CoffeeShopApp from './CoffeeShopApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CoffeeShopApp />
  </StrictMode>,
)