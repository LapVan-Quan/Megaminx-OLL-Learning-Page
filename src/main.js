import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import CSS files
import './styles/base.css'
import './styles/layout.css'
import './styles/component.css'
import './styles/pages.css'

createApp(App).use(router).mount('#app')
