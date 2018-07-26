import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    countTotal : 0,
    intervalCursor: 0
  },
  mutations: {
    "SET_COUNT": (state, newTotal) => {
        state.countTotal = newTotal;
    }
  },
  actions: {
    incrementCount({commit}, total){
        commit("SET_COUNT", total);
    },
    incrementCountCursor({commit, state}, count){
        let newCount = state.countTotal + count;
        commit("SET_COUNT", newCount);
    },
      incrementCountGrandma({commit, state}, count){
          let newCount = state.countTotal + count;
          commit("SET_COUNT", newCount);
      },
    buyItem({commit, state}, cost){
        let newCount = state.countTotal - cost;
        commit("SET_COUNT", newCount);
    }
  },
  getters: {
      count(state){
          return state.countTotal;
      }
  }
});
