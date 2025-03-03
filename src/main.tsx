import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
/*import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
  },
  {
    path:"/user",
    element: <div> manage users</div>,
  },
]);*/
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {<App />}
  </React.StrictMode>,
)
