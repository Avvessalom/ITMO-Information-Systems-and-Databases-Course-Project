import React from "react";
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

export const Bijus = () => {
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
                            <ListGroup.Item>Gaara</ListGroup.Item>
                            <ListGroup.Item>Kakoi-to 4el</ListGroup.Item>
                            <ListGroup.Item>ne Gaara</ListGroup.Item>
                        </ListGroup>
                        <Button variant="danger">Seal</Button>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Img variant="top" src={Matatabi} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Img variant="top" src={Isobu} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardDeck>

            <CardDeck>
                <Card>
                    <Card.Img variant="top" src={Son_goku}/>
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Img variant="top" src={Kokuou} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Img variant="top" src={Saiken} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardDeck>

            <CardDeck>
                <Card>
                    <Card.Img variant="top" src={Choumei}/>
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Img variant="top" src={Gyuuki} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to additional
                            content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>

                <Card>
                    <Card.Img variant="top" src={Kurama} />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This card has even longer content than the first to
                            show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </div>
    )
}
