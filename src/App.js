import { useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Box } from "@mui/material"
import { initializeAuth } from "./store/slices/authSlice"
import { initializeProducts } from "./store/slices/productSlice"
import { NotificationProvider } from "./contexts/NotificationContext"
import Navbar from "./components/layout/Navbar"
import ProtectedRoute from "./components/auth/ProtectedRoute"
import PublicRoute from "./components/auth/PublicRoute"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import ProductsPage from "./pages/ProductsPage"
import NotFoundPage from "./pages/NotFoundPage"

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAuth())
    dispatch(initializeProducts())
  }, [dispatch])

  return (
    <NotificationProvider>
      <Box sx={{ minHeight: "100vh", backgroundColor: "background.default" }}>
        <Navbar />
        <Box component="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <PublicRoute>
                  <SignupPage />
                </PublicRoute>
              }
            />
            <Route
              path="/products"
              element={
                <ProtectedRoute>
                  <ProductsPage />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Box>
      </Box>
    </NotificationProvider>
  )
}

export default App
