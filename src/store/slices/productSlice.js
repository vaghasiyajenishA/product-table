import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  products: [],
  filteredProducts: [],
  searchTerm: "",
  selectedCategory: "all",
  loading: false,
  error: null,
}

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setError: (state, action) => {
      state.error = action.payload
      state.loading = false
    },
    clearError: (state) => {
      state.error = null
    },
    setProducts: (state, action) => {
      state.products = action.payload
      state.filteredProducts = action.payload
      state.loading = false
      state.error = null
    },
    addProduct: (state, action) => {
      state.products.push(action.payload)
      state.loading = false
      productSlice.caseReducers.filterProducts(state)
    },
    updateProduct: (state, action) => {
      const index = state.products.findIndex((p) => p.id === action.payload.id)
      if (index !== -1) {
        state.products[index] = action.payload
        state.loading = false
        productSlice.caseReducers.filterProducts(state)
      }
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter((p) => p.id !== action.payload)
      state.loading = false
      productSlice.caseReducers.filterProducts(state)
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
      productSlice.caseReducers.filterProducts(state)
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload
      productSlice.caseReducers.filterProducts(state)
    },
    filterProducts: (state) => {
      let filtered = state.products

      if (state.searchTerm) {
        filtered = filtered.filter(
          (product) =>
            product.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(state.searchTerm.toLowerCase()),
        )
      }

      if (state.selectedCategory !== "all") {
        filtered = filtered.filter((product) => product.category === state.selectedCategory)
      }

      state.filteredProducts = filtered
    },
    initializeProducts: (state) => {
      const savedProducts = localStorage.getItem("products")
      if (savedProducts) {
        state.products = JSON.parse(savedProducts)
        state.filteredProducts = state.products
      }
    },
  },
})

export const {
  setLoading,
  setError,
  clearError,
  setProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  setSearchTerm,
  setSelectedCategory,
  filterProducts,
  initializeProducts,
} = productSlice.actions

export default productSlice.reducer
