import React, {Component} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import axios from "axios";

class NinjaDeathModal extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        deadNinjaData: {
            name: ''
        },
        ninjas: []
    }
    componentWillMount() {
        axios.get('http://localhost:8080/backend/naruto-api/stdquery/test')
            .then((response) => {
                this.setState({
                    ninjas: response.data
                })
            })
    }
    sendDeadStatus = () => {
        axios.post('http://localhost:8080/backend/naruto-api/stdquery/test', this.state.deadNinjaData)
            .then((response) => {
                console.log(response.data)
            })
    }
    render() {
        let ninjas = this.state.ninjas.map((ninja) => {
            return (
                <option>{ninja.name}</option>
            )
        })
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Ninja dead
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Choose Kage</h4>
                    <Form.Control as="select" value={this.state.deadNinjaData.name} onChange={(event => {
                        let {ninja} = this.state;
                        ninja.name = event.target.value;
                        this.setState(ninja)
                    })}>
                        <option>dead ninja</option>
                        {ninjas}
                    </Form.Control>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                    <Button onClick={this.sendDeadStatus}>Submit</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export const Ninja_death_button = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <form>
            <div>
                <Button variant="danger" size="lg" className="widthNinja" onClick={() => setModalShow(true)}>
                    Ninja Dead
                </Button>
                <NinjaDeathModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        </form>
    )
}
