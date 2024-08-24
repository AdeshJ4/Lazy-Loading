import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CircularProgress } from '@mui/material'

createRoot(document.getElementById('root')).render(
  <Suspense fallback={<CircularProgress />}>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </Suspense>
)
