import axios from 'axios';
import { useEffect, useState } from 'react';

const useCars = (category) => {
    const [carList, setCarList] = useState('')

    useEffect( () => {
        const getCar = async () => {
            const {cars} = await axios.get(`https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?category=${category}`)
            console.log(cars);
            setCarList(cars);
        }

        getCar().then(r=>r);
    },[category])

    return carList;
}

export default useCars