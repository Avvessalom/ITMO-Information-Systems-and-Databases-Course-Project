import React, {Component} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import axios from "axios";

class WarModal extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        newWarData: {
            name: '',
            attacking: '',
            defending: '',
            lossa: '',
            lossd: '',
            start: '',
            end: ''
        },
        ninjas: []
    }

    destroyVillage = () => {
        axios.post('http://localhost:8080/backend/naruto-api/stdquery/villages', this.state.newWarData).then((response) => {
            console.log((response.data))
        })
    }

    componentWillMount() {
        axios.get('http://localhost:8080/backend/naruto-api/stdquery/ninjas')
            .then((response) => {this.setState({
                ninjas: response.data
            })
                .then(error => console.log(error))
            });
    }
    render() {
        let village = this.state.ninjas.map((ninja) => {
            return (
                <option>{ninja.village}</option>
            )
        })
        let countries = this.state.ninjas.map((ninja) => {
            return (
                <option>{ninja.name}</option>
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
                        Declare War
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Choose opposing countries</h4>
                    <Form.Group>
                        <Form.Label>War Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" id="name" value={this.state.newWarData.name} onChange={(event => {
                            let {newWarData} = this.state;
                            newWarData.name = event.target.value;
                            this.setState(newWarData);
                        })}/>
                        <br />

                        <Form.Label>Attacking Country</Form.Label>
                        <Form.Control as="select" value={this.state.newWarData.attacking} onChange={(event => {
                            let {newWarData} = this.state;
                            newWarData.attacking = event.target.value;
                            this.setState(newWarData);
                        })}>
                            <option>Default select</option>
                            {countries}
                        </Form.Control>
                        <br />

                        <Form.Label>Defending country </Form.Label>
                        <Form.Control as="select" value={this.state.newWarData.defending} onChange={(event => {
                            let {newWarData} = this.state;
                            newWarData.defending = event.target.value;
                            this.setState(newWarData);
                        })}>
                            <option>Default</option>
                            {countries}
                        </Form.Control>
                        <br />

                        <Form.Label>Loss of Attackers</Form.Label>
                        <Form.Control type="text" placeholder="Enter loss" id="lossa" value={this.state.newWarData.lossa} onChange={(event => {
                            let {newWarData} = this.state;
                            newWarData.lossa = event.target.value;
                            this.setState(newWarData);
                        })}/>
                        <br />

                        <Form.Label>Loss of Defenders</Form.Label>
                        <Form.Control type="text" placeholder="Enter loss" id="name" value={this.state.newWarData.lossd} onChange={(event => {
                            let {newWarData} = this.state;
                            newWarData.lossd = event.target.value;
                            this.setState(newWarData);
                        })}/>

                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" variant="danger" size="lg" onClick={this.destroyVillage}>DESTROY</Button>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export const Declare_war_button = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <form>
            <div>
                <Button variant="danger" onClick={() => setModalShow(true)}>
                    Declare war
                </Button>
                <WarModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        </form>
    )
}

