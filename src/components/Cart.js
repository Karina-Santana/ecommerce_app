import React from "react";

function Cart(props) {
    const productId = props.match.params.id
    const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1
    return (
        <div>
            <h1>Cart</h1>
            <p>ADD TO CART : ProductID: {productId} Qty: {qty}</p>
        </div>
    )
}

export default Cart