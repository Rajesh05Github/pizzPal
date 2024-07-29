import { createSlice } from "@reduxjs/toolkit";
const userSignupSlice=createSlice({
    name:"userSignUp",
    initialState:{},
    reducers:{
        user_registration_request:(state)=>{
            return {loading:true}
        },
        user_registration_success:(state)=>{
            return {loading:true}
        },
        user_registration_fail:(state,action)=>{
            return {loading:true,error:action.payload}
        },
    }
})
export const userSignupAction=userSignupSlice.actions
export default userSignupSlice;