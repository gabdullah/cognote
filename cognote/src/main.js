// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data () {
      return {
          questions: [
              {
                  type: "definition",
                  word: "Mitochondria",
                  detail: [
                      "Powerhouse of the Cell",
                      "Produce ATP"
                  ]
              },
              {
                  type: "definition",
                  word: "nucleus",
                  detail: [
                      "contains some dna i think"
                  ]
              },
              {
                  type: "definition",
                  word: "golgi apparatus",
                  detail: [
                      "prepares protiens"
                  ]
              },
              {
                  type: "definition",
                  word: "tom",
                  detail: [
                      "I did't think of a joke"
                  ]
              }
          ]
      }
  },
  router,
  template: '<App/>',
  components: { App }
})
