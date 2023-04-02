import { Container, Card, Row, Col, Button } from "react-bootstrap";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import car from '../assets/images/car.png';
import FormCar from "../components/FormCar";
import '../style/formCustom.css';
import '../style/customCard.css';

const ListCar = () => {
    return(
        <>
            <NavigationBar paddingBottom={222}/>
            <FormCar className="custom-form-list"/>
            <Container>
                <Row className="flex-wrap">
                    <Col md={4} className={'mb-3'}>
                        <Card className="custom-card shadow">
                            <Card.Img variant="top" src={car} />
                            <Card.Body>
                                <Card.Title>Innova</Card.Title>
                                <Card.Subtitle className="mb-2">Rp 500.000 / hari</Card.Subtitle>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                </Card.Text>
                                <Button className="w-100" variant="success">Pilih Mobil</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className={'mb-3'}>
                        <Card className="custom-card shadow">
                            <Card.Img variant="top" src={car} />
                            <Card.Body>
                                <Card.Title>Innova</Card.Title>
                                <Card.Subtitle className="mb-2">Rp 500.000 / hari</Card.Subtitle>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                </Card.Text>
                                <Button className="w-100" variant="success">Pilih Mobil</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className={'mb-3'}>
                        <Card className="custom-card shadow">
                            <Card.Img variant="top" src={car} />
                            <Card.Body>
                                <Card.Title>Innova</Card.Title>
                                <Card.Subtitle className="mb-2">Rp 500.000 / hari</Card.Subtitle>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                </Card.Text>
                                <Button className="w-100" variant="success">Pilih Mobil</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} className={'mb-3'}>
                        <Card className="custom-card shadow">
                            <Card.Img variant="top" src={car} />
                            <Card.Body>
                                <Card.Title>Innova</Card.Title>
                                <Card.Subtitle className="mb-2">Rp 500.000 / hari</Card.Subtitle>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                </Card.Text>
                                <Button className="w-100" variant="success">Pilih Mobil</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer marginTop={100}/>
        </>
    )
}

export default ListCar;