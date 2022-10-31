import React from 'react'
import { counterAction } from '../../store'
import { useSelector } from 'react-redux'

const Cart = () => {

    // const dispatch = useDispatch();

    const showProductValue=useSelector(state=>state.counter)


    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", flexDirection: "row", marginTop: "10px" }} >
                <div style={{ border: "1px solid grey" }} >
                    <h2 style={{ textAlign: "center" }}>Cart</h2>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "row", minWidth: "300px", maxWidth: "450px", backgroundColor: "grey", padding: "20px", margin: "10px" }}>
                        <h6>Product-1</h6>
                        

                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                         
                            <h6>{showProductValue}</h6>
                           
                        </div>




                    </div>

            





                </div>



            </div>

        </div>
    )
}

export default Cart