import {createApp} from 'vue'
import App from './App.vue'
import router from './routers/index'

import sm2 from 'sm-crypto'

import 'vant/lib/index.css'

const app = createApp(App);
app.use(router)
app.use(sm2)

app.mount('#app')