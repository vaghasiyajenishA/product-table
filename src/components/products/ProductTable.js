import { useState } from "react"
import { useProducts } from "../../hooks/useProducts"
import { useNotification } from "../../contexts/NotificationContext"
import ProductDialog from "./ProductDialog"
import StickyHeadTable from "./Table"
import TableSkeleton from "./TableSkeleton"
import ConfirmDialog from "../common/ConfirmDialog"

const ProductTableResponsive = () => {
  const { filteredProducts, loading, deleteProduct } = useProducts()
  const { showSuccess, showError } = useNotification()
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isViewOpen, setIsViewOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [confirmDialog, setConfirmDialog] = useState({ open: false, product: null })
  const [deleteLoading, setDeleteLoading] = useState(false)

  const handleDeleteRequest = (product) => {
    setConfirmDialog({ open: true, product })
  }

  const handleDeleteConfirm = async () => {
    const product = confirmDialog.product
    setDeleteLoading(true)
    const result = await deleteProduct(product.id, product)
    setDeleteLoading(false)
    setConfirmDialog({ open: false, product: null })
    if (result.success) {
      showSuccess(`Product "${product.title}" deleted successfully!`)
    } else {
      showError(`Failed to delete product: ${result.error}`)
    }
  }

  const handleDeleteCancel = () => {
    setConfirmDialog({ open: false, product: null })
  }

  const handleView = (product) => {
    setSelectedProduct(product)
    setIsViewOpen(true)
  }

  const handleEdit = (product) => {
    setSelectedProduct(product)
    setIsEditOpen(true)
  }

  return (
    <>
      {loading ? (
        <TableSkeleton rowsCount={8} />
      ) : (
        <StickyHeadTable 
          filteredProducts={filteredProducts} 
          handleView={handleView} 
          handleEdit={handleEdit} 
          handleDelete={handleDeleteRequest}
        />
      )}
      <ConfirmDialog
        open={confirmDialog.open}
        title="Delete Product"
        description={`Are you sure you want to delete "${confirmDialog.product?.title}"?`}
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
        loading={deleteLoading}
        confirmText="Delete"
        confirmColor="error"
      />
      {isViewOpen && (<ProductDialog defaultMode="view" open={isViewOpen} product={selectedProduct} onClose={() => setIsViewOpen(false)} onSuccess={() => setIsEditOpen(false)} />)}
      {isEditOpen && (<ProductDialog open={isEditOpen} defaultMode='edit' product={selectedProduct} onClose={() => setIsEditOpen(false)} onSuccess={() => setIsEditOpen(false)} />)}
    </>
  )
}

export default ProductTableResponsive
