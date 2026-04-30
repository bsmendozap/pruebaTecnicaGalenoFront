const ProductTable = ({ products, loading, editProduct, deleteProduct }) => {
  if (loading) {
    return (
      <div className="rounded-xl bg-white p-6 text-center text-slate-500">
        Cargando productos...
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-100 text-slate-700">
          <tr>
            <th className="p-4">Imagen</th>
            <th className="p-4">Nombre</th>
            <th className="p-4">Precio</th>
            <th className="p-4">Stock</th>
            <th className="p-4">Estado</th>
            <th className="p-4">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-t border-slate-200">
              <td className="p-4">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-12 w-12 rounded-lg object-cover"
                  />
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-xs text-slate-400">
                    Sin img
                  </div>
                )}
              </td>

              <td className="p-4 font-medium text-slate-800">
                {product.name}
              </td>

              <td className="p-4 text-slate-600">
                Q {Number(product.price).toFixed(2)}
              </td>

              <td className="p-4 text-slate-600">
                {product.stock}
              </td>

              <td className="p-4">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    product.status
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {product.status ? "Activo" : "Inactivo"}
                </span>
              </td>

              <td className="p-4">
                <div className="flex gap-2">
                  <button
                    onClick={() => editProduct(product)}
                    className="rounded-lg bg-yellow-500 px-3 py-2 text-xs font-bold text-white hover:bg-yellow-600"
                  >
                    Editar
                  </button>

                  <button
                    onClick={() => deleteProduct(product.id)}
                    className="rounded-lg bg-red-600 px-3 py-2 text-xs font-bold text-white hover:bg-red-700"
                  >
                    Eliminar
                  </button>
                </div>
              </td>
            </tr>
          ))}

          {products.length === 0 && (
            <tr>
              <td colSpan="6" className="p-6 text-center text-slate-500">
                No hay productos registrados.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;