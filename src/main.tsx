import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './dist/global.css'
import { BasecontextProvider } from './Context/Basecontext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <BasecontextProvider>
       <App />
      </BasecontextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
