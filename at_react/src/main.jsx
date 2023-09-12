import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import NotFound from './components/NotFound'
import Home from './components/Home'
import Aparelhos from './components/Aparelhos'
import VisualizarAparelho from './components/VisualizarAparelho'

const router = createBrowserRouter()[{
  path: "/", 
  element:<App></App>,
  errorElement: <NotFound></NotFound>,
  children: [
    {
      path: "/",
      element:<Home></Home> 
    },
    {
      path: "/Aparelhos",
      element:<Aparelhos></Aparelhos>
    },
    {
      path: "/VizualizarAparelho",
      element:<VisualizarAparelho></VisualizarAparelho>
    }
  ]
}]
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
