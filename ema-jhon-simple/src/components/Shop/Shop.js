import React, { useState } from 'react';
import fakeData from "../../../src/fakeData"
import "./Shop.css"
import Product from "../../components/Product/Product"
import Cart from '../Cart/Cart';

const Shop = () => {
    const fakeData2=fakeData.slice(0,10);
    const [products,setProducts]=useState(fakeData2);
    const [cart,setCart]=useState([])

    const addProduct=(props)=>{
        const newCart=[...cart,props]
        setCart(newCart)

    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(pd => <Product addProduct={addProduct} Product={pd}></Product>)
                }

            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;