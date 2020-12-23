import React, {Component} from "react";
import Table from "react-bootstrap/Table"
import {Add_ninja} from "../components/Add_ninja";
import {connect} from "react-redux";

class Ninjas extends Component {
    render() {
        return (
            <header className="masthead text-center">
                <div className="ninja-button"><Add_ninja/></div>
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
                                <tr>
                                    <td>{this.props.ID}</td>
                                    <td>{this.props.Name}</td>
                                    <td>{this.props.Clan}</td>
                                    <td>{this.props.Age}</td>
                                    <td>{this.props.Sex}</td>
                                    <td>{this.props.Village}</td>
                                    <td>{this.props.Status}</td>
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
function mapStateToProps(state) {
    return{
        ID: state.ninjaInfo.ID,
        Name: state.ninjaInfo.Name,
        Clan: state.ninjaInfo.Clan,
        Age: state.ninjaInfo.Age,
        Sex: state.ninjaInfo.Sex,
        Village: state.ninjaInfo.Village,
        Status: state.ninjaInfo.Status
    }
}

function mapDispatchToProps(){
    return{};
}

export default connect (mapStateToProps, mapDispatchToProps)(Ninjas);
