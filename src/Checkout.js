import React from 'react'
import "./Checkout.css";
import Subtotal from "./Subtotal";
import ad from './image/adImage.png';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
function Checkout() {
    const [{basket}, dispatch ]= useStateValue();
    return (
        <div className= "checkout">
        <div className= "checkout_left">
            <div>
                <h2 className= "checkout_title">Your Shopping Basket</h2>

                {basket.map(item=>(
                    <CheckoutProduct
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}>
                    </CheckoutProduct>
                ))}

            </div>
        </div>
        <div className = " checkout_right">
            <Subtotal />
        </div>
            
        </div>
    );
}

export default Checkout
