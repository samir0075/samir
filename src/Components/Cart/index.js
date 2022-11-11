import React from 'react'
import CartItem from '../CartItem'
import { useSelector, useDispatch } from 'react-redux'

const Cart = () => {

    let cartDetail = useSelector(state => state.ui.players)

    console.log(cartDetail)

    return (


        <div style={{ border: "2px solid black" }}>

            <h4 style={{ textAlign: "center" }}>Team</h4>


            {cartDetail.map((cart) => (
                <CartItem first_name={cart.first_name} key={cart.id} id={cart.id} age={cart.age} />

            ))}


        </div>
    )
}

export default Cart