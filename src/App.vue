<template>
  <div id="app">
    <div class="wrapper-left">
    <Counter></Counter>
    <Cookie></Cookie>
    </div>
    <div class="wrapper-right">
    <CookieCursor></CookieCursor>
    <CookieGrandma></CookieGrandma>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Counter from "./components/Counter.vue";
import CookieCursor from "./components/Cursor.vue";
import Cookie from "./components/Cookie.vue";
import CursorPointer from "./components/CursorPointer.vue";
import CookieGrandma from "./components/Grandma.vue";
export default {
  name: "app",
  components: {
    HelloWorld,
    Counter,
    CookieCursor,
    Cookie,
    CursorPointer,
    CookieGrandma,
  },
  data() {
      return {
          cursors: [],
          intervalCursor: ""
      }
  },
  methods: {
      incrementCursor() {
          this.cursors.append('cursor');
      }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.wrapper-left{
    width: 50%;
    height: 100%;
    float: left;
}
.wrapper-right{
    width: 50%;
    height: 100%;
    float: right;
}
</style>
