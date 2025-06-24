import { Link } from "react-router-dom"
import { Container, Typography, Box, Paper } from "@mui/material"
import SignupForm from "../components/auth/SignupForm"
import { signupContainer, signupPaper, signupFooter, signinLink } from "./styles/signupPageStyles"

const SignupPage = () => {
  return (
    <Container maxWidth="sm" sx={signupContainer}>
      <Paper elevation={3} sx={signupPaper}>
        <SignupForm />
        <Box sx={signupFooter}>
          <Typography variant="body2" color="text.secondary">
            Already have an account?{" "}
            <Link to="/login" style={signinLink}>
              Sign in here
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  )
}

export default SignupPage
