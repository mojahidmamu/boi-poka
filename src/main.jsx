import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorPage from './Component/ErrorPage/ErrorPage.jsx';
import Root from './Component/Root/Root.jsx';
import Home from './Component/Home/Home.jsx';
import Dashboard from './Component/Dashboard/Dashboard.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:  <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'dashboard',
          element: <Dashboard></Dashboard>
        }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
   
  </StrictMode>,
)
