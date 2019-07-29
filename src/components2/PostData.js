import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
class Register extends Component {

    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            errors: [],
            loading: false
           
        }
    }
   
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };
    submit = (e) => {
        e.preventDefault();
        
        if (this.isFormVaild()) {
            this.setState({ errors: [], loading: true })
            const user = {
                first_name: this.state.firstName,
                last_name:this.state.lastName,
                email:this.state.email,
                password:this.state.password
              };

           var p = axios.post('http://localhost:8080/v1/register', user,{
            'content-type': 'application/json'
            
           });
           p.then((res) => {
            console.log(res, "data posted")
           
            this.props.history.push('/login')
        }).catch((err)=>{
            console.error(err);
            this.setState({firstName:'', lastName:'',email:'', password:''})
        })
            
        }

    }
    displayErrors = errors => errors.map((error, i) => <p key={i} className="text-center">{error.message}</p>);
    isFormVaild = () => {
        let errors = [];
        let error;
        if (this.isFormEmpty(this.state)) {
            error = { message: "Please fill all the details" }
            this.setState({ errors: errors.concat(error) })
            return false
        }
        else if (!this.CheckPassword(this.state)) {
            error = { message: "Password is Invalid" }
            this.setState({ errors: errors.concat(error) })
            return false
        }
        else {
            return true
        }
    }

    isFormEmpty = ({ firstName, lastName, email, password }) => {
        return !firstName.length || !lastName.length || !email.length || !password.length
    }
    CheckPassword = ({ password }) => {
        if (password.length < 6) {
            return false
        }
        else {
            return true
        }
    }
    render() {
        return (
            <div>
                <div className="container">

                    <div className="row">
                        <div className="col-md-offset-4 col-md-6">

                            <div className="card">
                                <div className="card-header">
                                    Register
                         </div>
                                <div className="card-body">
                                    <form onClick={this.submit}>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Enter FirstName" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="lastName" placeholder="Enter lastName" value={this.state.lastName} onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" name="email" placeholder="Enter valid email" value={this.state.email} onChange={this.handleChange} />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control" name="password" placeholder="Enter valid password" value={this.state.password} onChange={this.handleChange} />
                                        </div>
                                        <button className="btn btn-xs btn-primary" >submit</button>
                                    </form>
                                    {this.state.errors.length > 0 && (
                                        <div className="card card-body m-3 p-1 Error">
                                            <h4 className="text-center">Error</h4>
                                            {this.displayErrors(this.state.errors)}
                                        </div>
                                    )
                                    }
                                </div>
                                <div className="card-footer">
                                    <p className="text-center">Already  you have an account.?<Link to="login">Login</Link></p>
                                </div>
                            </div>
                        </div>



                    </div>

                </div>

            </div>
        )
    }
}
export default Register;