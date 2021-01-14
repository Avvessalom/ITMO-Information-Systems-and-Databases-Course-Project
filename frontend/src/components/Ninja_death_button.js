import React, {Component} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import axios from "axios";

class NinjaDeathModal extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        deadNinjaData: {
            id: ''
        },
        ninjas: []
    }
    componentWillMount() {
        axios.get('http://localhost:26000/narutopedia/ninja')
            .then((response) => {
                this.setState({
                    ninjas: response.data
                })
            })
    }
    sendDeadStatus = () => {
        axios.post('http://localhost:26000/narutopedia/ninja/death?id=' + this.state.deadNinjaData.id)
            .then((response) => {
                console.log(response.data)
            })
        this.props.onHide()
    }
    render() {
        let ninjas = this.state.ninjas.map((ninja) => {
            return (
                <option value={ninja.id}>{ninja.name}</option>
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
                    <Form.Control as="select" value={this.state.deadNinjaData.id} onChange={(event => {
                        let {deadNinjaData} = this.state;
                        deadNinjaData.id = event.target.value;
                        this.setState(deadNinjaData)
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
