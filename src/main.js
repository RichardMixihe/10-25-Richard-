import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ArticleItem from '@/components/ArticleItem'
// import { Picker } from 'vant';

// Vue.use(Picker);
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)
Vue.config.productionTip = false
Vue.component('ArticleItem', ArticleItem)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
