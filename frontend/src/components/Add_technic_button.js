import React, {Component} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import axios from "axios";

class TechnicModel extends Component{
    constructor(props) {
        super(props);
    }
    state ={
        newTechnicData: {
            name: '',
            type: '',
            adtype: '',
            bloodrest: '',
            rank: '',
            runes: ''
        }}

    addTechnic = () => {
        axios.post('http://localhost:8080/backend/naruto-api/stdquery/technics', this.state.newTechnicData).then((responce) =>{
            console.log(responce.data)
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
                        Add new Technic
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Enter technic details</h4>
                    <Form.Group>
                        <Form.Label> Technic Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" id="name" value={this.state.newTechnicData.name} onChange={(event => {
                            let {newTechnicData} = this.state;
                            newTechnicData.name = event.target.value;
                            this.setState(newTechnicData);
                        })}/>
                        <br />

                        <Form.Label>Type</Form.Label>
                        <Form.Control as="select" value={this.state.newTechnicData.type} onChange={(event => {
                            let {newTechnicData} = this.state;
                            newTechnicData.type = event.target.value;
                            this.setState(newTechnicData);
                        })}>
                            <option>Default</option>
                            type
                        </Form.Control>
                        <br />

                        <Form.Label>Additional type</Form.Label>
                        <Form.Control as="select" value={this.state.newTechnicData.adtype} onChange={(event => {
                            let {newTechnicData} = this.state;
                            newTechnicData.adtype = event.target.value;
                            this.setState(newTechnicData);
                        })}>
                            <option>Default</option>
                            adtype
                        </Form.Control>
                        <br />

                        <Form.Label>Blood Restriction</Form.Label>
                        <Form.Control as="select" value={this.state.newTechnicData.bloodrest} onChange={(event => {
                            let {newTechnicData} = this.state;
                            newTechnicData.bloodrest = event.target.value;
                            this.setState(newTechnicData);
                        })}>
                            <option>Default</option>
                            <option>Yes</option>
                            <option>No</option>
                        </Form.Control>
                        <br />

                        <Form.Label>Rank</Form.Label>
                        <Form.Control as="select" value={this.state.newTechnicData.rank} onChange={(event => {
                            let {newTechnicData} = this.state;
                            newTechnicData.rank = event.target.value;
                            this.setState(newTechnicData);
                        })}>
                            <option>Default</option>
                            rank
                        </Form.Control>
                        <br />

                        <Form.Label>Rune seals</Form.Label>
                        <Form.Control type="text" placeholder="Enter runes" id="rune" value={this.state.newTechnicData.runes} onChange={(event => {
                            let {newTechnicData} = this.state;
                            newTechnicData.runes = event.target.value;
                            this.setState(newTechnicData);
                        })}/>
                        <br />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                    <Button onClick={this.addTechnic}>Send</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
export const Add_technic = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <form>
            <div>
                <Button variant="dark" size="lg" onClick={() => setModalShow(true)}>
                    Add new Ninja
                </Button>
                <TechnicModel
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        </form>
    )
}
