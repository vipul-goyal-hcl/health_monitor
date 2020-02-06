import hypernova from 'hypernova/server'
import { renderVue, Vue } from 'hypernova-vue/server'
import express from 'express'
import path from 'path'

import Example from './components/Example.vue'
import Home from './components/Home.vue'

hypernova({
  devMode: process.env.NODE_ENV !== 'production',
  getComponent (name) {
    if (name === 'Example') {
      return renderVue(name, Vue.extend(Example))
    }
    if (name === 'Home') {
      return renderVue(name, Vue.extend(Home))
    }
  },
  port: process.env.PORT || 3000,

  createApplication () {
    const app = express()

    app.use('/public', express.static(path.join(process.cwd(), 'dist')))

    return app
  }
})
