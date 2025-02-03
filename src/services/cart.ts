import { client } from "@/sanity/lib/client";
import { CartType } from "@/types/cart";




export const fetchCartItems = async (): Promise<CartType[]> => {
    
    const query = `*[_type == 'cart']{
   _id,
    productId,
    name,
    price,
    image,
    description,
    quantity
}`
      const cartItems = await client.fetch(query)
      
      return  cartItems;
  }



export const  addItemToCart =  async (cartItem:CartType) =>{
    try {
        const cartShcema = {
            _type: 'cart',
            productId: cartItem.productId,
            name: cartItem.name,
            price: cartItem.price,
            description: cartItem.description,
            image: cartItem.image,
            quantity: 1,
        }

        const cartItems = await fetchCartItems();

        const itemExist = cartItems.find(item => item._id === cartItem._id);

        if (itemExist) return;
    
        const response = await client.create(cartShcema); 
    
        return response;
    } catch (error) {
        console.log(error);
    }
}


export const removeItemFromCart = async (productId:string) => {
    try {
        const response = await client.delete(productId);
        console.log(response);
        return response;
    } catch (error) {
         console.log(`Failed to delete doc: ${error}`);
    }
}