import React from "react"
import { useState, useEffect } from "react"
import { useForm, Controller } from "react-hook-form"
import { useProducts } from "../../hooks/useProducts"
import { useNotification } from "../../contexts/NotificationContext"
import {
  Dialog,
  DialogContent,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  CircularProgress,
  Card,
  CardContent,
  CardHeader,
  MenuItem,
  Divider,
  IconButton,
  useTheme,
  Avatar,
  Grid,
  Slide,
} from "@mui/material"
import {
  Save,
  Add,
  CheckCircle,
  Error,
  Close as CloseIcon,
  Edit,
  Visibility,
  AttachMoney,
  Category,
  Description,
} from "@mui/icons-material"
import { motion, AnimatePresence } from "framer-motion"
import { categoryData } from "../../utiles"
import {
  dialogPaper,
  dialogContent,
  mainCard,
  headerIconContainer,
  headerActionsContainer,
  editButton,
  cardHeader,
  cardContent,
  alert,
  productTitleCard,
  productTitleContent,
  productTitleContainer,
  productAvatar,
  productTitleText,
  priceCard,
  priceContent,
  priceIconContainer,
  priceIcon,
  priceText,
  categoryCard,
  categoryContent,
  categoryIconContainer,
  categoryIcon,
  categoryText,
  descriptionCard,
  descriptionContent,
  descriptionHeader,
  descriptionIcon,
  descriptionTitle,
  descriptionText,
  actionButtonsContainer,
  closeButton,
  cancelButton,
  submitButton,
  formContainer,
  textField,
  descriptionTextField,
  divider,
  loadingIcon,
} from "./styles/productDialogStyles"

const MotionCard = motion(Card)
const MotionButton = motion(Button)
const MotionBox = motion(Box)

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount)
}

