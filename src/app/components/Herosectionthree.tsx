import Image from "next/image";
import Image1 from "../../../public/images/img1.png";
import Image2 from "../../../public/images/img2.png";
import Image3 from "../../../public/images/img3.png";
import Image4 from "../../../public/images/img4.png";

export default function Herosectionthree(){
    const products = [
        {
          id: 1,
          image: Image1, // Replace with your image path

          name: "The Dandy Chair",
          price: "£250",
        },
        {
          id: 2,
          image: Image2, // Replace with your image path
          name: "Rustic Vase Set",
          price: "£155",
        },
        {
          id: 3,
          image:Image3, // Replace with your image path
          name: "The Silky Vase",
          price: "£125",
        },
        {
          id: 4,
          image: Image4, // Replace with your image path
          name: "The Lucy Lamp",
          price: "£399",
        },
      ];
    
      return (
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-12">New ceramics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <div key={product.id} className="text-center">
                  <div className="relative aspect-square mb-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className="text-lg font-medium">{product.name}</h3>
                  <p className="text-gray-600">{product.price}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <button className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700">
                View collection
              </button>
            </div>
          </div>
        </section>
      )
}