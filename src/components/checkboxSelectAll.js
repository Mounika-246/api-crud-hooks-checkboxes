
import React, { Component } from 'react';
class CheckboxSelectAll extends Component{
    state = {
        isMJ: false,
        isJB: false,
        isSelect:false,
        isDrake: false
      };
    
      toggleChangeMJ = () => {
        this.setState(prevState => ({
          isMJ: !prevState.isMJ,
        }));
      }
    
      toggleChangeJB = () => {
        this.setState(prevState => ({
          isJB: !prevState.isJB,
        }));
      }
    
      toggleChangeDrake = () => {
        this.setState(prevState => ({
          isDrake: !prevState.isDrake,
        }));
      }
    
      onSubmit = (e) => {
        e.preventDefault();
        let arr = [];
        for (var key in this.state) {
          if(this.state[key] === true) {
            arr.push(key);
          
          }
        }
        console.log(arr,"hiii")
        // let data = {
        //   check: arr.toString() 
        // };
        // axios.post('http://localhost:4000/checks/add', data)
        //       .then(res => console.log(res.data));
      }
      selectAll=(e)=>{
          if(e.target.value){
            this.setState({ isMJ: true,
                isJB: true,
                isDrake: true})
          }
         
      }
      render() {
        return (
          <div className="container">
            <h2>Save the multiple checkbox values in React js</h2>
            <hr />
            <form onSubmit = {this.onSubmit}>
            <div className="form-check">
                <label className="form-check-label">
                  <input type="checkbox"
                    checked={this.state.isSelect}
                    onChange={this.selectAll}
                    className="form-check-input"
                  />
                SelectAll
                </label>
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <input type="checkbox"
                    checked={this.state.isMJ}
                    onChange={this.toggleChangeMJ}
                    className="form-check-input"
                  />
                  MJ
                </label>
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <input type="checkbox"
                    checked={this.state.isJB}
                    onChange={this.toggleChangeJB}
                    className="form-check-input"
                  />
                  JB
                </label>
              </div>
              <div className="form-check">
                <label className="form-check-label">
                  <input type="checkbox"
                    checked={this.state.isDrake}
                    onChange={this.toggleChangeDrake}
                    className="form-check-input"
                  />
                  Drake
                </label>
              </div>
              <div className="form-group">
                <button className="btn btn-primary" onClick={this.onSubmit}>
                  Submit
                </button>
              
                 
              </div>
            </form>
          </div>
        );
      }
}



export default CheckboxSelectAll;