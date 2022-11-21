import {createApp} from 'vue'
import App from './App.vue'
import router from './routers/index'

import sm2 from 'sm-crypto'
import axios from 'axios';

import 'vant/lib/index.css'

//设置axios的baseURl
axios.defaults.baseURL="http://127.0.0.1:8090"

const app = createApp(App);
app.use(router)
app.use(sm2)

app.mount('#app')

export default axios
