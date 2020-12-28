import React, {Component} from "react";
import {Button, Form, Modal} from "react-bootstrap";
import axios from "axios";

class AddClanModal extends Component{
    constructor(props) {
        super(props);
    }
    state = {
        newClanData: {
            name: '',
            village: '',
            prestige: ''
        },
        villages: []
    }
    addClan = () => {
        axios.post('http://localhost:8080/backend/naruto-api/stdquery/clans', this.state.newClanData).then((response) => {
            console.log(response.data)
        })
    }
    componentWillMount() {
        axios.get('http://localhost:8080/backend/naruto-api/stdquery/clans').then((response) => {
            this.setState({
                villages: response.data
            })
        })
    }
    render() {
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
                        <Form.Label>Clan Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter clan name" id="name" value={this.state.newClanData.name} onChange={(event => {
                            let {newClanData} = this.state;
                            newClanData.name = event.target.value;
                            this.setState(newClanData);
                        })}/>
                        <br />

                        <Form.Label>Village</Form.Label>
                        <Form.Control as="select" value={this.state.newClanData.village} onChange={(event => {
                            let {newClanData} = this.state;
                            newClanData.clan = event.target.value;
                            this.setState(newClanData);
                        })}>
                            <option> village</option>
                        </Form.Control>
                        <br />

                        <Form.Label>Prestige</Form.Label>
                        <Form.Control as="select" value={this.state.newClanData.prestige} onChange={(event => {
                            let {newClanData} = this.state;
                            newClanData.prestige = event.target.value;
                            this.setState(newClanData);
                        })}>
                            <option>0</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </Form.Control>
                        <br />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                    <Button onClick={this.addClan}>Submit</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export const Add_clan_button = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <form>
            <div>
                <Button variant="warning" size="lg" onClick={() => setModalShow(true)}>
                    Add new Clan
                </Button>
                <AddClanModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </div>
        </form>
    )
}
