import React, { useState } from 'react';
import ProductList from './component/ProductList';
import AddProductForm from './component/AddProductForm';

interface Product {
  id: number;
  brand: string;
  type: string;
  stock: number;
  price: number;
  description: string;
}

const initialProducts: Product[] = [
  {
    id: 1,
    brand: 'Toyota',
    type: 'SUV',
    stock: 10,
    price: 200000000,
    description: 'Lorem ipsum',
  },
  {
    id: 2,
    brand: 'Daihatsu',
    type: 'Sedan',
    stock: 5,
    price: 150000000,
    description: 'Lorem ipsum',
  },
  {
    id: 3,
    brand: 'Honda',
    type: 'Hatchback',
    stock: 20,
    price: 100000000,
    description: 'Lorem ipsum',
  },
];

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleAddProduct = (newProduct: Product) => {
    const lastProductId = products[products.length - 1].id;
    const nextId = lastProductId + 1;
    const product = { ...newProduct, id: nextId };
    setProducts([...products, product]);
  };

  const handleDeleteProduct = (id: number) => {
    const updatedProducts: Product[] = products.filter(
      (product) => product.id !== id
    );
    setProducts(updatedProducts);
  };

  const handleEditProduct = (id: number, updatedProduct: Product) => {
    const updatedProducts: Product[] = products.map((product) =>
      product.id === id ? updatedProduct : product
    );
    setProducts(updatedProducts);
  };

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-2xl font-bold mb-4">Daftar Produk</h1>
      <input
        type="text"
        placeholder="Cari berdasarkan merek produk"
        value={searchTerm}
        onChange={handleChangeSearch}
        className="mb-4 w-72 px-4 py-2 border border-gray-300 rounded-md"
      />
      <ProductList
        products={filteredProducts}
        onDelete={handleDeleteProduct}
        onEdit={handleEditProduct}
      />
      <h2 className="text-2xl font-bold my-4">Tambah Produk Baru</h2>
      <AddProductForm onAdd={handleAddProduct} />
    </div>
  );
};

export default App;
