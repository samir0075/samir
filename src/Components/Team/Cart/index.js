import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { uiActions } from '../../../store'

const Cart = () => {

    const cartDetail=useSelector(state=>state.ui.players)
    const dispatch=useDispatch();

    

    

    const handleRemove=()=>{
        
        dispatch(uiActions.handleRemove("id"))
    }
    return (


        <div style={{ border: "2px solid black" }}>

            <h4 style={{ textAlign: "center" }}>Cart</h4>

           
               {cartDetail.map((cart)=>(
                 <div key={cart.id} id={cart.id} style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", backgroundColor: "grey", minWidth: "450px", margin: "10px" ,padding:"5px"}}>
                 <div>{console.log(cartDetail)}
                    {cart.first_name}</div>
                 <div>{cart.age}</div>
                 <button onClick={handleRemove}>Remove</button>
             </div>

               ))}
          

        </div>
    )
}

export default Cart