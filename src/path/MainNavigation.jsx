import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../store/CartContext';
import './MainNavigation.css'


export const MainNavigation = () => {

    let context = useContext(CartContext)
    return (
        <div >

            <ul className='list'>
                <div className='row'>
                    <div className='col-sm-10'>
                        <li >
                            <Link to="/" className='productlink'>Big Spender
                                
                            </Link>
                        </li>
                    </div>
                    <div className='col-sm-2'>
                        <li>
                            <Link to="/cart" className='carticon'><i className="bi bi-cart-check-fill "></i>{context.totalCount}</Link>
                        </li>
                    </div>
                </div>
            </ul>
        </div>
    )
}
