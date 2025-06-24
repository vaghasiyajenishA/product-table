import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { Container, Typography, Button, Grid, Card, CardContent, Box, Chip, Fade, useTheme } from "@mui/material"
import { ShoppingBag, Security, Star, TrendingUp, People, ArrowForward, Speed, Support } from "@mui/icons-material"
import ImageCarousel from "../components/ui/ImageCarousel"
import { motion } from "framer-motion"
import * as styles from "./styles/homePageStyles"

const MotionBox = motion(Box)
const MotionCard = motion(Card)

const HomePage = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth)
  const theme = useTheme()

  const features = [
    {
      icon: ShoppingBag,
      title: "Wide Selection",
      description: "Thousands of products across multiple categories to choose from",
      color: "#6366f1",
    },
    {
      icon: Speed,
      title: "Fast Delivery",
      description: "Quick and reliable shipping to your doorstep",
      color: "#10b981",
    },
    {
      icon: Security,
      title: "Secure Shopping",
      description: "Your data and transactions are always protected",
      color: "#f59e0b",
    },
    {
      icon: Support,
      title: "24/7 Support",
      description: "Round-the-clock customer service for all your needs",
      color: "#ef4444",
    },
  ]

  const stats = [
    { icon: TrendingUp, value: "10K+", label: "Products Available", color: "#6366f1" },
    { icon: People, value: "50K+", label: "Happy Customers", color: "#10b981" },
    { icon: Star, value: "4.9", label: "Average Rating", color: "#f59e0b" },
  ]

  return (
    <Box sx={{ pt: 8 }}>
      {/* Hero Section */}
      <Box sx={styles.heroSection(theme)}>
        <Container maxWidth="lg">
          <MotionBox
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            sx={{ textAlign: "center", mb: 8 }}
          >
            {isAuthenticated && (
              <Fade in timeout={1000}>
                <Chip
                  label={`Welcome back, ${user?.username}! 👋`}
                  sx={styles.heroWelcomeChip}
                />
              </Fade>
            )}

            <Typography variant="h1" sx={styles.heroTitle}>
              Welcome to{" "}
              <Box component="span" sx={styles.heroShopHub}>
                ShopHub
              </Box>
            </Typography>

            <Typography variant="h5" color="text.secondary" sx={styles.heroSubtitle}>
              Your ultimate destination for discovering amazing products at unbeatable prices with a seamless shopping
              experience
            </Typography>

            <Box sx={{ display: "flex", gap: 3, justifyContent: "center", flexWrap: "wrap" }}>
              {isAuthenticated ? (
                <MotionBox
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    component={Link}
                    to="/products"
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForward />}
                    sx={styles.heroButton}
                  >
                    Manage Products
                  </Button>
                </MotionBox>
              ) : (
                <>
                  <MotionBox
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button
                      component={Link}
                      to="/signup"
                      variant="contained"
                      size="large"
                      endIcon={<ArrowForward />}
                      sx={styles.heroButton}
                    >
                      Get Started
                    </Button>
                  </MotionBox>
                  <MotionBox
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button
                      component={Link}
                      to="/login"
                      variant="outlined"
                      size="large"
                      sx={styles.heroButtonOutlined(theme)}
                    >
                      Sign In
                    </Button>
                  </MotionBox>
                </>
              )}
            </Box>
          </MotionBox>

          {/* Image Carousel */}
          <MotionBox
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <ImageCarousel />
          </MotionBox>
        </Container>

        {/* Background Decorations */}
        <Box sx={styles.heroBgCircle1} />
        <Box sx={styles.heroBgCircle2} />
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={styles.featuresSection}>
        <MotionBox
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          sx={{ textAlign: "center", mb: 8 }}
        >
          <Typography variant="h2" sx={styles.featuresTitle}>
            Why Choose ShopHub?
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={styles.featuresSubtitle}>
            We provide the best shopping experience with these amazing features
          </Typography>
        </MotionBox>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={feature.title}>
              <MotionCard
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                sx={styles.featureCard(feature, theme)}
              >
                <CardContent sx={{ p: 0 }}>
                  <Box sx={styles.featureIconContainer(feature, theme)}>
                    <feature.icon sx={styles.featureIcon} />
                  </Box>
                  <Typography variant="h5" sx={styles.featureTitle}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={styles.featureDescription}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </MotionCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Stats Section */}
      <Box sx={styles.statsSection}>
        <Container maxWidth="lg">
          <Grid container spacing={6} sx={{ textAlign: "center" }}>
            {stats.map((stat, index) => (
              <Grid item xs={12} md={4} key={stat.label}>
                <MotionBox
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Box sx={styles.statIconContainer}>
                    <stat.icon sx={styles.statIcon} />
                  </Box>
                  <Typography variant="h2" sx={styles.statValue}>
                    {stat.value}
                  </Typography>
                  <Typography variant="h6" sx={styles.statLabel}>
                    {stat.label}
                  </Typography>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Container>
        {/* Background Decorations */}
        <Box sx={styles.statsBgCircle1} />
        <Box sx={styles.statsBgCircle2} />
      </Box>

      {/* CTA Section */}
      {!isAuthenticated && (
        <Container maxWidth="lg" sx={styles.ctaSection}>
          <MotionBox
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            sx={styles.ctaContainer(theme)}
          >
            <Typography variant="h2" sx={styles.ctaTitle}>
              Ready to Start Shopping?
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={styles.ctaSubtitle}>
              Join thousands of satisfied customers and discover your next favorite product with our premium shopping
              experience
            </Typography>
            <Box sx={{ display: "flex", gap: 3, justifyContent: "center", flexWrap: "wrap" }}>
              <MotionBox
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  component={Link}
                  to="/signup"
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  sx={styles.ctaButton}
                >
                  Sign Up Now
                </Button>
              </MotionBox>
              <MotionBox
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  component={Link}
                  to="/login"
                  variant="outlined"
                  size="large"
                  sx={styles.ctaButtonOutlined(theme)}
                >
                  Sign In
                </Button>
              </MotionBox>
            </Box>
          </MotionBox>
        </Container>
      )}

      {/* Global Styles for Animations */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </Box>
  )
}

export default HomePage
