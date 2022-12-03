import { createApp } from "vue"
import App from './app.vue'
import { AIcon } from '@a-ui/components/icon'
import { AButton } from '@a-ui/components/button'
import '@a-ui/theme-chalk/src/index.scss'
import 'element-plus/theme-chalk/index.css'

import * as comp from "@a-ui/components"


Object.entries(comp).forEach(([name,comp]) => {
    console.log(name);
    console.log(comp);
})

const app = createApp(App);

app.use(AIcon)
app.use(AButton)
app.mount('#app')