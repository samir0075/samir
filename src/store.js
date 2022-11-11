import { createSlice,configureStore } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name:"ui",
    initialState:{
         players:[],
         averageAge:0,
    },
    reducers:({
        handleAdd(state,action){

            const newPlayer=action.payload;
            console.log(newPlayer)


           state.players.push({
            id:newPlayer.id,
            first_name:newPlayer.first_name,
            age:newPlayer.age,
           }
            )

           

            


        },
        handleRemove(state,action){
        const id=action.payload;

        const existingPlayer=state.players.find((player)=>player.id===id);
        if(existingPlayer){
            state.existingPlayer--;
        
        }

        else if(existingPlayer===1){
            state.players.find((player)=>player.id!==id)

        }
        }
    })
})

const store =configureStore({
    reducer:{
        ui:uiSlice.reducer
    }
})

export const uiActions=uiSlice.actions;

export default store;