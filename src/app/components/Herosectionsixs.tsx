// components/Navbar.js
import { Search, ShoppingCart, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">Avion</div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-sm text-gray-600">
          <li className="hover:text-gray-800 cursor-pointer">Plant pots</li>
          <li className="hover:text-gray-800 cursor-pointer">Ceramics</li>
          <li className="hover:text-gray-800 cursor-pointer">Tables</li>
          <li className="hover:text-gray-800 cursor-pointer">Chairs</li>
          <li className="hover:text-gray-800 cursor-pointer">Crockery</li>
          <li className="hover:text-gray-800 cursor-pointer">Tableware</li>
          <li className="hover:text-gray-800 cursor-pointer">Cutlery</li>
        </ul>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <Search className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer" />
          <ShoppingCart className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer" />
          <User className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer" />
        </div>
      </div>
    </nav>
  );
}

