<template>
    <div>
        <form @submit.prevent="handleAdd">
            <input type="text" id="brand" placeholder="Brand" v-model="newCar.brand" ><br>
            <input type="text" id="model" placeholder="Model" v-model="newCar.model" ><br>
            <select id="year" v-model="newCar.year" >
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
            </select><br>
            <input type="number" id="maxSpeed" placeholder="Max speed" v-model="newCar.maxSpeed" ><br>
            <input type="checkbox" id="isAutomatic" v-model="newCar.isAutomatic" >Is automatic<br>
            <input type="radio" name="engine"  value="Diesel" v-model="newCar.engine">Diesel<br>
            <input type="radio" name="engine" value="Petrol" v-model="newCar.isAutomatic">Petrol<br>
            <input type="radio" name="engine" value="Electric" v-model="newCar.isAutomatic">Electric<br>  
            <input type="radio" name="engine" value="Hybrid" v-model="newCar.isAutomatic">Hybrid<br>  
            <input type="number" id="numberOfDoors" placeholder="Number of doors" v-model="newCar.numberOfDoors" ><br>
            <button class="btn btn-primary" type="submit">Add car</button>
        </form>
    </div>
</template>

<script>
import { carsService } from '../services/cars'
export default {
    data () {
        return {
            newCar: {
                brand: '',
                model: '',
                year: undefined,
                maxSpeed: undefined,
                isAutomatic: false,
                engine: undefined,
                numberOfDoors: undefined,
            }
            
        }
    },

    methods: {
        handleAdd(){
            carsService.addCar(this.newCar)
            this.$router.push('/cars')
        }
    }

}
</script>

<style>

</style>
