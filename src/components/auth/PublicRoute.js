import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

const PublicRoute = ({ children }) => {
  const { isAuthenticated, initialized } = useSelector((state) => state.auth)

  // Only redirect if auth has been initialized and user is authenticated
  if (initialized && isAuthenticated) {
    return <Navigate to="/" replace />
  }

  return children
}

export default PublicRoute
