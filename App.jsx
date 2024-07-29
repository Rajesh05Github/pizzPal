import "bootstrap/dist/css/bootstrap.min.css"
import NavBar2 from "./Components/NavBar2"
import { Outlet } from "react-router-dom"
import {  useSelector } from "react-redux"
import MainNavBar from "./Components/MainNavBar"
function App() {
     const {fetchDone}=useSelector((store)=>store.pizzaStatus)
    return(
      <>
      <NavBar2/>
      <div style={{height:"768px",backgroundColor:"#a3a3c2"}}>
        
        <Outlet/>
      </div>
      </>
    )
}

export default App
