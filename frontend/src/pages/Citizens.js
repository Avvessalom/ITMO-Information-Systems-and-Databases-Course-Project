import React, {Component} from "react";
import Table from "react-bootstrap/Table";
import {Add_citizen} from "../components/Add_citizen_button";
import axios from "axios";


class Citizens extends Component {
    state = {
        citizens: []
    }
    componentWillMount() {
        axios.get('http://localhost:26000/narutopedia/citizens')
            .then((response) => {
                this.setState({
                    citizens: response.data
                })
            })
    }

    render() {
        let citizens = this.state.citizens.map((citizen) => {
            return (
                <tr key={citizen.id}>
                    <td>{citizen.id}</td>
                    <td>{citizen.name}</td>
                    <td>{citizen.village}</td>
                    <td>{citizen.age}</td>
                    <td>{citizen.sex}</td>
                    <td>{citizen.status}</td>
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
                        {/*<div className="col-md-10 col-lg-8 col-xl-7 mx-auto">*/}
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
                {/*</div>*/}
            </header>
        )
    }
}
export default Citizens;
