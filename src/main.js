import {createApp} from 'vue'
import App from './App.vue'
import router from './routers/index'

import sm2 from 'sm-crypto'

const app = createApp(App);
app.use(router)
app.mount('#app')