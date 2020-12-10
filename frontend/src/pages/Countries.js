import React, {Fragment} from "react";
import Table from "react-bootstrap/Table";
import {Declare_war_button} from "../components/Declare_war_button";


export const Countries = () => {
    return (
        <header className="masthead text-center">
            <div className="ninja-button"><Declare_war_button /></div>
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
                            <tr>
                                <td>1</td>
                                <td>Fire</td>
                                <td>Eugene</td>
                                <td>Konoha</td>
                                <td>4</td>
                                <td>5</td>
                                <td>100500</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Gachy</td>
                                <td>Roma</td>
                                <td>Lox</td>
                                <td>4</td>
                                <td>5</td>
                                <td>100500</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Stone</td>
                                <td>Vladimir</td>
                                <td>Lightning village</td>
                                <td>4</td>
                                <td>5</td>
                                <td>100500</td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </header>
    )
}
