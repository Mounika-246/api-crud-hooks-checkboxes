import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UseEffectApi2() {

    const [posts, setPosts] = useState([]);
    const [id, setId] = useState(1);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res.data, "mounk")
                setPosts(posts.push(res.data))
                console.log(posts, "FFFFFFFF")
            })
    }, [id])

    return (
        <div>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} />

            {posts.map(v => (
                <ul key={v.id}>
                    <li >{v.title}</li>
                </ul>
            ))}



        </div>
    )
}

export default UseEffectApi2


