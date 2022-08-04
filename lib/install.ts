import { App } from 'vue'
import NorForm from './NorForm.vue'

export default {
  install: (app: App) => {
    app.component('NorForm', NorForm)
  }
}

export { default as NorForm } from './NorForm.vue'