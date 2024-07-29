import { configureStore } from "@reduxjs/toolkit";
import pizzaStatusSlice from "./pizzaFetchStatus";
import pizzaDataSlice from "./pizzaProductSlice";
import cardSlice from "./pizzaCardSlice";
import userSignupSlice from "./UserSlice";
import userLoginSlice from "./userLoginSlice";
import userOrderSlice from "./userOrderSlice";
const store=configureStore({
    reducer:{
       pizzaStatus:pizzaStatusSlice.reducer,
       pizaaData:pizzaDataSlice.reducer,
       card:cardSlice.reducer,
       userSignup:userSignupSlice.reducer,
       userLogin:userLoginSlice.reducer,
       userOrder:userOrderSlice.reducer
    }
})
export default store;