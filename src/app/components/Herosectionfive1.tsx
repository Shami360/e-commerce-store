import React from "react";
import Image from "next/image";
import Image1 from "../../../public/images/img1.png";
import Link from "next/link";

export default function HerosectionfiveComponent() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Product Section */}
      <div className="flex flex-col lg:flex-row bg-white">
        {/* Left Section: Product Image */}
        <div className="lg:w-1/2">
       <Link href={'/AllProducts'}>
        <Image
          src={Image1} // Relative path to the public folder
          alt="Chair"
          width={600} // Set appropriate width
          height={500} // Set appropriate height
          className="object-contain"
          
        />
        </Link>
        </div>

        {/* Right Section: Product Details */}
        <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col">
          <h1 className="text-4xl font-semibold mb-4">Rustic Vase Set</h1>
          <p className="text-2xl text-gray-700 mb-6">£155</p>
          <p className="text-gray-600 mb-6">
            A timeless design, with premium materials features as one of our most
            popular and iconic pieces. The Dandy Chair is perfect for any stylish
            living space with beech legs and lambskin leather upholstery.
          </p>

          {/* Features */}
          <ul className="list-disc pl-5 mb-6 text-gray-700">
            <li>Premium material</li>
            <li>Handmade upholstery</li>
            <li>Quality timeless classic</li>
          </ul>

          {/* Dimensions */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Dimensions</h3>
            <p className="text-gray-600">Height: 110cm</p>
            <p className="text-gray-600">Width: 75cm</p>
            <p className="text-gray-600">Depth: 50cm</p>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center mb-6">
            <label htmlFor="quantity" className="mr-4 text-gray-600">
              Amount:
            </label>
            <div className="flex items-center">
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-l">
                -
              </button>
              <input
                id="quantity"
                type="number"
                min="1"
                defaultValue="1"
                className="w-12 text-center border-t border-b border-gray-300"
              />
              <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-r">
                +
              </button>
            </div>
          </div>
          <button className="w-48 bg-purple-900 text-white py-3 rounded-lg hover:bg-purple-800">
            Add to cart
          </button>
        </div>
      </div>

      {/* Footer Notification */}
      <div className="bg-gray-900 text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <p>
            🚚 Free delivery on all orders over £50 with code{" "}
            <strong>EASTER</strong> at checkout.
          </p>
          <button className="text-white hover:underline">✖</button>
        </div>
      </div>
    </div>
  );
}


