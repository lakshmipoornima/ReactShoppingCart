import React, { useState } from 'react';

export const CartContext = React.createContext({
    cartlist: [],
    totalCount: 0,
    addToCart: (cartitem) => { },
    removeCart: (id) => { },
    isInCart:(id)=>{},
    addQty:(id)=>{},
    getTotal:()=>{},
   
})

export function CartContextProvider(props) {

    let [cartitemlist, setCartItem] = useState([]);

    const addCartHandler = (cartitem) => {
        setCartItem([...cartitemlist,cartitem]);
    }

    const removeCartHandler = (id) => {
        setCartItem(cartitemlist.filter(cartitem => cartitem.id != id))
    }

    const isInCartHandler=(id)=>{
        return cartitemlist.some(cartitem=>cartitem.id==id)
    }

    const addQtyHandler=(id)=>{
        
        const newcart=cartitemlist.map(product=>{
            if(product.id===id){
              return {...product,qty:product.qty+1}
            }
            return product;
          })
          
          console.log(newcart);
          setCartItem(newcart);
        
    }
    const getTotalHandler=()=>{
        let total=0
        let shippingcharge=0
        let taxcharge=45
        let getTotalArray=[]
        cartitemlist.map((item)=>{
            if(item.price<100 ){
               if(item.qty*item.price<100){
                shippingcharge=50
                total=total+(item.qty*item.price)+shippingcharge+taxcharge
                
               }
               else{
                total=total+(item.qty*item.price)+taxcharge
               }
            }
            
            else{
                total=total+(item.qty*item.price)+taxcharge
            }
        })
        getTotalArray.push(total)
        getTotalArray.push(shippingcharge)
        getTotalArray.push(cartitemlist.length*45)
        return getTotalArray
    }

    const context = {
        cartlist: cartitemlist,
        totalCount: cartitemlist.length,
        addToCart: addCartHandler,
        removeCart: removeCartHandler,
        isInCart:isInCartHandler,
        addQty:addQtyHandler,
        getTotal:getTotalHandler
    }

    return (
        <CartContext.Provider value={context}>
            {props.children}

        </CartContext.Provider>
    )
}
