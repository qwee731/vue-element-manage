import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import '@/assets/scss/reset.scss'
import '@/assets/font/iconfont.css'
import '@/assets/scss/common.scss'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import setAxios from './setAxios'
// use
setAxios()
Vue.use(mavonEditor)
Vue.prototype.$axios = axios
Vue.use(ElementUI)
Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  let token = ''
  if (token) {
    store.commit('changeIsSignIn', 1)
  }
  next()
})
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')