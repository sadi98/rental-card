import axios from "axios";
import { Card, Col, Container, Row, Accordion, Form } from "react-bootstrap";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";
import { FiUsers } from 'react-icons/fi';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import '../style/formCustom.css';
import '../style/customCard.css';

const API_URL = 'https://bootcamp-rent-cars.herokuapp.com/customer/car';
const DetailCar = () => {
    const [detailData, setDetailData] = useState({});
    const {id} = useParams();
    useEffect( () => {
        const fetchData = async () => {
          const response = await axios.get(`${API_URL}/${id}`);
          setDetailData(response.data)
        }
        fetchData();
    },[id]);
    return(
        <>
            <NavigationBar paddingBottom={222}/>
            <div className="custom-form-list">
            <Container>
                <Card className='shadow'>
                    <Card.Body>
                        <div className='row d-flex g-3 justify-content-between'>
                            <p className="mb-0">Pencarianmu</p>
                            <Col md={3} className="me-md-3">
                                <Form.Label>Nama Mobil</Form.Label>
                                <Form.Control 
                                    type="text" disabled
                                />
                            </Col>
                            <Col md={3} className="me-md-3">
                                <Form.Label htmlFor="inputP2">Kategori</Form.Label>
                                <Form.Select className="form-select" disabled
                                >
                                    <option></option>
                                    <option value="small" label="2-4 Orang"/>
                                    <option value="medium" label="4 - 6 orang"/>
                                    <option value="large" label="6 - 8 orang"/>
                                </Form.Select>
                            </Col>
                            <Col md={3} className="me-md-2">
                                <Form.Label htmlFor="inputP3">Harga</Form.Label>
                                <Form.Select className="form-select" disabled
                                >
                                    <option></option>
                                    <option value="small" label="< Rp. 400.000"/>
                                    <option value="medium" label=" Rp. 400.000 - Rp. 600.000"/>
                                    <option value="large" label="> Rp. 600.000"/>
                                </Form.Select>
                            </Col>
                            <Col>
                                <Form.Label htmlFor="inputP4">Status</Form.Label>
                                <Form.Select className="form-select" disabled
                            
                                >
                                    <option></option>
                                    <option value={true}>Disewa</option>
                                    <option value={false}>Tidak Disewa</option>
                                </Form.Select>
                            </Col>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
            </div>
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
                            <Card.Img variant="top" src={detailData.image} className="w-10 mx-auto mb-md-4"/>
                                <h5 className="mt-md-4">{detailData.name}</h5>
                                <p>
                                    <FiUsers className="me-2 pt-0" />
                                    {detailData.category === 'large' && '6 - 8 orang'}
                                    {detailData.category === 'medium' && '4 - 6 orang'}
                                    {detailData.category === 'small' && '2-4 Orang'}
                                </p>
                                <Row className="justify-content-between">
                                    <Col md={6}>
                                        <div>
                                            <h6>Total</h6>
                                        </div>
                                    </Col>
                                    <Col md={6}>
                                        <div>
                                            <h6 className="text-end">Rp. {detailData.price}</h6>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer marginTop={50}/>
        </>
    )
}

export default DetailCar;