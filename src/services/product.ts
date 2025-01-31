import { client } from "@/sanity/lib/client"

export const fetchProducts = async () => {
    try {
        const query = `*[_type == 'product']{
_id,
  name,
  price,
  'imageUrl': image.asset->url,
  description,
  category,
  quantity
}
        `;

        const products = await client.fetch(query);

        return products;
    } catch (error) {
        console.log(error)
    }
}


export const fetchSingleProduct = async (productId:string) => {
    try {
        const query = `*[_type == "product" && _id == "${productId}"]{
_id,
  name,
  price,
  'imageUrl': image.asset->url,
  description,
  category,
  quantity
}
        `;

        const products = await client.fetch(query);

        return products;
    } catch (error) {
        console.log(error)
    }
}