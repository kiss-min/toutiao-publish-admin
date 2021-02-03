import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//加载全局样式
import "./style/index.less"

Vue.config.productionTip = false

//创建vue根实例
//把router配置到根实例中
new Vue({
  router,
  store,
  render: h => h(App)
  //el:"#app"//等价于$mount("#app")
}).$mount('#app')
