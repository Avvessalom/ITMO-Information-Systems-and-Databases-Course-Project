import React from "react";
import Table from "react-bootstrap/Table";
import {Destroy_village_button} from "../components/Destroy_village_button";


export const Villages = () => {
    return (
        <header className="masthead text-center">
            <div className="ninja-button"><Destroy_village_button /></div>
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
                            <tr>
                                <td>1</td>
                                <td>Fire</td>
                                <td>Eugene</td>
                                <td>Konoha</td>
                                <td>4</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Gachy</td>
                                <td>Roma</td>
                                <td>Lox</td>
                                <td>4</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Stone</td>
                                <td>Vladimir</td>
                                <td>Lightning village</td>
                                <td>4</td>
                                <td>5</td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </header>
    )
}
