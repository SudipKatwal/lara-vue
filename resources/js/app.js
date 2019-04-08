
require('./bootstrap');

import Vue from "vue";

import VueRouter from "vue-router";

import routes from "./routes";

import { Form, HasError, AlertError } from 'vform';

window.Form = Form;

    Vue.component(HasError.name, HasError);
    Vue.component(AlertError.name, AlertError);

Vue.use(VueRouter);

const app = new Vue({
    el: '#app',

    router: new VueRouter(routes)
});
