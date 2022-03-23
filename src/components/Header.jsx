import React,{useContext} from 'react'
import { CartContext } from '../store/CartContext'
import './Header.css'

export const Header = () => {
  let context=useContext(CartContext)
  let total=context.getTotal()
  return (
    <div className='headerdiv'>
        <div className='row'>
            <div className='col-sm-8'>
                <p>ProductList</p>
            </div>
            <div className='col-sm-4 '>
              <p ><i className="bi bi-cart-check-fill carticonfield"></i></p>
                <p>   Total Price:{total[0]}</p>
            </div>
        </div>
    </div>
  )
}
