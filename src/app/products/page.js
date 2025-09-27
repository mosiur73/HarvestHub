"use client";

import { useState } from "react";
import { useGetProductsQuery, useGetCategoriesQuery } from "../redux/apiSlice";
import { useRouter } from "next/navigation";

export default function ProductsPage() {
  const { data: productsData, error: productError, isLoading: productLoading } = useGetProductsQuery();
  const { data: categoryData, error: categoryError, isLoading: categoryLoading } = useGetCategoriesQuery();
  const router = useRouter();
  
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  if (productLoading || categoryLoading) return <p className="text-center mt-20 text-xl">Loading...</p>;
  if (productError || categoryError) return <p className="text-center mt-20 text-red-500">Error fetching data</p>;

  const products = productsData?.data || [];
  const categories = categoryData?.data || [];

  // Filter products by category
  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.categoryId === activeCategory);

  const displayProducts = showAll ? filteredProducts : filteredProducts.slice(0, 8);

  return (
    <div className="max-w-7xl mx-auto text-center p-6">
      <span className="bg-gray-200 text-green-600 mb-4 text-sm px-3 py-1 rounded-full font-medium inline-block">
        Our Products
      </span>
      <h2 className="text-3xl font-bold mb-4">Our Fresh Products</h2>
      <p className="text-gray-500 mb-8">
        We pride ourselves on offering a wide variety of fresh and flavorful fruits, vegetables, and salad ingredients.
      </p>

      {/* Category Tabs */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        <button
          onClick={() => {
            setActiveCategory("All");
            setShowAll(false);
          }}
          className={`px-4 py-2 rounded-3xl font-medium ${
            activeCategory === "All" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-800"
          }`}
        >
          All
        </button>

        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setActiveCategory(cat.id);
              setShowAll(false);
            }}
            className={`px-4 py-2 rounded-xl font-medium ${
              activeCategory === cat.id ? "bg-green-600 text-white" : "bg-gray-200 text-gray-800"
            }`}
          >
            {cat.categoryName}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {displayProducts.map((product) => (
          <div
            key={product.id}
            className="rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <img
              src={product.images[0]}
              alt={product.productName}
              className="w-full h-40 object-cover bg-gray-300"
            />
            <div className="p-5">
              <h2 className="text-xl text-center font-semibold mb-2">{product.productName}</h2>
              <p className="text-gray-800 text-center font-bold mt-3 text-lg">${product.price} / Kg</p>
              {/* <button className="w-full border px-3 py-2 bg-gray-100 rounded-2xl mt-2">Add to Cart</button> */}
              <button
              onClick={() => router.push(`/products/${product.id}`)}
              className="w-full border px-3 py-2 bg-gray-100 rounded-2xl mt-2"
            >
              Add to Cart
            </button>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      {!showAll && filteredProducts.length > 8 && (
        <button
          onClick={() => setShowAll(true)}
          className="mt-8 px-6 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition"
        >
          View All Products
        </button>
      )}
    </div>
  );
}
