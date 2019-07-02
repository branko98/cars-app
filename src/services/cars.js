import axios from 'axios'; 

export default class CarsService {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api/'
    }

    getCars() {
        return axios.get('cars')
    }

    addCar(car) {
        return axios.post('cars',car)
    }
     
}

export const carsService = new CarsService()