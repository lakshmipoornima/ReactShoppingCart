import React, { useContext, useEffect } from 'react'
import { CartContext } from '../store/CartContext'
import './CartItem.css'



export const CartItem = ({ cartitem, id }) => {

    let context = useContext(CartContext)
    let updateQtyHandler = () => {
        context.addQty(id)
    }
    let deleteItemHandler = ()=>{
        context.removeCart(id)
    }

    

    return (
        <div className='cartdiv'>
            <div className='unemptydiv'>
                <h5>{cartitem.name}</h5>
                <img src={cartitem.img} alt="" />
                <h5><i class="fa fa-inr"></i> {cartitem.price}</h5>
                <button className='btn btn-primary'
                    onClick={updateQtyHandler} >
                    Qty:{cartitem.qty}
                </button> 
                <button className='btn btn-primary trashdiv' onClick={deleteItemHandler}><i className="fa fa-trash " ></i></button>
            </div>
            
        </div>
    )
}
