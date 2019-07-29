import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Checkbox from './Checkbox';
class CheckboxContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checkedItems: new Map(),
            arr: []
        }

        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        fetch('/checkbox.json').then(res => {
            res.json().then((res2) => {
                this.setState({ arr: res2 })
            })
        })
    }
    handleChange(e) {
        const item = e.target.name;
        const isChecked = e.target.checked;
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
        console.log(this.state.checkedItems,"checkedItems")
    }
    selectAll=()=>{
 
        
    }

    render() {
        return (
            <div>
                {
                    this.state.arr ? this.state.arr.map(item => (
                        <ul key={item.key} className="li-type">
                            <li>
                                <Checkbox name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
                                {item.name}
                            </li>
                        </ul>
                    )) : null
                }
                <button type="button" className="btn btn-xs btn-primary" onClick={this.selectAll}>selectAll</button>

            </div>
        );
    }
}

export default CheckboxContainer;