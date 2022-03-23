import React from 'react'
import { CartContext } from '../store/CartContext'
import { ProductItem } from './ProductItem'
import './ProductList.css'


export const ProductList = ({products}) => {
//let context=useContext(CartContext);
//console.log(context);
  
  return (
   <div>
        
        <div>
            {products.map((product)=><ProductItem product={product} id={product.id}/>)}
        </div>
   </div>
  )
}
