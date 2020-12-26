import React, {Component} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import axios from "axios";

class DestroyModal extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        village: {
            name: '',
            destroyer: ''
        },
        ninjas: []
    }

    destroyVillage = () => {
        axios.post('http://localhost:8080/backend/naruto-api/stdquery/villages', this.state.village).then((response) => {
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
        let destroyer = this.state.ninjas.map((ninja) => {
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
                        Destroy Village
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Choose village you want to destroy</h4>
                    <Form.Group>
                        <Form.Label>Village</Form.Label>
                        <Form.Control as="select" value={this.state.village.name} onChange={(event => {
                            let {village} = this.state;
                            village.name = event.target.value;
                            this.setState(village);
                        })}>
                            <option>Default select</option>
                            {village}
                        </Form.Control>
                        <br />
                        <Form.Label>Destroyer</Form.Label>
                        <Form.Control as="select" value={this.state.village.destroyer} onChange={(event => {
                            let {village} = this.state;
                            village.destroyer = event.target.value;
                            this.setState(village);
                        })}>
                            <option>Default</option>
                            {destroyer}
                        </Form.Control>
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

export const Destroy_village_button = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <form>
            <div>
                <Button variant="danger" size="lg" onClick={() => setModalShow(true)}>
                    Destroy Village
                </Button>
                <DestroyModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        </form>
    )
}

