import React from "react";
import Table from "react-bootstrap/Table";
import {Change_leader_button} from "../components/Change_leader_button";


export const Clans = () => {
    return (
        <header className="masthead text-center">
            <div className="ninja-button"><Change_leader_button /></div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 mx-auto">
                        <h1 className="ninja-heading">Clans</h1>
                    </div>
                    <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
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
                            <tr>
                                <td>1</td>
                                <td>Uchiha</td>
                                <td>Konoha</td>
                                <td>10</td>
                                <td>2</td>
                                <td>Eugene</td>
                                <td>Sharingan</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Gachy</td>
                                <td>USA</td>
                                <td>9</td>
                                <td>800</td>
                                <td>Roma</td>
                                <td>Gay</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Uzumaki</td>
                                <td>Unagi maki</td>
                                <td>5</td>
                                <td>455555</td>
                                <td>Naruto</td>
                                <td>No</td>
                            </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </header>
    )
}
