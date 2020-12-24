import React, {Component} from "react";
import Table from "react-bootstrap/Table";
import {Add_citizen} from "../components/Add_citizen_button";
import axios from "axios";


class Citizens extends Component {
    state = {
        citizens: []
    }
    componentWillMount() {
        axios.get('http://localhost:8080/backend/naruto-api/stdquery/citizens')
            .then((response) => {
                this.setState({
                    citizens: response.data
                })
            })
    }

    render() {
        let citizens = this.state.citizens.map((citizens) => {
            return (
                <tr key={citizens.id}>
                    <td>{citizens.id}</td>
                    <td>{citizens.name}</td>
                    <td>{citizens.village}</td>
                    <td>{citizens.age}</td>
                    <td>{citizens.sex}</td>
                    <td>{citizens.status}</td>
                </tr>
            )
        })
        return (
            <header className="masthead text-center">
                <div className="ninja-button"><Add_citizen/></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                            <h1 className="ninja-heading">Citizens</h1>
                        </div>
                        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Village</th>
                                    <th>Age</th>
                                    <th>Sex</th>
                                    <th>Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                {citizens}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Citizens;
