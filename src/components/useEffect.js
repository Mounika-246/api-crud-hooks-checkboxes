import React,{useState,useEffect} from 'react';

function UseEffect() {
    const[count,setCount]=useState(0);
 
  
 
    useEffect(()=>{ //instead of using componentDidMount &componentDidUpdate & componentwillUnMount 
        document.title=`this is ${count} times`
    })
    return (
        <div>
           
            <button onClick={()=>setCount(count+1)}>clickme{count}</button>
        </div>
    )
}

export default UseEffect;
