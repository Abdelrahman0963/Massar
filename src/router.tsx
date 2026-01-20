import React from 'react'
import Layout from './Layout/Layout'
import Home from './pages/Home'
import { createBrowserRouter } from 'react-router-dom'

const PortfolioPage = React.lazy(() => import('./pages/PortfolioPage'))
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/portfolio',
        element: <PortfolioPage />,
      },
    ],
  },
])



export default router
