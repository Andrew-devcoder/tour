import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/assets/sass/index.scss'
import { BrowserRouter } from 'react-router-dom'
import { MyRoute } from './layouts/MyRoute.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <MyRoute />
  </BrowserRouter>
)
