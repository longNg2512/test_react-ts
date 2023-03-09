import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const ProtectedRoute = (): React.ReactElement | null => {
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      navigate('/login')
      return
    }
  }, [navigate])

  return <Outlet />
}

export default ProtectedRoute
