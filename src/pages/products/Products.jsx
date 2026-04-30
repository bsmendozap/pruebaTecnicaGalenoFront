import { useEffect, useState } from "react";
import { getProductsService, createProductService, deleteProductdService, getProductByIdService, updateProductService } from "../../core/services/productService";

import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [productEdit, setProductEdit] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const loadProducts = async () => {
        try {
            setLoading(true);
            setErrorMessage("");

            const data = await getProductsService();
            setProducts(data);

        } catch (error) {
            console.error(error);
            setErrorMessage(error.message);

        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadProducts();
    }, []);


    const saveProduct = async (formData) => {
        try {
            setErrorMessage("");

            if (productEdit) {
                await updateProductService(productEdit.id, formData);
                setProductEdit(null);
            } else {
                await createProductService(formData);
            }

            await loadProducts();

        } catch (error) {
            console.error(error);
            setErrorMessage(error.message);
        }
    };


    const editProduct = (product) => {
        setProductEdit(product);
    };

    const deleteProduct = async (id) => {
        const confirmDelete = window.confirm("¿Desaeas eliminar este producto?");

        if (!confirmDelete) return;

        try {
            setErrorMessage("");
            await deleteProductdService(id);
            await loadProducts();
        } catch (error) {
            console.error(error);
            setErrorMessage(error.message);
        }
    };

    const cancelEdit = () => {
        setProductEdit(null);
    };

    return (
        <div>
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-slate-800">
                    Gestión de productos
                </h1>
                <p className="text-slate-500">
                    Administra el inventario de productos.
                </p>
            </div>

            {errorMessage && (
                <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {errorMessage}
                </div>
            )}

            <ProductForm
            saveProduct={saveProduct}
            productEdit={productEdit}
            cancelEdit={cancelEdit}
            />

            <ProductTable
                products={products}
                loading={loading}
                editProduct={editProduct}
                deleteProduct={deleteProduct}
            />

        </div>
    );

};

export default Products;