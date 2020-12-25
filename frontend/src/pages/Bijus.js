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
        bijus: []
    }
    componentWillMount() {
        axios.get('http://localhost:8080/backend/naruto-api/stdquery/bijus')
            .then((response) => {
                this.setState({
                    bijus: response.data
                })
            })
    }

    render() {
        let bijus1 = this.state.bijus.map((biju) => {
            if (biju.count_of_tails === 1) {
                return (
                    <ListGroup.Item>biju.previous</ListGroup.Item>
                )
            }
            return []
        })
        let bijus2 = this.state.bijus.map((biju) => {
            if (biju.count_of_tails === 2) {
                return (
                    <ListGroup.Item>biju.previous</ListGroup.Item>
                )
            }
            return []
        })

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
                                {bijus2}
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
