import React, {Component} from 'react';
import "./HomeStyles.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../FooterComponent/Footer";
import Search from "../SearchEmployee/Search";
import Table from "../Table/Table";
import data from "../EmployeeDetails/EmployeeDetails.json";
import Pagination from "../Paginate/Pagination";
import _ from "lodash";

class Home extends Component {
    state ={
        currentPage:1,
        pageSize:4,
        employees: [],
    }
    componentDidMount() {
        this.setState({employees:data});
    }
    paginate=(items, pageNumber, pageSize)=>{
        const startIndex = (pageNumber - 1) * pageSize;
        return _(items).slice(startIndex).take(pageSize).value();
    };

    handlePageChange= (page)=> {
        this.setState({ currentPage: page });
    }
     getPagedData=()=> {
         const {currentPage, pageSize, employees: allEmployees} = this.state;
         const employees = this.paginate(allEmployees, currentPage, pageSize);
         return employees;
     }


    render() {
        const { length: count } = this.state.employees;
        const {currentPage,pageSize}= this.state;
        const employees = this.getPagedData()
        return(
        <div>
            <NavBar/>

            <div className="row" style={{paddingTop: "70px", paddingLeft: "50px"}}>
                <Search/>
            </div>

            <div className="container row">
                <div className="col m-3">
                    <Table
                        data ={employees}
                    />
                    <div className="row m-2" style={{paddingLeft: "50px"}}>
                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={this.handlePageChange}
                        />
                        <button className="btn btn-primary d-flex align-self-end">Export</button>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
        )
    }
};

export default Home;
