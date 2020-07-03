import Vue from 'vue'
import App from './App'
import io from './common/weapp.socket.io.js';

Vue.config.productionTip = false
Vue.prototype.socket = io('http://localhost:3008')

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
