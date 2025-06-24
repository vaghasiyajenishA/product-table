import { useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setSearchTerm, setSelectedCategory } from "../../store/slices/productSlice"
import {
  Box,
  TextField,
  InputAdornment,
  Paper,
  Typography,
  Chip,
  IconButton,
  useTheme,
  Popover,
  Divider,
  Grid,
} from "@mui/material"
import { Search, FilterList, Clear, ExpandMore, Close, CheckCircle } from "@mui/icons-material"
import { motion } from "framer-motion"
import { categoryData } from "../../utiles"
import {
  filtersContainer,
  searchField,
  searchIcon,
  categorySelector,
  categoryIcon,
  categoryText,
  expandIcon,
  filterActionsContainer,
  activeFiltersChip,
  clearFiltersButton,
  clearIcon,
  filterToggleButton,
  filterListIcon,
  popoverPaper,
  popoverContent,
  popoverTitle,
  categoryList,
  categoryOption,
  categoryOptionIcon,
  categoryOptionText,
  categoryOptionTextBold,
  checkCircleIcon,
  divider,
  filtersPopoverPaper,
  filtersPopoverHeader,
  filtersPopoverTitle,
  closeIcon,
  filtersList,
  filterItem,
  searchChip,
  categoryChip,
  smallCloseIcon,
  clearAllContainer,
  clearAllText,
  clearAllButton,
  noFiltersText,
} from "./styles/productFiltersStyles"

const MotionPaper = motion(Paper)
const MotionBox = motion(Box)
const MotionChip = motion(Chip)
const MotionIconButton = motion(IconButton)

const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

