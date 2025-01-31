// components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white">
        {/* Subscription Section */}
        <div className="bg-gray-100 text-center py-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Join the club and get the benefits</h2>
          <p className="text-gray-600 mb-6">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
          </p>
          <form className="flex justify-center items-center gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="px-4 py-2 border border-gray-300 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button
              type="submit"
              className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700"
            >
              Sign up
            </button>
          </form>
        </div>
  
        {/* Footer Links */}
        <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-lg">Avion</h3>
            <p className="mt-4 text-gray-400">
              21 New York Street<br />
              New York City<br />
              United States of America<br />
              432 34
            </p>
          </div>
  
          {/* Social Links */}
          <div>
            <h3 className="font-bold text-lg">Social Links</h3>
            <div className="flex gap-4 mt-4 text-gray-400">
              <a href="#" className="hover:text-white">LinkedIn</a>
              <a href="#" className="hover:text-white">Facebook</a>
              <a href="#" className="hover:text-white">Instagram</a>
              <a href="#" className="hover:text-white">Twitter</a>
              
            </div>
          </div>
  
          {/* Menu */}
          <div>
            <h3 className="font-bold text-lg">Menu</h3>
            <ul className="mt-4 text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white">New arrivals</a></li>
              <li><a href="#" className="hover:text-white">Best sellers</a></li>
              <li><a href="#" className="hover:text-white">Recently viewed</a></li>
              <li><a href="#" className="hover:text-white">Popular this week</a></li>
              <li><a href="#" className="hover:text-white">All products</a></li>
            </ul>
          </div>
  
          {/* Categories */}
          <div>
            <h3 className="font-bold text-lg">Categories</h3>
            <ul className="mt-4 text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white">Crockery</a></li>
              <li><a href="#" className="hover:text-white">Furniture</a></li>
              <li><a href="#" className="hover:text-white">Homeware</a></li>
              <li><a href="#" className="hover:text-white">Plant pots</a></li>
              <li><a href="#" className="hover:text-white">Chairs</a></li>
              <li><a href="#" className="hover:text-white">Crockery</a></li>
            </ul>
          </div>
        </div>
  
        {/* Bottom Footer */}
        <div className="bg-gray-800 py-4  text-gray-400 ">
          <p className="ml-6">Copyright © 2022 Avion LTD</p>
        </div>
      </footer>
    );
  }
  