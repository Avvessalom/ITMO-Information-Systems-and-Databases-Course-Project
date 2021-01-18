import React, {Component, Fragment} from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";


class Wars extends Component{
    state = {
        wars: []
    }

    componentWillMount() {
        axios.get('http://localhost:26000/narutopedia/wars')
            .then((response) => {
                this.setState({
                    wars: response.data
                })
            })
    }

    render() {
        let wars = this.state.wars.map((war) => {
            return (
                <tr key={war.id}>
                    <td>{war.id}</td>
                    <td>{war.name}</td>
                    <td>{war.attacking_country}</td>
                    <td>{war.defending_country}</td>
                    <td>{war.loss_of_attackers}</td>
                    <td>{war.loss_of_defenders}</td>
                </tr>
            )
        })
        return(
            <header className="masthead text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-9 mx-auto">
                            <h1 className="ninja-heading">Wars</h1>
                        </div>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Attacking Country</th>
                                <th>Defending Country</th>
                                <th>Loss of Attackers</th>
                                <th>Loss of Defenders</th>
                            </tr>
                            </thead>
                            <tbody>
                                {wars}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </header>
        )
    }
}

export default Wars;
