import React from 'react'
import AllPizzaList from './AllPizzaList'
const DisplayPizza = ({pizzaList}) => {
  return (
    <div>
      <div style={{backgroundColor:" #b3b3cc",marginTop:"2rem",display:"flex",justifyContent:"space-evenly",flexWrap:"wrap",gap:"5rem",}}>
      {pizzaList.map((pizza)=><AllPizzaList key={pizza.id} pizza={pizza}></AllPizzaList>)}
    </div>
    </div>
  )
}

export default DisplayPizza
