import { Box, Typography, Button, Chip, useTheme } from "@mui/material"
import { Add, Inventory2 } from "@mui/icons-material"
import { motion } from "framer-motion"
import {
  productsHeader,
  headerLeftSection,
  headerIconContainer,
  headerIcon,
  headerTitle,
  headerSubtitleContainer,
  headerSubtitle,
  headerChip,
  addProductButton,
} from "./styles/productsHeaderStyles"

const MotionBox = motion(Box)
const MotionButton = motion(Button)

const ProductsHeader = ({ onAddProduct, totalProducts = 0, className = "products-header" }) => {
  const theme = useTheme()

  return (
    <MotionBox
      className={className}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      sx={productsHeader(theme)}
    >
      {/* Left Section */}
      <Box sx={headerLeftSection}>
        <Box sx={headerIconContainer(theme)}>
          <Inventory2 sx={headerIcon} />
        </Box>

        <Box>
          <Typography
            variant="h5"
            component="h1"
            sx={headerTitle(theme)}
          >
            Product Management
          </Typography>

          <Box sx={headerSubtitleContainer}>
            <Typography
              variant="body2"
              sx={headerSubtitle(theme)}
            >
              Manage your inventory
            </Typography>
            {totalProducts > 0 && (
              <Chip
                label={`${totalProducts} products`}
                size="small"
                sx={headerChip(theme)}
              />
            )}
          </Box>
        </Box>
      </Box>

      {/* Right Section */}
      <MotionButton
        variant="contained"
        startIcon={<Add />}
        onClick={onAddProduct}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        sx={addProductButton(theme)}
      >
        Add Product
      </MotionButton>
    </MotionBox>
  )
}

export default ProductsHeader
