import { Truck, CheckCircle, Tag, Leaf } from "lucide-react";

export default function Herosectiontwo() {
  return (
    <section className="bg-white text-gray-900 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-12">
          What makes our brand different
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center">
            <Truck className="h-10 w-10h-10 w-10 text-gray-600 mb-4" />
            <h3 className="text-lg font-medium mb-2">Next day as standard</h3>
            <p className="text-gray-600">
              Order before 3pm and get your order the next day as standard.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col items-center">
            <CheckCircle className="h-10 w-10 text-gray-600 mb-4" />
            <h3 className="text-lg font-medium mb-2">Made by true artisans</h3>
            <p className="text-gray-600">
              Handmade crafted goods made with real passion and craftsmanship.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col items-center">
            <Tag className="h-10 w-10 text-gray-600 mb-4" />
            <h3 className="text-lg font-medium mb-2">Unbeatable prices</h3>
            <p className="text-gray-600">
              For our materials and quality, you won’t find better prices
              anywhere.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="flex flex-col items-center">
            <Leaf className="h-10 w-10 text-gray-600 mb-4" />
            <h3 className="text-lg font-medium mb-2">Recycled packaging</h3>
            <p className="text-gray-600">
              We use 100% recycled packaging to ensure our footprint is
              manageable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
