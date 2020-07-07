import Vue from 'vue'
import Vuex from 'vuex'

Vue.use( Vuex )

const MAX_COUNT = 3

export default new Vuex.Store( {
  state: {
    count: MAX_COUNT,
  },
  getters: {
    getCount: ( state: any ) => {
      return state.count
    },
  },
  mutations: {
    increment( state: any ) {
      state.count++
    },
    decrement( state: any ) {
      state.count--
      if ( state.count == 0 ) {
        state.count = MAX_COUNT
      }
    },
  },
  actions: {
    increment: ( obj: any ) => {
      obj.commit( 'increment' )
    },
    decrement: ( obj: any ) => {
      obj.commit( 'decrement' )
    },
  },
} )
