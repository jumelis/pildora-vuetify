//Vuetify 
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify/lib/framework.mjs'

const app = createApp(App)

// Instancia de Vuetify
const vuetify = createVuetify({
    components,
    directives
})

app.use(vuetify)
app.use(router)
app.mount('#app')
