import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../style/carRental.css';

const CarRental = () => {
    return (
        <Container className='mt-5 mb-5'>
            <Row className='justify-content-center'>
                <Col md={10} className='text-center text-white'>
                    <Card className='bg-primary'>
                        <Card.Body>
                            <h2 className='text-center mt-3'>
                                Sewa Mobil di (Lokasimu) Sekarang
                            </h2>
                            <p className='text-center mt-3'>
                                Lorem ipssm dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.{' '}
                            </p>
                            <Button variant='success'>Mulai Sewa Mobil</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row> 
        </Container>
    );
};

export default CarRental;
