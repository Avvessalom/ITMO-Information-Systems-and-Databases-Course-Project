import React, {Component, Fragment} from "react";
import {Add_ninja} from "../components/Add_ninja";
import Table from "react-bootstrap/Table";

class Technics extends Component {
    render() {
        return(
            <header className="masthead text-center">
                <div className="ninja-button">la</div>
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
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Clan</th>
                                    <th>Age</th>
                                    <th>Sex</th>
                                    <th>Village</th>
                                    <th>Status</th>
                                </tr>
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
