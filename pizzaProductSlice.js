import {createSlice} from "@reduxjs/toolkit"
const pizzaDataSlice=createSlice({
    name:"pizzaData",
    initialState:[],
    reducers:{
        getPizzaData:(state,action)=>{
            return action.payload;
        }
    }
})
export const pizzaDataAction=pizzaDataSlice.actions;
export default pizzaDataSlice;
