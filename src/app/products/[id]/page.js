"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useGetProductsQuery, useGetCategoriesQuery } from "../../redux/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToFavorites, removeFromFavorites } from "../../redux/cartSlice";

export default function ProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();

  const { data: productsData, isLoading: productsLoading, error: productsError } = useGetProductsQuery();
  const { data: categoriesData, isLoading: categoriesLoading, error: categoriesError } = useGetCategoriesQuery();

  const [quantity, setQuantity] = useState(1);

  const favorites = useSelector((state) => state.cart.favorites);

  if (productsLoading || categoriesLoading) return <p className="text-center mt-20">Loading...</p>;
  if (productsError || categoriesError) return <p className="text-center mt-20 text-red-500">Error loading data</p>;

  const product = productsData?.data.find((p) => p.id === id);
  if (!product) return <p className="text-center mt-20">Product not found</p>;

  const categories = categoriesData?.data || [];
  const categoryName =
    categories.find((cat) => cat.id === product.categoryId)?.categoryName || "Unknown";

  const increaseQty = () => setQuantity((q) => q + 1);
  const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  // Add to Cart Handler
  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity }));
  };

  // Toggle Favorite Handler
  const isFavorite = favorites.some((item) => item.id === product.id);

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(product.id));
    } else {
      dispatch(addToFavorites(product));
    }
  };

  // Related Products (exclude current product)
  const relatedProducts = productsData?.data
    .filter((p) => p.id !== id && p.categoryId === product.categoryId)
    .slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-8">
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
          <p className="text-[#749B3F] text-2xl">
            <span className="font-medium">{categoryName}</span>
          </p>
          <h1 className="text-3xl font-bold">{product.productName}</h1>

          <div className="flex items-center gap-2">
            <span className="text-yellow-500 font-bold">★★★★☆</span>
            <span className="text-gray-500">(120 reviews)</span>
          </div>

          <p className="text-2xl text-[#FF6A1A] font-semibold mt-2">
            ${product.price} / Kg
          </p>

          {product.description && (
            <p className="mt-6 text-gray-600">{product.description}</p>
          )}

          <div className="flex items-center gap-4 mt-4">
            <span>Quantity:</span>
            <div className="flex items-center border rounded-xl overflow-hidden">
              <button onClick={decreaseQty} className="px-3 py-1 bg-gray-200 hover:bg-gray-300">-</button>
              <span className="px-4">{quantity}</span>
              <button onClick={increaseQty} className="px-3 py-1 bg-gray-200 hover:bg-gray-300">+</button>
            </div>
          </div>

          <div className="flex gap-4 mt-6 flex-wrap">
            <button
              onClick={handleFavorite}
              className={`flex-1 border py-3 rounded-xl transition ${
                isFavorite ? "bg-red-500 text-white" : "hover:bg-gray-100"
              }`}
            >
              {isFavorite ? "Remove Favorite ❤️" : "Save as Favorites"}
            </button>

            <button
              onClick={handleAddToCart}
              className="flex-1 bg-[#FF6A1A] text-white py-3 rounded-xl hover:bg-green-700 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="mt-16 text-center">
          <span className="bg-gray-200 text-green-600 mb-4 text-sm px-3 py-1 rounded-full font-medium inline-block">
            Our Products
          </span>
          <h2 className="text-2xl font-bold mb-6 text-center">Related Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((p) => (
              <div
                key={p.id}
                className="rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <img
                  src={p.images[0]}
                  alt={p.productName}
                  className="w-full h-40 object-cover bg-gray-300"
                />
                <div className="p-5">
                  <h2 className="text-xl text-center font-semibold mb-2">{p.productName}</h2>
                  <p className="text-gray-800 text-center font-bold mt-3 text-lg">${p.price} / Kg</p>
                  <button
                    onClick={() => router.push(`/products/${p.id}`)}
                    className="w-full border px-3 py-2 bg-gray-100 rounded-2xl mt-2"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
