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
        ninjas: [],
        villages: []
    }

    destroyVillage = () => {
        axios.post('http://localhost:8080/narutopedia/villages/destroyVillage', this.state.village).then((response) => {
            console.log((response.data))
        })
        this.props.onHide();
    }

    componentWillMount() {
        axios.get('http://localhost:8080/narutopedia/villages')
            .then((response) => {this.setState({
                villages: response.data
            })
                .then(error => console.log(error))
            });
        axios.get('http://localhost:8080/narutopedia/ninja')
            .then((response) => {this.setState({
                ninjas: response.data
            })
                .then(error => console.log(error))
            });
    }
    render() {
        let village = this.state.villages.map((ninja) => {
            return (
                <option value={ninja.id}>{ninja.name}</option>
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
                            <option> </option>
                            {village}
                        </Form.Control>
                        <br />
                        <Form.Label>Destroyer</Form.Label>
                        <Form.Control as="select" value={this.state.village.destroyer} onChange={(event => {
                            let {village} = this.state;
                            village.destroyer = event.target.value;
                            this.setState(village);
                        })}>
                            <option> </option>
                            {destroyer}
                        </Form.Control>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" variant="danger" className="widthVillages" size="lg" onClick={this.destroyVillage}>DESTROY</Button>
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

