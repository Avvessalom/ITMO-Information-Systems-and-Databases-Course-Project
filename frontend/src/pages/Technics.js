import React, {Component, Fragment} from "react";
import Table from "react-bootstrap/Table";
import {Add_technic} from "../components/Add_technic_button";
import axios from "axios";

class Technics extends Component {
    state = {
        technics: []
    }

    componentWillMount() {axios.get('http://localhost:8080/backend/naruto-api/stdquery/technics')
        .then((response) => {
            this.setState({
                technics: response.data
            })
        })
    }

    render() {
        let technics = this.state.technics.map((ninja) => {
            return (
                <tr key={technics.id}>
                    <td>{technics.id}</td>
                    <td>{technics.name}</td>
                    <td>{technics.type}</td>
                    <td>{technics.adtype}</td>
                    <td>{technics.bloodrest}</td>
                    <td>{technics.rank}</td>
                    <td>{technics.runes}</td>
                </tr>
            )
        });
        return(
            <header className="masthead text-center">
                <div className="ninja-button"><Add_technic /></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                            <h1 className="ninja-heading">technics</h1>
                        </div>
                        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Additional Type</th>
                                    <th>Blood Restriction</th>
                                    <th>Rank</th>
                                    <th>Rune Seals</th>
                                </tr>
                                </thead>
                                <tbody>
                                {technics}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Technics;
