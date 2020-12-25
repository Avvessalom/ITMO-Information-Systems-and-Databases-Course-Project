import React, {Component} from "react";
import Card from "react-bootstrap/Card"
import CardDeck from "react-bootstrap/CardDeck"
import Shukaku from "../assets/images/1shukaku.jpg"
import Matatabi from "../assets/images/2matatabi.jpg"
import Isobu from "../assets/images/3isobu.jpg"
import Son_goku from "../assets/images/4son_goku.jpg"
import Kokuou from "../assets/images/5kokuou.jpg"
import Saiken from "../assets/images/6saiken.jpg"
import Choumei from "../assets/images/7choumei.jpg"
import Gyuuki from "../assets/images/8gyuuki.jpg"
import Kurama from "../assets/images/9kurama.jpg"
import {Button, ListGroup} from "react-bootstrap";
import axios from "axios";

class Bijus extends Component {
    state = {
        biju1: [],
        biju2: [],
        biju3: [],
        biju4: [],
        biju5: [],
        biju6: [],
        biju7: [],
        biju8: [],
        biju9: []
    }
    componentWillMount() {
        axios.get('http://localhost:8080/backend/naruto-api/stdquery/bijus?id=1',)
            .then((response) => {
                this.setState({
                    biju1: response.data
                })
            })
        axios.get('http://localhost:8080/backend/naruto-api/stdquery/bijus?id=2',)
            .then((response) => {
                this.setState({
                    biju2: response.data
                })
            })
        axios.get('http://localhost:8080/backend/naruto-api/stdquery/bijus?id=3',)
            .then((response) => {
                this.setState({
                    biju3: response.data
                })
            })
        axios.get('http://localhost:8080/backend/naruto-api/stdquery/bijus?id=4',)
            .then((response) => {
                this.setState({
                    biju4: response.data
                })
            })
        axios.get('http://localhost:8080/backend/naruto-api/stdquery/bijus?id=5',)
            .then((response) => {
                this.setState({
                    biju5: response.data
                })
            })
        axios.get('http://localhost:8080/backend/naruto-api/stdquery/bijus?id=6',)
            .then((response) => {
                this.setState({
                    biju6: response.data
                })
            })
        axios.get('http://localhost:8080/backend/naruto-api/stdquery/bijus?id=7',)
            .then((response) => {
                this.setState({
                    biju7: response.data
                })
            })
        axios.get('http://localhost:8080/backend/naruto-api/stdquery/bijus?id=8',)
            .then((response) => {
                this.setState({
                    biju8: response.data
                })
            })
        axios.get('http://localhost:8080/backend/naruto-api/stdquery/bijus?id=9',)
            .then((response) => {
                this.setState({
                    biju9: response.data
                })
            })
    }

    render() {
        let bijus1 = this.state.biju1.map((biju) => {
                return (
                    <ListGroup.Item>{biju.previous}</ListGroup.Item>
                )
        });

        return (
            <div className="container">
                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={Shukaku}/>
                        <Card.Body>
                            <Card.Title>Shukaku</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">1 tail</Card.Subtitle>
                            <Card.Header>Previous jinchurikis</Card.Header>
                            <ListGroup variant="flush">
                                {bijus1}
                            </ListGroup>
                            <Button variant="danger">Seal</Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={Matatabi}/>
                        <Card.Body>
                            <Card.Title>Matatabi</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">2 tail</Card.Subtitle>
                            <Card.Header>Previous jinchurikis</Card.Header>
                            <ListGroup variant="flush">
                                123
                            </ListGroup>
                            <Button variant="danger">Seal</Button>
                        </Card.Body>

                    </Card>

                    <Card>
                        <Card.Img variant="top" src={Isobu}/>
                        <Card.Body>
                            <Card.Title>Isobu</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">3 tail</Card.Subtitle>
                            <Card.Header>Previous jinchurikis</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>123</ListGroup.Item>
                            </ListGroup>
                            <Button variant="danger">Seal</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>

                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={Son_goku}/>
                        <Card.Body>
                            <Card.Title>Son Goku</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">4 tail</Card.Subtitle>
                            <Card.Header>Previous jinchurikis</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>123</ListGroup.Item>
                            </ListGroup>
                            <Button variant="danger">Seal</Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={Kokuou}/>
                        <Card.Body>
                            <Card.Title>Kokuou</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">5 tail</Card.Subtitle>
                            <Card.Header>Previous jinchurikis</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>123</ListGroup.Item>
                            </ListGroup>
                            <Button variant="danger">Seal</Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={Saiken}/>
                        <Card.Body>
                            <Card.Title>Saiken</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">6 tail</Card.Subtitle>
                            <Card.Header>Previous jinchurikis</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>123</ListGroup.Item>
                            </ListGroup>
                            <Button variant="danger">Seal</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>

                <CardDeck>
                    <Card>
                        <Card.Img variant="top" src={Choumei}/>
                        <Card.Body>
                            <Card.Title>Choumei</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">7 tail</Card.Subtitle>
                            <Card.Header>Previous jinchurikis</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>123</ListGroup.Item>
                            </ListGroup>
                            <Button variant="danger">Seal</Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={Gyuuki}/>
                        <Card.Body>
                            <Card.Title>Gyuuki</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">8 tail</Card.Subtitle>
                            <Card.Header>Previous jinchurikis</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>123</ListGroup.Item>
                            </ListGroup>
                            <Button variant="danger">Seal</Button>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" src={Kurama}/>
                        <Card.Body>
                            <Card.Title>Kurama</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">9 tail</Card.Subtitle>
                            <Card.Header>Previous jinchurikis</Card.Header>
                            <ListGroup variant="flush">
                                <ListGroup.Item>123</ListGroup.Item>
                            </ListGroup>
                            <Button variant="danger">Seal</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </div>
        )
    }
}

export default Bijus;
