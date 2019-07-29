import React,{useState} from 'react'

function UseprevState() {
    const initialState=0;
    const[count, setCount]=useState(initialState)
   const  Incrementfive =()=>{
        setCount((prevState)=>prevState+5);
    }
    return (
        <div>
            <button type="button" onClick={()=>setCount(count+1)}>Increment</button>
            <button type="button" onClick={()=>setCount(count-1)}>decrement</button>
            <button type="button" onClick={()=>setCount(initialState)}>Reset</button>
            <button type="button" onClick={Incrementfive}>Incrementfive</button>
            {count}
        </div>
    )
}

export default UseprevState;
