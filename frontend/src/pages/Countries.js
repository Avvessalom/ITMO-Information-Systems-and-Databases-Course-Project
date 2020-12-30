import React, {Component, Fragment} from "react";
import Table from "react-bootstrap/Table";
import {Declare_war_button} from "../components/Declare_war_button";
import axios from "axios";
import {Add_battle_button} from "../components/Add_battle_button";


class Countries extends Component {
    state = {
        countries: []
    }

    componentWillMount() {
        axios.get('http://localhost:8080/narutopedia/countries')
            .then((response) => {
                this.setState({
                    countries: response.data
                })
            })
    }

    render() {
        let countries = this.state.countries.map((country) => {
            return (
                <tr key={country.id}>
                    <td>{country.id}</td>
                    <td>{country.name}</td>
                    <td>{country.countryLord}</td>
                    <td>{country.village}</td>
                    <td>{country.wars}</td>
                    <td>{country.lords}</td>
                    <td>{country.citizens}</td>
                </tr>
            )
        })
        return (
            <header className="masthead text-center">
                <div className="ninja-button"><Declare_war_button/></div>
                <div className="ninja-button"><Add_battle_button/></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                            <h1 className="ninja-heading">countries</h1>
                        </div>
                        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Country Lord</th>
                                    <th>Hidden Village</th>
                                    <th>Wars</th>
                                    <th>Lords</th>
                                    <th>Citizens</th>
                                </tr>
                                </thead>
                                <tbody>
                                {countries}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Countries;
