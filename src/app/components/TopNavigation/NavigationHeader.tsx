import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { CgProfile, CgShoppingCart } from 'react-icons/cg'

const NavigationHeader = () => {
  return (
    <div className="flex  items-center justify-between p-2 mb-5">
  <div className="h-[#16px] w-[#16px] ">
    <button><BiSearch  /></button>
  </div>

  <div><span className="text-[24px] text-[#22202E] font-normal">Avion</span></div>

  <div className="flex items-center gap-3">
  <button><CgShoppingCart /></button>
  <button><CgProfile  /></button>
  </div>
</div>
  )
}

export default NavigationHeader
