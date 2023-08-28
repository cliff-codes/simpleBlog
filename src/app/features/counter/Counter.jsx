import React, { useState } from 'react'
import { decrement, increment, incrementByAmount, counterValue } from './counterSlice'
import { useDispatch, useSelector } from 'react-redux'


const Counter = () => {

    const [amount, setAmount] = useState()
    const btnStyle = {
        width: "50px",
        height: "50px",
        fontWeight: "600",
        fontSize: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }
    const value = useSelector(counterValue)
    const dispatch = useDispatch()

  return (
    <div>
        <div>{value}</div>
        <div style={{
          display: "flex",
          gap: "20px"
        }}>
            <div><button onClick={() => {
              dispatch(increment())
              console.log(value)
            }} style={btnStyle}>+</button></div>
            <div><button onClick={() => dispatch(decrement())} style={btnStyle}>-</button></div>
        </div>
        <div>
          <div>Increment Amount</div>
          <div><input type='text' onChange={(e) => setAmount(e.target.value)}/></div>
          <div><button onClick={()=>dispatch(incrementByAmount(Number(amount)))}>Add</button></div>
        </div>
    </div>
  )
}
export default Counter