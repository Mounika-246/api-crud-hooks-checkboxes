import React, { Component } from 'react'
import { access } from 'fs';
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    dashboard=()=>{
        var localToken=localStorage.getItem('token');
        console.log(localToken,"localToken")
        var dashboardData=axios.get('http://localhost:8080/v1/register/dashboard',{
            "x-access-token":localToken
           
        })
        dashboardData.then((res,err)=>{
           console.log(res);
        })
    }
    render() {
        return (
            <div>
                <h1>Home</h1>
                <a onClick={this.dashboard}>Dashboard</a>
            </div>
        )
    }
}
export default Home;
