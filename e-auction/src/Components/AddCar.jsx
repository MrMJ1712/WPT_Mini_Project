import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

export const AddCar = () => {
    const [formData, setFormData] = useState({
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle the form submission, e.g., API call or state update
        console.log('Form submitted:', formData);
        // Reset the form data after submission
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
        <Container>
            <Row className="justify-content-md-center mt-5">
                <Col md={8}>
                    <h2>Add Car</h2>
                    <Form onSubmit={handleSubmit}>
                        {/* Add form controls for each field */}
                        {Object.entries(formData).map(([key, value]) => (
                            <Form.Group key={key} controlId={key}>
                                <Form.Label>{key.replace(/_/g, ' ').toUpperCase()}</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder={`Enter ${key.replace(/_/g, ' ')}`}
                                name={key}
                                value={value}
                                onChange={handleChange}
                                required />
                            </Form.Group>
                        ))}
                        <Button variant="primary" type="submit">
                            Add Car
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default AddCar;
