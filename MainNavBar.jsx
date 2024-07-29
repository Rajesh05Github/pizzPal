import React from 'react'
import { Outlet } from "react-router-dom"
// import pizzaList from "../pizza-data.js"
import { CgProfile } from "react-icons/cg";
import {Link} from "react-router-dom"
import { useSelector,useDispatch} from 'react-redux'
import FetchPizzaData from './FetchPizzaData'
import LoadingState from './LoadingState'
import DisplayPizza from './DisplayPizza'
import { GiFullPizza } from "react-icons/gi";
import store from '../stores/mainStore';
import { userLoginAction } from '../stores/userLoginSlice';
const MainNavBar = () => {
  const dispatch=useDispatch();
  // const pizzaList=useSelector((store)=>store.pizaaData)
  // const {fetchDone}=useSelector((store)=>store.pizzaStatus)
  const {currentUser}=useSelector((store)=>store.userLogin)
  console.log(currentUser)
  const pizzaCardNo=useSelector((store)=>store.card)
  const logoutHandler=()=>{
    localStorage.removeItem("currentUser")
    {dispatch(userLoginAction.user_logout())}
  }
  return (
    <div className="container" style={{backgroundColor:"#a3a3c2"}}>
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between  border-bottom">
      <img src="../images/mainLogo.jpg" style={{height:"85px",width:"85px",marginTop:"0",borderRadius:"5rem"}}/>
    <div className="action_bar" style={{marginLeft:"4px",display:"flex",gap:"3rem",fontSize:"1.5rem"}}>
    {currentUser?
     <>
     {currentUser.name}
     <div className="action_container" style={{marginTop:"12px"}}>
         <Link onClick={logoutHandler} style={{textDecoration:"none",marginRight:"1.5rem",color:"white"}}>
         <CgProfile style={{display:"block",marginLeft:"1rem"}}/>
         <span className="action_name">Logout</span>
         </Link>
     </div>
     <div className="action_container" style={{marginTop:"12px"}}>
         <Link to="/order" style={{textDecoration:"none",marginRight:"1.5rem",color:"white"}}>
         <CgProfile style={{display:"block",marginLeft:"1rem"}}/>
         <span className="action_name">Order</span>
         </Link>
     </div>
     </>

  :
    <>

      <div className="action_container" style={{marginTop:"12px"}}>
          <Link to="/login" style={{textDecoration:"none",marginRight:"1.5rem",color:"white"}}>
          <CgProfile style={{display:"block",marginLeft:"1rem"}}/>
          <span className="action_name">Login</span>
          </Link>
      </div>
      <div className="action_container" style={{marginTop:"12px"}}>
          <Link to="/signUp" style={{textDecoration:"none",marginRight:"1.5rem",color:"white"}}>
          <CgProfile style={{display:"block",marginLeft:"1rem"}}/>
          <span className="action_name">SignUp</span>
          </Link>
      </div>
      </>
      }
      <Link className="action_container" to="/bag" style={{textDecoration:"none",marginRight:"1.5rem",color:"white"}} >
            <GiFullPizza style={{marginLeft:"4px"}} />
           <span className="bag-item-count" style={{backgroundColor:"red",color:"white",borderRadius:"5rem",padding:"0 4px 0 4px",position:"relative",right:"10px",bottom:"10px"}}>{pizzaCardNo.length}</span>
          <span className="action_name" style={{display:"block"}}>Bag</span>
      </Link>
      
    </div>
    </header>
    {/* {fetchDone?
    <DisplayPizza pizzaList={pizzaList}/>:<LoadingState/>
    }  
    <FetchPizzaData/> */}
    <Outlet/>
  </div>
  )
}

export default MainNavBar
