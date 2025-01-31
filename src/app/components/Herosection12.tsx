// components/Homepage.tsx
import React from "react";
import Image2 from "../../../public/images/img2.png";
import Image3 from "../../../public/images/img3.png";

export default function Homepage() {
  return (
    <div>
      {/* Top Banner */}
      {/* <div className="bg-gray-900 text-white text-center py-2 text-sm">
        Free delivery on all orders over £50 with code EASTER at checkout!
      </div> */}

      {/* Header */}
      {/* <header className="flex justify-between items-center px-6 py-4 shadow-md">
        <h1 className="text-2xl font-bold">Avion</h1>
        <nav className="space-x-4 text-gray-600">
          <a href="/AllProducts" className="hover:text-gray-900">All products</a>
          <a href="#" className="hover:text-gray-900">Plant pots</a>
          <a href="#" className="hover:text-gray-900">Ceramics</a>
          <a href="#" className="hover:text-gray-900">Tables</a>
          <a href="#" className="hover:text-gray-900">Chairs</a>
          <a href="#" className="hover:text-gray-900">Crockery</a>
          <a href="#" className="hover:text-gray-900">Tableware</a>
          <a href="#" className="hover:text-gray-900">Cutlery</a>
        </nav>
        <div className="space-x-4 flex items-center">
          <a href="/AboutPage" className="hover:text-gray-900">About us</a>
          <a href="#" className="hover:text-gray-900">Contact</a>
          <a href="#" className="hover:text-gray-900">Blog</a>
          <span className="material-icons text-gray-600">shopping_cart</span>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="text-center py-12 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          A brand built on the love of craftsmanship,
          quality and outstanding customer service
        </h2>
        <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700">
          View our products
        </button>
      </section>

      {/* Two Column Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <div className="bg-gray-800 text-white p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-4">It started with a small idea</h3>
            <p>A global brand with local beginnings, our story began in a small studio in South London in early 2014.</p>
          </div>
          <button className="mt-6 bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700">
            View collection
          </button>
        </div>
        <div className="bg-gray-100">
          <img
            src="/images/living-room.jpg"
            alt="Living room"
            className="w-full h-full object-cover rounded"
          />
        </div>
      </section>

      {/* Split Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        <div className="bg-gray-100">
          <img
            src="/images/minimal-living.jpg"
            alt="Minimal Living"
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="p-6 flex flex-col justify-center">
          <h3 className="text-2xl font-bold mb-4">
            Our service isn’t just personal, it’s actually hyper personally exquisite
          </h3>
          <p className="mb-4">
            When we started Avion, the idea was simple: Make high-quality furniture affordable and available for the mass market.
          </p>
          <button className="mt-6 bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
            Get in touch
          </button>
        </div>
      </section>
    </div>
  );
}
