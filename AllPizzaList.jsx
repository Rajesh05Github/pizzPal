import React, { useState, useEffect } from 'react';
import PizaaPopUp from './PizaaPopUp';
import { useDispatch, useSelector } from 'react-redux';
import { cardSliceAction } from '../stores/pizzaCardSlice';

const AllPizzaList = ({ pizza }) => {
    const [pizzaRate, setPizzaRate] = useState(pizza.prices[0].small);
    const [pizzaQ, setPizzaQ] = useState(1);
    const [showclose, setClose] = useState(false);
    
    const dispatch = useDispatch();
    const cardItem = useSelector(store => store.card);

    const handlerClose = () => {
        setClose(false); // Reset showclose to false when closing the popup
    };

    const handlerFunction = () => {
        const pizzaD = {
            pizza,
            pizzaQ,
            pizzaRate
        };
        dispatch(cardSliceAction.addCard(pizzaD));
    };

    // useEffect hook to update localStorage whenever cardItem changes
    // //useEffect(() => {
    //     localStorage.setItem("cardItem", JSON.stringify(cardItem));
    // }, [cardItem]); // Dependency on cardItem

    return (
        <div className="card  p-3 mb-5 bg-white rounded addShadow" style={{ width: "20rem"}}>
            <img
                style={{ height: "300px", width: "290px" }}
                src={pizza.image}
                className="card-img-top"
                alt="..."
                onClick={() => setClose(true)}
            />
            {showclose && <PizaaPopUp handlerC={handlerClose} pizza={pizza} />}
            <div className="card-body">
                <h5 className="card-title">{pizza.name}</h5>
                <p className="card-text">{pizza.category}</p>
                <select onChange={e => setPizzaRate(pizza.prices[0][e.target.value])}>
                    {pizza.varients.map((variant) => <option key={variant} value={variant}>{variant}</option>)}
                </select>
                <select style={{ marginLeft: "4rem" }} onChange={e => setPizzaQ(e.target.value)}>
                    {[...Array(10)].map((val, i) => <option key={i} value={i + 1}>{i + 1}</option>)}
                </select>
                <p style={{ marginTop: "8px" }}>{`price:-${pizzaRate * pizzaQ}`}</p>
                <button onClick={handlerFunction}>Add to Cart</button>
            </div>
        </div>
    );
}

export default AllPizzaList;
