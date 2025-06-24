import { Link } from "react-router-dom"
import { Container, Typography, Box, Paper } from "@mui/material"
import LoginForm from "../components/auth/LoginForm"
import { loginContainer, loginPaper, loginFooter, signupLink } from "./styles/loginPageStyles"

const LoginPage = () => {
  return (
    <Container maxWidth="sm" sx={loginContainer}>
      <Paper elevation={3} sx={loginPaper}>
        <LoginForm />
        <Box sx={loginFooter}>
          <Typography variant="body2" color="text.secondary">
            Don't have an account?{" "}
            <Link to="/signup" style={signupLink}>
              Sign up here
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  )
}

export default LoginPage
