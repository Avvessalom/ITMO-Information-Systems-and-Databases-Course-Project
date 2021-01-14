import React, {Component} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import axios from "axios";

class ParentChildModal extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        newPairData: {
            parent: '',
            child: ''
        },
        ninjas: []
    }
    addPair = () => {
        axios.post('http://localhost:26000/narutopedia/ninja/parent', this.state.newPairData)
            .then((response) => {
                console.log(response.data)
            })
    }
    componentWillMount() {
        axios.get('http://localhost:26000/narutopedia/ninja')
            .then((response) => {
                this.setState({
                    ninjas: response.data
                })
            })
    }

    render() {
        let ninja = this.state.ninjas.map((ninja) => {
            return(
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
                        Add new Clan
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Enter clan details</h4>
                    <Form.Group>
                        <Form.Label>Parent</Form.Label>
                        <Form.Control as="select" value={this.state.newPairData.parent} onChange={(event => {
                            let {newPairData} = this.state;
                            newPairData.parent = event.target.value;
                            this.setState(newPairData);
                        })}>
                            <option>Parent</option>
                            {ninja}
                        </Form.Control>
                        <br />

                        <Form.Label>Child</Form.Label>
                        <Form.Control as="select" value={this.state.newPairData.child} onChange={(event => {
                            let {newPairData} = this.state;
                            newPairData.child = event.target.value;
                            this.setState(newPairData);
                        })}>
                            <option>Child</option>
                            {ninja}
                        </Form.Control>
                        <br />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                    <Button onClick={this.addPair}>Submit</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export const Parent_child_button = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <form>
            <div className="ml-1">
                <Button variant="warning" className="widthNinja" size="lg" onClick={() => setModalShow(true)}>
                    Parent Child pair
                </Button>
                <ParentChildModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        </form>
    )
}
