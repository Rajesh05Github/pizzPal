import React, { useState,useEffect } from 'react'
import {  useSelector } from 'react-redux'
import PayCheckout from './PayCheckout'
const PaymentBag = () => {
    const pizzaList=useSelector(store=>store.card)
     const [pizzaO,setpizzaO]=useState(0)
     useEffect(()=>{
        let totalPrice = 0;
        pizzaList.forEach((list)=> {totalPrice += list.pizzaQ * list.pizzaRate;});
        setpizzaO(totalPrice);
        }, [pizzaList]);
  return (
    <div>
      <div className="card">
         <div className="card-header">
              Payment..
         </div>
         <div className="card-body">
           <h5 className="card-title">Total Amount</h5>
             <ul>
                {
                    pizzaList.map((list)=><li key={list.pizza.id}>{list.pizza.name}--{list.pizzaQ*list.pizzaRate}</li>)            
                }
             </ul>
            <h2>Total-{pizzaO}</h2>
            <PayCheckout subtotal={pizzaO}/>
             {/* <CheckOut subtotal={pizzaO}/> */}
         </div>
     </div>
    </div>
  )
}

export default PaymentBag
