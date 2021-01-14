import React, {Component} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import axios from "axios";

class LeaderModal extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        leader: {
            clan: '',
            candidate: ''
        },
        candidates: [],
        clans: []
    }

    changeLeader = () => {
        axios.post('http://localhost:26000/narutopedia/clans/leader', this.state.leader).then((response) => {
            console.log((response.data))
        })
    }

    componentWillMount() {
        axios.get('http://localhost:26000/narutopedia/ninja')
            .then((response) => {this.setState({
                candidates: response.data
            })
                .then(error => console.log(error))
            });

        axios.get('http://localhost:26000/narutopedia/clans')
            .then((response) => {this.setState({
            clans: response.data
        })
            .then(error => console.log(error))
        });
    }
    render() {
        let clans = this.state.clans.map((clan) => {
            return (
                <option value={clan.id}>{clan.name}</option>
            )
        })
        let candidates = this.state.candidates.map((candidate) => {
            return (
                <option value={candidate.id}>{candidate.name}</option>
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
                        Change Leader
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Choose clan and new leader</h4>
                    <Form.Group>
                        <Form.Label>Clan</Form.Label>
                        <Form.Control as="select" value={this.state.leader.clan} onChange={(event => {
                            let {leader} = this.state;
                            leader.clan = event.target.value;
                            this.setState(leader);
                        })}>
                            <option> </option>
                            {clans}
                        </Form.Control>
                        <br />

                        <Form.Label>Candidates</Form.Label>
                        <Form.Control as="select" value={this.state.leader.candidate} onChange={(event => {
                            let {leader} = this.state;
                            leader.candidate = event.target.value;
                            this.setState(leader);
                        })}>
                            <option> </option>
                            {candidates}
                        </Form.Control>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                    <Button type="submit" onClick={this.changeLeader}>Change</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
export const Change_leader_button = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <form>
            <div>
                <Button variant="info" size="lg" className="widthClan" onClick={() => setModalShow(true)}>
                    Change leader
                </Button>
                <LeaderModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        </form>
    )
}

