import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Counter() {
    const [count, setCount] = useState(0);
    const handleIncrement = () => (
        setCount(count + 1)
    )

    const handleDecrement = () => (
        setCount(count - 1)
    )



  return (
    <div className='d-flex justify-content-start align-items=center' style={{height: "100vh"}}>
        <div>
            <div className='d-flex'>
                <button onClick={handleDecrement} style={{fontSize: "30px"}}className='btn btn-dark text-light py-2 m-3 rounded'>-</button>
                <h1 className="text-center" style={{fontSize: "70px"}}>{count}</h1>
                <button onClick={handleIncrement} style={{fontSize: "30px"}}className='btn btn-dark text-light py-2 m-3 rounded'>+</button>
            </div>
        </div>
    </div>
  )
}

export default Counter