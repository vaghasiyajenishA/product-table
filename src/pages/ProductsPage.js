import { useState, useEffect } from "react"
import { Container, Box, Alert } from "@mui/material"
import { useProducts } from "../hooks/useProducts"
import ProductDialog from "../components/products/ProductDialog"
import ProductTable from "../components/products/ProductTable"
import ProductFilters from "../components/products/ProductFilters"
import ProductsHeader from "../components/products/ProductsHeader"
import { productsPage, productsHeader, productsError } from "./styles/productsPageStyles"

const ProductsPage = () => {
  const [isAddOpen, setIsAddOpen] = useState(false)
  const { fetchProducts, error } = useProducts()

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  return (
    <Container maxWidth="lg" sx={productsPage}>
      <Box sx={productsHeader}>
        <ProductsHeader onAddProduct={() => setIsAddOpen(true)} totalCategories={8} />
      </Box>

      {error && (
        <Alert severity="error" sx={productsError}>
          {error}
        </Alert>
      )}
      <ProductFilters />
      <ProductTable />
      <ProductDialog open={isAddOpen} onSuccess={() => setIsAddOpen(false)} onClose={() => setIsAddOpen(false)} />
    </Container>
  )
}

export default ProductsPage
