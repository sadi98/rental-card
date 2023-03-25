import { Container, Col, Card, Form, Button  } from 'react-bootstrap';
import '../style/formCustom.css';


const FormCar = () => {
    return(
        <div className="custom-form">
            <Container>
                <Card>
                    <Card.Body>
                        <Form className='row g-3'>
                            <Col xs="auto">
                                <Form.Label>Nama Mobil</Form.Label>
                                <Form.Control type="text" placeholder="Ketik nama/tipe mobil" />
                            </Col>
                            <Col xs="auto">
                                <Form.Label htmlFor="inputP2">Kategori</Form.Label>
                                <Form.Select className="form-select form-select-sm">
                                    <option>Masukan Kapasitas Mobil</option>
                                    <option value="1">2 - 4 orang</option>
                                    <option value="2">4 - 6 orang</option>
                                    <option value="3">6 - 8 orang</option>
                                </Form.Select>
                            </Col>
                            <Col xs="auto">
                                <Form.Label htmlFor="inputP3">Kategori</Form.Label>
                                <Form.Select className="form-select form-select-sm">
                                    <option>Masukan Harga Sewa per Hari</option>
                                    <option value="1">Rp. 400.000</option>
                                    <option value="2">Rp. 400.000 - Rp. 600.000</option>
                                    <option value="3">Rp. 400.000</option>
                                </Form.Select>
                            </Col>
                            <Col xs="auto">
                                <Form.Label htmlFor="inputP4">Status</Form.Label>
                                <Form.Select className="form-select form-select-sm">
                                    <option>Disewa</option>
                                    <option value="1">Dibeli</option>
                                </Form.Select>
                            </Col>
                            <Col xs="auto" className='align-self-end'>
                                <Button variant="success" size='sm' type="submit">Cari Mobil</Button>
                            </Col>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default FormCar;