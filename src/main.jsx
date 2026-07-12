import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { router } from './Routes/Route';
import './index.css'
// import 'sweetalert2/src/sweetalert2.scss'
import 'sweetalert2/dist/sweetalert2.min.css'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
