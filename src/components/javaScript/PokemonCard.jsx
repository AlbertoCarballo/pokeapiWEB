import { Container, Button, Card, Col, Row } from 'react-bootstrap';
import "../css/pcDesign.css";

function PokemonCard({ name, brief, image }) {
    return (
        <Col lg={4} md={6} sm={12}>
            <Card className='card-pokemon' style={{ width: '100%', height: 'auto' }}>
                <Card.Img variant="top" src={image} className='img-pokemon' />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{brief}</Card.Text>
                    <Button variant="warning" className='btn-carta'>Curiosidad</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default PokemonCard;