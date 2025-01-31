import React from 'react'
import Herosectionfive from '../../components/Herosectionfive'
import Herosectionthree from '../../components/Herosectionthree'
import Herosectionsixs from '../../components/Herosectionsixs'
import Herosectiontwo from '../../components/Herosectiontwo'
import Footer1 from '../../components/Footer1'
import { fetchSingleProduct } from '@/services/product'

const page =  async ({
  params,
}: {
  params: Promise<{ id: string }>;
})  => {

  const productId = (await params).id;

 const productDetails =  await fetchSingleProduct(productId);

  return (
    <div>
      <Herosectionfive data = {productDetails} />
      <Herosectionthree/>
      <Herosectiontwo/>
      <Footer1/>
    </div>
  )
}

export default page
