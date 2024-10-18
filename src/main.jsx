import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
 
  RouterProvider,
} from "react-router-dom";

import { router } from './Routes/Routes.jsx';
import Providers from './Authentications/Providers/Providers.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>

 
 {/* provider = Authentication */}
 <Providers>
 <RouterProvider router={router} />
 </Providers>
 {/* provider = Authentication */}


  </StrictMode>,
)
