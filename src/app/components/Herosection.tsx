import Image from "next/image";
import Hero from "../../../public/images/img4.png"

export default function Herosection() {
  return (
    <div className="flex  bg-gray-900 text-white h-[584px] mx-[30px] my-[40px]">
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center p-10">
        <h1 className="text-5xl font-semibold mb-6">
          The furniture brand for the future, with timeless designs
        </h1>
        <button className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-lg w-[300px]">
          View collection
        </button>
        <p className="text-lg mt-8 text-gray-400">
          A new era in eco-friendly furniture with Avelon, the French luxury
          retail brand with nice fonts, tasteful colors, and a beautiful way
          to display things digitally using modern web technologies.
        </p>
      </div>

      {/* Right Section */}
      <div
        className="flex-1 bg-teal-200 flex items-center justify-center"
        style={{
          backgroundColor: "#A9D8D6",
        }}
      >
        <Image
          src={Hero} // Relative path to the public folder
          alt="Chair"
          width={500} // Set appropriate width
          height={500} // Set appropriate height
          className="object-contain"
        />
      </div>
    </div>
  );
}
