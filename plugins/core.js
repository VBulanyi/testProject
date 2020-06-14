import Vue from 'vue';

const { sdk } = require('./sdk');
const { eventBus } = require('./bus');
Vue.prototype.$sdk = sdk;
Vue.prototype.$bus = eventBus;
