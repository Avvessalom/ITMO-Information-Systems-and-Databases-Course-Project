import React, {useEffect, useState, useRef, Component} from "react";
import {Modal, FormGroup, Form, Button} from "react-bootstrap";
import axios from "axios";

const useComponentWillMount = func => {
    const willMount = useRef(true);

    if (willMount.current) {
        func();
    }
    willMount.current = false;
};

function MyVerticallyCenteredModal(props) {
    const [name, setName] = React.useState('');
    const [clan, setClan] = React.useState();
    const ninjas = useComponentWillMount(() => {
        let responsee = [];
        axios.get('http://localhost:8080/backend/naruto-api/stdquery/ninjas')
            .then((response) => {
                responsee = response.data
            });
        // let ninja = responsee.map((ninja) => {
        //     return (
        //         <option>{ninja.clan}</option>
        //     )
        // })
        return responsee
    })
    console.log("aaaaaaaaaaaaaaaa",ninjas);

    //  function addNinja() {
    //     axios.post('http://localhost:8080/backend/naruto-api/stdquery/ninjas',name).then((response) => {
    //         console.log(response.data);
    //     })
    // }
    function addNinja() {
        axios.post('http://localhost:3000/~s250643/ninjas', {"name": name, "clan": clan}).then((response) => {
            console.log(response.data);
        })
    }

    return (
        <Modal
            {...props}
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
                    <Form.Control type="text" placeholder="Normal text" id="name" onChange={event => setName(event.target.value)}  />
                    <br />
                    <Form.Label>Clan</Form.Label>
                    <Form.Control as="select" onChange={event => setClan(event.target.value)}>
                        <option>Default select</option>
                        <option>alala</option>
                        {ninjas}
                    </Form.Control>
                    <br />
                    <Form.Label>Age</Form.Label>
                    <Form.Control as="select">
                        <option>0</option>
                    </Form.Control>
                    <br />
                    <Form.Label>Sex</Form.Label>
                    <Form.Control as="select">
                        <option>M</option>
                        <option>F</option>
                    </Form.Control>
                    <br />
                    <Form.Label>Village</Form.Label>
                    <Form.Control as="select">
                        <option>Default select</option>
                    </Form.Control>
                    <br />
                        <Form.Label as="legend" column sm={2}>
                            Status
                        </Form.Label>
                            <Form.Check
                                type="radio"
                                label="alive"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                            />
                            <Form.Check
                                type="radio"
                                label="dead"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button type="submit" onClick={addNinja}>Send</Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
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
        ninjas: []
    }
    addNinja = () => {
        axios.post('http://localhost:3000/~s250643/ninjas', this.state.newNinjaData).then((response) => {
            console.log(response.data)
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
        let clan = this.state.ninjas.map((ninja) => {
            return (
                <option>{ninja.clan}</option>
            )
        })
        let village = this.state.ninjas.map((ninja) => {
            return (
                <option>{ninja.village}</option>
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
                            <option>No</option>
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
                            <option>Default select</option>
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
                    <Button type="submit" onClick={this.addNinja}>Send</Button>
                    <Button onClick={this.props.onHide}>Close</Button>
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

