import axios from "axios";

export async function fetchCars() {
    try {
        const response = await axios.get("http://127.0.0.1:5500/details")
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export async function saveCars(carData) {
    try {
        const response = await axios.post("http://127.0.0.1:5500/enter", carData)
        return response.data;
    } catch (error) {
        console.log(error)
    }
}