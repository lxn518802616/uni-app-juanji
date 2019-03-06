import Vue from 'vue'
import App from './App'



Vue.config.productionTip = false

Vue.prototype.$url = "http://10.101.98.127:8080";

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
