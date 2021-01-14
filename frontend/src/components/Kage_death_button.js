import React, {Component} from "react";
import {Button, Form, Modal} from "react-bootstrap";
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
        axios.get('http://localhost:26000/narutopedia/villges/kegeDeath', this.props.candidatesData)
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
                    </Table>
                    {candidat}
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
        kage: {
            name: ''
        },
        ninjas: [],
        kages: []
    }
    componentWillMount() {
        axios.get('http://localhost:26000/narutopedia/villages/kages')
            .then((response) => {
                this.setState({
                    kages: response.data
                })
            });
    }
    sendDeadStatus = () => {
        this.props.onHide()
    }
    render() {
        let kages = this.state.kages.map((kage) => {
            return (
                <option value={kage.id}>{kage.name}</option>
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
                    <Form.Control as="select" value={this.state.kage.name} onChange={(event => {
                        let {kage} = this.state;
                        kage.name = event.target.value;
                        this.props.candidates(kage);
                    })}>
                        <option>dead kage</option>
                        <option value="1">dead koge</option>
                        {kages}
                    </Form.Control>
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
                <KageCandidatesModal
                    show={candidatesModalShow}
                    onHide={() => setCandidatesModalShow(false)}
                    candidatesData = {candidatesData}
                />
            </div>
        </form>
    )
}
