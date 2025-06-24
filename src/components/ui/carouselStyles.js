export const carouselContainer = {
  position: "relative",
  width: "100%",
  height: { xs: 300, sm: 400, md: 500 },
  borderRadius: "24px",
  overflow: "hidden",
  boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.1)",
  border: "1px solid",
  borderColor: "grey.200",
}

export const imageSlideStyle = (isActive, image) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: isActive ? "flex" : "none",
  alignItems: "center",
  justifyContent: "center",
  background: image.gradient,
  backgroundImage: image?.src ? `url(${image.src})` : "none",
  backgroundSize: "cover",
  backgroundPosition: "center",
})

export const overlayBox = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0, 0, 0, 0.3)",
  backdropFilter: "blur(1px)",
}

export const contentBox = {
  textAlign: "center",
  color: "white",
  zIndex: 2,
  px: { xs: 3, sm: 6 },
  maxWidth: 800,
}

export const headingStyle = {
  mb: 2,
  fontWeight: 800,
  fontSize: { xs: "1.75rem", sm: "2.5rem", md: "3rem" },
  textShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
}

export const subheadingStyle = {
  fontSize: { xs: "1rem", sm: "1.25rem" },
  opacity: 0.95,
  textShadow: "0px 1px 2px rgba(0, 0, 0, 0.3)",
  lineHeight: 1.6,
}

export const decorativeCircle1 = {
  position: "absolute",
  top: "20%",
  right: "10%",
  width: { xs: 60, sm: 80, md: 100 },
  height: { xs: 60, sm: 80, md: 100 },
  borderRadius: "50%",
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
}

export const decorativeCircle2 = {
  position: "absolute",
  bottom: "15%",
  left: "8%",
  width: { xs: 40, sm: 60, md: 80 },
  height: { xs: 40, sm: 60, md: 80 },
  borderRadius: "50%",
  background: "rgba(255, 255, 255, 0.08)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.15)",
  animation: "float 4s ease-in-out infinite reverse",
}

export const floatAnimation = {
  animation: "float 6s ease-in-out infinite",
  "@keyframes float": {
    "0%": { transform: "translateY(0px)" },
    "50%": { transform: "translateY(-10px)" },
    "100%": { transform: "translateY(0px)" },
  },
}

export const navButtonStyle = (side) => ({
  position: "absolute",
  [side]: { xs: 12, sm: 20 },
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  width: { xs: 40, sm: 48 },
  height: { xs: 40, sm: 48 },
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 1)",
    transform: "translateY(-50%) scale(1.1)",
  },
})

export const playPauseButtonStyle = {
  position: "absolute",
  bottom: { xs: 12, sm: 20 },
  right: { xs: 12, sm: 20 },
  backgroundColor: "rgba(255, 255, 255, 0.9)",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  width: { xs: 36, sm: 40 },
  height: { xs: 36, sm: 40 },
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 1)",
    transform: "scale(1.1)",
  },
  transition: "all 0.2s ease-in-out",
}

export const indicatorContainer = {
  position: "absolute",
  bottom: { xs: 12, sm: 20 },
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  gap: 1,
}

export const indicatorStyle = (isActive) => ({
  width: { xs: 8, sm: 12 },
  height: { xs: 8, sm: 12 },
  borderRadius: "50%",
  backgroundColor: isActive ? "white" : "rgba(255, 255, 255, 0.5)",
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  "&:hover": {
    backgroundColor: "white",
    transform: "scale(1.2)",
  },
})
