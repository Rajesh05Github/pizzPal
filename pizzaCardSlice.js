import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";
const cardSlice=createSlice({
    name:"cardSlice",
    initialState:localStorage.getItem("cardItem")?JSON.parse(localStorage.getItem("cardItem")):[],
    reducers:{
      addCard: (state, action) => {
        if(action.payload.pizzaQ>5)
        {
            alert("We donot take Order above 5.....")
            return
        }
        else if(action.payload.pizzaQ<1)
        {
            const newState=[]
            localStorage.setItem("cardItem",JSON.stringify(newState))
            return newState
        }
        const { payload } = action;
        const existingCardIndex = state.findIndex((card) => card.pizza.id === payload.pizza.id);
        if (existingCardIndex !== -1) {
            // If the card already exists, update its quantity
            state[existingCardIndex].pizzaQ = action.payload.pizzaQ;
            localStorage.setItem("cardItem", JSON.stringify(state));
        } else {
            // If it's a new card, push it to the state array
            state.push(payload);
            localStorage.setItem("cardItem", JSON.stringify(state));
        }
        },
        delCard: (state, action) => {
            const { payload } = action;
            const newState = state.filter((card) => card.pizza.id !== payload.pizza.id);
            localStorage.setItem("cardItem", JSON.stringify(newState));
            return newState; // Return the new state after deletion
        }        
    }
})
export const cardSliceAction=cardSlice.actions;
export default cardSlice