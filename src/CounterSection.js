import React, { useState } from 'react'

export default function CounterSection(props){
    
    const [count, setCount] = useState(0)
    
    const add = () => {
        setCount(count + 1)
    }

    const minus = () => {
        setCount(count - 1)
    }
return(
    <>
    <p>{count}</p>
    <button onClick={add}>+</button>
    <button onClick={minus}>-</button>
    </>
)
    
}