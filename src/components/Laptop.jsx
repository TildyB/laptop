import { useState} from "react"
import * as React from 'react';
import Price from "./Price";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';






const Laptop = ({laptop}) =>{
    const[display,setDisplayed] = useState(false)

    const plsShow =() =>{
        setDisplayed(!display)
    }
    
    return(
        <div>
            <h1>{laptop.name}</h1>
            <Button variant="text" onClick={plsShow}>{display ? "show less" : "show more"}</Button>
            {display && 
                <div>
                    <h1>{laptop.brand}</h1>
                    <h2>{laptop.weight}</h2>
                    <button>teszt</button>
                    <Price />
                </div>}
        </div>
    )
}

export default Laptop