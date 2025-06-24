
import { Link } from "react-router-dom"
import { Container, Typography, Button, Box } from "@mui/material"
import { Home, ArrowBack } from "@mui/icons-material"

const NotFoundPage = () => {
  return (
    <Container maxWidth="md" sx={{ py: 8, textAlign: "center" }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h1" component="h1" sx={{ fontSize: "6rem", fontWeight: "bold", color: "primary.main" }}>
          404
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
          Page Not Found
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          The page you're looking for doesn't exist or has been moved.
        </Typography>
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
          <Button component={Link} to="/" variant="contained" size="large" startIcon={<Home />}>
            Go Home
          </Button>
          <Button onClick={() => window.history.back()} variant="outlined" size="large" startIcon={<ArrowBack />}>
            Go Back
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default NotFoundPage
