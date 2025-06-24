import { useState, useEffect, useCallback } from "react"
import { Box, IconButton, Typography, Fade } from "@mui/material"
import { KeyboardArrowLeft, KeyboardArrowRight, PlayArrow, Pause } from "@mui/icons-material"
import { carouselImages } from "../../utiles"
import {
  carouselContainer,
  navButtonStyle,
  playPauseButtonStyle,
  indicatorStyle,
  floatAnimation,
  overlayBox,
  contentBox,
  headingStyle,
  subheadingStyle,
  decorativeCircle1,
  decorativeCircle2,
  imageSlideStyle,
  indicatorContainer
} from "./carouselStyles"

const ImageCarousel = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const maxSteps = carouselImages.length

  const handleNext = useCallback(() => {
    setActiveStep((prev) => (prev === maxSteps - 1 ? 0 : prev + 1))
  }, [maxSteps])

  const handleBack = () => {
    setActiveStep((prev) => (prev === 0 ? maxSteps - 1 : prev - 1))
  }

  const togglePlayPause = () => setIsPlaying((prev) => !prev)

  useEffect(() => {
    if (!isPlaying) return
    const timer = setInterval(handleNext, 5000)
    return () => clearInterval(timer)
  }, [handleNext, isPlaying])

  return (
    <Box sx={carouselContainer}>
      {carouselImages.map((image, index) => (
        <Fade key={index} in={index === activeStep} timeout={800}>
          <Box sx={{ ...imageSlideStyle(index === activeStep, image) }}>
            <Box sx={overlayBox} />
            <Box sx={contentBox}>
              <Typography variant="h3" sx={headingStyle}>{image.title}</Typography>
              <Typography variant="h6" sx={subheadingStyle}>{image.description}</Typography>
            </Box>
            <Box sx={{ ...decorativeCircle1, ...floatAnimation }} />
            <Box sx={decorativeCircle2} />
          </Box>
        </Fade>
      ))}

      <IconButton onClick={handleBack} sx={navButtonStyle("left")}>
        <KeyboardArrowLeft sx={{ fontSize: { xs: 20, sm: 24 } }} />
      </IconButton>
      <IconButton onClick={handleNext} sx={navButtonStyle("right")}>
        <KeyboardArrowRight sx={{ fontSize: { xs: 20, sm: 24 } }} />
      </IconButton>

      <IconButton onClick={togglePlayPause} sx={playPauseButtonStyle}>
        {isPlaying ? <Pause sx={{ fontSize: { xs: 16, sm: 20 } }} /> : <PlayArrow sx={{ fontSize: { xs: 16, sm: 20 } }} />}
      </IconButton>

      <Box sx={indicatorContainer}>
        {carouselImages.map((_, index) => (
          <Box
            key={index}
            onClick={() => setActiveStep(index)}
            sx={indicatorStyle(index === activeStep)}
          />
        ))}
      </Box>
    </Box>
  )
}

export default ImageCarousel
