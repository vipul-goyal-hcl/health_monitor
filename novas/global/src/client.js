import { load, Vue, mountComponent, loadById } from 'hypernova-vue'
import Example from './components/Example.vue'
import Home from './components/Home.vue'

const render = (name, { node, data }) => {
  if (name === 'Example') {
    return mountComponent(Vue.extend(Example), node, data)
  }
  if (name === 'Home') {
    return mountComponent(Vue.extend(Home), node, data)
  }
}

document.addEventListener('NovaMount', ({ detail }) => {
  const { name, id } = detail

  const payload = loadById(name, id)

  if (payload) {
    render(name, payload)
  }
})

load('Example').forEach(render.bind(null, 'Example'))
