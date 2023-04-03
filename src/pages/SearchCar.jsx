import Footer from "../components/Footer";
import { Container, Col, Card, Form, Button, Row  } from 'react-bootstrap';
import NavigationBar from "../components/NavigationBar";
import PageHeader from "../components/PageHeader";
import '../style/formCustom.css';
import '../style/customCard.css';
import { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = 'https://bootcamp-rent-cars.herokuapp.com/customer/v2/car';
const PRICE_OPTION = {
    small:{
        maxPrice:400000,
    },
    medium: {
        minPrice:400000,
        maxPrice:600000,
    },
    large:{
        minPrice:600000,
    }
}
const SearchCar = (props) => {
    const detail = useNavigate();
    const [buttonVariant, setButtonVariant] = useState("success")
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [isRented, setIsRented] = useState(true);
    const [resultData, setResultData] = useState([]);
    const handleClickTest = async () => {
        const button = document.querySelector('.align-self-end .btn');
        const p = document.getElementById('#title-form');
        if (button.innerText === 'Cari Mobil') {
            button.innerText = 'Edit';
            p.innerText = 'Pencarianmu';
            setButtonVariant("outline-primary")
        } else {
            button.innerText = 'Cari Mobil';
            setButtonVariant("success")
        }
        
        const getPrice = PRICE_OPTION[price]
        const response = await axios.get(API_URL, {
            params:{
                name,
                category,
                ...getPrice,
                isRented
            }
        });
        setResultData(response.data.cars)
    }
    return (
        <>
            <NavigationBar />
            <div>
            {/* <Button variant="primary" onClick={() => console.log("Button clicked")}>Test</Button> */}
            </div>
            <PageHeader showButton={false}/>
            <div className="custom-form-list">
            <Container>
                <Card className='shadow'>
                    <Card.Body>
                        <div className='row d-flex g-3 justify-content-between'>
                            <p className="mb-0" id="#title-form"></p>
                            <Col md={3} className="me-md-3">
                                <Form.Label>Nama Mobil</Form.Label>
                                <Form.Control 
                                    value={name} 
                                    type="text"
                                    placeholder="Ketik nama/tipe mobil"
                                    onChange={(e)=>{setName(e.target.value)}}
                                />
                            </Col>
                            <Col md={3} className="me-md-3">
                                <Form.Label htmlFor="inputP2">Kategori</Form.Label>
                                <Form.Select className="form-select" onChange={(e)=>{setCategory(e.target.value)}}
                                    value={category}  
                                    {...props}
                                >
                                    <option>Masukan Kapasitas Mobil</option>
                                    <option value="small" label="2-4 Orang"/>
                                    <option value="medium" label="4 - 6 orang"/>
                                    <option value="large" label="6 - 8 orang"/>
                                </Form.Select>
                            </Col>
                            <Col md={3} className="me-md-2">
                                <Form.Label htmlFor="inputP3">Harga</Form.Label>
                                <Form.Select className="form-select"
                                    value={price} 
                                    onChange={(e) => {setPrice(e.target.value)}}
                                >
                                    <option>Masukan Harga Sewa per Hari</option>
                                    <option value="small" label="< Rp. 400.000"/>
                                    <option value="medium" label=" Rp. 400.000 - Rp. 600.000"/>
                                    <option value="large" label="> Rp. 600.000"/>
                                </Form.Select>
                            </Col>
                            <Col>
                                <Form.Label htmlFor="inputP4">Status</Form.Label>
                                <Form.Select className="form-select" 
                                    onChange={(e)=>{setIsRented(e.target.value)}}
                                    value={isRented}
                                >
                                    <option value={true}>Disewa</option>
                                    <option value={false}>Tidak Disewa</option>
                                </Form.Select>
                            </Col>
                                <Col className='align-self-end text-end'>
                                    <Button 
                                        onClick={handleClickTest}
                                        className='mb-xs-2' 
                                        variant={ buttonVariant } 
                                        type="submit"
                                    >
                                        Cari Mobil
                                    </Button>
                                </Col>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
            </div>
            <div className="mt-3">
                <Container>
                    <Row className="flex-wrap">
                        {resultData.map( (cars,index) => (
                            <Col md={4} className={'mb-3'} key={index}>
                                <Card className="custom-card shadow">
                                    <Card.Img variant="top" src={cars.image} style={{ height: '180px' }}/>
                                    <Card.Body>
                                        <Card.Title>{cars.name}</Card.Title>
                                        <Card.Subtitle className="mb-2">Rp {cars.price} / hari</Card.Subtitle>
                                        <Card.Text>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                        </Card.Text>
                                        <Button className="w-100" 
                                            variant="success" 
                                            onClick={ () => detail(`/detail/${cars.id}`)}
                                        >
                                            Pilih Mobil
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row> 
                </Container>
            </div>
            <Footer marginTop={80}/>
        </>
    )
}

export default SearchCar;