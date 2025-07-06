import './assets/main.css'

// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'  

// import bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.css'

// import vuefire
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './firebase.ts'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(VueFire, {
  firebaseApp,
  modules: [VueFireAuth()],
})
app.use(router)

app.mount('#app')