const ProductFilters = () => {
  const theme = useTheme()
  const dispatch = useDispatch()
  const { searchTerm, selectedCategory } = useSelector((state) => state.products)
  const [searchValue, setSearchValue] = useState(searchTerm || "")
  const [categoryAnchor, setCategoryAnchor] = useState(null)
  const [filtersAnchor, setFiltersAnchor] = useState(null)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce((term) => {
      dispatch(setSearchTerm(term))
    }, 300),
    [dispatch]
  )

  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearchValue(value)
    debouncedSearch(value)
  }

  const handleCategorySelect = (categoryName) => {
    dispatch(setSelectedCategory(categoryName))
    setCategoryAnchor(null)
  }

  const handleClearFilters = () => {
    setSearchValue("")
    dispatch(setSearchTerm(""))
    dispatch(setSelectedCategory("all"))
  }

  const activeFiltersCount = [searchTerm, selectedCategory !== "all" ? selectedCategory : null].filter(Boolean).length

  const selectedCategoryData = categoryData.find((cat) => cat.name === selectedCategory)

  return (
    <MotionPaper
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      elevation={0}
      sx={filtersContainer}
    >
      <Grid container spacing={1} alignItems="center">
        <Grid item xs={12} sm={6} md={5}>
          <TextField
            fullWidth
            size="small"
            placeholder="Search products..."
            value={searchValue}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={searchIcon} />
                </InputAdornment>
              ),
            }}
            sx={searchField(theme)}
          />
        </Grid>

        <Grid item xs={6} sm={3} md={3}>
          <Box
            onClick={(e) => setCategoryAnchor(e.currentTarget)}
            sx={categorySelector(theme)}
          >
            <Box sx={categoryIcon}>{selectedCategoryData ? selectedCategoryData.icon : "🏷️"}</Box>
            <Typography variant="body2" sx={categoryText}>
              {selectedCategory === "all" ? "All" : selectedCategory}
            </Typography>
            <ExpandMore sx={expandIcon} />
          </Box>
        </Grid>

        {/* Filter Actions - Minimal */}
        <Grid item xs={6} sm={3} md={4}>
          <Box sx={filterActionsContainer}>
            {/* Active Filters Indicator */}
            {activeFiltersCount > 0 && (
              <MotionChip
                size="small"
                label={`${activeFiltersCount} active`}
                onClick={(e) => setFiltersAnchor(e.currentTarget)}
                whileHover={{ scale: 1.05 }}
                sx={activeFiltersChip(theme)}
              />
            )}

            {/* Clear Filters */}
            {activeFiltersCount > 0 && (
              <MotionIconButton
                size="small"
                onClick={handleClearFilters}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                sx={clearFiltersButton(theme)}
              >
                <Clear sx={clearIcon} />
              </MotionIconButton>
            )}

            {/* Filter Toggle */}
            <MotionIconButton
              size="small"
              onClick={(e) => setFiltersAnchor(e.currentTarget)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              sx={filterToggleButton(theme)}
            >
              <FilterList sx={filterListIcon} />
            </MotionIconButton>
          </Box>
        </Grid>
      </Grid>

      {/* Category Popover */}
      <Popover
        open={Boolean(categoryAnchor)}
        anchorEl={categoryAnchor}
        onClose={() => setCategoryAnchor(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        PaperProps={{
          sx: popoverPaper,
        }}
      >
        <Box sx={popoverContent}>
          <Typography variant="subtitle2" sx={popoverTitle}>
            Select Category
          </Typography>
          <Box sx={categoryList}>
            <MotionBox
              onClick={() => handleCategorySelect("all")}
              whileHover={{ scale: 1.02 }}
              sx={categoryOption(theme, selectedCategory === "all")}
            >
              <Box sx={categoryOptionIcon}>🏷️</Box>
              <Typography variant="body2" sx={categoryOptionText}>
                All Categories
              </Typography>
              {selectedCategory === "all" && <CheckCircle sx={checkCircleIcon()} />}
            </MotionBox>
            <Divider sx={divider} />
            {categoryData.map((category) => (
              <MotionBox
                key={category.name}
                onClick={() => handleCategorySelect(category.name)}
                whileHover={{ scale: 1.02 }}
                sx={categoryOption(theme, selectedCategory === category.name, category.color)}
              >
                <Box sx={categoryOptionIcon}>{category.icon}</Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" sx={categoryOptionTextBold}>
                    {category.name}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  {selectedCategory === category.name && <CheckCircle sx={checkCircleIcon(category.color)} />}
                </Box>
              </MotionBox>
            ))}
          </Box>
        </Box>
      </Popover>

      {/* Active Filters Popover */}
      <Popover
        open={Boolean(filtersAnchor)}
        anchorEl={filtersAnchor}
        onClose={() => setFiltersAnchor(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: filtersPopoverPaper,
        }}
      >
        <Box sx={popoverContent}>
          <Box sx={filtersPopoverHeader}>
            <Typography variant="subtitle2" sx={filtersPopoverTitle}>
              Active Filters ({activeFiltersCount})
            </Typography>
            <IconButton size="small" onClick={() => setFiltersAnchor(null)}>
              <Close sx={closeIcon} />
            </IconButton>
          </Box>
          {activeFiltersCount > 0 ? (
            <Box sx={filtersList}>
              {searchTerm && (
                <Box sx={filterItem}>
                  <Chip
                    size="small"
                    label={`Search: "${searchTerm.length > 15 ? searchTerm.substring(0, 15) + "..." : searchTerm}"`}
                    sx={searchChip(theme)}
                  />
                  <IconButton
                    size="small"
                    onClick={() => {
                      setSearchValue("")
                      dispatch(setSearchTerm(""))
                    }}
                  >
                    <Close sx={smallCloseIcon} />
                  </IconButton>
                </Box>
              )}
              {selectedCategory && selectedCategory !== "all" && (
                <Box sx={filterItem}>
                  <Chip
                    size="small"
                    label={`Category: ${selectedCategory}`}
                    sx={categoryChip(theme, selectedCategoryData?.color)}
                  />
                  <IconButton size="small" onClick={() => dispatch(setSelectedCategory("all"))}>
                    <Close sx={smallCloseIcon} />
                  </IconButton>
                </Box>
              )}
              <Divider sx={divider} />
              <Box sx={clearAllContainer}>
                <Typography variant="caption" sx={clearAllText}>
                  Clear all filters
                </Typography>
                <IconButton size="small" onClick={handleClearFilters} sx={clearAllButton}>
                  <Clear sx={clearIcon} />
                </IconButton>
              </Box>
            </Box>
          ) : (
            <Typography variant="body2" color="text.secondary" sx={noFiltersText}>
              No active filters
            </Typography>
          )}
        </Box>
      </Popover>
    </MotionPaper>
  )
}

export default ProductFilters
