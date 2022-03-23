import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { CartContext, CartContextProvider } from '../store/CartContext'
import './ProductItem.css'



export const ProductItem = ({ product,id }) => {

    let context = useContext(CartContext);
    let navigate = useNavigate();
    

    let addToCartHandler = () => {

        if (context.isInCart(id)) {
            context.addQty(id)
        }
        else{  
            context.addToCart(product);
        }
       
    }

    return (
        <div className='maindiv'>

            <div className='itemdiv'>

                <h5>{product.name}</h5>
                <img src={product.img} alt="" />
                <h5><i class="fa fa-inr"></i> {product.price}</h5>
                <button className='btn btn-primary'
                    onClick={addToCartHandler}>Add to Cart
                </button>

            </div>
        </div>
    )
}
