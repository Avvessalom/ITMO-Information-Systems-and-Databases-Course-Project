import React from "react";
import Table from "react-bootstrap/Table"
import {Add_ninja} from "../components/Add_ninja";

export const Ninjas = () => {
    return (
        <header className="masthead text-center">
            <div className="ninja-button"><Add_ninja /></div>
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
                            <tr>
                                <td>1</td>
                                <td>Eugege</td>
                                <td>Cool</td>
                                <td>54</td>
                                <td>M</td>
                                <td>Saint P</td>
                                <td>Alive</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Roma</td>
                                <td>Lox</td>
                                <td>0</td>
                                <td>F</td>
                                <td>Siberia</td>
                                <td>Alive</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Vladimir</td>
                                <td>Nikolaev</td>
                                <td>~30</td>
                                <td>M</td>
                                <td>Saint P</td>
                                <td>Alive</td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </header>
    )
}
