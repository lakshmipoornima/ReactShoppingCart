import React, { useContext } from 'react'
import { CartContext } from '../store/CartContext'
import { CartItem } from './CartItem';
import './CartList.css'
import { ProductList } from './ProductList';


export const CartList = () => {

  let context = useContext(CartContext);


  if (context.cartlist.length === 0) {
    console.log(context.cartlist.length);
    return (

      <div className='emptydiv'>
        <p>Your cartlist is empty</p>
      </div>

    )
  }
  else {

    return (

      <div className='unemptydiv'>

        {context.cartlist.map((cartitem) => <CartItem cartitem={cartitem} id={cartitem.id} />)}
        <br /><br />
        <div className='pricediv'>
          <div className='totalpricediv'><h5>Total Price: <i class="fa fa-inr"></i> {context.getTotal()[0]}</h5>
            <h6>{(context.getTotal()[1]===0)?"Tax charge included":"Shipping and tax charge included"}</h6>
          </div>
          <p>Shipping Charge: <i class="fa fa-inr"></i><span>{context.getTotal()[1]}</span></p>
          <p>Tax Charge: <i class="fa fa-inr"></i><span>{context.getTotal()[2]}</span></p>
        </div>

      </div>


    )
  }
}
