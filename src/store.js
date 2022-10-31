import { createSlice,configureStore } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:"counter",
    initialState:{counter:1,productId:0,price:0,value:0},
    reducers:{
        increment(state){
            state.counter+=1 


            
        },
        decrement(state){
            state.counter-=1;
        }
    }
})




const store = configureStore({
    reducer:counterSlice.reducer
})

export const counterAction=counterSlice.actions;

export default store;