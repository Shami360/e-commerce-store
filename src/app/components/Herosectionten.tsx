import Image from "next/image";
import Image7 from "../../../public/images/img7.png";
import Image8 from "../../../public/images/img8.png";
import Image9 from "../../../public/images/img9.png";
import Image10 from "../../../public/images/img10.png";

import Link from "next/link";

export default function Herosectioneight(){
    const products = [
        {
          id: 1,
          image: Image7, // Replace with your image path

          name: "The Dandy Chair",
          price: "£250",
        },
        {
          id: 2,
          image: Image8, // Replace with your image path
          name: "Rustic Vase Set",
          price: "£155",
        },
        {
          id: 3,
          image:Image9, // Replace with your image path
          name: "The Silky Vase",
          price: "£125",
        },
        {
          id: 4,
          image: Image10, // Replace with your image path
          name: "The Lucy Lamp",
          price: "£399",
        },
      ];
    
      return (
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            {/* <h2 className="text-3xl font-semibold text-center mb-12">New ceramics</h2> */}
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
            
            
          </div>
        </section>
      )
}