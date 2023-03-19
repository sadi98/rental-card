import { Container, Row, Col, Card, Button, Image  } from 'react-bootstrap';
import someone from '../assets/images/someone.png';
const BestCar = () => {
    return(
        <>
            <Container fluid="md">
                <Row>
                    <Col sm={12} md={6}>
                        <Card border='0' className='mt-88 float-end'>
                            <Card.Body className="p-0" position="relative">
                                <Image src={someone} alt="card" className="img-fluid" width={400}/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} md={6}>
                        <Card border="0" className='mt-88'>
                            <Card.Body>
                            <Card.Title>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</Card.Title>
                            <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                            <div className="form-check">
                                <input className="form-check-input rounded-circle" type="checkbox" defaultChecked value="" id="defaultCheck1" />
                                <label className="form-check-label" htmlFor="defaultCheck1">
                                Sewa Mobil Dengan Supir di Bali 12 Jam
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input rounded-circle" type="checkbox" defaultChecked value="" id="defaultCheck2" />
                                <label className="form-check-label" htmlFor="defaultCheck2">
                                Sewa Mobil Lepas Kunci di Bali 24 Jam
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input rounded-circle" type="checkbox" defaultChecked value="" id="defaultCheck3" />
                                <label className="form-check-label" htmlFor="defaultCheck3">
                                Sewa Mobil Jangka Panjang Bulanan
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input rounded-circle" type="checkbox" defaultChecked value="" id="defaultCheck4" />
                                <label className="form-check-label" htmlFor="defaultCheck4">
                                Gratis Antar - Jemput Mobil di Bandara
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input rounded-circle" type="checkbox" defaultChecked value="" id="defaultCheck5" />
                                <label className="form-check-label" htmlFor="defaultCheck5">
                                Layanan Airport Transfer / Drop In Out
                                </label>
                            </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default BestCar;