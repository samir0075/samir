import React from 'react'
import Cart from '../Cart/cart'
import { counterAction } from '../../store'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'


const Products = [

    { id: 1, name: "Product-1", price: 100 },

    { id: 2, name: "Product-2", price: 200 },

    { id: 3, name: "Product-3", price: 300 },

]

const Product = () => {

    const dispatch = useDispatch();

    const showProductValue=useSelector(state=>state.counter)

    const handleDecrement = () => {

        dispatch(counterAction.decrement())
    }

    const handleIncrement = (e) => {

        
        dispatch(counterAction.increment({
            productName:Products.name,
            productPrice:Products.price

        
        }))
    }
    return (
        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "row", marginTop: "10px" }} >
            <div style={{ border: "1px solid grey" }} >
                <h2 style={{ textAlign: "center" }}>Products</h2>

                {Products.map((data) => {
                    return (

                        <div id={data.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", minWidth: "300px", maxWidth: "450px", backgroundColor: "grey", padding: "20px", margin: "10px" }}>
                            
                            <h6>{data.name}</h6>
                            <h6>{data.price}</h6>

                            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                <button style={{ maxHeight: "20px" }} onClick={handleDecrement} >- </button>
                                <h6>{showProductValue}</h6>
                                <button style={{ maxHeight: "20px" }} onClick={handleIncrement}>+ </button>
                            </div>




                        </div>

                    )


                })}








            </div>

            <Cart />

        </div>
    )
}

export default Product