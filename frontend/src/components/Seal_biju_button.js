import {Button, Form, Modal} from "react-bootstrap";
import React, {Component, useState} from "react";
import axios from "axios";

class SealBijuModal extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        newJinchuurikiData:{
            id:   '',
            name: ''
        },
        candidates: []
    }
    componentWillMount() {
        axios.get('http://localhost:26000/narutopedia/bijus/jinchuurikiCandidats')
            .then((response) => {
                this.setState({
                    candidates: response.data
                })
            })
    }
    sealBiju = () => {
        axios.post('http://localhost:26000/narutopedia/bijus', this.state.newJinchuurikiData)
            .then((response) => {
                console.log(response.data)
            })
    }
    render() {
        let candidates = this.state.candidates.map((candidate) => {
            return (
                <option value={candidate.id}>{candidate.name}</option>
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
                        Sealing {this.props.tails} tails Biju
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Select new Jinchuuriki</h4>
                    <Form.Group>
                        <Form.Label>New Jinchuuriki</Form.Label>
                        <Form.Control as="select" value={this.state.newJinchuurikiData.name} onChange={(event => {
                            let {newJinchuurikiData} = this.state;
                            newJinchuurikiData.name = event.target.value;
                            newJinchuurikiData.id = this.props.tails;
                            this.setState(newJinchuurikiData);
                        })}>
                            <option> </option>
                            {candidates}
                        </Form.Control>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                    <Button onClick={this.sealBiju}>Submit</Button>
                </Modal.Footer>
            </Modal>
        )
    }

}

function Seal_biju_button (props){
    const [modalShow, setModalShow] = React.useState(false);
    return(
        <form>
            <div>
                <Button variant="danger" onClick={() => setModalShow(true)}>Seal</Button>
            </div>
            <SealBijuModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                tails = {props.tails}
            />
        </form>
    )

}
export default Seal_biju_button;
