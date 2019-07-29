import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UseEffectApi() {
    const [arr, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                '/data.json',
            );
            arr.push(result.data)
            setData(arr.flat(1))
         
        };

        fetchData();
    }, []);

    return (
        
        <div>

            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>company</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arr.map((v, k) => (
                            
                        <tr key={k}>
                            <td>{v.name}</td>
                            <td>{v.email}</td>
                            <td>{v.company}</td>
                        </tr>
                    )

                    )
                    }
                </tbody>
            </table>

        </div>
    );
}

export default UseEffectApi;
