import api from "../api/axiosConfig";

export const getProductsService = async () => {
    const response = await api.get("/products/");
    return response.data.products;
}

export const getProductByIdService = async (id) => {
  const response = await api.get(`/products/${id}`);
  return response.data.product;
};

export const createProductService = async (productData) => {
    const response = await api.post("/products", productData);
    return response.data.product;
}

export const updateProductService = async (id, productData) => {
  const response = await api.put(`/products/${id}`, productData);
  return response.data.product;
};

export const deleteProductdService = async (id) =>{
    const response = await api.delete(`/products/${id}`);
    return response.data;
}