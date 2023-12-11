import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { fetchCars } from "../Services/Cars_info";
import { Header } from "./Header";


export function CarList() {

    const [cars, setCars] = useState([])

    async function populateCarsState() {
        try {
            const data = await fetchCars();
            setCars(data.Details);
            console.log(data.Details)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        populateCarsState();
    }, [])


    return (
        <Container>
            <Header text="List of all cars"></Header>
            <Table className="mt-5">
                <thead>
                    <tr>
                        <td>Model</td>
                        <td>Price</td>
                        <td>Purchase Year</td>
                        <td>City</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        cars.map((c) => {
                            return (
                                <tr>
                                    <td>{c.model}</td>
                                    <td>{c.price}</td>
                                    <td>{c.p_year}</td>
                                    <td>{c.s_city}</td>
                                    <td>
                                        <Button variant="danger" >Delete</Button> &nbsp;&nbsp;&nbsp;
                                        <Button variant="primary" >Edit</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </Container>
    )
}