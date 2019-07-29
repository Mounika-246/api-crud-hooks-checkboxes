import React ,{useEffect,useState} from 'react';

function UseEffectMouse() {
    const [x,setX]=useState(0);
    const[y,setY]=useState(0);
    const logMousePosition=(e)=>{
      console.log("MouseEvent");
      setX(e.clientX)
      setY(e.clientY)
    }
    useEffect(()=>{
        console.log('useEffect Called')
        window.addEventListener("mousemove" ,logMousePosition)
    },[])

    return (
        <div>
         Hooks x-{x} y-{y}  
        </div>
    )
}

export default UseEffectMouse;
