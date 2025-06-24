import { alpha } from '@mui/material/styles'

export const heroSection = (theme) => ({
  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.secondary.main, 0.05)} 100%)`,
  py: { xs: 8, md: 12 },
  position: 'relative',
  overflow: 'hidden',
})

export const heroWelcomeChip = {
  mb: 3,
  px: 3,
  py: 1,
  fontSize: '1rem',
  fontWeight: 600,
  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
  color: 'white',
  boxShadow: '0px 4px 12px rgba(99, 102, 241, 0.3)',
}

export const heroTitle = {
  mb: 3,
  background: 'linear-gradient(135deg, #1e293b 0%, #475569 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
  fontWeight: 800,
  lineHeight: 1.1,
}

export const heroShopHub = {
  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
}

export const heroSubtitle = {
  mb: 6,
  maxWidth: 700,
  mx: 'auto',
  fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
  lineHeight: 1.6,
}

export const heroButton = {
  px: 4,
  py: 2,
  fontSize: '1.1rem',
  borderRadius: '16px',
  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
  boxShadow: '0px 8px 24px rgba(99, 102, 241, 0.3)',
  '&:hover': {
    background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
    boxShadow: '0px 12px 32px rgba(99, 102, 241, 0.4)',
  },
}

export const heroButtonOutlined = (theme) => ({
  px: 4,
  py: 2,
  fontSize: '1.1rem',
  borderRadius: '16px',
  borderWidth: '2px',
  borderColor: theme.palette.primary.main,
  color: theme.palette.primary.main,
  '&:hover': {
    borderWidth: '2px',
    backgroundColor: alpha(theme.palette.primary.main, 0.05),
  },
})

export const heroBgCircle1 = {
  position: 'absolute',
  top: '10%',
  right: '10%',
  width: 100,
  height: 100,
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
  opacity: 0.1,
  animation: 'float 6s ease-in-out infinite',
}

export const heroBgCircle2 = {
  position: 'absolute',
  bottom: '20%',
  left: '5%',
  width: 60,
  height: 60,
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
  opacity: 0.1,
  animation: 'float 4s ease-in-out infinite reverse',
}

export const featuresSection = {
  py: { xs: 8, md: 12 },
}

export const featuresTitle = {
  mb: 2,
  fontWeight: 700,
  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
}

export const featuresSubtitle = {
  maxWidth: 600,
  mx: 'auto',
  fontSize: { xs: '1rem', sm: '1.25rem' },
}

export const featureCard = (feature, theme) => ({
  height: '100%',
  textAlign: 'center',
  p: 3,
  border: '1px solid',
  borderColor: 'grey.200',
  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    borderColor: feature.color,
    boxShadow: `0px 20px 40px ${alpha(feature.color, 0.15)}`,
  },
})

export const featureIconContainer = (feature, theme) => ({
  width: 80,
  height: 80,
  borderRadius: '20px',
  background: `linear-gradient(135deg, ${feature.color} 0%, ${alpha(feature.color, 0.8)} 100%)`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  mx: 'auto',
  mb: 3,
  boxShadow: `0px 8px 24px ${alpha(feature.color, 0.3)}`,
})

export const featureIcon = {
  fontSize: 36,
  color: 'white',
}

export const featureTitle = {
  mb: 2,
  fontWeight: 600,
}

export const featureDescription = {
  lineHeight: 1.6,
}

export const statsSection = {
  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
  py: { xs: 8, md: 12 },
  color: 'white',
  position: 'relative',
  overflow: 'hidden',
}

export const statIconContainer = {
  width: 100,
  height: 100,
  borderRadius: '24px',
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  mx: 'auto',
  mb: 3,
  border: '1px solid rgba(255, 255, 255, 0.2)',
}

export const statIcon = {
  fontSize: 48,
  color: 'white',
}

export const statValue = {
  fontWeight: 800,
  fontSize: { xs: '2.5rem', sm: '3rem' },
  mb: 1,
}

export const statLabel = {
  opacity: 0.9,
  fontSize: { xs: '1rem', sm: '1.25rem' },
}

export const statsBgCircle1 = {
  position: 'absolute',
  top: '-50px',
  right: '-50px',
  width: 200,
  height: 200,
  borderRadius: '50%',
  background: 'rgba(255, 255, 255, 0.05)',
  animation: 'float 8s ease-in-out infinite',
}

export const statsBgCircle2 = {
  position: 'absolute',
  bottom: '-100px',
  left: '-100px',
  width: 300,
  height: 300,
  borderRadius: '50%',
  background: 'rgba(255, 255, 255, 0.03)',
  animation: 'float 10s ease-in-out infinite reverse',
}

export const ctaSection = {
  py: { xs: 8, md: 12 },
}

export const ctaContainer = (theme) => ({
  textAlign: 'center',
  p: { xs: 4, md: 8 },
  borderRadius: '24px',
  background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
  border: '1px solid #e2e8f0',
  position: 'relative',
  overflow: 'hidden',
})

export const ctaTitle = {
  mb: 2,
  fontWeight: 700,
  fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
}

export const ctaSubtitle = {
  mb: 6,
  maxWidth: 600,
  mx: 'auto',
  fontSize: { xs: '1rem', sm: '1.25rem' },
  lineHeight: 1.6,
}

export const ctaButton = {
  px: 4,
  py: 2,
  fontSize: '1.1rem',
  borderRadius: '16px',
  background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
  boxShadow: '0px 8px 24px rgba(99, 102, 241, 0.3)',
  '&:hover': {
    background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
    boxShadow: '0px 12px 32px rgba(99, 102, 241, 0.4)',
  },
}

export const ctaButtonOutlined = (theme) => ({
  px: 4,
  py: 2,
  fontSize: '1.1rem',
  borderRadius: '16px',
  borderWidth: '2px',
  borderColor: theme.palette.primary.main,
  color: theme.palette.primary.main,
  '&:hover': {
    borderWidth: '2px',
    backgroundColor: alpha(theme.palette.primary.main, 0.05),
  },
})