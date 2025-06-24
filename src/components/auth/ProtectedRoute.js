import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, CircularProgress, Typography } from "@mui/material";
import { protectedRouteLoading } from "./styles/ProtectedRouteStyles";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading, initialized } = useSelector((state) => state.auth);
  const location = useLocation();

  if (!initialized || loading) {
    return (
      <Box sx={protectedRouteLoading}>
        <CircularProgress size={32} />
        <Typography variant="body2" color="textSecondary">
          Verifying access...
        </Typography>
      </Box>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return children;
};

export default ProtectedRoute;
