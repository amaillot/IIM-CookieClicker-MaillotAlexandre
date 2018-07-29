<template>
    <div>
        <div v-if="count >= cost" @click="grandma" class="grandma"> Grandma : {{grandmaCount}}, cost : {{cost}} </div>
        <div class="grandma disabled" v-else> Grandma : {{grandmaCount}}, cost : {{cost}} </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "CookieGrandma",
  data() {
    return {
      grandmaCount: this.$store.state.grandmaCount,
      cookieCount: 0,
      cost: 100,
      interval: undefined
    };
  },
  created() {
    this.interval = setInterval(this.countCookie, 1000);
    if (this.grandmaCount !== 0) {
      for (let i = 0; i < this.grandmaCount; i++) {
        this.cost += (this.cost * 15) / 100;
      }
    }
    this.cost = Math.round(this.cost);
  },
  methods: {
    countCookie() {
      let grandma = this.grandmaCount;
      this.$store.dispatch("incrementCountGrandma", grandma);
    },
    grandma() {
      this.$store.dispatch("buyItem", this.cost);
      this.$store.dispatch("addGrandma");
      this.grandmaCount++;
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
.grandma {
  cursor: pointer;
}
.disabled {
  color: darkgrey;
}
</style>
