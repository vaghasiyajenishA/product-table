import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loginStart, loginSuccess, loginFailure, logout as logoutAction } from "../store/slices/authSlice"
import { authService } from "../services/authService"

export const useAuth = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, isAuthenticated, loading, error, initialized } = useSelector((state) => state.auth)

  const login = useCallback(
    async (credentials) => {
      dispatch(loginStart())
      try {
        const result = await authService.login(credentials)
        if (result.success) {
          dispatch(loginSuccess(result.data))
          navigate("/", { replace: true })
          return { success: true, data: result.data }
        } else {
          dispatch(loginFailure(result.error))
          return { success: false, error: result.error }
        }
      } catch (error) {
        dispatch(loginFailure(error.message))
        return { success: false, error: error.message }
      }
    },
    [dispatch, navigate],
  )

  const register = useCallback(
    async (userData) => {
      dispatch(loginStart())
      try {
        const result = await authService.register(userData)
        if (result.success) {
          dispatch(loginSuccess(result.data))
          navigate("/", { replace: true })
          return { success: true, data: result.data }
        } else {
          dispatch(loginFailure(result.error))
          return { success: false, error: result.error }
        }
      } catch (error) {
        dispatch(loginFailure(error.message))
        return { success: false, error: error.message }
      }
    },
    [dispatch, navigate],
  )

  const logout = useCallback(async () => {
    try {
      await authService.logout()
      dispatch(logoutAction())
      navigate("/", { replace: true })
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }, [dispatch, navigate])

  return {
    user,
    isAuthenticated,
    loading,
    error,
    initialized,
    login,
    register,
    logout,
  }
}
