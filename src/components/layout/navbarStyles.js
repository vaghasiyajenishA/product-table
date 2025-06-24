export const appBar = {
  background: "rgba(255, 255, 255, 0.95)",
  backdropFilter: "blur(20px)",
  borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
  color: "text.primary",
}

export const toolbar = {
  px: { xs: 2, sm: 3, md: 4 },
}

export const logoBox = {
  display: "flex",
  alignItems: "center",
  flexGrow: 1,
}

export const logoLink = {
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  color: "inherit",
}

export const logoIconBox = {
  width: 40,
  height: 40,
  borderRadius: "12px",
  background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  mr: 2,
  boxShadow: "0px 4px 12px rgba(99, 102, 241, 0.3)",
}

export const logoText = {
  fontWeight: 800,
  background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontSize: "1.5rem",
}

export const desktopMenu = {
  display: { xs: "none", md: "flex" },
  alignItems: "center",
  gap: 1,
}

export const navButton = (active) => ({
  color: active ? "primary.main" : "text.primary",
  backgroundColor: active ? "primary.50" : "transparent",
  borderRadius: "12px",
  px: 3,
  py: 1,
  fontWeight: 600,
  "&:hover": {
    backgroundColor: "primary.50",
    color: "primary.main",
  },
})

export const iconButton = {
  mx: 1,
}

export const userSection = {
  display: "flex",
  alignItems: "center",
  gap: 2,
  ml: 2,
}

export const userAvatarSmall = {
  width: 24,
  height: 24,
  bgcolor: "primary.main",
  fontSize: "0.75rem",
}

export const userChip = {
  borderColor: "primary.main",
  color: "primary.main",
  fontWeight: 600,
}

export const userAvatarLarge = {
  width: 36,
  height: 36,
  bgcolor: "primary.main",
  background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
}

export const menuPaper = {
  borderRadius: "12px",
  boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
  border: "1px solid #f1f5f9",
  mt: 1,
}

export const menuItem = {
  borderRadius: "8px",
  mx: 1,
  my: 0.5,
}

export const mobileMenuBox = {
  display: { xs: "flex", md: "none" },
}

export const mobileMenuIconButton = {
  color: "text.primary",
  backgroundColor: "grey.100",
  "&:hover": { backgroundColor: "grey.200" },
} 