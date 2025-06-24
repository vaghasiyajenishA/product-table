import { alpha } from "@mui/material/styles"

export const dialogPaper = {
  borderRadius: "16px",
  maxHeight: "90vh",
}

export const dialogContent = {
  p: 0,
}

export const mainCard = {
  borderRadius: "16px",
  boxShadow: "none",
  border: "none",
  width: "100%",
  position: "relative",
  overflow: "hidden",
}

export const headerIconContainer = (categoryColor) => ({
  width: 40,
  height: 40,
  borderRadius: "8px",
  background: `linear-gradient(135deg, ${categoryColor} 0%, ${alpha(categoryColor, 0.8)} 100%)`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
})

export const headerActionsContainer = {
  display: "flex",
  gap: 1,
}

export const editButton = (theme) => ({
  backgroundColor: alpha(theme.palette.primary.main, 0.1),
  color: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.2),
  },
})

export const cardHeader = (categoryColor) => ({
  pb: 1,
  background: `linear-gradient(135deg, ${alpha(categoryColor, 0.05)} 0%, ${alpha(categoryColor, 0.02)} 100%)`,
})

export const cardContent = {
  maxHeight: "70vh",
  overflowY: "auto",
}

export const alert = {
  borderRadius: "8px",
}

export const productTitleCard = (categoryColor) => ({
  mb: 3,
  borderRadius: 3,
  border: `1px solid ${alpha(categoryColor, 0.2)}`,
  backgroundColor: alpha(categoryColor, 0.05),
})

export const productTitleContent = {
  p: 3,
}

export const productTitleContainer = {
  display: "flex",
  alignItems: "flex-start",
  gap: 2,
  mb: 2,
}

export const productAvatar = (categoryColor) => ({
  width: 60,
  height: 60,
  backgroundColor: alpha(categoryColor, 0.2),
  color: categoryColor,
  fontSize: "1.5rem",
  fontWeight: 600,
})

export const productTitleText = (categoryColor) => ({
  fontWeight: 600,
  color: categoryColor,
  mb: 1,
})

export const priceCard = (theme) => ({
  borderRadius: 3,
  border: `1px solid ${alpha(theme.palette.success.main, 0.2)}`,
  backgroundColor: alpha(theme.palette.success.main, 0.05),
  height: "100%",
})

export const priceContent = {
  p: 2.5,
}

export const priceIconContainer = (theme) => ({
  display: "flex",
  alignItems: "center",
  gap: 2,
  mb: 1,
})

export const priceIcon = (theme) => ({
  p: 1,
  borderRadius: 2,
  backgroundColor: alpha(theme.palette.success.main, 0.1),
  color: theme.palette.success.main,
})

export const priceText = (theme) => ({
  fontWeight: 700,
  color: theme.palette.success.main,
})

export const categoryCard = (categoryColor) => ({
  borderRadius: 3,
  border: `1px solid ${alpha(categoryColor, 0.2)}`,
  backgroundColor: alpha(categoryColor, 0.05),
  height: "100%",
})

export const categoryContent = {
  p: 2.5,
}

export const categoryIconContainer = (categoryColor) => ({
  display: "flex",
  alignItems: "center",
  gap: 2,
  mb: 1,
})

export const categoryIcon = (categoryColor) => ({
  p: 1,
  borderRadius: 2,
  backgroundColor: alpha(categoryColor, 0.1),
  color: categoryColor,
})

export const categoryText = (categoryColor) => ({
  fontWeight: 600,
  color: categoryColor,
})

export const descriptionCard = (theme) => ({
  borderRadius: 3,
  backgroundColor: alpha(theme.palette.grey[100], 0.5),
  border: "1px solid",
  borderColor: "grey.200",
  mb: 3,
})

export const descriptionContent = {
  p: 3,
}

export const descriptionHeader = {
  display: "flex",
  alignItems: "center",
  gap: 2,
  mb: 2,
}

export const descriptionIcon = (theme) => ({
  p: 1,
  borderRadius: 2,
  backgroundColor: alpha(theme.palette.primary.main, 0.1),
  color: theme.palette.primary.main,
})

export const descriptionTitle = {
  fontWeight: 600,
}

export const descriptionText = {
  lineHeight: 1.7,
  color: "text.primary",
  backgroundColor: "white",
  p: 2.5,
  borderRadius: 2,
  border: "1px solid",
  borderColor: "grey.100",
}

export const actionButtonsContainer = {
  display: "flex",
  gap: 2,
  justifyContent: "flex-end",
}

export const closeButton = {
  borderRadius: "8px",
  px: 3,
  py: 1.5,
  fontWeight: 600,
}

export const cancelButton = {
  borderRadius: "8px",
  px: 3,
  py: 1.5,
  fontWeight: 600,
}

export const submitButton = (categoryColor, theme) => ({
  py: 1.5,
  px: 4,
  borderRadius: "8px",
  fontWeight: 600,
  fontSize: "1rem",
  background: `linear-gradient(135deg, ${categoryColor} 0%, ${alpha(categoryColor, 0.8)} 100%)`,
  "&:hover": {
    background: `linear-gradient(135deg, ${alpha(categoryColor, 0.9)} 0%, ${alpha(categoryColor, 0.7)} 100%)`,
  },
  "&:disabled": {
    background: theme.palette.grey[400],
  },
})

export const formContainer = {
  display: "flex",
  gap: 2,
  mb: 2,
}

export const textField = {
  mb: 2,
}

export const descriptionTextField = {
  mb: 3,
}

export const divider = {
  mb: 3,
}

export const loadingIcon = {
  color: "white",
} 