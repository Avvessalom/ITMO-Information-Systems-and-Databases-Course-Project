import React, {Component, Fragment} from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import {Add_battle_button} from "../components/Add_battle_button";

class Battles extends Component{
    state = {
        battles: []
    }

    componentWillMount() {
        axios.get('http://localhost:26000/narutopedia/battles')
            .then((response) => {
                this.setState({
                    battles: response.data
                })
            })
    }

    render() {
        let battles = this.state.battles.map((battle) => {
            return (
                <tr key={battle.id}>
                    <td>{battle.battle_id}</td>
                    <td>{battle.name}</td>
                    <td>{battle.war}</td>
                    <td>{battle.territory}</td>
                    <td>{battle.loss}</td>
                    <td>{battle.duration}</td>
                </tr>
            )
        })
        return(
            <header className="masthead text-center">
                <div className="ninja-button"><Add_battle_button/></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                            <h1 className="ninja-heading">Battles</h1>
                        </div>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>War</th>
                                <th>Territory</th>
                                <th>Loss</th>
                                <th>Duration</th>
                            </tr>
                            </thead>
                            <tbody>
                            {battles}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </header>
        )
    }
}

export default Battles;
