import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Cart.css"

const Cart = (props) => {

    let price=0
    let shippingCost=0
    let vat=0
    let totalCost=0
    let totalItem=props.cart.length
    const roundIt=(props)=>props.toFixed(2)
    for (let i=0;i<props.cart.length;i++){
        let product=props.cart[i]
        price+=product.price
        if (price>10 && price<100){
            shippingCost+=4.99
        }
        else{
            shippingCost+=0
        }
        vat=price/10
        totalCost=vat+shippingCost+price

    }
    
    return (
        <div class="Cart-area">
            <h2>Order Summery</h2>
            <h4>Item Ordersed: {totalItem}</h4>
            <h4>Total Price:{roundIt(price)}</h4>
            <h4>Shipping Cost:{roundIt(shippingCost)} </h4>
            <h5>VAt +TAX: {roundIt(vat)}</h5>
            <h5>Grand Total:{roundIt(totalCost)}</h5>
            <button class="main-button"><FontAwesomeIcon icon={faShoppingCart} />Check OUt</button>
            
        </div>
    );
};

export default Cart;