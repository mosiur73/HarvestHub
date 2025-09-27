"use client";
import { useState } from "react";
import { Heart, ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L8 8h8l-4-6zm0 20l4-6H8l4 6zm-6-8L2 12l4-2v4zm12 0v-4l4 2-4 2z" />
              </svg>
            </div>
            <span className="text-xl font-semibold text-gray-900">Fresh Harvests</span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-green-600 font-medium">Home</a>
            <a href="/products" className="text-gray-700 hover:text-green-600 font-medium">Products</a>
            <a href="#" className="text-gray-700 hover:text-green-600 font-medium">About us</a>
            <a href="#" className="text-gray-700 hover:text-green-600 font-medium">Blog</a>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Desktop actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-green-600">
                <Heart className="w-5 h-5" />
                <span className="hidden sm:inline text-sm font-medium">Favorites</span>
              </button>

              <button className="flex items-center space-x-1 text-gray-700 hover:text-green-600 relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="hidden sm:inline text-sm font-medium">Cart</span>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  1
                </span>
              </button>

              {/* Sign in link */}
              <Link href="/login">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
                  Sign in
                </Button>
              </Link>
            </div>

            {/* Mobile: Hamburger + Cart */}
            <div className="flex md:hidden items-center space-x-6">
              <button className="relative text-gray-700 hover:text-green-600">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  1
                </span>
              </button>

              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-green-600 focus:outline-none">
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2">
            <a href="#" className="block text-gray-700 hover:text-green-600 font-medium">Home</a>
            <a href="#" className="block text-gray-700 hover:text-green-600 font-medium">Shop</a>
            <a href="#" className="block text-gray-700 hover:text-green-600 font-medium">About us</a>
            <a href="#" className="block text-gray-700 hover:text-green-600 font-medium">Blog</a>

            <div className="flex items-center space-x-4 mt-2">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-green-600">
                <Heart className="w-5 h-5" />
                <span className="text-sm font-medium">Favorites</span>
              </button>

              {/* Mobile Sign in */}
              <Link href="/login">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
                  Sign in
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
