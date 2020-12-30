import React, {Component} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import axios from "axios";

class AddBattleModal extends Component {
    constructor(props) {
        super(props);
    }
    state ={
        newBattleData: {
            war: '',
            territory: '',
            loss: '',
            duration: '',
            name: '',
        },
        wars: [],
        countries: []
    }
    addBattle = () => {
        axios.post('http://localhost:8080/narutopedia/countries/addBattle', this.state.newBattleData)
            .then((response) => {
                console.log(response.data)
            })
    }
    componentWillMount() {
        axios.get('http://localhost:8080/narutopedia/countries')
            .then((response) => {
                this.setState({
                    countries: response.data
                })
            })
        axios.get('http://localhost:8080/narutopedia/wars')
            .then((response) => {
                this.setState({
                    countries: response.data
                })
            })
    }
    render() {
        let countries = this.state.countries.map((country) => {
            return (
                <option>{country.name}</option>
            )
        })
        let wars = this.state.wars.map((war) => {
            return (
                <option>{war.name}</option>
            )
        })
        return(
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add new Battle
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Enter battle details</h4>
                    <Form.Group>
                        <Form.Label>War</Form.Label>
                        <Form.Control as="select" value={this.state.newBattleData.war} onChange={(event => {
                            let {newBattleData} = this.state;
                            newBattleData.war = event.target.value;
                            this.setState(newBattleData);
                        })}>
                            <option> </option>
                            {wars}
                        </Form.Control>
                        <br />

                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter battle name" id="name" value={this.state.newBattleData.name} onChange={(event => {
                            let {newBattleData} = this.state;
                            newBattleData.name = event.target.value;
                            this.setState(newBattleData);
                        })}/>
                        <br />

                        <Form.Label>Territory</Form.Label>
                        <Form.Control as="select" value={this.state.newBattleData.territory} onChange={(event => {
                            let {newBattleData} = this.state;
                            newBattleData.territory = event.target.value;
                            this.setState(newBattleData);
                        })}>
                            <option> </option>
                            {countries}
                        </Form.Control>
                        <br />

                        <Form.Label>Loss</Form.Label>
                        <Form.Control type="text" placeholder="Enter loss" id="loss" value={this.state.newBattleData.loss} onChange={(event => {
                            let {newBattleData} = this.state;
                            newBattleData.loss = event.target.value;
                            this.setState(newBattleData);
                        })}/>
                        <br />

                        <Form.Label>Duration</Form.Label>
                        <Form.Control type="text" placeholder="Enter duration" id="loss" value={this.state.newBattleData.duration} onChange={(event => {
                            let {newBattleData} = this.state;
                            newBattleData.duration = event.target.value;
                            this.setState(newBattleData);
                        })}/>
                        <br />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                    <Button onClick={this.addBattle}>Submit</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export const Add_battle_button = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <form>
            <div>
                <Button variant="warning" className="widthCountries" size="lg" onClick={() => setModalShow(true)}>
                    Add new Battle
                </Button>
                <AddBattleModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        </form>
    )
}
