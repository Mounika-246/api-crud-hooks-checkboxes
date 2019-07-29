import React,{useState} from 'react';

function HookCounter() {
    const[count,setCount]=useState(0);
    return (
        <div>
            <button type="text" className="btn btn-xs btn-primary" onClick={()=>setCount(count+1)}>Counter</button>
            {count}
        </div>
    )
}

export default HookCounter;
