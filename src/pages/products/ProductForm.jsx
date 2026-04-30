import { useEffect, useState } from "react";

const ProductForm = ({ saveProduct, productEdit, cancelEdit }) => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    image: "",
    status: true,
  });

  useEffect(() => {
    if (productEdit) {
      setForm({
        name: productEdit.name || "",
        price: productEdit.price || "",
        stock: productEdit.stock || "",
        image: productEdit.image || "",
        status: productEdit.status ?? true,
      });
    }
  }, [productEdit]);

  const cleanForm = () => {
    setForm({
      name: "",
      price: "",
      stock: "",
      image: "",
      status: true,
    });
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleCancel = () => {
    cleanForm();
    cancelEdit();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.price || !form.stock) {
      alert("Nombre, precio y stock son obligatorios");
      return;
    }

    saveProduct({
      name: form.name,
      price: Number(form.price),
      stock: Number(form.stock),
      image: form.image,
      status: form.status,
    });

    cleanForm();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <h2 className="mb-5 text-lg font-bold text-slate-800">
        {productEdit ? "Editar producto" : "Nuevo producto"}
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700">
            Nombre
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nombre del producto"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700">
            Precio
          </label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="0.00"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700">
            Stock
          </label>
          <input
            type="number"
            name="stock"
            value={form.stock}
            onChange={handleChange}
            placeholder="Cantidad disponible"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-semibold text-slate-700">
            Imagen URL
          </label>
          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="https://..."
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <input
          type="checkbox"
          name="status"
          checked={form.status}
          onChange={handleChange}
          className="h-4 w-4"
        />
        <label className="text-sm font-medium text-slate-700">
          Producto activo
        </label>
      </div>

      <div className="mt-6 flex gap-3">
        <button
          type="submit"
          className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
        >
          {productEdit ? "Actualizar" : "Guardar"}
        </button>

        {productEdit && (
          <button
            type="button"
            onClick={handleCancel}
            className="rounded-xl bg-slate-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-600"
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
};

export default ProductForm;