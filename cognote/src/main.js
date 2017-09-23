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
                  answer: "Powerhouse of the Cell",
                  status: "none" // None, correct, incorrect
              },
              {
                  type: "definition",
                  word: "nucleus",
                  answer: "contains some dna i think",
                  status: "none" // None, correct, incorrect
              },
              {
                  type: "definition",
                  word: "golgi apparatus",
                  answer: "prepares protiens",
                  status: "none" // None, correct, incorrect
              }
          ]
      }
  },
  router,
  template: '<App/>',
  components: { App }
})
