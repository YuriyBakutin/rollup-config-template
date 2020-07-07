import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import './scss/main.scss'
import './scss/textColor.scss'

new Vue( {
  store,
  render: h => h( App ),
} ).$mount( '#app' )
