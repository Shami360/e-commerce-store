import React from "react";
import Image6 from "../../../public/images/img6.jpeg";
import Image from "next/image";
export default function ProductListing() {
    return (
      <section className="bg-gray-50">
        {/* Header Image and Title */}
        
        <Image className="h-80"
          src={Image6} // Relative path to the public folder
          alt="Chair"
        />
          <div className="flex items-center justify-center h-full">
            {/* <h1 className="text-black text-3xl font-semibold"> All products </h1> */}
          </div>
        
  
        {/* Filter and Sorting Section */}
        <div className="bg-white shadow-md py-4">
          <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
            {/* Filters */}
            <div className="flex space-x-4">
              <div className="relative">
                <button className="flex items-center space-x-2 text-gray-700 font-medium">
                  <span>Category</span>
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
              </div>
              <div className="relative">
                <button className="flex items-center space-x-2 text-gray-700 font-medium">
                  <span>Product type</span>
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
              </div>
              <div className="relative">
                <button className="flex items-center space-x-2 text-gray-700 font-medium">
                  <span>Price</span>
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
              </div>
              <div className="relative">
                <button className="flex items-center space-x-2 text-gray-700 font-medium">
                  <span>Brand</span>
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
              </div>
            </div>
  
            {/* Sorting */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-500 font-medium">Sorting by:</span>
              <div className="relative">
                <button className="flex items-center space-x-2 text-gray-700 font-medium">
                  <span>Date added</span>
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    
    );
  }
  