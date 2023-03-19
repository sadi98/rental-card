import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import like from '../assets/icon/like.png';
import edit from '../assets/icon/edit.png';
import populer from '../assets/icon/populer.png';
import time from '../assets/icon/time.png';
const WhyUs = () => {
    return(
        <div className='mt-5 mb-3'>
            <Container fluid="md">
                <Row>
                <Col sm={12} md={12}>
                    <h3 className='text-center text-md-start'>Why Us?</h3>
                    <p>Mengapa harus pilih Binar Car Rental?</p>
                </Col>
                </Row>
                <Row>
                    <Col sm={12} md={3} className="mb-3 mb-md-0">
                        <Card>
                            <Card.Body>
                                <Image src={like} width={40}/>
                                <Card.Title>Mobil Lengkap</Card.Title>
                                <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={3} className="mb-3 mb-md-0">
                        <Card>
                            <Card.Body>
                                <Image src={edit} width={44}/>
                                <Card.Title>Harga Murah</Card.Title>
                                <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={3} className="mb-3 mb-md-0">
                        <Card>
                            <Card.Body>
                                <Image src={time} width={50}/>
                                <Card.Title>Layanan 24 Jam</Card.Title>
                                <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={3} className="mb-3 mb-md-0">
                        <Card>
                            <Card.Body>
                                <Image src={populer} width={52}/>
                                <Card.Title>Sopir Profesional</Card.Title>
                                <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default WhyUs;