<template>
    <div class="container">
        <div>
            <br>
            <center><h1>Registration Form </h1></center>
            <hr>
            <form @submit.prevent="login" @keydown="form.onKeydown($event)">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" v-model="form.name" name="name" class="form-control">
                    <has-error :form="form" field="name"></has-error>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" v-model="form.email" name="email" class="form-control">
                    <has-error :form="form" field="email"></has-error>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" v-model="form.password" name="password" class="form-control">
                    <has-error :form="form" field="password"></has-error>
                </div>

                <div class="form-group">
                    <label>Phone Number</label>
                    <input type="number" v-model="form.phone" name="phone" class="form-control">
                    <has-error :form="form" field="phone"></has-error>
                </div>
                
                <button type="submit" class="btn btn-primary">Log In</button>
            </form>
        </div>
    </div>
</template>

<script>
    import Vue from "vue";

    import { Form, HasError, AlertError } from 'vform';

    Vue.component(HasError.name, HasError);
    Vue.component(AlertError.name, AlertError);

    export default {

        data () {
            return {
            // Create a new form instance
            form: new Form({
                name: '',
                email: '',
                password: '',
                phone: '',
                remember: false
            })
            }
        },
        
        methods: {
            login () {
            // Submit the form via a POST request
            this.form.post('/login')
                .then(({ data }) => { console.log(data) })
            }
        },
    }
</script>
