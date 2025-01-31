import React from 'react'
import Herosectionseven from '../components/Herosectionseven'
import Herosectioneight from '../components/Herosectioneight'
import Herosectionnine from '../components/Herosectionnine'
import Herosectionten from '../components/Herosectionten'
import Footer1 from '../components/Footer1'
import { fetchProducts } from '@/services/product'




const page =   () => {
  return (
    <div>
    <Herosectionseven/>
    <Herosectioneight/>
    <Footer1/>
    </div>
    
  )
}

export default page
