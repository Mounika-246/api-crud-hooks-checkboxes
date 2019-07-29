import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
class ApiLogin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email:"",
            password:"",
            errors:""
        }
    }
    login = (e) => {
        e.preventDefault()
        const loginDetails={
           email:this.state.email,
           password:this.state.password

        }
       var loginDe= axios.post('http://localhost:8080/v1/register/authenticate' ,loginDetails,{
            'content-type': 'application/json'
        })
        loginDe.then((res) => {
            console.log(res, "data posted")
            if(res.status==200){
                if(!res.data.msg){
                    localStorage.setItem("token", res.data.token)
                    this.props.history.push('/home')
                }
                else{
                    this.setState({errors:res.data.msg})
                }
                
            }
          
        }).catch((err)=>{
            console.error(err);
            this.setState({email:'', password:''})
        })
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        return (
            <div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-offset-4 col-md-6">

                            <div className="card">
                                <div className="card-header">
                                    Login
                                </div>
                                <div className="card-body">
                                    <form onSubmit={this.login}>
                                        <div className="form-group">
                                            <input type="email" autoComplete="true" className="form-control" name="email" placeholder="Enter valid email" value={this.state.email} onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" name="password" placeholder="Enter valid password" value={this.state.password} onChange={this.handleChange} />
                                        </div>
                                        <button className="btn btn-xs btn-primary" >submit</button>
                                    </form>
                                    
                                    {
                                        this.state.errors && <h1>{this.state.errors}</h1>
                                    }
                                </div>
                                <div className="card-footer">
                                    <p className="text-center">not Having Account.?<Link to="/">Register Here</Link></p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ApiLogin;
