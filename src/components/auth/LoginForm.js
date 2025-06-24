import { useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { useAuth } from "../../hooks/useAuth"
import { useNotification } from "../../contexts/NotificationContext"
import {
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  CircularProgress,
  InputAdornment,
  IconButton,
  Fade,
  alpha,
} from "@mui/material"
import { Visibility, VisibilityOff, Login, Person, Lock } from "@mui/icons-material"
import { motion } from "framer-motion"
import {
  loginFormWrapper,
  loginHeader,
  loginIconContainer,
  loginIcon,
  loginTitle,
  loginSubtext,
  loginErrorBox,
  loginErrorAlert,
  loginForm,
  loginInput,
  inputIcon,
  loginButton,
} from "./styles/loginFormStyles"

const MotionBox = motion(Box)

const LoginForm = () => {
  const { login, loading, error } = useAuth()
  const { showSuccess, showError } = useNotification()
  const [showPassword, setShowPassword] = useState(false)
  const [loginError, setLoginError] = useState("")

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  })

  const onSubmit = async (data) => {
    setLoginError("")
    const result = await login(data)
    if (result.success) {
      showSuccess("Login successful! Welcome back!")
    } else {
      setLoginError(result.error)
      showError(result.error)
    }
  }

  return (
    <MotionBox sx={loginFormWrapper}>
      <Box sx={loginHeader}>
        <Box sx={loginIconContainer}>
          <Login sx={loginIcon} />
        </Box>
        <Typography variant="h4" sx={loginTitle}>
          Welcome Back
        </Typography>
        <Typography variant="body1" sx={loginSubtext}>
          Sign in to your ShopHub account
        </Typography>
      </Box>

      <Fade in={!!(error || loginError)} timeout={300}>
        <Box sx={loginErrorBox}>
          {(error || loginError) && (
            <Alert
              severity="error"
              sx={{
                ...loginErrorAlert,
                backgroundColor: alpha("#ef4444", 0.05),
              }}
            >
              {error || loginError}
            </Alert>
          )}
        </Box>
      </Fade>

      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={loginForm}>
        <Controller
          name="username"
          control={control}
          rules={{ required: "Username is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              margin="normal"
              required
              fullWidth
              label="Username"
              placeholder="Enter your username"
              error={!!errors.username}
              helperText={errors.username?.message}
              disabled={loading}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person sx={inputIcon} />
                  </InputAdornment>
                ),
              }}
              sx={loginInput}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={{ required: "Password is required" }}
          render={({ field }) => (
            <TextField
              {...field}
              margin="normal"
              required
              fullWidth
              label="Password"
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
              error={!!errors.password}
              helperText={errors.password?.message}
              disabled={loading}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock sx={inputIcon} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      sx={inputIcon}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={loginInput}
            />
          )}
        />

        <MotionBox whileHover={{ scale: loading ? 1 : 1.02 }} whileTap={{ scale: loading ? 1 : 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={loading}
            sx={loginButton}
            startIcon={loading ? <CircularProgress size={20} sx={{ color: "white" }} /> : <Login />}
          >
            {loading ? "Signing In..." : "Sign In"}
          </Button>
        </MotionBox>
      </Box>
    </MotionBox>
  )
}

export default LoginForm
