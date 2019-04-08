<template>
    <div class="container">
        <div>
            <br>
            <center><h1>Registration Form </h1></center>
            <hr>
            <form @submit.prevent="login" @keydown="form.onKeydown($event)">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" v-model="form.name" name="name" class="form-control" :class="{ 'is-invalid': form.errors.has('name') }">
                    <has-error :form="form" field="name"></has-error>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" v-model="form.email" name="email" class="form-control" :class="{ 'is-invalid': form.errors.has('email') }">
                    <has-error :form="form" field="email"></has-error>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" v-model="form.password" name="password" class="form-control" :class="{ 'is-invalid': form.errors.has('password') }">
                    <has-error :form="form" field="password"></has-error>
                </div>

                <div class="form-group">
                    <label>Phone Number</label>
                    <input type="number" v-model="form.phone" name="phone" class="form-control" :class="{ 'is-invalid': form.errors.has('phone') }">
                    <has-error :form="form" field="phone"></has-error>
                </div>
                
                <button type="submit" class="btn btn-primary">Register</button>
            </form>
        </div>
    </div>
</template>

<script>

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
                this.form.post('/api/v1/register')
                    .then(function (resp) {
                        this.$router.push({path: '/'});
                    })
                    .catch(function (resp) {
                        console.log(resp);
                    });
            }
        },
    }
</script>
