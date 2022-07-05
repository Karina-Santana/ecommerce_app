import React from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route, Link, useParams } from 'react-router-dom'
import isLogged from '../App'
import { useNavigate } from 'react-router-dom'

function Cart(props) {
    const { id: productId } = useParams()
    let navigate = useNavigate()
    const { search } = useLocation()
    const qtyInUrl = new URLSearchParams(search).get('qty')
    console.log(qtyInUrl)
    const qty = qtyInUrl ? Number(qtyInUrl) : 1

    if (isLogged === true) {
        return (
            <div>
                <h1>Cart</h1>
                <p>ADD TO CART : ProductID: {productId} Qty: {qty}</p>
            </div>
        )
    } else {
        return (navigate("/login"))
    }

}

export default Cart