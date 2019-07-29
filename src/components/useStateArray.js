import React ,{useState} from 'react'

function UseStateArray() {
    const [items, setItems] = useState([])
const addNumber=()=>{
    setItems([...items,{
        id:items.length,
        value:Math.floor(Math.random() *10)+1
    }])
}
    return (
        <div>
            <button  onClick={addNumber}>Add</button>
            <ul >
                {items.map((v, k) => (
  <li key={v.id}>{v.value}</li>
                )

              

            )
        }
                </ul>
            

        </div >
    )
}

export default UseStateArray;
