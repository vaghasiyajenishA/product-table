

import { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  setLoading,
  setError,
  setProducts,
  addProduct as addProductAction,
  updateProduct as updateProductAction,
  deleteProduct as deleteProductAction,
} from "../store/slices/productSlice"
import { productService } from "../services/productService"

export const useProducts = () => {
  const dispatch = useDispatch()
  const { products, filteredProducts, loading, error } = useSelector((state) => state.products)

  const fetchProducts = useCallback(async () => {
    dispatch(setLoading(true))
    try {
      const result = await productService.getAllProducts()
      if (result.success) {
        dispatch(setProducts(result.data))
      } else {
        dispatch(setError(result.error))
      }
    } catch (error) {
      dispatch(setError(error.message))
    }
  }, [dispatch])

  const createProduct = useCallback(
    async (productData) => {
      dispatch(setLoading(true))
      try {
        const result = await productService.createProduct(productData)
        if (result.success) {
          dispatch(addProductAction(result.data))
          return { success: true, data: result.data }
        } else {
          dispatch(setError(result.error))
          return { success: false, error: result.error }
        }
      } catch (error) {
        dispatch(setError(error.message))
        return { success: false, error: error.message }
      }

    },
    [dispatch],
  )

  const updateProduct = useCallback(
    async (id, productData) => {
      dispatch(setLoading(true))
      try {
        const result = await productService.updateProduct(id, productData)
        if (result.success) {
          dispatch(updateProductAction(result.data))
          return { success: true, data: result.data }
        } else {
          dispatch(setError(result.error))
          return { success: false, error: result.error }
        }
      } catch (error) {
        dispatch(setError(error.message))
        return { success: false, error: error.message }
      }
    },
    [dispatch],
  )

  const deleteProduct = useCallback(
    async (id, productData) => {
      dispatch(setLoading(true))
      try {
        const result = await productService.deleteProduct(id, productData)
        if (result.success) {
          dispatch(deleteProductAction(id))
          return { success: true }
        } else {
          dispatch(setError(result.error))
          return { success: false, error: result.error }
        }
      } catch (error) {
        dispatch(setError(error.message))
        return { success: false, error: error.message }
      }
    },
    [dispatch],
  )

  return {
    products,
    filteredProducts,
    loading,
    error,
    fetchProducts,
    createProduct,
    updateProduct,
    deleteProduct,
  }
}
