import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { Header } from './Header';
import { useParams } from 'react-router-dom';
import { fetchCarByModel } from '../Services/Cars_info';

export const EditCar = () => {

    const params = useParams()
    const [formData, setFormData] = useState({ make: "", model: "", p_year: "", price: "", color: "", s_name: "", s_num: "", s_add: "", s_city: "" });
    const [cars,setCars] = useState({})
    
    const [isSubmitted,setIsSubmitted] = useState(false);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        try {
        } catch (error) {
            console.log(error) 
        }
        setFormData({
            make: '',
            model: '',
            p_year: '',
            price: '',
            color: '',
            s_name: '',
            s_num: '',
            s_add: '',
            s_city: '',
        });
    };

    const populateCarState = async ()=>{
        try {
            const res = await fetchCarByModel(params.roll)
            console.log(res)
            setCars(res.Details)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
       populateCarState()
    })

    return (
        <> 
        <Container>
        <Header text="Update New Car And Seller Info" align="centre"></Header>
        {cars?
        <Form onSubmit={handleSubmit}>
            <Row>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Make Of Vehicle</Form.Label>
                        <Form.Control type="text" value={cars.make} placeholder="Enter Make Of Your Vehicle" name="make" onKeyUp={handleChange} />
                    </Form.Group>
                </Col>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Model Of Your Vehicle</Form.Label>
                        <Form.Control type="text" value={cars.model} placeholder="Enter Model Of your Car" name="model" onKeyUp={handleChange} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Purchase year of your vehicle</Form.Label>
                        <Form.Control type="number" value={cars.p_year} placeholder="Enter Purchase year" name="p_year" onKeyUp={handleChange} />
                    </Form.Group>
                </Col>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Desired price for your vehicle</Form.Label>
                        <Form.Control type="number" value={cars.price} placeholder="Enter price" name="price" onKeyUp={handleChange} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Color of your vehicle</Form.Label>
                        <Form.Control type="text" value={cars.color } placeholder="Enter Color of your vehicle" name="color" onKeyUp={handleChange} />
                    </Form.Group>
                </Col>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Enter your name</Form.Label>
                        <Form.Control type="text" value={cars.s_name } placeholder="Enter price" name="s_name" onKeyUp={handleChange} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Your Contact Number</Form.Label>
                        <Form.Control type="number" value={cars.s_num } placeholder="Enter Contact Number" name="s_num" onKeyUp={handleChange} />
                    </Form.Group>
                </Col>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Your Address</Form.Label>
                        <Form.Control type="text" value={cars.s_add } placeholder="Enter your address" name="s_add" onKeyUp={handleChange} />
                    </Form.Group>
                </Col>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Your City</Form.Label>
                        <Form.Control type="text" value={cars.s_city } placeholder="Enter your city" name="s_city" onKeyUp={handleChange} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                    <Col lg={3}>
                        <Button variant="primary" type="submit">Register</Button>
                    </Col>
                    
                </Row>
            </Form> : <p>No Relevant Car Data Found</p>}
            <Row className='mt-3'>
                <Col lg={4}>
                    {isSubmitted?<Alert variant="success"> Car Registered </Alert>:null}
                </Col>
            </Row>
            </Container>
        </>
    );
}

export default EditCar;
