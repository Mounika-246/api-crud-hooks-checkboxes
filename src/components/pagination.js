import React ,{Component} from 'react'
import Paginate from 'react-js-pagination';


class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[],
            activePage: 1,
            itemsCountPerPage: 3,
            loader: false

        }
    }
    componentDidMount(){
        fetch('/data.json').then(res=>{
            res.json().then((res2)=>{
                this.setState({data:res2})
            })
        })
    }
    handlePageChange = (pagesCount) => {
        this.setState({ activePage: pagesCount })
    }


    render() {
        const { data, activePage, itemsCountPerPage } = this.state
        const indexOfLastTodo = activePage * itemsCountPerPage;
        const indexOfFirstTodo = indexOfLastTodo - itemsCountPerPage;

        const currentItems = data.slice(indexOfFirstTodo, indexOfLastTodo)

        return (

            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="card" style={{ width: '100%', marginTop: '50px' }}>
                            <table className="table">
                                <thead>
                                    <tr>
                                      
                                        <th>name</th>
                                        <th>company</th>
                                        <th>email</th>
                                      
                                    </tr>
                                </thead>
                                <tbody>
                                    {currentItems ? currentItems.map((val, key) => (
                                        <tr key={key}>
                                           
                                            <td>{val.name}</td>
                                            <td>{val.company}</td>
                                           
                                            <td>{val.email}</td>
                                           
                                        </tr>
                                    )) : null}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Paginate
                    activePage={this.state.activePage}
                    itemsCountPerPage={this.state.itemsCountPerPage}
                    totalItemsCount={this.state.data.length}
                    onChange={this.handlePageChange}
                    linkClass="page-link"
                    itemClass="page-item"
                    prevPageText='prev'
                    nextPageText='next'
                    firstPageText='first'
                    lastPageText='last'
                />

            </React.Fragment>
        )
    }
}
export default Pagination;