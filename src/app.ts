// import devtools from '@vue/devtools'

// // @ts-ignore
// if (process.env.NODE_ENV === 'development') {
//   // devtools.connect(/* host, port */)
//   // (window as any) = devtools
//   // @ts-ignore
//   window.devtoolsKey = devtools
// }

import { defineApp } from 'iles'
import 'uno.css'
import '@/assets/css/tailwind.css'
import '@/assets/css/main.css'
import 'prismjs/themes/prism-tomorrow.css'

import { headConfig } from '@/plugins/head'
import pinia from '@/plugins/pinia'
import { primeVuePlugin, primeVueConfig } from '@/plugins/primevue'

export default defineApp({
  enhanceApp({ app }) {
    app.use(pinia)
    app.use(primeVuePlugin, primeVueConfig)
  },
  head({ frontmatter, site }) {
    return headConfig({ frontmatter, site })
  },
})
