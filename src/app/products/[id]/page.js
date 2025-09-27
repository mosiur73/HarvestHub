"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { useGetProductsQuery, useGetCategoriesQuery } from "../../redux/apiSlice";

export default function ProductDetailPage() {
  const { id } = useParams();

  const { data: productsData, isLoading: productsLoading, error: productsError } = useGetProductsQuery();
  const { data: categoriesData, isLoading: categoriesLoading, error: categoriesError } = useGetCategoriesQuery();

  const [quantity, setQuantity] = useState(1);

  if (productsLoading || categoriesLoading) return <p className="text-center mt-20">Loading...</p>;
  if (productsError || categoriesError) return <p className="text-center mt-20 text-red-500">Error loading data</p>;

  const product = productsData?.data.find(p => p.id === id);
  if (!product) return <p className="text-center mt-20">Product not found</p>;

  const categories = categoriesData?.data || [];
  const categoryName = categories.find(cat => cat.id === product.categoryId)?.categoryName || "Unknown";

  const increaseQty = () => setQuantity(q => q + 1);
  const decreaseQty = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  return (
    <div className="max-w-7xl mx-auto p-6 flex flex-col lg:flex-row gap-8">
      {/* Left: Product Image */}
      <div className="lg:w-1/2">
        <img
          src={product.images[0]}
          alt={product.productName}
          className="w-full h-[400px] object-cover rounded-xl shadow-md"
        />
      </div>

      {/* Right: Product Details */}
      <div className="lg:w-1/2 flex flex-col gap-4">
       {/* Category */}
        <p className="text-[#749B3F] text-2xl"> <span className="font-medium">{categoryName}</span></p>
        <h1 className="text-3xl font-bold">{product.productName}</h1>

       

        {/* Rating placeholder */}
        <div className="flex items-center gap-2">
          <span className="text-yellow-500 font-bold">★★★★☆</span>
          <span className="text-gray-500">(120 reviews)</span>
        </div>

        {/* Price */}
        <p className="text-2xl text-[#FF6A1A] font-semibold mt-2">${product.price} / Kg</p>
          
          {/* Description */}
        {product.description && (
          <p className="mt-6 text-gray-600">{product.description}</p>
        )}

        {/* Quantity */}
        <div className="flex items-center gap-4 mt-4">
          <span>Quantity:</span>
          <div className="flex items-center border rounded-xl overflow-hidden">
            <button
              onClick={decreaseQty}
              className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
            >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button
              onClick={increaseQty}
              className="px-3 py-1 bg-gray-200 hover:bg-gray-300"
            >
              +
            </button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-6 flex-wrap">
         
          <button className="flex-1 border border-gray-300 py-3 rounded-xl hover:bg-gray-100 transition">
            Save as Favorites
          </button>
           <button className="flex-1 bg-[#FF6A1A] text-white py-3 rounded-xl hover:bg-green-700 transition">
            Add to Cart
          </button>
        </div>

       
      </div>
    </div>
  );
}
