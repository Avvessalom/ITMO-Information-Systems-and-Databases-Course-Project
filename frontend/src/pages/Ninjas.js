import React, {Component} from "react";
import Table from "react-bootstrap/Table"
import {Add_ninja} from "../components/Add_ninja";
import axios from "axios";

class Ninjas extends Component {
    state = {
        ninjas: []
    }

    componentWillMount() {
        axios.get('http://localhost:8080/backend/naruto-api/stdquery/ninjas')
            .then((response) => {this.setState({
                ninjas: response.data
            })
            .then(error => console.log(error))
        });
    }

    render() {
        let ninjas = this.state.ninjas.map((ninja) => {
            return (
                <tr key={ninja.id}>
                    <td>{ninja.id}</td>
                    <td>{ninja.name}</td>
                    <td>{ninja.clan}</td>
                    <td>{ninja.age}</td>
                    <td>{ninja.sex}</td>
                    <td>{ninja.village}</td>
                    <td>{ninja.status}</td>
                </tr>
            )
        });
        return (
            <header className="masthead text-center">
                <div className="ninja-button"><Add_ninja/></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                            <h1 className="ninja-heading">ninjas</h1>
                        </div>
                        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Clan</th>
                                    <th>Age</th>
                                    <th>Sex</th>
                                    <th>Village</th>
                                    <th>Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                {ninjas}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Ninjas;
