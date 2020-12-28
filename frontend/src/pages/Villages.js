import React, {Component} from "react";
import Table from "react-bootstrap/Table";
import {Destroy_village_button} from "../components/Destroy_village_button";
import axios from "axios";
import {Kage_death_button} from "../components/Kage_death_button";


class Villages extends Component {
    state = {
        villages: []
    }
    componentWillMount() {
        axios.get('http://localhost:8080/backend/naruto-api/stdquery/village')
        .then((response) => {
            this.setState({
                villages: response.data
            })
        })
    }

    render() {
        let villages = this.state.villages.map((village) => {
            return (
                <tr key={village.id}>
                    <td>{village.id}</td>
                    <td>{village.name}</td>
                    <td>{village.country}</td>
                    <td>{village.ninjas}</td>
                    <td>{village.clans}</td>
                    <td>{village.number_of_destruction}</td>
                </tr>
            )
        })
        return (
            <header className="masthead text-center">
                <div className="ninja-button"><Destroy_village_button/></div>
                <div className="ninja-button"><Kage_death_button/></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                            <h1 className="ninja-heading">villages</h1>
                        </div>
                        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Country</th>
                                    <th>Ninjas</th>
                                    <th>Clans</th>
                                    <th>Number of destruction</th>
                                </tr>
                                </thead>
                                <tbody>
                                {villages}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}
export default Villages;
