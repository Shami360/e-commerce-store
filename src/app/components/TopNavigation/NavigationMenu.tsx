import Link from 'next/link'
import React from 'react'

const NavigationMenu = () => {
  return (
    <div className="w-[675px] h-[22px] mx-auto mt-8 ">
    <div className="flex justify-between items-center">
     <Link href={'/Home'}><p className="text-[#6c697f] text-[16px] font-normal hover:scale-105 transition-all duration-300 ">Plant pots</p></Link>
     <Link href={'/AllProducts'}><p className="text-[#726E8D] text-[16px] font-normal hover:scale-105 transition-all duration-300">Ceramics</p></Link>
     <Link href={'/Cart'}><p className="text-[#726E8D] text-[16px] font-normal  hover:scale-105 transition-all duration-300">Tables</p></Link>
     <Link href={'/About'}><p className="text-[#726E8D] text-[16px] font-normal  hover:scale-105 transition-all duration-300">Chairs</p></Link>
     <Link href={'/'}><p className="text-[#726E8D] text-[16px] font-normal  hover:scale-105 transition-all duration-300">Crockery</p></Link>
     <Link href={'/'}><p className="text-[#726E8D] text-[16px] font-normal  hover:scale-105 transition-all duration-300">Tableware</p></Link>
     <Link href={'/'}><p className="text-[#726E8D] text-[16px] font-normal  hover:scale-105 transition-all duration-300">Cutlery</p></Link>
    </div>
</div>
  )
}

export default NavigationMenu
