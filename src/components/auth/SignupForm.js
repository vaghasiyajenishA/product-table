import { useEffect, useState } from "react"
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
} from "@mui/material"
import { Visibility, VisibilityOff, PersonAdd, Person, Email, Lock } from "@mui/icons-material"
import { motion } from "framer-motion"
import {
  formWrapper,
  formHeader,
  formIconContainerGreen,
  formIcon,
  formTitle,
  formSubtext,
  formErrorBox,
  formErrorAlert,
  formContent,
  formInput,
  inputIcon,
  formButtonGreen,
  fadeInUpAnimation,
} from "./styles/signupFormStyles"
import { loginFailure } from "../../store/slices/authSlice"
import { useDispatch } from "react-redux"

const MotionBox = motion(Box)

const SignupForm = () => {
  const dispatch = useDispatch()
  const { register, loading, error } = useAuth()
  const { showSuccess, showError } = useNotification()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [signupError, setSignupError] = useState("")

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  const password = watch("password")

  const onSubmit = async (data) => {
    setSignupError("")
    const result = await register(data)
    if (result.success) {
      showSuccess("Account created successfully! Welcome to ShopHub!")
    } else {
      setSignupError(result.error)
      showError(result.error)
    }
  }
  useEffect(() => {
    if (error) {
      dispatch(loginFailure(''))
    }
  }, [dispatch, error])

  return (
    <MotionBox sx={formWrapper}>
      <Box sx={formHeader}>
        <Box sx={formIconContainerGreen}>
          <PersonAdd sx={formIcon} />
        </Box>
        <Typography variant="h4" sx={formTitle}>
          Create Account
        </Typography>
        <Typography variant="body1" sx={formSubtext}>
          Sign up to get started with ShopHub
        </Typography>
      </Box>

      <Fade in={!!(error || signupError)} timeout={300}>
        <Box sx={formErrorBox}>
          {(error || signupError) && (
            <Alert severity="error" sx={formErrorAlert}>
              {error || signupError}
            </Alert>
          )}
        </Box>
      </Fade>

      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={formContent}>
        <Controller
          name="username"
          control={control}
          rules={{
            required: "Username is required",
            minLength: { value: 3, message: "Username must be at least 3 characters" },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              margin="normal"
              required
              fullWidth
              label="Username"
              placeholder="Choose a username"
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
              sx={formInput}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              margin="normal"
              required
              fullWidth
              label="Email"
              placeholder="Enter your email"
              type="email"
              error={!!errors.email}
              helperText={errors.email?.message}
              disabled={loading}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email sx={inputIcon} />
                  </InputAdornment>
                ),
              }}
              sx={formInput}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          rules={{
            required: "Password is required",
            minLength: { value: 6, message: "Password must be at least 6 characters" },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              margin="normal"
              required
              fullWidth
              label="Password"
              placeholder="Create a password"
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
              sx={formInput}
            />
          )}
        />

        <Controller
          name="confirmPassword"
          control={control}
          rules={{
            required: "Please confirm your password",
            validate: (value) => value === password || "Passwords do not match",
          }}
          render={({ field }) => (
            <TextField
              {...field}
              margin="normal"
              required
              fullWidth
              label="Confirm Password"
              placeholder="Confirm your password"
              type={showConfirmPassword ? "text" : "password"}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
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
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      edge="end"
                      sx={inputIcon}
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={formInput}
            />
          )}
        />

        <MotionBox whileHover={{ scale: loading ? 1 : 1.02 }} whileTap={{ scale: loading ? 1 : 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={loading}
            sx={formButtonGreen}
            startIcon={loading ? <CircularProgress size={20} sx={{ color: "white" }} /> : <PersonAdd />}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </Button>
        </MotionBox>
      </Box>

      <style jsx>{fadeInUpAnimation}</style>
    </MotionBox>
  )
}

export default SignupForm
