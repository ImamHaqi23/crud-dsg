import React, { useState } from 'react';

interface Product {
  id: number;
  brand: string;
  type: string;
  stock: number;
  price: number;
  description: string;
}

interface AddProductFormProps {
  onAdd: (product: Product) => void;
}

const AddProductForm: React.FC<AddProductFormProps> = ({ onAdd }) => {
  const [formData, setFormData] = useState<Product>({
    id: 0,
    brand: '',
    type: '',
    stock: 0,
    price: 0,
    description: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({
      id: 0,
      brand: '',
      type: '',
      stock: 0,
      price: 0,
      description: '',
    });
  };

  return (
    <div className="mt-8">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-3 sm:col-span-1">
            <label
              htmlFor="brand"
              className="block text-sm font-medium text-gray-700"
            >
              Merek
            </label>
            <input
              type="text"
              name="brand"
              id="brand"
              value={formData.brand}
              onChange={handleChange}
              className="mt-1 w-full shadow-md border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="col-span-3 sm:col-span-1">
            <label
              htmlFor="type"
              className="block text-sm font-medium text-gray-700"
            >
              Jenis
            </label>
            <input
              type="text"
              name="type"
              id="type"
              value={formData.type}
              onChange={handleChange}
              className="mt-1 w-full shadow-md border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="col-span-3 sm:col-span-1">
            <label
              htmlFor="stock"
              className="block text-sm font-medium text-gray-700"
            >
              Stok
            </label>
            <input
              type="number"
              name="stock"
              id="stock"
              value={formData.stock}
              onChange={handleChange}
              className="mt-1 w-full shadow-md border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="col-span-3 sm:col-span-1">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Harga
            </label>
            <input
              type="number"
              name="price"
              id="price"
              value={formData.price}
              onChange={handleChange}
              className="mt-1 w-full shadow-md border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="col-span-3">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Keterangan
            </label>
            <textarea
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
              className="mt-1 w-96 h-32 shadow-md border border-gray-300 rounded-md p-2"
            ></textarea>
          </div>
        </div>
        <div className="mt-5 sm:mt-6">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Tambah
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
