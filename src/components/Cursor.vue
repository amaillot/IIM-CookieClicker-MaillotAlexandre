<template>
    <div>
        <div v-if="count >= cost" @click="cursor" class="cursor"> Cursor : {{cursorCount}}, cost : {{cost}} </div>
        <div class="cursor disabled" v-else> Cursor : {{cursorCount}}, cost : {{cost}} </div>

    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CookieCursor",
  data() {
    return {
      cursorCount: this.$store.state.cursorCount,
      cookieCount: 0,
      cost: 15,
      interval: undefined
    };
  },
  created() {
    this.interval = setInterval(this.countCookie, 10000);
    if (this.cursorCount !== 0) {
      for (let i = 0; i < this.cursorCount; i++) {
        this.cost += (this.cost * 15) / 100;
      }
    }
    this.cost = Math.round(this.cost);
  },
  methods: {
    countCookie() {
      let cursor = this.cursorCount;
      this.$store.dispatch("incrementCountCursor", cursor);
    },
    cursor() {
      this.$store.dispatch("buyItem", this.cost);
      this.$store.dispatch("addCursor");
      this.cursorCount++;
      this.cost = this.cost + (15 / 100) * this.cost;
      this.cost = Math.round(this.cost);
    }
  },
  computed: {
    ...mapGetters({
      count: "count"
    })
  }
};
</script>
<style>
.cursor {
  cursor: pointer;
}
.disabled {
  color: darkgrey;
}
</style>
