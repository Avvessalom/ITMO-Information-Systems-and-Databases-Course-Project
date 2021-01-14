import React, {Component} from "react";
import {Modal, FormGroup, Form, Button} from "react-bootstrap";
import axios from "axios";

class CenteredModal extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        newNinjaData: {
            name: '',
            clan: '',
            village:'',
            status: '',
            age: '',
            sex: ''
        },
        ninjas: [],
        clans: [],
        villages: []
    }
    addNinja = () => {
        axios.post('http://localhost:8080/narutopedia/ninja/addNew', this.state.newNinjaData).then((response) => {
            console.log(response.data)
        })
    }
    componentWillMount() {
        axios.get('http://localhost:8080/narutopedia/ninja')
            .then((response) => {this.setState({
                ninjas: response.data
            })
                .then(error => console.log(error))
            });
        axios.get('http://localhost:8080/narutopedia/clans')
            .then((response) => {this.setState({
                clans: response.data
            })
                .then(error => console.log(error))
            });
        axios.get('http://localhost:8080/narutopedia/villages')
            .then((response) => {this.setState({
                villages: response.data
            })
                .then(error => console.log(error))
            });
    }

    render() {
        let clan = this.state.clans.map((clan) => {
            return (
                <option value={clan.id}>{clan.name}</option>
            )
        });
        let village = this.state.villages.map((village) => {
            return (
                <option value={village.id}>{village.name}</option>
            )
        });
        return(
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add new Ninja
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Enter ninja details</h4>
                    <Form.Group>
                        <Form.Label> Ninja Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" id="name" value={this.state.newNinjaData.name} onChange={(event => {
                            let {newNinjaData} = this.state;
                            newNinjaData.name = event.target.value;
                            this.setState(newNinjaData);
                        })}/>
                        <br />

                        <Form.Label>Clan</Form.Label>
                        <Form.Control as="select" value={this.state.newNinjaData.clan} onChange={(event => {
                            let {newNinjaData} = this.state;
                            newNinjaData.clan = event.target.value;
                            this.setState(newNinjaData);
                        })}>
                            <option> </option>
                            {clan}
                        </Form.Control>
                        <br />

                        <Form.Label>Age</Form.Label>
                        <Form.Control type="text" placeholder="Enter age" value={this.state.newNinjaData.age} onChange={(event => {
                            let {newNinjaData} = this.state;
                            newNinjaData.age = event.target.value;
                            this.setState(newNinjaData);
                        })} >
                        </Form.Control>
                        <br />

                        <Form.Label>Sex</Form.Label>
                        <Form.Control as="select" value={this.state.newNinjaData.sex} onChange={(event => {
                            let {newNinjaData} = this.state;
                            newNinjaData.sex = event.target.value;
                            this.setState(newNinjaData);
                        })}>
                            <option>No, thank you</option>
                            <option>M</option>
                            <option>F</option>
                        </Form.Control>
                        <br />

                        <Form.Label>Village</Form.Label>
                        <Form.Control as="select" value={this.state.newNinjaData.village} onChange={(event => {
                            let {newNinjaData} = this.state;
                            newNinjaData.village = event.target.value;
                            this.setState(newNinjaData);
                        })}>
                            <option> </option>
                            {village}
                        </Form.Control>
                        <br />

                        <Form.Label as="legend" column sm={2}>
                            Status
                        </Form.Label>
                        <Form.Control as="select" value={this.state.newNinjaData.status} onChange={(event => {
                            let {newNinjaData} = this.state;
                            newNinjaData.status = event.target.value;
                            this.setState(newNinjaData);
                        })}>
                            <option>No</option>
                            <option>Dead</option>
                            <option>Alive</option>
                        </Form.Control>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                    <Button type="submit" onClick={this.addNinja}>Send</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
export const Add_ninja = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <form>
            <div>
                <Button variant="warning" className="widthNinja" size="lg" onClick={() => setModalShow(true)}>
                    Add new Ninja
                </Button>
                <CenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        </form>
    )
}

