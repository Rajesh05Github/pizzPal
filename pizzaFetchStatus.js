import {createSlice} from "@reduxjs/toolkit"
const pizzaStatusSlice=createSlice({
    name:"pizzaStatus",
    initialState:{
        fetchDone:false,
        currentlyFetch:false
    },
    reducers:{
        fetchStart:(state)=>{
           state.currentlyFetch=true;
        },
        fetchDone:(state)=>{
            state.fetchDone=true
        },
        currentlyFetching:(state)=>{
             state.currentlyFetch=true
        }
    }
})
export const pizzaStatusAction=pizzaStatusSlice.actions;
export default pizzaStatusSlice;
