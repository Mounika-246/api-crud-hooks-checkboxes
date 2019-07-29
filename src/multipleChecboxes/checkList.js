import React, { Component } from 'react';
import CheckBoxList from './checkBoxList';

 class CheckList extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              isAllChecked:false,
              checkList:   [
                {
                    name: "city",
                    value: "bangalore",
                    checked: false
                },
                {
                    name: "city",
                    value: "chennai",
                    checked: false
                },
                {
                    name: "city",
                    value: "delhi",
                    checked: false
                }
            ]
         }
     }
     
     onCheckBoxChange=(checkName, isChecked)=> {
        let isAllChecked = (checkName === 'all' && isChecked);
        let isAllUnChecked = (checkName === 'all' && !isChecked);
        const checked = isChecked;

        const checkList = this.state.checkList.map((V, index) => {
            if(isAllChecked || V.value === checkName) {
                return Object.assign({}, V, {
                    checked
                });
            } else if (isAllUnChecked) {
                return Object.assign({}, V, {
                    checked: false
                });
            }

            return V;
        });

        let isAllSelected = (checkList.findIndex((item) => item.checked === false) === -1) || isAllChecked;

        this.setState({
            checkList,
            isAllSelected,
        });

    }

    render() {
        return (
            <div>
                 <div className="city-list">
            <CheckBoxList 
                options={this.state.checkList}
                isCheckedAll={this.state.isAllSelected}
                onCheck={this.onCheckBoxChange.bind(this)} 
            />
          </div>
            </div>
        )
    }
}
export default CheckList;
