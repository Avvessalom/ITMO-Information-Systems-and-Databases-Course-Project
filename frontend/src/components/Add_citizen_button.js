import React, {Component} from "react";
import axios from "axios";
import {Button, Form, Modal} from "react-bootstrap";

class CenteredModal extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        newCitizenData: {
            name: '',
            village:'',
            status: '',
            age: '',
            sex: ''
        },
        villages: []
    }
    addCitizen = () => {
        axios.post('http://localhost:26000/narutopedia/citizens/addNew', this.state.newCitizenData).then((response) => {
            console.log(response.data)
        })
    }
    componentWillMount() {
        axios.get('http://localhost:26000/narutopedia/villages')
            .then((response) => {this.setState({
                villages: response.data
            })
                .then(error => console.log(error))
            });
    }

    render() {
        let villages = this.state.villages.map((village) => {
            return (
                <option value={village.id}>{village.name}</option>
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
                        Add new Ninja
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Enter ninja details</h4>
                    <Form.Group>
                        <Form.Label> Citizen Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" id="name" value={this.state.newCitizenData.name} onChange={(event => {
                            let {newCitizenData} = this.state;
                            newCitizenData.name = event.target.value;
                            this.setState(newCitizenData);
                        })}/>
                        <br />

                        <Form.Label>Age</Form.Label>
                        <Form.Control type="text" placeholder="Enter age" value={this.state.newCitizenData.age} onChange={(event => {
                            let {newCitizenData} = this.state;
                            newCitizenData.age = event.target.value;
                            this.setState(newCitizenData);
                        })} >
                        </Form.Control>
                        <br />

                        <Form.Label>Sex</Form.Label>
                        <Form.Control as="select" value={this.state.newCitizenData.sex} onChange={(event => {
                            let {newCitizenData} = this.state;
                            newCitizenData.sex = event.target.value;
                            this.setState(newCitizenData);
                        })}>
                            <option> </option>
                            <option>M</option>
                            <option>F</option>
                        </Form.Control>
                        <br />

                        <Form.Label>Village</Form.Label>
                        <Form.Control as="select" value={this.state.newCitizenData.village} onChange={(event => {
                            let {newCitizenData} = this.state;
                            newCitizenData.village = event.target.value;
                            this.setState(newCitizenData);
                        })}>
                            <option> </option>
                            {villages}
                        </Form.Control>
                        <br />

                        <Form.Label as="legend" column sm={2}>
                            Status
                        </Form.Label>
                        <Form.Control as="select" value={this.state.newCitizenData.status} onChange={(event => {
                            let {newCitizenData} = this.state;
                            newCitizenData.status = event.target.value;
                            this.setState(newCitizenData);
                        })}>
                            <option> </option>
                            <option>Dead</option>
                            <option>Alive</option>
                        </Form.Control>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                    <Button type="submit" onClick={this.addCitizen}>Send</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export const Add_citizen = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <form>
            <div>
                <Button variant="warning" size="lg" onClick={() => setModalShow(true)}>
                    Add new Citizen
                </Button>
                <CenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        </form>
    )
}

