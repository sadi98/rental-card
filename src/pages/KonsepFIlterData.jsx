import axios from "axios";
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

// const API_URL = 'https://bootcamp-rent-cars.herokuapp.com/customer/v2/car';
const API_URL = 'https://rental-car-api.000webhostapp.com/customer/v2/car';
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
const KonsepFIlterData = () => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState({});
    const [isRented, setIsRented] = useState(false);
    const [resultData, setResultData] = useState([]);

    const handleClick = async ()=>{
        console.log(`Nama saya : ${name}`);
        console.log(`Category : ${category}`);
        console.log(`Price : ${price}`);
        console.log(`Status : ${isRented}`);

        const getPrice = PRICE_OPTION[price]
        const response = await axios.get(API_URL, {
            params: {
                name,
                category,
               ...getPrice,
                isRented,
            },
        });
        setResultData(response.data.cars)

    };
    return (
        <>
            <Container>
                <Row className="mt-5">
                    <Col>
                        <Form.Label htmlFor="inputP1">Search Tipe</Form.Label>
                        <Form.Control id="inputP1" value={name} 
                            onChange={(e) => {setName(e.target.value)}}
                            placeholder="Ketik nama/tipe mobil" />
                        <Form.Label htmlFor="inputP2">Kategori</Form.Label>
                        <Form.Select id="inputP2" value={category} className="form-select"
                            onChange={(e) => {setCategory(e.target.value)}}
                        >
                            <option>Masukan Kapasitas Mobil</option>
                            <option label="2 - 4 orang" value="small"/>
                            <option label="4 - 6 orang" value="medium"/>
                            <option label="6 - 8 orang" value="large"/>
                        </Form.Select>
                        <Form.Label htmlFor="inputP3">Harga</Form.Label>
                        <Form.Select id="inputP3" value={price} className="form-select"
                            onChange={(e) => {setPrice(e.target.value)}}
                        >
                            <option>Masukan Harga Sewa per Hari</option>
                            <option value="small">{"< "}Rp. 400.000</option>
                            <option value="medium">Rp. 400.000 - Rp. 600.000</option>
                            <option value="large">{"> "}Rp. 600.000</option>
                        </Form.Select>
                        <Form.Label htmlFor="inputP4">Status</Form.Label>
                        <Form.Select id="inputP4" value={isRented} className="form-select"
                            onChange={(e) => {setIsRented(e.target.value === 'true')}}
                        >
                            <option value={true}>Disewakan</option>
                            <option value={false}>Tidak Disewakan</option>
                        </Form.Select>
                        <Button variant="primary" className="mt-2"
                        onClick={handleClick}
                        >Fecth Data Api</Button>
                    </Col>
                    <Col>
                        {resultData.map( (cars,index) => (
                            <div key={index}>
                                <p>Name : {cars.name}</p>
                                <p>Harga : {cars.price}</p>
                                <p>Category : {cars.category}</p>
                                <img src={cars.image} alt={cars.name} />
                            </div>
                        ))}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default KonsepFIlterData;