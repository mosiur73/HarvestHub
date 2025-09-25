import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-16 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        
        {/* Left Side (Image + Card) */}
        <div className="relative flex justify-center">
          {/* Main Image (not rounded) */}
          <div className="relative w-80 h-80 md:w-[420px] md:h-[420px] overflow-hidden">
            <Image
              src="/girl-salad.jpg" 
              alt="Farmer"
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Card */}
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white shadow-lg p-3 flex items-center space-x-3 w-60 rounded-lg">
            <Image
              src="/salad.jpeg" 
              alt="Lettuce"
              width={60}
              height={60}
              className="w-16 h-16 object-cover rounded-md"
            />
            <div>
              <h3 className="font-semibold text-sm">Mushroom</h3>
              <p className="text-gray-500 text-xs">$2.3/kg</p>
              <button className="mt-1 bg-gray-100 px-3 py-1 rounded-lg text-xs font-medium">
                Add to cart
              </button>
            </div>
          </div>

          {/* Logo Tag */}
          <div className="absolute top-28 lg:top-40 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-xl shadow">
            <p className="flex items-center space-x-1 text-sm font-medium">
              <span className="text-green-600">🌱</span>
              <span>Fresh Harvests</span>
            </p>
          </div>
        </div>

        {/* Right Side (Text Content) */}
        <div className="text-left">
          <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium">
            About us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">About Fresh Harvest</h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Welcome to Fresh Harvest, your premier destination for high-quality and fresh produce.
            We are passionate about providing you with the finest fruits, vegetables, and salad 
            ingredients to nourish your body and delight your taste buds. With a commitment to 
            excellence, sustainability, and customer satisfaction, Fresh Harvest is here to 
            revolutionize your grocery shopping experience.
          </p>
          <button className="mt-6 px-6 py-2 text-orange-700 border border-orange-500 font-semibold rounded-lg shadow transition">
            Read More
          </button>
        </div>
      </div>
    </section>
  );
}
