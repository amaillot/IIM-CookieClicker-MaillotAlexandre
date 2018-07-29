import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    countTotal : 0,
    intervalCursor: 0,
    cursorCount: 0,
    grandmaCount: 0,
    farmCount: 0,
  },
  mutations: {
    "SET_COUNT": (state, newTotal) => {
        state.countTotal = newTotal;
    },
      "INITIALIZE": (state) => {
          // Check if the ID exists
          if(localStorage.getItem('store')) {
              // Replace the state object with the stored item
              store.replaceState(
                 Object.assign(state, JSON.parse(localStorage.getItem('store')))
              );
          }
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
      incrementCountFarm({commit, state}, count){
          let newCount = state.countTotal + count;
          commit("SET_COUNT", newCount);
      },
    buyItem({commit, state}, cost){
        let newCount = state.countTotal - cost;
        commit("SET_COUNT", newCount);
    },
    addGrandma({state}) {
        state.grandmaCount++;
    },
    addCursor({state}) {
          state.cursorCount++;
      },
    addFarm({state}) {
          state.farmCount++;
      }
  },
  getters: {
      count(state){
          return state.countTotal;
      }
  }
});
// Subscribe to store updates
store.subscribe((mutation, state) => {
    // Store the state object as a JSON string
    localStorage.setItem('store', JSON.stringify(state));
});
export default store;
