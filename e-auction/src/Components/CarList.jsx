import { useEffect, useState } from "react";
import { Button, Container, Modal, Table } from "react-bootstrap";
import { deleteCar, fetchCars } from "../Services/Cars_info";
import { Header } from "./Header";


export function CarList() {

    const [cars, setCars] = useState([])
    const [showDialog, setShowDialog] = useState(false);
    const [selectedModel,setSelectedModel] = useState("");
   


    const openModalDialog = () => {
        setShowDialog(true);
    }
    const closeModalDialog = () => {
        setShowDialog(false);
    }
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

    const handleCarDelete = async () => {
        try {
            await deleteCar(selectedModel);
            await populateCarsState()
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <Container>
            <Header text="List of all cars"></Header>
            {cars.length != 0 ?
                <Table className="mt-5">
                    <thead>
                        <tr>
                            <td>Model</td>
                            <td>Price</td>
                            <td>Purchase Year</td>
                            <td>Seller name</td>
                            <td>Seller Contact</td>
                            <td>City</td>
                            <td></td>
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
                                        <td>{c.s_name}</td>
                                        <td>{c.s_num}</td>
                                        <td>{c.s_city}</td>
                                        <td>
                                            <Button variant="danger" onClick={() => {
                                                openModalDialog();
                                                setSelectedModel(c.model)
                                            }} >Delete</Button> &nbsp;&nbsp;&nbsp;
                                            <Button variant="primary" >Edit</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                : <p>No Cars Found</p>}

            <Modal show={showDialog} onHide={closeModalDialog}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you really want to delete  {selectedModel}?</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={() => {
                        handleCarDelete(selectedModel);
                        closeModalDialog();
                        
                    }}>
                        Yes
                    </Button>
                    <Button variant="danger" onClick={closeModalDialog}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>

        </Container>
    )
}