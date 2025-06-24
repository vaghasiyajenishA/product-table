import { alpha } from "@mui/material/styles"

export const filtersContainer = {
  p: 1.5,
  mb: 2,
  borderRadius: 2,
  border: "1px solid",
  borderColor: "grey.200",
  background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)",
}

export const searchField = (theme) => ({
  "& .MuiOutlinedInput-root": {
    height: 36,
    borderRadius: 1.5,
    fontSize: "0.875rem",
    backgroundColor: "background.paper",
    "&:hover": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.primary.main,
      },
    },
  },
})

export const searchIcon = {
  fontSize: 18,
  color: "text.secondary",
}

export const categorySelector = (theme) => ({
  display: "flex",
  alignItems: "center",
  gap: 0.5,
  p: 1,
  width: '200px',
  borderRadius: 1.5,
  border: "1px solid",
  borderColor: "grey.300",
  backgroundColor: "background.paper",
  cursor: "pointer",
  height: 36,
  fontSize: "0.875rem",
  "&:hover": {
    borderColor: theme.palette.primary.main,
    backgroundColor: alpha(theme.palette.primary.main, 0.02),
  },
})

export const categoryIcon = {
  fontSize: "0.9rem",
}

export const categoryText = {
  fontSize: "0.8rem",
  fontWeight: 500,
  flex: 1,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
}

export const expandIcon = {
  fontSize: 16,
  color: "text.secondary",
}

export const filterActionsContainer = {
  display: "flex",
  alignItems: "center",
  gap: 0.5,
  justifyContent: "flex-end",
}

export const activeFiltersChip = (theme) => ({
  height: 24,
  fontSize: "0.7rem",
  backgroundColor: alpha(theme.palette.primary.main, 0.1),
  color: theme.palette.primary.main,
  cursor: "pointer",
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.2),
  },
})

export const clearFiltersButton = (theme) => ({
  width: 28,
  height: 28,
  backgroundColor: alpha(theme.palette.error.main, 0.1),
  color: theme.palette.error.main,
  "&:hover": {
    backgroundColor: alpha(theme.palette.error.main, 0.2),
  },
})

export const clearIcon = {
  fontSize: 14,
}

export const filterToggleButton = (theme) => ({
  width: 28,
  height: 28,
  backgroundColor: alpha(theme.palette.primary.main, 0.1),
  color: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.2),
  },
})

export const filterListIcon = {
  fontSize: 14,
}

export const popoverPaper = {
  mt: 0.5,
  borderRadius: 2,
  border: "1px solid",
  borderColor: "grey.200",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  maxWidth: 280,
}

export const popoverContent = {
  p: 1.5,
}

export const popoverTitle = {
  fontWeight: 600,
  mb: 1,
  color: "text.primary",
}

export const categoryList = {
  display: "flex",
  flexDirection: "column",
  gap: 0.5,
}

export const categoryOption = (theme, isSelected, categoryColor) => ({
  display: "flex",
  alignItems: "center",
  gap: 1,
  p: 1,
  borderRadius: 1,
  cursor: "pointer",
  backgroundColor: isSelected 
    ? alpha(categoryColor || theme.palette.primary.main, 0.1) 
    : "transparent",
  "&:hover": {
    backgroundColor: alpha(categoryColor || theme.palette.primary.main, 0.05),
  },
})

export const categoryOptionIcon = {
  fontSize: "1rem",
}

export const categoryOptionText = {
  flex: 1,
  fontSize: "0.875rem",
}

export const categoryOptionTextBold = {
  fontSize: "0.875rem",
  fontWeight: 500,
}

export const checkCircleIcon = (color) => ({
  fontSize: 16,
  color: color || "primary.main",
})

export const divider = {
  my: 0.5,
}

export const filtersPopoverPaper = {
  mt: 0.5,
  borderRadius: 2,
  border: "1px solid",
  borderColor: "grey.200",
  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
  maxWidth: 300,
}

export const filtersPopoverHeader = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  mb: 1,
}

export const filtersPopoverTitle = {
  fontWeight: 600,
  color: "text.primary",
}

export const closeIcon = {
  fontSize: 16,
}

export const filtersList = {
  display: "flex",
  flexDirection: "column",
  gap: 1,
}

export const filterItem = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}

export const searchChip = (theme) => ({
  fontSize: "0.7rem",
  backgroundColor: alpha(theme.palette.info.main, 0.1),
  color: theme.palette.info.main,
})

export const categoryChip = (theme, categoryColor) => ({
  fontSize: "0.7rem",
  backgroundColor: alpha(categoryColor || theme.palette.primary.main, 0.1),
  color: categoryColor || theme.palette.primary.main,
})

export const smallCloseIcon = {
  fontSize: 12,
}

export const clearAllContainer = {
  display: "flex",
  justifyContent: "space-between",
}

export const clearAllText = {
  color: "text.secondary",
}

export const clearAllButton = {
  color: "error",
}

export const noFiltersText = {
  fontSize: "0.875rem",
} 