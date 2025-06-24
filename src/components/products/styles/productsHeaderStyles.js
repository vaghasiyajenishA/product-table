export const productsHeader = (theme) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 3,
  padding: 3,
  background: `linear-gradient(135deg, ${theme.palette.primary.main}15 0%, ${theme.palette.primary.main}08 100%)`,
  borderRadius: "16px",
  border: `1px solid ${theme.palette.primary.main}20`,
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "3px",
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  },
})

export const headerLeftSection = {
  display: "flex",
  alignItems: "center",
  gap: 2,
}

export const headerIconContainer = (theme) => ({
  width: 48,
  height: 48,
  borderRadius: "12px",
  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  boxShadow: `0 4px 12px ${theme.palette.primary.main}30`,
})

export const headerIcon = {
  fontSize: 24,
}

export const headerTitle = (theme) => ({
  fontWeight: 700,
  color: theme.palette.text.primary,
  mb: 0.5,
  lineHeight: 1.2,
})

export const headerSubtitleContainer = {
  display: "flex",
  alignItems: "center",
  gap: 1,
}

export const headerSubtitle = (theme) => ({
  color: theme.palette.text.secondary,
  fontWeight: 500,
})

export const headerChip = (theme) => ({
  height: 20,
  fontSize: "0.75rem",
  fontWeight: 600,
  backgroundColor: `${theme.palette.primary.main}15`,
  color: theme.palette.primary.main,
  border: `1px solid ${theme.palette.primary.main}30`,
})

export const addProductButton = (theme) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  fontWeight: 600,
  px: 3,
  py: 1.2,
  borderRadius: "12px",
  textTransform: "none",
  boxShadow: `0 4px 12px ${theme.palette.primary.main}40`,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    boxShadow: `0 6px 16px ${theme.palette.primary.main}50`,
  },
}) 