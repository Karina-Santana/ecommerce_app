import React from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route, Link, useParams } from 'react-router-dom'
import isLogged from '../App'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Cart() {

    // const { id: productId } = useParams()
    let navigate = useNavigate()
    // const { search } = useLocation()
    // const qtyInUrl = new URLSearchParams(search).get('qty')
    // console.log(qtyInUrl)
    // const qty = qtyInUrl ? Number(qtyInUrl) : 1
    const [cart, setCart] = useState([])
    // console.log(productId)

    function getCartDetails() {

        fetch('api/cart')
            .then(res => res.json())
            .then(res => setCart([...res, ...cart]))
    }
    useEffect(getCartDetails, [])

    if (true) {
        return (
            <div>
                <Link to='/'>Go Back</Link>
                <h1>Cart</h1>
                <p>ADD TO CART : ProductID: {cart.productId} Qty: {cart.qty} Price: {cart.price}</p>
            </div>
        )
    } else {
        return (navigate("/login"))
    }
}








// function Cart({ cartId }) {
//     const [cart, setCart] = useState({})
//     const { cartItems } = cart

//     function getProductsByCartId() {
//         fetch(`api/cart/${cartId}`)
//             .then(res => res.json())
//             .then(res => {
//                 console.log(res)
//                 setCart(res)
//             })
//     }

//     function removeFromCart(productClicked) {
//         productClicked = productClicked + 1
//         fetch(`api/products/${productClicked}`, {
//             method: 'DELETE'
//         })
//             .then(() => {
//                 const newProduct = cart.map((product, x) => x !== productClicked)
//                 setCart(newProduct)
//                 getProductsByCartId()
//             })
//     }

//     useEffect(getProductsByCartId, [])

//     return (
//         <>
//             <div className="row top">
//                 <div className="col-2">
//                     <h1>My Cart</h1>
//                     {cartItems.length === 0 ? (<p>Cart is empty. <Link to="/">Go Shopping</Link></p>) : (
//                         <ul>
//                             {cartItems.map((item) => (
//                                 <li key={item.product}>
//                                     <div>
//                                         <img src={item.image} alt={item.title} className="small" />
//                                     </div>
//                                     <div className="min-30">
//                                         <Link to={`/products/${item.id}`}>{item.title}</Link>
//                                     </div>
//                                     <div>
//                                         <select
//                                             value={item.qty}
//                                             onChange={(e) => (getProductsByCartId(item.id, Number(e.target.value)))}
//                                         >
//                                             {[...Array(item.countInStock).keys()].map((x) => (
//                                                 <option key={x + 1} value={x + 1}>{x + 1}</option>
//                                             ))}
//                                         </select>
//                                     </div>
//                                     <div>${item.price}</div>
//                                     <div>
//                                         <button
//                                             type="button"
//                                             onClick={() => removeFromCart(item.id)}
//                                         >
//                                             Delete
//                                         </button>
//                                     </div>
//                                 </li>
//                             ))}
//                         </ul>
//                     )}
//                 </div>
//             </div>
//         </>
//     )
// }

export default Cart