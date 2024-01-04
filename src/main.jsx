import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,} from 'react-router-dom'
import Router from './routes/routes.jsx'
import  CreateGlobalStyle  from './styles/globalStyles.js'

import { StyleSheetManager } from 'styled-components';


const subdomain = 'cine_code'

ReactDOM.createRoot(document.getElementById('root')).render(
 
 <React.StrictMode>
    <BrowserRouter basename={`/${subdomain}/`}>
    <StyleSheetManager shouldForwardProp={(prop) => prop === 'img'}>
    </StyleSheetManager>
    <Router/>
    </BrowserRouter>
    <CreateGlobalStyle/>
  </React.StrictMode>,
)
