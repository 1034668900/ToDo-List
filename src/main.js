import Vue from 'vue'
import App from './App.vue'


new Vue({
  render: (h) => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this// 安装全局事件总线,this是当前实例对象vm
  }
}).$mount('#app')
