import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
 
  RouterProvider,
} from "react-router-dom";

import { router } from './Routes/Routes.jsx';
import Providers from './Authentications/Providers/Providers.jsx';


// tanstack query
import {
  QueryClient,
  QueryClientProvider,
  
} from '@tanstack/react-query'

const queryClient = new QueryClient()





createRoot(document.getElementById('root')).render(
  <StrictMode>

 
 {/* provider = Authentication */}
 <Providers>
<QueryClientProvider  client={queryClient}>

<RouterProvider router={router} />


</QueryClientProvider>
 </Providers>
 {/* provider = Authentication */}


  </StrictMode>,
)
