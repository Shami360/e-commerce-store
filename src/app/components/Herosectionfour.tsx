import React from "react";
import { Truck, CheckCircle, Tag, Leaf } from "lucide-react";

export default function FullFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div
        className="bg-gray-400 text-gray-900 py-16 px-6"
        style={{
          backgroundImage:
            "url('https://via.placeholder.com/1920x600')", // Replace with your background image
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join the club and get the benefits</h2>
          <p className="mb-6">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales,
            pop-up stores, and more.
          </p>
          <div className="flex justify-center items-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <span>✔</span> Exclusive offers
            </div>
            <div className="flex items-center gap-2">
              <span>✔</span> Free events
            </div>
            <div className="flex items-center gap-2">
              <span>✔</span> Large discounts
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <input
              type="email"
              placeholder="your@email.com"
              className="p-3 rounded-l-lg border border-gray-300 w-64"
            />
            <button className="p-3 bg-gray-900 text-white rounded-r-lg">Sign up</button>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="py-12 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Menu */}
          <div>
            <h4 className="font-bold mb-4">Menu</h4>
            <ul className="space-y-2">
              <li>New arrivals</li>
              <li>Best sellers</li>
              <li>Recently viewed</li>
              <li>Popular this week</li>
              <li>All products</li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>Crockery</li>
              <li>Furniture</li>
              <li>Homeware</li>
              <li>Plant pots</li>
              <li>Chairs</li>
            </ul>
          </div>

          {/* Our Company */}
          <div>
            <h4 className="font-bold mb-4">Our company</h4>
            <ul className="space-y-2">
              <li>About us</li>
              <li>Vacancies</li>
              <li>Contact us</li>
              <li>Privacy</li>
              <li>Returns policy</li>
            </ul>
          </div>

          {/* Mailing List */}
          <div>
            <h4 className="font-bold mb-4">Join our mailing list</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="your@email.com"
                className="p-4 rounded-l-lg border border-gray-300 w-full"
              />
              <button className="p-3 bg-gray-500 text-white rounded-r-lg">Signup</button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-4 md:mb-0">Copyright © 2022 Avion LTD</p>
          <div className="flex space-x-4">
            <a href="#" aria-label="LinkedIn">
              <Truck className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Facebook">
              <CheckCircle className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Instagram">
              <Tag className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Twitter">
              <Leaf className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
