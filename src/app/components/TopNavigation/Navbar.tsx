import React from 'react'
import NavigationHeader from './NavigationHeader'
import Divider from '../Divider'
import NavigationMenu from './NavigationMenu'

const Navbar = () => {
  return (
    <div className="w-full max-w-[1440px] h-[132px]">
    <NavigationHeader />
   <Divider />
   <NavigationMenu />
   </div>
  )
}

export default Navbar
