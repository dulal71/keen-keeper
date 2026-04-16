import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './Route/Route.jsx'
import ContextApi from './ContextApi/ContextApi.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextApi>
<RouterProvider router={router}>
</RouterProvider>
    </ContextApi>
    <ToastContainer
    position='top-center'
    autoClose={2000}
    ></ToastContainer>
  </StrictMode>,
)
