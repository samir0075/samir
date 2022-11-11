import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { uiActions } from '../../store'

const CartItem = (props) => {
  const { age, id, first_name } = props;

  console.log(first_name, id, age)


  const dispatch = useDispatch();


  const handleRemove = () => {

    console.log("hello")

    dispatch(uiActions.handleRemove(id))
  }

  return (
    <div>
      <div key={id} id={id} style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", backgroundColor: "grey", minWidth: "450px", margin: "10px", padding: "5px" }}>
        <div>{first_name}</div>
        <div>{age}</div>
        <button onClick={handleRemove}>Remove</button>
      </div>

    </div>
  )
}

export default CartItem