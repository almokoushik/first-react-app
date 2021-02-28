import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css"

const Product = (props) => {

    const {img,name,seller,price,stock}=props.Product
    return (
        <div className="Product">
            <div className="Product-img">
                <img src={img} alt=""/>

            </div>
            <div className="Product-info">
                <h3>{name}</h3>
                <p>by:{seller}</p>
                <p>$ {price}</p>
                <p>Only {stock} left in stock - order soon</p>
                <button class="main-button" onClick={()=>props.addProduct(props.Product)} > <FontAwesomeIcon icon={faShoppingCart} />add to cart</button>

            </div>
            
        </div>
    );
};

export default Product;