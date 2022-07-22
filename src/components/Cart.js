import React from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route, Link, useParams } from 'react-router-dom'
import isLogged from '../App'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ProductDetails from "./ProductDetails";

function Cart(props) {
    const navigate = useNavigate();
    const params = useParams();
    const url = []
    url.push(window.location.href)
    const productId = url[0][27]
    const { search } = useLocation();
    const qtyInUrl = new URLSearchParams(search).get('qty');
    const qty = qtyInUrl ? Number(qtyInUrl) : 1;
    const [product, setProduct] = useState({})
    const total = product.price * qty

    function getProduct(productId) {
        fetch(`/api/products/${productId}`)
            .then(res => res.json())
            .then(productData => {
                setProduct(productData)
            })
    }

    useEffect(() => getProduct(productId), [])

    return (
        <div>
            <Link to='/'>Go Back</Link>
            <h1>My Cart</h1>
            <div className="cart__items">
                <div className="min-30">
                    <Link to={`/products/:id`}>{product.title}</Link>
                </div>
                <div>
                    <img src={product.image} alt="" className="small" />
                </div>
                <div>
                    <p>Price: ${product.price}</p>
                    <p>Qty: {qty}</p>
                </div>
                {/* <div>
                    <button
                        type="button"
                    // onClick={() => removeFromCart(item.id)}
                    >
                        Delete
                    </button>
                </div> */}
            </div>
            <div>
                <p>Total: {total}</p>
            </div>

        </div>
    )

}


export default Cart