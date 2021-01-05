import React, {Component} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import axios from "axios";

class TechnicModel extends Component{
    constructor(props) {
        super(props);
    }
    state = {
        newTechnicData: {
            name: '',
            type: '',
            adtype: '',
            bloodrest: '',
            rank: '',
            runes: ''
        },
        types: [],
        additionalType: [],
        rank: []
    }

    addTechnic = () => {
        axios.post('http://localhost:8080/narutopedia/technics/addNew', this.state.newTechnicData).then((responce) =>{
            console.log(responce.data)
        })
    }
    componentWillMount() {
        axios.get('http://localhost:8080/narutopedia/technics/types')
            .then((response) => {
                this.setState({
                    types: response.data
                })
            })
        axios.get('http://localhost:8080/narutopedia/technics/additionalType')
            .then((response) => {
                this.setState({
                    additionalType: response.data
                })
            })
        axios.get('http://localhost:8080/narutopedia/technics/rank')
            .then((response) => {
                this.setState({
                    rank: response.data
                })
            })
    }

    render() {
        let types = this.state.types.map((type) => {
            return (
                <option value={type.id}>{type.name}</option>
            )
        })
        let additionalTypes = this.state.additionalType.map((additionalType) => {
            return (
                <option value={additionalType.id}>{additionalType.name}</option>
            )
        })
        let ranks = this.state.rank.map((rank) => {
            return (
                <option value={rank.id}>{rank.name}</option>
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
                        Add new Technic
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Enter technic details</h4>
                    <Form.Group>
                        <Form.Label> Technic Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" id="name" value={this.state.newTechnicData.name} onChange={(event => {
                            let {newTechnicData} = this.state;
                            newTechnicData.name = event.target.value;
                            this.setState(newTechnicData);
                        })}/>
                        <br />

                        <Form.Label>Type</Form.Label>
                        <Form.Control as="select" value={this.state.newTechnicData.type} onChange={(event => {
                            let {newTechnicData} = this.state;
                            newTechnicData.type = event.target.value;
                            this.setState(newTechnicData);
                        })}>
                            <option> </option>
                            {types}
                        </Form.Control>
                        <br />

                        <Form.Label>Additional type</Form.Label>
                        <Form.Control as="select" value={this.state.newTechnicData.adtype} onChange={(event => {
                            let {newTechnicData} = this.state;
                            newTechnicData.adtype = event.target.value;
                            this.setState(newTechnicData);
                        })}>
                            <option> </option>
                            {additionalTypes}
                        </Form.Control>
                        <br />

                        <Form.Label>Blood Restriction</Form.Label>
                        <Form.Control as="select" value={this.state.newTechnicData.bloodrest} onChange={(event => {
                            let {newTechnicData} = this.state;
                            newTechnicData.bloodrest = event.target.value;
                            this.setState(newTechnicData);
                        })}>
                            <option> </option>
                            <option>Yes</option>
                            <option>No</option>
                        </Form.Control>
                        <br />

                        <Form.Label>Rank</Form.Label>
                        <Form.Control as="select" value={this.state.newTechnicData.rank} onChange={(event => {
                            let {newTechnicData} = this.state;
                            newTechnicData.rank = event.target.value;
                            this.setState(newTechnicData);
                        })}>
                            <option> </option>
                            {ranks}
                        </Form.Control>
                        <br />

                        <Form.Label>Rune seals</Form.Label>
                        <Form.Control type="text" placeholder="Enter runes" id="rune" value={this.state.newTechnicData.runes} onChange={(event => {
                            let {newTechnicData} = this.state;
                            newTechnicData.runes = event.target.value;
                            this.setState(newTechnicData);
                        })}/>
                        <br />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                    <Button onClick={this.addTechnic}>Send</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
export const Add_technic = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <form>
            <div>
                <Button variant="dark" size="lg" onClick={() => setModalShow(true)}>
                    Add new Technic
                </Button>
                <TechnicModel
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        </form>
    )
}
