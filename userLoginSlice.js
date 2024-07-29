import { createSlice } from "@reduxjs/toolkit";
const userLoginSlice=createSlice({
    name:"userLogin",
    initialState:{currentUser:localStorage.getItem("currentUser")?JSON.parse(localStorage.getItem("currentUser")):null},
    reducers:{
        user_login_request:(state)=>{
              return {
                loading:true
              }
        },
        user_login_success:(state,action)=>{
            return {
                loading:false,
                success:true,
                currentUser:action.payload
            }
        },
        user_login_fail:(state,action)=>{
            return {
                loading:false,
                error:action.payload
            }
        },
        user_logout:(state)=>{
            return {
                loading:false,
                currentUser:null
            }
        }
    }
})
export const userLoginAction=userLoginSlice.actions
export default userLoginSlice