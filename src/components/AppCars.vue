<template>
    <div>
        <table style="width:100%">
            <tr>
                <th>Brand:</th>
                <th>Model:</th> 
                <th>Year:</th>
                <th>Max speed:</th>
                <th>Is automatic:</th>
                <th>Engine:</th>
                <th>Number of doors:</th>
            </tr>
            <tr v-for="(car, index) in cars" :key="index">
                <td>{{ car.brand }}</td>
                <td>{{ car.model }}</td> 
                <td>{{ car.year }}</td> 
                <td>{{ car.maxSpeed }}</td> 
                <td>{{ car.isAutomatic }}</td> 
                <td>{{ car.engine }}</td> 
                <td>{{ car.numberOfDoors }}</td> 
                <td><button class="btn btn-primary" @click="edit(car.id)">Edit</button></td>
                <td><button class="btn btn-primary" @click="handleDelete(car.id)">Delete</button></td>
            </tr>
        </table>
    </div>
</template>

<script>
import { carsService } from '../services/cars'

export default {
    data () {
        return {
            cars: []
        }
    },

    created () {
        carsService.getCars()
        .then(response => {
            this.cars = response.data;
        }) .catch(e => {
            this.errors.push(e)
        })
    },

    methods:{
        edit(id){
            this.$router.push(`/edit/${id}`)
        },

        handleDelete(id){
            carsService.deleteCar(id)
                .then(() => {
                    this.cars = this.cars.filter(car => car.id !== id);
                })
        }
    }
}
</script>

<style>

</style>
