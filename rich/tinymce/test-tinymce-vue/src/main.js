import Vue from 'vue'
import App from './App.vue'
import Editor from '@tinymce/tinymce-vue'
Vue.config.productionTip = false

Vue.component('tinymce-editor', Editor)
new Vue({
  render: h => h(App)
}).$mount('#app')
