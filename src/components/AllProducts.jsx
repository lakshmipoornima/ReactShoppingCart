import React,{useState,useContext} from 'react'
import { CartList } from './CartList'
import {Header} from './Header'
import { ProductList } from './ProductList'



export const AllProducts = () => {
    

    const productlist =
        [
            {
                "id": "101",
                "name": "Angular Development ",
                "price": 1000,
                "img": "https://images-na.ssl-images-amazon.com/images/I/71v2H9E0i4L.jpg",
                "qty": 1

            },
            {
                "id": "102",
                "name": "Eloquent Javascript",
                "price": 1500,
                "img": "https://images-na.ssl-images-amazon.com/images/I/51InjRPaF7L._SX377_BO1,204,203,200_.jpg",
                "qty": 1
            },
            {
                "id": "103",
                "name": "Pencil",
                "price": 50,
                "img": "https://ichef.bbci.co.uk/news/976/cpsprodpb/C6DC/production/_107080905_gettyimages-654239286.jpg",
                "qty": 1
            }

        ]

    let [products, setProducts] = useState(productlist);

    

    return (
        <div>
           
            <Header />
            <div className='row'>
                <div className='col-sm-8'>
                    <ProductList products={products} />
                </div>
                <div className='col-sm-4 '>
                    <CartList />

                </div>

            </div>
        </div>
    )
}
