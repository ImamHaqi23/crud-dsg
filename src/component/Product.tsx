import React, { useState } from 'react';

interface ProductProps {
  product: {
    id: number;
    brand: string;
    type: string;
    stock: number;
    price: number;
    description: string;
  };
  onDelete: (id: number) => void;
  onEdit: (
    id: number,
    updatedProduct: {
      brand: string;
      type: string;
      stock: number;
      price: number;
      description: string;
    }
  ) => void;
}

const Product: React.FC<ProductProps> = ({ product, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({
    id: product.id,
    brand: product.brand,
    type: product.type,
    stock: product.stock,
    price: product.price,
    description: product.description,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleSave = () => {
    onEdit(product.id, editedProduct);
    setIsEditing(false);
  };

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-gray-500 w-16">
        {product.id}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-gray-500">
        {isEditing ? (
          <input
            type="text"
            name="brand"
            value={editedProduct.brand}
            onChange={handleChange}
            className="w-full py-1 px-2 shadow border"
          />
        ) : (
          product.brand
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-gray-500">
        {isEditing ? (
          <input
            type="text"
            name="type"
            value={editedProduct.type}
            onChange={handleChange}
            className="w-full py-1 px-2 shadow border"
          />
        ) : (
          product.type
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-gray-500">
        {isEditing ? (
          <input
            type="number"
            name="stock"
            value={editedProduct.stock}
            onChange={handleChange}
            className="w-full py-1 px-2 shadow border"
          />
        ) : (
          product.stock
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-gray-500">
        {isEditing ? (
          <input
            type="number"
            name="price"
            value={editedProduct.price}
            onChange={handleChange}
            className="w-full py-1 px-2 shadow border"
          />
        ) : (
          product.price
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-gray-500">
        {isEditing ? (
          <input
            name="description"
            value={editedProduct.description}
            onChange={handleChange}
            className="w-full py-1 px-2 shadow border"
          />
        ) : (
          product.description
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-left font-medium">
        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-green-600 hover:bg-green-900 text-white font-bold py-2 px-4 rounded"
          >
            Simpan
          </button>
        ) : (
          <>
            <button
              className="bg-indigo-600 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded mr-2"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(product.id)}
              className="bg-red-600 hover:bg-red-900 text-white font-bold py-2 px-4 rounded"
            >
              Hapus
            </button>
          </>
        )}
      </td>
    </tr>
  );
};

export default Product;
