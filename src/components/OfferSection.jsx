import Image from "next/image";

export default function OfferSection() {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-16 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        
        {/* Left Side Text */}
        <div className="space-y-6 text-center md:text-left">
          <span className="bg-green-100 text-green-700 text-sm px-3 py-1 rounded-full font-medium inline-block">
            Special Offer
          </span>
          
          <h2 className="text-5xl lg:text-5xl font-bold leading-snug">
            Seasonal Fruit Bundle
          </h2>

         <div className="flex flex-col lg:flex-row gap-3">
             <p className="text-3xl text-center md:text-2xl font-semibold">
            Discount up to{" "}
          </p><span className="text-orange-500 font-bold text-3xl">80% OFF</span>
         </div>

          {/* Countdown Timer */}
          <div className="flex justify-center md:justify-start gap-4">
            <div className="bg-white shadow rounded-lg p-3 w-16 md:w-20 text-center">
              <p className="text-2xl font-bold">03</p>
              <span className="text-xs text-gray-500">Days</span>
            </div>
            <div className="bg-white shadow rounded-lg p-3 w-16 md:w-20 text-center">
              <p className="text-2xl font-bold">18</p>
              <span className="text-xs text-gray-500">Hour</span>
            </div>
            <div className="bg-white shadow rounded-lg p-3 w-16 md:w-20 text-center">
              <p className="text-2xl font-bold">54</p>
              <span className="text-xs text-gray-500">Min</span>
            </div>
            <div className="bg-white shadow rounded-lg p-3 w-16 md:w-20 text-center">
              <p className="text-2xl font-bold">21</p>
              <span className="text-xs text-gray-500">Second</span>
            </div>
          </div>

          {/* Promo Code */}
          <button className="bg-[#176D38] text-white px-6 py-3 rounded-lg font-semibold text-lg tracking-wide hover:bg-green-700 transition">
            CODE : <span className="text-orange-400">FRESH28</span>
          </button>
        </div>

        {/* Right Side Image */}
        <div className="hidden md:flex justify-center md:justify-end">
          <Image
            src="/fruits1.jpg" 
            alt="Seasonal Fruits"
            width={500}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
