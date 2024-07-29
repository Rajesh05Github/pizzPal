import {createSlice} from "@reduxjs/toolkit"
const userOrderSlice=createSlice({
    name:"userOrder",
    initialState:{},
    reducers:{
        place_order_request:(state)=>{
            return {
                loading:true
            }
        },
        place_order_success:(state)=>{
            return {
                loading:false,
            success:true
            }
        },
        place_order_fail:(state,action)=>{
            return {
                loading:false,
                error:action.payload
            }
        }   
     }
})
export const userOrderAction=userOrderSlice.actions
export default userOrderSlice