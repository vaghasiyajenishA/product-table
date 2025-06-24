export const formWrapper = {
  opacity: 0,
  transform: "translateY(20px)",
  animation: "fadeInUp 0.6s forwards",
}

export const formHeader = {
  textAlign: "center",
  marginBottom: "2rem",
}

export const formIconContainer = {
  width: 80,
  height: 80,
  borderRadius: 20,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 1rem auto",
  boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.1) !important",
}

export const formIconContainerGreen = {
  width: 80,
  height: 80,
  borderRadius: 20,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 1rem auto",
  background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
  boxShadow: "0px 8px 24px rgba(16, 185, 129, 0.3) !important",
}

export const formIcon = {
  fontSize: 36,
  color: "white",
}

export const formTitle = {
  fontWeight: 700,
  marginBottom: "0.5rem",
  background: "linear-gradient(135deg, #1e293b 0%, #475569 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  color: "transparent",
}

export const formSubtext = {
  color: "#64748b",
  fontSize: "1.1rem",
}

export const formErrorBox = {
  marginBottom: "1rem",
}

export const formErrorAlert = {
  borderRadius: 12,
  border: "1px solid #fca5a5",
  backgroundColor: "rgba(239, 68, 68, 0.05)",
}

export const formContent = {
  marginTop: "1rem",
}

export const formInput = {
  "& .MuiOutlinedInput-root": {
    backgroundColor: "#fff",
    transition: "all 0.2s ease-in-out",
  },
  "& .MuiOutlinedInput-root:hover": {
    backgroundColor: "rgba(16, 185, 129, 0.02)",
  },
  "& .MuiOutlinedInput-root.Mui-focused": {
    backgroundColor: "rgba(16, 185, 129, 0.02)",
  },
}

export const inputIcon = {
  color: "#94a3b8",
}

export const formButtonGreen = {
  marginTop: "2rem",
  marginBottom: "1rem",
  padding: "0.9rem 0",
  fontSize: "1rem",
  fontWeight: 600,
  borderRadius: 12,
  background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
  boxShadow: "0px 8px 24px rgba(16, 185, 129, 0.3)",
  "&:hover": {
    background: "linear-gradient(135deg, #059669 0%, #047857 100%)",
    boxShadow: "0px 12px 32px rgba(16, 185, 129, 0.4)",
  },
}

export const fadeInUpAnimation = `
  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
` 