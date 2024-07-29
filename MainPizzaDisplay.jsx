import React from 'react'
import { useSelector } from 'react-redux'
import FetchPizzaData from './FetchPizzaData'
import LoadingState from './LoadingState'
import DisplayPizza from './DisplayPizza'
const MainPizzaDisplay = () => {
    const pizzaList=useSelector((store)=>store.pizaaData)
  const {fetchDone}=useSelector((store)=>store.pizzaStatus)
  return (
    <div>
      {fetchDone?
    <DisplayPizza pizzaList={pizzaList}/>:<LoadingState/>
    }  
    <FetchPizzaData/>
    </div>
  )
}

export default MainPizzaDisplay
