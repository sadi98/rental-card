import { Row, Col, Card, Button, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import car from '../assets/images/car.png';
import '../style/pageHeader.css';

const PageHeader = ({ showButton = true }) => {

    const searching = useNavigate();
    return (
        <div className='bg-custom'>
                <Row className='justify-content-end'>
                    <Col sm={10} md={5}>
                        <Card border='0' className='mt-177 p-0 bg-custom'>
                                <Card.Body className='bg-custom'>
                                    <h4>Sewa & Rental Mobil Terbaik di kawasan
                                    (Lokasimu)</h4>
                                        Selamat datang di Binar Car Rental. Kami
                                        menyediakan mobil kualitas terbaik
                                        dengan harga terjangkau. Selalu siap
                                        melayani kebutuhanmu untuk sewa mobil
                                        selama 24 jam.
                                        <br/>
                                {showButton && (
                                    <Button variant='success' onClick={ () => searching('/search')}>
                                        Mulai Sewa Mobil
                                    </Button>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6}>
                        <Card border='0' className='mt-88'>
                            <Card.Body
                                className='p-0 bg-custom'
                                position='relative'
                            >
                                <Image
                                    src={car}
                                    alt='card'
                                    className='img-fluid position-relative z-index-1'
                                    style={{ zIndex: 1 }}
                                />
                            </Card.Body>
                            <Card.Footer
                                className=' bg-primary position-absolute bottom-0 start-0 w-100'
                                style={{
                                    height: '60%',
                                    borderTopLeftRadius: '10% 30%',
                                }}
                            ></Card.Footer>
                        </Card>
                    </Col>
                </Row>
        </div>
    );
};

export default PageHeader;
