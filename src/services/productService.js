import { ApiClient } from "./apiClient";

const BASE_URL = "https://fakestoreapi.com/products";
const apiClient = new ApiClient(BASE_URL);

export const productService = {
  async getAllProducts() {
    try {
      const data = await apiClient.get("");
      return { data, success: true };
    } catch (error) {
      console.error("getAllProducts Error:", error);
      return { data: [], success: false, error: error.message };
    }
  },

  async getProduct(id) {
    try {
      const localProducts = JSON.parse(localStorage.getItem("products") || "[]");
      const product = localProducts.find((p) => String(p.id) === String(id));
      if (!product) throw new Error(`Product with ID ${id} not found`);
      return { data: product, success: true };
    } catch (error) {
      console.error("getProduct Error:", error);
      return { data: null, success: false, error: error.message };
    }
  },

  async createProduct(productData) {
    try {
      const data = await apiClient.post("", productData);
      return { data, success: true };
    } catch (error) {
      console.error("createProduct Error:", error);
      return { data: null, success: false, error: error.message };
    }
  },

  async updateProduct(id, productData) {
    try {
      const data = await apiClient.put(`/${id}`, productData);
      return { data, success: true };
    } catch (error) {
      console.error("updateProduct Error:", error);
      return { data: null, success: false, error: error.message };
    }
  },

  async deleteProduct(id) {
    try {
      const data = await apiClient.delete(`/${id}`);
      return { data, success: true };
    } catch (error) {
      console.error("deleteProduct Error:", error);
      return { success: false, error: error.message };
    }
  },
};
