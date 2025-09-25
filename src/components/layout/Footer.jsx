import { Phone, Mail, MapPin } from "lucide-react"
import { FaCcPaypal } from "react-icons/fa";
import { SiVisa } from "react-icons/si";
import { FaApplePay } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
       <div className="flex flex-col lg:flex-row lg:justify-between gap-12 px-4 py-8 max-w-7xl mx-auto">

  {/* Logo and App Downloads */}
  <div className="space-y-4 flex-shrink-0">
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
        <div className="grid grid-cols-2 gap-0.5">
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
        </div>
      </div>
      <span className="text-xl font-bold text-gray-900">Fresh Harvests</span>
    </div>
  </div>

  {/* Quick Links & Contact */}
  <div className="flex flex-row sm:flex-row lg:flex-row gap-8 w-full">
    
    {/* Quick Links 1 */}
    <div className="space-y-4 flex-1">
      <h3 className="text-lg font-semibold text-gray-900">Quick links 1</h3>
      <ul className="space-y-3">
        <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Home</a></li>
        <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Shop</a></li>
        <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">About us</a></li>
        <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Blog</a></li>
        <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Detail Blog</a></li>
      </ul>
    </div>

    {/* Quick Links 2 */}
    <div className="space-y-4 flex-1">
      <h3 className="text-lg font-semibold text-gray-900">Quick links 2</h3>
      <ul className="space-y-3">
        <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Favorites</a></li>
        <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Cart</a></li>
        <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Sign In</a></li>
        <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Register</a></li>
      </ul>
    </div>

    {/* Contact Us */}
    <div className="space-y-4 flex-1">
      <h3 className="text-lg font-semibold text-gray-900">Contact us</h3>
      <div className="space-y-3">
        <div className="flex items-center space-x-3">
          <Phone className="w-4 h-4 text-gray-500" />
          <span className="text-gray-600">1234 5678 90</span>
        </div>
        <div className="flex items-center space-x-3">
          <Mail className="w-4 h-4 text-gray-500" />
          <span className="text-gray-600">Fres@gmail.com</span>
        </div>
        <div className="flex items-start space-x-3">
          <MapPin className="w-4 h-4 text-gray-500 mt-0.5" />
          <span className="text-gray-600">Tanjung Sari Street, Pontianak, Indonesia</span>
        </div>
      </div>
    </div>

  </div>

</div>


        {/* social link */}
        <div className="flex flex-col-reverse lg:flex-row justify-between">
          {/* Download app */}
            <div className="space-y-3">
              <p className="text-gray-600 font-medium">Download App:</p>
              <div className="flex space-x-3">
                <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </button>
                <button className="bg-black text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs">GET IT ON</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
           <div className="space-y-3 pt-4 mb-4">
              <p className="text-sm font-medium text-gray-900">Accepted Payment Methods:</p>
              <div className="flex items-center space-x-4">
                <SiVisa className="text-3xl" /> 
                <FaCcPaypal className="text-3xl"/>
                <FaApplePay className="text-3xl"/>
              </div>
            </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-600 text-sm">© Copyright 2024, All Rights Reserved by Banana Studio</p>

            <div className="flex  items-center space-x-4">
              <a
                href="#"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:from-purple-600 hover:to-pink-600 transition-colors"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