const ProductDialog = ({
  open,
  onClose,
  product,
  onSuccess,
  title,
  defaultMode = "view",
}) => {
  const theme = useTheme()
  const { createProduct, updateProduct, loading } = useProducts()
  const { showSuccess, showError } = useNotification()
  const [submitStatus, setSubmitStatus] = useState(null)
  const [mode, setMode] = useState(defaultMode)

  const isEditing = Boolean(product)
  const isViewMode = mode === "view"
  const currencyFormatter = formatCurrency
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
    watch,
  } = useForm({
    defaultValues: {
      title: "",
      price: "",
      description: "",
      category: "",
    },
  })

  const watchedValues = watch()

  useEffect(() => {    
    if (product) {
      reset({
        title: product.title || "",
        price: product.price || "",
        description: product.description || "",
        category: product.category || "",
      })
    } else {
      setMode("edit")
    }
    setSubmitStatus(null)
  }, [product, reset])

  const categoryColor = categoryData?.find((item) => item.name === (product?.category || watchedValues.category))?.color || theme.palette.primary.main

  const onSubmit = async (data) => {
    try {
      setSubmitStatus({
        type: "loading",
        message: isEditing ? "Updating product..." : "Creating product...",
      })

      const productData = {
        title: data.title,
        price: Number.parseFloat(data.price),
        description: data.description,
        category: data.category,
      }

      const result = isEditing ? await updateProduct(product.id, productData) : await createProduct(productData)

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: isEditing ? "Product updated successfully!" : "Product created successfully!",
        })
        
        // Show notification
        if (isEditing) {
          showSuccess("Product updated successfully!")
        } else {
          showSuccess("Product created successfully!")
        }
        
        if (!isEditing) reset()
        onSuccess?.()
        handleClose()
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Something went wrong",
        })
        showError(result.error || "Something went wrong")
      }
    } catch {
      setSubmitStatus({ type: "error", message: "An unexpected error occurred" })
      showError("An unexpected error occurred")
    }
  }

  const handleModeToggle = () => {
    setMode(mode === "view" ? "edit" : "view")
    setSubmitStatus(null)
  }

  const handleClose = () => {
    setSubmitStatus(null)
    onClose()
  }

  const displayProduct = isViewMode ? product : { ...product, ...watchedValues }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      TransitionComponent={Transition}
      PaperProps={{
        sx: dialogPaper,
      }}
    >
      <DialogContent sx={dialogContent}>
        <MotionCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          sx={mainCard}
        >
          {/* Enhanced Header */}
          <CardHeader
            title={
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box sx={headerIconContainer(categoryColor)}>
                  {isViewMode ? <Visibility /> : isEditing ? <Save /> : <Add />}
                </Box>
                <Box>
                  <Typography variant="h6" fontWeight={600}>
                    {title || (isViewMode ? "Product Details" : isEditing ? "Edit Product" : "Add New Product")}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {isViewMode
                      ? "Complete product information"
                      : isEditing
                        ? "Update product information"
                        : "Fill in the product details"}
                  </Typography>
                </Box>
              </Box>
            }
            action={
              <Box sx={headerActionsContainer}>
                {product && isViewMode && (
                  <>
                    <IconButton
                      onClick={handleModeToggle}
                      sx={editButton(theme)}
                    >
                      <Edit />
                    </IconButton>
                  </>
                )}
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </Box>
            }
            sx={cardHeader(categoryColor)}
          />

          <CardContent sx={cardContent}>
            {/* Status Alert */}
            <AnimatePresence>
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                  animate={{ opacity: 1, height: "auto", marginBottom: 16 }}
                  exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Alert
                    severity={submitStatus.type === "loading" ? "info" : submitStatus.type}
                    icon={
                      submitStatus.type === "loading" ? (
                        <CircularProgress size={20} />
                      ) : submitStatus.type === "success" ? (
                        <CheckCircle />
                      ) : (
                        <Error />
                      )
                    }
                    sx={alert}
                  >
                    {submitStatus.message}
                  </Alert>
                </motion.div>
              )}
            </AnimatePresence>

            {isViewMode && displayProduct ? (
              /* VIEW MODE */
              <>
                {/* Product Title Section */}
                <MotionBox initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                  <Card sx={productTitleCard(categoryColor)}>
                    <CardContent sx={productTitleContent}>
                      <Box sx={productTitleContainer}>
                        <Avatar sx={productAvatar(categoryColor)}>
                          {displayProduct.title?.charAt(0) || "P"}
                        </Avatar>
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="h5" sx={productTitleText(categoryColor)}>
                            {displayProduct.title}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </MotionBox>

                {/* Product Information Grid */}
                <Grid container spacing={2} sx={{ mb: 3 }}>
                  <Grid item xs={12} sm={6}>
                    <MotionCard
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      sx={priceCard(theme)}
                    >
                      <CardContent sx={priceContent}>
                        <Box sx={priceIconContainer(theme)}>
                          <Box sx={priceIcon(theme)}>
                            <AttachMoney />
                          </Box>
                          <Typography variant="subtitle2" color="text.secondary">
                            Price
                          </Typography>
                        </Box>
                        <Typography variant="h4" sx={priceText(theme)}>
                          {currencyFormatter(displayProduct.price)}
                        </Typography>
                      </CardContent>
                    </MotionCard>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <MotionCard
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      sx={categoryCard(categoryColor)}
                    >
                      <CardContent sx={categoryContent}>
                        <Box sx={categoryIconContainer(categoryColor)}>
                          <Box sx={categoryIcon(categoryColor)}>
                            <Category />
                          </Box>
                          <Typography variant="subtitle2" color="text.secondary">
                            Category
                          </Typography>
                        </Box>
                        <Typography variant="h5" sx={categoryText(categoryColor)}>
                          {displayProduct.category}
                        </Typography>
                      </CardContent>
                    </MotionCard>
                  </Grid>
                </Grid>

                <Divider sx={{ my: 3 }} />

                {/* Description */}
                <MotionCard
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  sx={descriptionCard(theme)}
                >
                  <CardContent sx={descriptionContent}>
                    <Box sx={descriptionHeader}>
                      <Box sx={descriptionIcon(theme)}>
                        <Description />
                      </Box>
                      <Typography variant="h6" sx={descriptionTitle}>
                        Product Description
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={descriptionText}>
                      {displayProduct.description}
                    </Typography>
                  </CardContent>
                </MotionCard>

                {/* Action Buttons */}
                <Box sx={actionButtonsContainer}>
                  <Button
                    variant="outlined"
                    onClick={handleClose}
                    sx={closeButton}
                  >
                    Close
                  </Button>
                </Box>
              </>
            ) : (
              /* EDIT MODE */
              <Box component="form" onSubmit={handleSubmit(onSubmit)}>
                <Controller
                  name="title"
                  control={control}
                  rules={{
                    required: "Product title is required",
                    minLength: {
                      value: 3,
                      message: "Title must be at least 3 characters",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Product Title"
                      placeholder="Enter product title"
                      error={!!errors.title}
                      helperText={errors.title?.message}
                      disabled={loading}
                      sx={textField}
                    />
                  )}
                />

                <Box sx={formContainer}>
                  <Controller
                    name="price"
                    control={control}
                    rules={{
                      required: "Price is required",
                      min: { value: 0.01, message: "Price must be greater than 0" },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        label="Price ($)"
                        placeholder="0.00"
                        type="number"
                        inputProps={{ step: "0.01", min: "0" }}
                        error={!!errors.price}
                        helperText={errors.price?.message}
                        disabled={loading}
                      />
                    )}
                  />

                  <Controller
                    name="category"
                    control={control}
                    rules={{ required: "Category is required" }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        fullWidth
                        select
                        label="Category"
                        error={!!errors.category}
                        helperText={errors.category?.message}
                        disabled={loading}
                      >
                        {categoryData.map((cat) => (
                          <MenuItem key={cat?.name} value={cat?.name}>
                            {cat?.name}
                          </MenuItem>
                        ))}
                      </TextField>
                    )}
                  />
                </Box>

                <Controller
                  name="description"
                  control={control}
                  rules={{
                    required: "Description is required",
                    minLength: {
                      value: 10,
                      message: "Description must be at least 10 characters",
                    },
                  }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      multiline
                      rows={3}
                      label="Description"
                      placeholder="Enter product description"
                      error={!!errors.description}
                      helperText={errors.description?.message}
                      disabled={loading}
                      sx={descriptionTextField}
                    />
                  )}
                />

                <Divider sx={divider} />

                <Box sx={actionButtonsContainer}>
                  {product && (
                    <Button
                      variant="outlined"
                      onClick={handleClose}
                      disabled={loading}
                      sx={cancelButton}
                    >
                      Cancel
                    </Button>
                  )}
                  <MotionButton
                    type="submit"
                    variant="contained"
                    disabled={loading || !isDirty}
                    startIcon={
                      loading ? <CircularProgress size={20} sx={loadingIcon} /> : isEditing ? <Save /> : <Add />
                    }
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                    sx={submitButton(categoryColor, theme)}
                  >
                    {loading
                      ? isEditing
                        ? "Updating..."
                        : "Creating..."
                      : isEditing
                        ? "Update Product"
                        : "Create Product"}
                  </MotionButton>
                </Box>
              </Box>
            )}
          </CardContent>
        </MotionCard>
      </DialogContent>
    </Dialog>
  )
}

export default ProductDialog
