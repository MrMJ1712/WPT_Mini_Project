import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { Header } from './Header';
import NavigationBar from './NavigationBar';
import { saveCars } from '../Services/Cars_info';

export const AddCar = () => {
    const [formData, setFormData] = useState({ make: "", model: "", p_year: "", price: "", color: "", s_name: "", s_num: "", s_address: "", s_city: "", });
    const [isSubmitted,setIsSubmitted] = useState(false);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        try {
            const result = await saveCars(formData)
            setIsSubmitted(true);
            console.log(result.message);
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
            s_address: '',
            s_city: '',
        });
    };

    return (
        <>
        <Container>
        <Header text="Add New Car And Seller Info" align="centre"></Header>

        <Form onSubmit={handleSubmit}>
            <Row>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Make Of Vehicle</Form.Label>
                        <Form.Control type="text" /*value={isSubmitted?formData.make:null}*/ placeholder="Enter Make Of Your Vehicle" name="make" onKeyUp={handleChange} />
                    </Form.Group>
                </Col>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Model Of Your Vehicle</Form.Label>
                        <Form.Control type="text" placeholder="Enter Model Of your Car" name="model" onKeyUp={handleChange} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Purchase year of your vehicle</Form.Label>
                        <Form.Control type="number" placeholder="Enter Purchase year" name="p_year" onKeyUp={handleChange} />
                    </Form.Group>
                </Col>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Desired price for your vehicle</Form.Label>
                        <Form.Control type="number" placeholder="Enter price" name="price" onKeyUp={handleChange} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Color of your vehicle</Form.Label>
                        <Form.Control type="text" placeholder="Enter Color of your vehicle" name="color" onKeyUp={handleChange} />
                    </Form.Group>
                </Col>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Enter your name</Form.Label>
                        <Form.Control type="text" placeholder="Enter price" name="s_name" onKeyUp={handleChange} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Your Contact Number</Form.Label>
                        <Form.Control type="number" placeholder="Enter Contact Number" name="s_num" onKeyUp={handleChange} />
                    </Form.Group>
                </Col>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Your Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter your address" name="s_add" onKeyUp={handleChange} />
                    </Form.Group>
                </Col>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Your City</Form.Label>
                        <Form.Control type="text" placeholder="Enter your city" name="s_city" onKeyUp={handleChange} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                    <Col lg={3}>
                        <Button variant="primary" type="submit">Register</Button>
                    </Col>
                    
                </Row>
            </Form>
            <Row className='mt-3'>
                <Col lg={4}>
                    {isSubmitted?<Alert variant="success"> Car Registered </Alert>:null}
                </Col>
            </Row>
            </Container>
        </>
    );
}

export default AddCar;
