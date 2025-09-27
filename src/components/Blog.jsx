"use client";
import Image from "next/image";

const blogPosts = [
  {
    id: 1,
    title: "Exploring Seasonal Delights: A Guide to What's Fresh Right Now",
    date: "May 23, 2024",
    img: "/fruits.jpg",
  },
  {
    id: 2,
    title: "Mastering Salad Creations: Tips and Tricks for Building Delicious and Nutritious Salads",
    date: "May 23, 2024",
    img: "/fruits1.jpg",
  },
  {
    id: 3,
    title: "The Art of Meal Prepping: How to Save Time and Eat Healthy Throughout the Week",
    date: "May 23, 2024",
    img: "/salad.jpeg",
  },
];

export default function BlogSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          {/* <p className="text-sm text-green-600 font-medium mb-2">Our Blog</p> */}
          <span className="bg-gray-200 text-green-600 text-sm px-3 py-1 rounded-full font-medium inline-block">
            Our Blog
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Fresh Harvest Blog</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Welcome to the Fresh Harvest Blog, your go-to resource for all things related to fresh produce, healthy eating, and culinary inspiration.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden group">
              <div className="relative w-full h-56">
                <Image
                  src={post.img}
                  alt={post.title}
                  fill
                  className="object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="text-gray-400 text-sm mb-1">{post.date}</p>
                <h3 className="text-gray-900 font-semibold text-lg mb-2">{post.title}</h3>
                <a href="#" className="text-orange-500 font-medium inline-flex items-center hover:underline">
                  Read More <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
