import React from 'react'
import { useState } from 'react'
import './Counter.css'
const Counter = () => {
    const [count, setCount] = useState(0);

    const increment=()=>{
        setCount(count+1);
    }

    const decrement=()=>{
        setCount(count-1);
    }

  return (
    <>
    <div className='box'>
        <div className='output'>Count : {count}</div>
        <div className='btn'>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>

    </div>
    </>
  )
}

export default Counter