import axios from 'axios';

export default class CarsService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:8000/api/'
    }

    getCars() {
        return axios.get('cars')
    }

    addCar(car) {
        return axios.post('cars', car)
    }

    getCar(id) {
        return axios.get(`/cars/${id}`)
    }

    editCar(car, id) {
        return axios.put('/cars/' + id, car)
    }

    deleteCar(id) {
        return axios.delete('/cars/' + id);
    }
}

export const carsService = new CarsService()