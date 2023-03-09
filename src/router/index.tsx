import { createBrowserRouter } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import LoginPage from '~/pages/Login'
import RegisterPage from '~/pages/Register'
import HomePage from '~/pages/Home'

const router = createBrowserRouter([
  {
    element: <LoginPage />,
    path: '/login'
  },
  {
    element: <RegisterPage />,
    path: '/register'
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <HomePage />,
        path: '/'
      }
    ]
  }
])

export default router
