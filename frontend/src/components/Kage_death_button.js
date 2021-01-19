import React, {Component} from "react";
import {Button, Form, FormGroup, FormLabel, Modal} from "react-bootstrap";
import axios from "axios";
import Table from "react-bootstrap/Table";

class KageCandidatesModal extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        candidates: []
    }
    componentWillMount() {
        axios.post('http://localhost:26000/narutopedia/villages/kageDeath', this.props.candidatesData)
            .then((response) => {
                this.setState({
                    candidates: response.data
                })
            })
    }
    render() {
        let candidat = this.state.candidates.map((candidat) => {
            return (
                <tr key={candidat.id}>
                    <td>{candidat.id}</td>
                    <td>{candidat.name}</td>
                    <td>{candidat.clan}</td>
                    <td>{candidat.age}</td>
                    <td>{candidat.sex}</td>
                    <td>{candidat.village}</td>
                    <td>{candidat.status}</td>
                </tr>
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
                        Kage dead
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Kage Candidates</h4>
                    <Table striped bordered hover>
                        <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Clan</th>
                        <th>Age</th>
                        <th>Sex</th>
                        <th>Village</th>
                        <th>Status</th>
                    </tr>
                        </thead>
                        <tbody>
                        {candidat}
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

class KageDeathModal extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        oldKageData: {
            oldKage: '',
            warid: ''
        },
        ninjas: [],
        kages: [],
        wars: []
    }
    componentWillMount() {
        axios.get('http://localhost:26000/narutopedia/villages/kages')
            .then((response) => {
                this.setState({
                    kages: response.data
                })
            });
        axios.get('http://localhost:26000/narutopedia/wars')
            .then((resp) => {
                this.setState({
                    wars: resp.data
                })
            })
    }
    sendDeadStatus = () => {
        this.props.onHide()
        this.props.candidates(this.state.oldKageData)
    }
    render() {
        let kages = this.state.kages.map((kage) => {
            return (
                <option value={kage.id}>{kage.name}</option>
            )
        })
        let wars = this.state.wars.map((war) => {
            return(
                <option value={war.id}>{war.name}</option>
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
                        Kage dead
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Choose Kage</h4>
                    <FormGroup>
                        <FormLabel>Kage</FormLabel>
                        <Form.Control as="select" value={this.state.oldKageData.oldKage} onChange={(event => {
                            let {oldKageData} = this.state;
                            oldKageData.oldKage = event.target.value;
                            this.setState(oldKageData);
                        })}>
                            <option> </option>
                            {kages}
                        </Form.Control>

                        <FormLabel>War</FormLabel>
                        <Form.Control as="select" value={this.state.oldKageData.warid} onChange={(event => {
                            let {oldKageData} =this.state;
                            oldKageData.warid = event.target.value;
                            this.setState(oldKageData);
                        })}>
                            <option> </option>
                            {wars}
                        </Form.Control>
                    </FormGroup>
                    <br />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                    <Button onClick={this.sendDeadStatus}>Submit</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export const Kage_death_button = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [candidatesModalShow, setCandidatesModalShow] = React.useState(false);
    const [candidatesData, setCandidatesData] = React.useState(false);
    if (candidatesModalShow === true) {
        return (
            <KageCandidatesModal
                show={candidatesModalShow}
                onHide={() => setCandidatesModalShow(false)}
                candidatesData = {candidatesData}
            />
        )
    }
    return (
        <form>
            <div>
                <Button variant="danger" size="lg" className="widthVillages" onClick={() => setModalShow(true)}>
                    Kage Dead
                </Button>
                <KageDeathModal
                    show={modalShow}
                    candidates = {(kage) => setCandidatesData(kage)}
                    onHide={() => {
                        setModalShow(false)
                        setCandidatesModalShow(true)
                    }}
                />
            </div>
        </form>
    )
}
