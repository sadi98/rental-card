import { Container, Row, Col, Card, Button, Image  } from 'react-bootstrap';
import car from '../assets/images/car.png';
const PageHeader = () => {
    return (
      <div className='bg-custom'>
        <Container fluid="md">
            <Row>
              <Col sm={12} md={6}>
                <Card border='0' className='mt-177'>
                    <Card.Body className="p-0 bg-custom">
                        <Card.Title>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</Card.Title>
                        <Card.Text>
                          <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                        </Card.Text>
                        <Button variant="success">Mulai Sewa Mobil</Button>
                    </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={6}>
                <Card border='0' className='mt-88'>
                    <Card.Body className="p-0 bg-custom" position="relative">
                        <Image src={car} alt="card" className="img-fluid position-relative" style={{ zIndex: 2 }}/>
                    </Card.Body>
                    <div className=" bg-primary position-absolute bottom-0 start-0 w-100" style={{ height: '60%', zIndex: 1, borderTopLeftRadius: '8% 35%' }}></div>
                </Card>
              </Col>
            </Row>
        </Container>
      </div>
    )
}

export default PageHeader;