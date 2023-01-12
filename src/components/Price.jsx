import React from "react";
import { useContext } from "react";
import foProba from "../context/Proba";


const Price = () =>{
    const teszt = useContext(foProba)
    return(
        <div>
            <h1>az Ára: </h1>
            <h1>{teszt.kutya}</h1>
        </div>
    )
}

export default Price;