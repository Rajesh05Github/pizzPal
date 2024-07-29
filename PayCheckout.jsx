import React from 'react'
import axios from "axios"
import StripeCheckout from 'react-stripe-checkout'
import { useSelector, useDispatch } from "react-redux"
import { userOrderAction } from '../stores/userOrderSlice'

const PayCheckout = ({ subtotal }) => {
    const dispatch = useDispatch()
    const { currentUser } = useSelector((store) => store.userLogin)
    const cartItem = useSelector((store) => store.card)
    
    const tokenHandler = async (token) => {
        dispatch(userOrderAction.place_order_request())
        
        try {
            const res = await axios.post("http://localhost:8000/user/order", {
                token,
                subtotal,
                currentUser,
                cartItem
            })
            dispatch(userOrderAction.place_order_success())
            console.log(res)
        } catch (error) {
            dispatch(userOrderAction.place_order_fail("error"))
            console.log("Fail fail ");
        }
    }

    return (
        <div>
            <StripeCheckout
                amount={subtotal * 100}
                shippingAddress
                token={tokenHandler}
                stripeKey='pk_test_51P5WwbSGhIaqonlAxYq1HlkDhV8nEl0rlcl2hLlkOcELNEZsFiCxbAqO8UFQYkFDaIDizso4SY8eG4Vl30KCl11X009DO9lhAQ'
                currency='INR'
            >
                <button type="button" className="btn btn-success">PayNow</button>
            </StripeCheckout>
        </div>
    )
}

export default PayCheckout
