import React, { useEffect } from 'react'
import axios from "axios"
import { useSelector,useDispatch} from 'react-redux'
import {pizzaStatusAction} from "../stores/pizzaFetchStatus"
import { pizzaDataAction } from '../stores/pizzaProductSlice'
const FetchPizzaData = () => {
  const dispatch=useDispatch()
  const fetchinfo=useSelector((store)=>store.pizzaStatus)
  useEffect(()=>{
    if(fetchinfo.fetchDone)
    {
      return;
    }
    const fetchData=async()=>{
    dispatch(pizzaStatusAction.fetchStart())
    try{
    // const res=await axios.get("http://localhost:8000/api/pizza/Allpizza")
    // console.log(res.data);
    const res=await axios.get("http://localhost:8000/api/pizza/Allpizza")
    // console.log(res)
    // fetch("http://localhost:8000/api/pizza/Allpizza")
    // .then((res)=>res.json())
    // .then((data)=>console.log(data))
    // .catch((e)=>console.log("error"))
    dispatch(pizzaStatusAction.currentlyFetching())
    dispatch(pizzaStatusAction.fetchDone())
    dispatch(pizzaDataAction.getPizzaData(res.data))
    }
    catch(e)
    {
     console.log("error")
    }
    }
    fetchData()
  },[fetchinfo])
    return<div></div>
}
export default FetchPizzaData
