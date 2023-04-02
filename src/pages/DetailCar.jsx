import { Card, Col, Container, Row, Accordion } from "react-bootstrap";
import Footer from "../components/Footer";
import FormCar from "../components/FormCar";
import NavigationBar from "../components/NavigationBar";
import { FiUsers } from 'react-icons/fi';
import inova from '../assets/images/toyota.png';

const DetailCar = () => {
    return(
        <>
            <NavigationBar paddingBottom={222}/>
            <FormCar className="custom-form-list" showButton={false} disabled={true}/>
            <Container>
                <Row>
                    <Col md={8} className={'mb-2'}>
                        <Card>
                            <Card.Body className="my-0">
                            <Card.Title>Tentang Paket</Card.Title>
                            <h6>Include</h6>
                            <ul>
                                <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                <li>Sudah termasuk bensin selama 12 jam</li>
                                <li>Sudah termasuk Tiket Wisata</li>
                                <li>Sudah termasuk pajak</li>
                            </ul>
                            <h6>Include</h6>
                            <ul className="my-0">
                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                <li>Tidak termasuk akomodasi penginapan</li>
                            </ul>
                            </Card.Body>
                            <Accordion>
                                 <Accordion.Item
                                    eventKey='0'
                                    className='mb-sm-2 mb-md-3 mb-2 border-0'>
                                    <Accordion.Header>
                                        <h6>Refund, Reschedule, Overtime</h6>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <ul>
                                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                            <li>Tidak termasuk akomodasi penginapan</li>
                                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                            <li>Tidak termasuk akomodasi penginapan</li>
                                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                            <li>Tidak termasuk akomodasi penginapan</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                            <img src={inova} className="w-10 mx-auto d-block"/>
                                <table className="mb-md-4">
                                    <thead>
                                        <tr>
                                            <th>Innova</th>
                                        </tr>
                                        <tr>
                                            <td className="text-muted"><FiUsers className="me-2" />6 - 8 orang</td>
                                        </tr>
                                    </thead>
                                </table>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Total</th>
                                            <th className="p-5"></th>
                                            <th className="p-4"></th>
                                            <th className="p-5"></th>
                                            <th>Rp 500.000</th>
                                        </tr>
                                    </thead>
                                </table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer marginTop={100}/>
        </>
    )
}

export default DetailCar;