import React,{useState} from 'react'

function UseStateObject() {
    const [obj, setObj]=useState({firstName:'', lastName:''})
    return (
        <div>
            <input type="text" vlaue={obj.firstName} onChange={(e)=>setObj({...obj,firstName:e.target.value})} />
            <input type="text" value={obj.lastName}  onChange={(e)=>setObj({...obj,lastName:e.target.value})} />
            <h1>{"firstName is"+ obj.firstName}</h1>
            <h1>{"lastName is "+ obj.lastName}</h1>
        </div>
    )
}

export default UseStateObject
