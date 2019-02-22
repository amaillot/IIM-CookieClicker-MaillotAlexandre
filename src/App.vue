<template>
  <div id="app">
    <div class="wrapper-left">
    <Counter id="counter"></Counter>
    <Cookie id="cookie"></Cookie>
    </div>
    <div class="wrapper-right">
    <CookieCursor id="cursor"></CookieCursor>
    <CookieGrandma id="grandma"></CookieGrandma>
    <CookieFarm id="farm"></CookieFarm>

    </div>
  </div>
</template>

<script>
import Counter from "./components/Counter.vue";
import CookieCursor from "./components/Cursor.vue";
import Cookie from "./components/Cookie.vue";
import CookieGrandma from "./components/Grandma.vue";
import CookieFarm from "./components/Farm.vue";

export default {
  name: "app",
  components: {
    Counter,
    CookieCursor,
    Cookie,
    CookieGrandma,
    CookieFarm
  },
  data() {
    return {
      cursors: [],
      intervalCursor: ""
    };
  },
  methods: {
    incrementCursor() {
      this.cursors.append("cursor");
    }
  }
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.wrapper-left {
  width: 50%;
  height: 100%;
  float: left;
  background-image: url("assets/3345451-cookies-donuts-batch-allsorts-variety.jpg");
  background-size: cover;
}
.wrapper-right {
  width: 50%;
  height: 100%;
  float: right;
  background-color: aliceblue;
}
#cookie {
  margin-top: 80px;
  cursor: pointer;
}
#counter {
  margin-top: 100px;
  color: white;
  font-size: 40px;
}
#cursor,
#grandma,
#farm {
  width: 80%;
  margin: 20px auto 0 auto;
  height: 100px;
  font-size: 30px;
  padding: 20px;
  border: solid 2px black;
  display: flex;
  justify-content: center;
  align-items: center;
}
#cursor {
  margin-top: 80px;
}
</style>
