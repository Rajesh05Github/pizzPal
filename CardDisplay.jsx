import { IoMdAddCircleOutline } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { cardSliceAction } from "../stores/pizzaCardSlice";
import { MdDelete } from "react-icons/md";
const CardDisplay=({cardD})=>{

    const dispatch=useDispatch()
    const addItemHandler=()=>{
    //   console.log("hi i am ready to add")
      dispatch(cardSliceAction.addCard({...cardD,pizzaQ:cardD.pizzaQ+1}));
    }
    const removeItemHandler=()=>{
        //   console.log("hi i am ready to add")
          dispatch(cardSliceAction.addCard({...cardD,pizzaQ:cardD.pizzaQ-1}));
        }
    const deleteCard =()=>{
        dispatch(cardSliceAction.delCard(cardD))
    }
    return(
        <div className="card" style={{width: "18rem",marginBottom:"2rem",marginLeft:"8rem"}}>
        <img src={cardD.pizza.image} className="card-img-top" alt="..."/>
        <MdDelete style={{position:"relative", left:"16rem",top:"-8rem",color:"red",fontSize:"3rem"}} onClick={()=>deleteCard()}/>
        <div className="card-body">
        <h5 className="card-title">{cardD.pizza.name}</h5>
        <p className="card-text">Quantity:-{cardD.pizzaQ}</p>
        
        <p className="card-text">Price:-{cardD.pizzaQ*cardD.pizzaRate}</p>
        </div>
        <div style={{marginLeft:"1rem"}}>
            <IoMdAddCircleOutline onClick={()=>addItemHandler()}/>1
            <CiCircleMinus style={{marginRight:"5px"}} onClick={()=>removeItemHandler()}/>-1
        </div>
        
        </div>
    )
}
export default CardDisplay;