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
            date: ''
        },
        newBattleGet: []
    }
    addBattle = () => {
        axios.post('http://localhost:8080/backend/naruto-api/stdquery/battles', this.state.newBattleData)
            .then((response) => {
                console.log(response.data)
            })
    }
    render() {
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
                            <option>war</option>
                        </Form.Control>
                        <br />

                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter loss" id="name" value={this.state.newBattleData.name} onChange={(event => {
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
                            <option>territory</option>
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

                        <Form.Label>Date of battle</Form.Label>
                        <Form.Control type="text" placeholder="Enter loss" id="date" value={this.state.newBattleData.date} onChange={(event => {
                            let {newBattleData} = this.state;
                            newBattleData.date = event.target.value;
                            this.setState(newBattleData);
                        })}/>
                        <br />

                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                    <Button onClick={this.addClan}>Submit</Button>
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
                <Button variant="warning" size="lg" onClick={() => setModalShow(true)}>
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
