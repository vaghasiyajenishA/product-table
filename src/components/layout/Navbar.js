import { useState } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import { useAuth } from "../../hooks/useAuth"
import { useNotification } from "../../contexts/NotificationContext"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Avatar,
  Tooltip,
  Chip,
  Fade,
  Slide,
  useScrollTrigger,
} from "@mui/material"
import {
  Menu as MenuIcon,
  AccountCircle,
  ExitToApp,
  Login,
  PersonAdd,
  Inventory,
  ShoppingBag,
} from "@mui/icons-material"
import * as styles from "./navbarStyles"

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger()
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState(null)
  const { user, isAuthenticated } = useSelector((state) => state.auth)
  const { logout } = useAuth()
  const { showSuccess } = useNotification()
  const navigate = useNavigate()
  const location = useLocation()

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenu = (event) => {
    setMobileMenuAnchor(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
    setMobileMenuAnchor(null)
  }

  const handleLogout = async () => {
    const result = await logout()
    if (result.success) {
      showSuccess("Logged out successfully!")
    }
    handleClose()
  }

  const isActivePath = (path) => location.pathname === path

  return (
    <HideOnScroll>
      <AppBar position="fixed" elevation={0} sx={styles.appBar}>
        <Toolbar sx={styles.toolbar}>
          <Box sx={styles.logoBox}>
            <Box component={Link} to="/" sx={styles.logoLink}>
              <Box sx={styles.logoIconBox}>
                <ShoppingBag sx={{ color: "white", fontSize: 20 }} />
              </Box>
              <Typography variant="h6" sx={styles.logoText}>
                ShopHub
              </Typography>
            </Box>
          </Box>

          {/* Desktop Menu */}
          <Box sx={styles.desktopMenu}>
            {isAuthenticated ? (
              <>
                <Button
                  component={Link}
                  to="/products"
                  startIcon={<Inventory />}
                  sx={styles.navButton(isActivePath("/products"))}
                >
                  Products
                </Button>

                <Box sx={styles.userSection}>
                  <Chip
                    avatar={
                      <Avatar sx={styles.userAvatarSmall}>
                        {user?.username?.charAt(0).toUpperCase()}
                      </Avatar>
                    }
                    label={user?.username}
                    variant="outlined"
                    sx={styles.userChip}
                  />
                  <Tooltip title="Account settings">
                    <IconButton onClick={handleMenu} sx={{ p: 0 }}>
                      <Avatar sx={styles.userAvatarLarge}>
                        {user?.username?.charAt(0).toUpperCase()}
                      </Avatar>
                    </IconButton>
                  </Tooltip>
                </Box>

                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                  PaperProps={{ sx: styles.menuPaper }}
                >
                  <MenuItem onClick={handleLogout} sx={styles.menuItem}>
                    <ExitToApp sx={{ mr: 2, color: "error.main" }} />
                    <Typography color="error.main" fontWeight={500}>
                      Logout
                    </Typography>
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <Button
                  component={Link}
                  to="/login"
                  startIcon={<Login />}
                  sx={styles.navButton(isActivePath("/login"))}
                >
                  Login
                </Button>
                <Button
                  component={Link}
                  to="/signup"
                  variant="contained"
                  startIcon={<PersonAdd />}
                  sx={{
                    borderRadius: "12px",
                    px: 3,
                    py: 1,
                    ml: 1,
                    background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                    boxShadow: "0px 4px 12px rgba(99, 102, 241, 0.3)",
                    "&:hover": {
                      background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)",
                      boxShadow: "0px 6px 16px rgba(99, 102, 241, 0.4)",
                    },
                  }}
                >
                  Sign Up
                </Button>
              </>
            )}
          </Box>

          {/* Mobile Menu */}
          <Box sx={styles.mobileMenuBox}>
            <IconButton
              size="large"
              onClick={handleMobileMenu}
              sx={styles.mobileMenuIconButton}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={mobileMenuAnchor}
              open={Boolean(mobileMenuAnchor)}
              onClose={handleClose}
              TransitionComponent={Fade}
              PaperProps={{
                sx: {
                  borderRadius: "12px",
                  boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
                  border: "1px solid #f1f5f9",
                  mt: 1,
                  minWidth: 200,
                },
              }}
            >
              {isAuthenticated
                ? [
                    <MenuItem
                      key="products"
                      onClick={() => {
                        navigate("/products")
                        handleClose()
                      }}
                      sx={styles.menuItem}
                    >
                      <Inventory sx={{ mr: 2, color: "primary.main" }} />
                      Products
                    </MenuItem>,
                    <MenuItem key="user" disabled sx={styles.menuItem}>
                      <AccountCircle sx={{ mr: 2 }} />
                      {user?.username}
                    </MenuItem>,
                    <MenuItem key="logout" onClick={handleLogout} sx={styles.menuItem}>
                      <ExitToApp sx={{ mr: 2, color: "error.main" }} />
                      <Typography color="error.main">Logout</Typography>
                    </MenuItem>,
                  ]
                : [
                    <MenuItem
                      key="login"
                      onClick={() => {
                        navigate("/login")
                        handleClose()
                      }}
                      sx={styles.menuItem}
                    >
                      <Login sx={{ mr: 2, color: "primary.main" }} />
                      Login
                    </MenuItem>,
                    <MenuItem
                      key="signup"
                      onClick={() => {
                        navigate("/signup")
                        handleClose()
                      }}
                      sx={styles.menuItem}
                    >
                      <PersonAdd sx={{ mr: 2, color: "primary.main" }} />
                      Sign Up
                    </MenuItem>,
                  ]}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}

export default Navbar
