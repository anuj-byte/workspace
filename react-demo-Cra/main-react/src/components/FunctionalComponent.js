import { useState } from "react";
import React from "react";
//functional components
const FunctionalComponent=(props)=>{
    const[count,setcount]=useState(0) 
    //before version 16.8 fuction is used as a dummy to only transmit a data there is not concept of state in function after 16.8 state method is implemented in function and usestate hook is used to define state.
    //we can give any name in place of setcount as for better understanding we are using the name set count.
    const increment=()=>{
        setcount(count+1)
    }
    const decrement=()=>{
        setcount(count-1)
    }
    return(
        <div>
            <h1>{props.prop1}</h1>
            <button onClick={increment}>+</button>
            <p >{count}</p>
           
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default FunctionalComponent