import React, {Component} from "react";
import Table from "react-bootstrap/Table";
import {Change_leader_button} from "../components/Change_leader_button";
import axios from "axios";
import {Add_clan_button} from "../components/Add_clan_button";


class Clans extends Component {
    state = {
        clans: []
    }
    componentWillMount() {
        axios.get('http://localhost:26000/narutopedia/clans')
            .then((response) => {
                this.setState({
                    clans: response.data
                })
            })
    }
    render() {
        let clans = this.state.clans.map((clan) => {
            if (clan.blood === true){
                return (
                    <tr key={clan.id}>
                        <td>{clan.id}</td>
                        <td>{clan.name}</td>
                        <td>{clan.village}</td>
                        <td>{clan.prestige}</td>
                        <td>{clan.ninjas}</td>
                        <td>{clan.leader}</td>
                        <td>Yes</td>
                    </tr>
                )
            } else {
                return (
                    <tr key={clan.id}>
                        <td>{clan.id}</td>
                        <td>{clan.name}</td>
                        <td>{clan.village}</td>
                        <td>{clan.prestige}</td>
                        <td>{clan.ninjas}</td>
                        <td>{clan.leader}</td>
                        <td>No</td>
                    </tr>
                )
            }
        })
        return (
            <header className="masthead text-center">
                <div className="ninja-button"><Change_leader_button/></div>
                <div className="ninja-button"><Add_clan_button/></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                            <h1 className="ninja-heading">Clans</h1>
                        </div>
                        {/*<div className="col-md-10 col-lg-8 col-xl-7 mx-auto">*/}
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Village</th>
                                    <th>Prestige</th>
                                    <th>Ninjas</th>
                                    <th>Leader</th>
                                    <th>Blood restriction</th>
                                </tr>
                                </thead>
                                <tbody>
                                {clans}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                {/*</div>*/}
            </header>
        )
    }
}
export default Clans;
