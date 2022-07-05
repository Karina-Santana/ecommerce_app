import React from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route, Link, useParams } from 'react-router-dom'
import isLogged from '../App'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Cart() {


    // let navigate = useNavigate()
    // const [cart, setCart] = useState([])
    // const [product_id, setProduct_id] = useState(null)
    // const [title, setTitle] = useState("")
    // const [image, setImage] = useState("")
    // const [price, setPrice] = useState(null)
    // const [qty, setQty] = useState(0)

    // const handleProductId = event => {
    //     setProduct_id(event.target.value)
    // }

    // const handleTitle = event => {
    //     setTitle(event.target.value)
    // }

    // const handleImage = event => {
    //     setImage(event.target.value)
    // }

    // const handlePrice = event => {
    //     setPrice(event.target.value)
    // }

    // const handleQty = event => {
    //     setQty(event.target.value)
    // }



    // function getCartDetails() {

    //     fetch('api/cart')
    //         .then(res => res.json())
    //         .then(res => console.log([...res, ...cart]))
    // }
    // useEffect(getCartDetails, [])


    return (
        <div>
            <Link to='/'>Go Back</Link>
            <h1>My Cart</h1>
            <li>
                <div>
                    <img src="" alt="" className="small" />
                </div>
                <div className="min-30">
                    <Link to={`/products/:id`}>Product Title</Link>
                </div>
                <div>
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>
                </div>
                <div>$0</div>
                <div>
                    <button
                        type="button"
                    // onClick={() => removeFromCart(item.id)}
                    >
                        Delete
                    </button>
                </div>
            </li>


        </div>
    )

}








// function Cart({ cartId }) {
//     const [cart, setCart] = useState({})
//     const { cartItems } = cart

//     function getProductsById() {
//         fetch(`api/cart/${cartId}`)
//             .then(res => res.json())
//             .then(res => {
//                 console.log(res)
//                 setCart(res)
//             })
//     }

//     // function removeFromCart(productClicked) {
//     //     productClicked = productClicked + 1
//     //     fetch(`api/products/${productClicked}`, {
//     //         method: 'DELETE'
//     //     })
//     //         .then(() => {
//     //             const newProduct = cart.map((product, x) => x !== productClicked)
//     //             setCart(newProduct)
//     //             getProductsById()
//     //         })
//     // }

//     useEffect(getProductsById, [])

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
//                                             onChange={(e) => (getProductsById(item.id, Number(e.target.value)))}
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
//                                         // onClick={() => removeFromCart(item.id)}
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