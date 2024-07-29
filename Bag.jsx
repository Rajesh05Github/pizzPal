import React from 'react'
import { useSelector } from 'react-redux'
import CardDisplay from "./CardDisplay"
import PaymentBag from './PaymentBag'
const Bag = () => {
  const cardItem=useSelector(store=>store.card)
  console.log(cardItem)
  return (
    <div style={{display:"flex",justifyContent:"space-between",gap:"5rem"}}>
    <div>
      <h1 style={{marginLeft:"8rem"}}>All Card Details....</h1>
      {
        cardItem.map((card)=><CardDisplay cardD={card} key={card.pizza.id}></CardDisplay>)
      }
    </div>
    <div style={{marginRight:"4rem"}}>
      <h1>All Payment Detail.....</h1>
      <PaymentBag/>
    </div>
    </div>
  )
}

export default Bag
