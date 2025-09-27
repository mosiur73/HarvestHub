import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroBanner() {
  return (
    <div className="relative bg-gradient-to-r from-gray-50 to-green-100 overflow-hidden">
      {/* Decorative leaves */}
      <div className="absolute top-10 left-10 w-16 h-16 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-green-600 fill-current">
          <path d="M50 10c20 0 40 20 40 40s-20 40-40 40c0-20-20-40-40-40s20-40 40-40z" />
        </svg>
      </div>
      <div className="absolute top-32 right-20 w-12 h-12 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full text-green-500 fill-current">
          <path d="M50 10c20 0 40 20 40 40s-20 40-40 40c0-20-20-40-40-40s20-40 40-40z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-green-600 font-medium text-lg">Welcome to Fresh Harvest</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Fresh Fruits and Vegetables
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                At Fresh Harvests, we are passionate about providing you with the freshest and most flavorful fruits and
                vegetables
              </p>
            </div>

            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg rounded-lg">
              Shop Now
            </Button>

           
          </div>

       
          
        </div>
         <div className="flex justify-between mt-3">
          <div>
             {/* Special Offer Card */}
            <div className="relative">
              <div className="bg-white rounded-2xl  shadow-lg w-60 p-2 lg:ml-16">
                <div className="flex items-center space-x-2">
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 ">Special Offer</p>
                    <h3 className="text-xl font-bold text-gray-900 ">Fresh Salad</h3>
                    <p className="text-green-600 font-semibold ">
                      Up to <span className="text-2xl font-bold">70%</span> off
                    </p>
                    <div className="bg-green-600 text-white px-3 py-1 rounded text-sm font-medium inline-block">
                      CODE:<span className="text-[#FAC714]">FRESH25</span>
                    </div>
                  </div>
                  <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/salad.jpeg"
                      alt="Fresh Salad"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              {/* Arrow pointing to offer */}
              <div className="absolute -top-4 left-8">
                <svg
                  className="w-8 h-8 text-green-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
              </div>
            </div>

            {/* App Download Section */}
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
          </div>
            {/* Right Content - Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/girl-salad.jpg"
                alt="Girl with fresh vegetables"
                width={600}
                height={600}
                className="w-full  h-72 lg:h-96"
                priority
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute top-20 right-10 bg-orange-400 rounded-full w-4 h-4 opacity-60"></div>
            <div className="absolute bottom-32 left-10 bg-green-400 rounded-full w-6 h-6 opacity-40"></div>

            {/* Floating vegetables indicator */}
            <div className="absolute top-1/2 right-0 transform translate-x-4">
              <div className="bg-white rounded-full p-3 shadow-lg">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
