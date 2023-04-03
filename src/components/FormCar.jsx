import axios from "axios";
import { Container, Col, Card, Form, Button  } from 'react-bootstrap';
import { useState } from 'react';
import '../style/customCard.css';
// const API_URL = 'https://bootcamp-rent-cars.herokuapp.com/customer/v2/car';
const API_URL = 'http://127.0.0.1:8000/customer/v2/car';
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
const FormCar = ({className,showButton=true,disabled, ...props}) => {
    const [buttonVariant, setButtonVariant] = useState("success")
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [isRented, setIsRented] = useState(true);
    const [resultData, setResultData] = useState([]);
    const handleClickTest = async () => {
        const button = document.querySelector('.align-self-end .btn');
        if (button.innerText === 'Cari Mobil') {
            button.innerText = 'Edit';
            setButtonVariant("outline-primary")
        } else {
            button.innerText = 'Cari Mobil';
            setButtonVariant("success")
        }
        console.log(`Nama saya : ${name}`);
        console.log(`Category : ${category}`);
        console.log(`Price : ${price}`);
        console.log(`Status : ${isRented == true ? 'Disewa' : 'Tidak Disewa'}`);
        
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
    return(
        <div className={className}>
            <Container>
                <Card className='shadow'>
                    <Card.Body>
                        <div className='row d-flex g-3 justify-content-between'>
                            <Col md={3} className="me-md-3">
                                <Form.Label>Nama Mobil</Form.Label>
                                <Form.Control 
                                    value={name} 
                                    disabled={disabled} 
                                    type="text"
                                    placeholder="Ketik nama/tipe mobil"
                                    onChange={(e)=>{setName(e.target.value)}}
                                />
                            </Col>
                            <Col md={3} className="me-md-3">
                                <Form.Label htmlFor="inputP2">Kategori</Form.Label>
                                <Form.Select className="form-select" onChange={(e)=>{setCategory(e.target.value)}}
                                    value={category} 
                                    disabled={disabled} 
                                    {...props}
                                >
                                    <option>Masukan Kapasitas Mobil</option>
                                    <option value="small">2 - 4 orang</option>
                                    <option value="medium">4 - 6 orang</option>
                                    <option value="large">6 - 8 orang</option>
                                </Form.Select>
                            </Col>
                            <Col md={3} className="me-md-2">
                                <Form.Label htmlFor="inputP3">Harga</Form.Label>
                                <Form.Select className="form-select"
                                    value={price} 
                                    onChange={(e) => {setPrice(e.target.value)}}
                                    disabled={disabled}
                                >
                                    <option>Masukan Harga Sewa per Hari</option>
                                    <option value="small">Rp. 400.000</option>
                                    <option value="medium">Rp. 400.000 - Rp. 600.000</option>
                                    <option value="large">Rp. 400.000</option>
                                </Form.Select>
                            </Col>
                            <Col>
                                <Form.Label htmlFor="inputP4">Status</Form.Label>
                                <Form.Select className="form-select" 
                                    onChange={(e)=>{setIsRented(e.target.value)}}
                                    disabled={disabled}
                                    value={isRented}
                                >
                                    <option value={true}>Disewa</option>
                                    <option value={false}>Tidak Disewa</option>
                                </Form.Select>
                            </Col>
                            {showButton && (
                                <Col className='align-self-end text-end'>
                                    <Button {...props} 
                                        onClick={handleClickTest}
                                        className='mb-xs-2' 
                                        variant={ buttonVariant } 
                                        type="submit"
                                    >
                                        Cari Mobil
                                    </Button>
                                </Col>
                            )}
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
};

export default FormCar;