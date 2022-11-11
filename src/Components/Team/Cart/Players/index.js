import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { uiActions } from '../../../../store';

const Players = (props) => {

    const dispatch=useDispatch();


    const {id,first_name,age}=props;

    const handleAdd=(e)=>{

        

       

        dispatch(uiActions.handleAdd({
        first_name,age,id
        }
        ))

    }


  return (
    <div>
         <div key={id} id={id} style={{ display: "flex", flexDirection: "row",justifyContent:"space-evenly", backgroundColor:"grey",minWidth:"450px",margin:"10px",padding:"5px" }}>
                    <div>{first_name}</div>
                    <div>{age}</div>
                    <button onClick={handleAdd}>Add</button>
                </div>
    </div>
  )
}

export default Players