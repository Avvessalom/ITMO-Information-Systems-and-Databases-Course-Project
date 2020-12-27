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
        ninjas: []
    }

    changeLeader = () => {
        axios.post('http://localhost:8080/backend/naruto-api/stdquery/villages', this.state.leader).then((response) => {
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
                            <option>Default select</option>
                            {village}
                        </Form.Control>
                        <br />

                        <Form.Label>Candidates</Form.Label>
                        <Form.Control as="select" value={this.state.leader.candidate} onChange={(event => {
                            let {leader} = this.state;
                            leader.candidate = event.target.value;
                            this.setState(leader);
                        })}>
                            <option>Default</option>
                            {destroyer}
                        </Form.Control>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button type="submit" onClick={this.changeLeader}>Change</Button>
                    <Button onClick={this.props.onHide}>Close</Button>
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
                <Button variant="info" size="lg" onClick={() => setModalShow(true)}>
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

