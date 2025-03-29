//Library imports 

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
//css imports
import './index.css' 
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>  
  <p>lms</p>
    <App />
  </BrowserRouter>

);
