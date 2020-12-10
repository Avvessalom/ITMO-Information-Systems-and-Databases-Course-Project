import React, {Fragment} from "react";
import Table from "react-bootstrap/Table";
import {Add_citizen} from "../components/Add_citizen_button";


export const Citizens = () => {
    return (
        <header className="masthead text-center">
            <div className="ninja-button"><Add_citizen /></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 mx-auto">
                        <h1 className="ninja-heading">Citizens</h1>
                    </div>
                    <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
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
                            <tr>
                                <td>1</td>
                                <td>Uchiha</td>
                                <td>Konoha</td>
                                <td>10</td>
                                <td>800</td>
                                <td>Eugene</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Gachy</td>
                                <td>USA</td>
                                <td>9</td>
                                <td>2</td>
                                <td>Roma</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Uzumaki</td>
                                <td>Unagi maki</td>
                                <td>5</td>
                                <td>455555</td>
                                <td>Naruto</td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </header>
    )
}
