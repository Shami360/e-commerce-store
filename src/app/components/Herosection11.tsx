'use client'
import React from "react";
import Image from "next/image";
import Image7 from "../../../public/images/img7.png";
import Image2 from "../../../public/images/img2.png";
import { useCartContext } from "@/context/cart";
import { CartType } from "@/types/cart";

export default function ShoppingCart() {

  const { addToCart,
    dynamicCartItems,
    getCartTotal,
    removeFromCart } = useCartContext();
  
  const cartItems = [
    {
      id: 1,
      name: "Graystone vase",
      description: "A timeless ceramic vase with a tri-color gray glaze.",
      price: 85,
      quantity: 1,
      image: Image7, // Replace with actual image path
    },
    {
      id: 2,
      name: "Basic white vase",
      description: "Beautiful and simple, this is one for the classics.",
      price: 125,
      quantity: 1,
      image: Image2, // Replace with actual image path
    },
  ];

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-6 px-28">
      <h1 className="text-2xl font-bold mb-8">Your shopping cart</h1>

      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left text-gray-500 border-b">
            <th className="pb-4 text-black">Product</th>
            <th className="pb-4 text-black">Quantity</th>
            <th className="pb- text-black">Total</th>
          </tr>
        </thead>
        <tbody>
          {dynamicCartItems == null ?  cartItems.map((item) => (
            <tr key={item.id} className="border-b">
              {/* Product Details */}
              <td className="py-4">
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={140}
                    height={140}
                    className="rounded-lg"
                  />
                  <div>
                    <h3 className="font-bold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                    <p className="mt-2 font-bold text-gray-800">£{item.price}</p>
                  </div>
                </div>
              </td>

              {/* Quantity */}
              <td className="py-4 text-center">
                <div className="flex items-center justify-center gap-2">
                  <button onClick={() => removeFromCart(item)} className="px-2 py-1 border rounded hover:bg-gray-200">
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button onClick={()=> addToCart(item)} className="px-2 py-1 border rounded hover:bg-gray-200">
                    +
                  </button>
                </div>
              </td>

              {/* Total */}
              <td className="py-4 font-bold text-gray-800">£{item.price}</td>
            </tr>
          )) :  dynamicCartItems.map((item:CartType) => (
            <tr key={item._id} className="border-b">
              {/* Product Details */}
              <td className="py-4">
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={140}
                    height={140}
                    className="rounded-lg"
                  />
                  <div>
                    <h3 className="font-bold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                    <p className="mt-2 font-bold text-gray-800">£{item.price}</p>
                  </div>
                </div>
              </td>

              {/* Quantity */}
              <td className="py-4 text-center">
                <div className="flex items-center justify-center gap-2">
                  <button onClick={() => removeFromCart(item)} className="px-2 py-1 border rounded hover:bg-gray-200">
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button onClick={()=> addToCart(item)} className="px-2 py-1 border rounded hover:bg-gray-200">
                    +
                  </button>
                </div>
              </td>

              {/* Total */}
              <td className="py-4 font-bold text-gray-800">£{item.price * item.quantity}</td>
            </tr>
          )) }
        </tbody>
      </table>

      {/* Subtotal and Checkout */}
      <div className="mt-8 text-right">
        <div className="text-gray-500 mb-2">
          Subtotal <span className="text-xl font-bold text-gray-800">£{getCartTotal()}</span>
        </div>
        <p className="text-sm text-gray-500 mb-6">
          Taxes and shipping are calculated at checkout.
        </p>
        <button className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700">
          Go to checkout
        </button>
      </div>
    </div>
  );
}
