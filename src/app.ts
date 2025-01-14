import { defineApp } from 'iles'
import 'uno.css'
import '@/assets/css/tailwind.css'
import '@/assets/css/main.css'
import 'prismjs/themes/prism-tomorrow.css'

import pinia from '@/plugins/pinia'
import { primeVuePlugin, primeVueConfig } from '@/plugins/primevue'

export default defineApp({
  enhanceApp({ app }) {
    app.use(pinia)
    app.use(primeVuePlugin, primeVueConfig)
  },
})
