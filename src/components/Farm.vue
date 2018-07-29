<template>
    <div>
        <div v-if="count >= cost" @click="farm" class="farm"> Farm : {{farmCount}}, cost : {{cost}} </div>
        <div class="farm disabled" v-else> Farm : {{farmCount}}, cost : {{cost}} </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Cookiefarm",
  data() {
    return {
      farmCount: this.$store.state.farmCount,
      cookieCount: 0,
      cost: 1100,
      interval: undefined
    };
  },
  created() {
    this.interval = setInterval(this.countCookie, 1000 / 8);
    if (this.farmCount !== 0) {
      for (let i = 0; i < this.farmCount; i++) {
        this.cost += (this.cost * 15) / 100;
      }
    }
    this.cost = Math.round(this.cost);
  },
  methods: {
    countCookie() {
      let farm = this.farmCount;
      this.$store.dispatch("incrementCountFarm", farm);
    },
    farm() {
      this.$store.dispatch("buyItem", this.cost);
      this.$store.dispatch("addFarm");
      this.farmCount++;
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
.farm {
  cursor: pointer;
}
.disabled {
  color: darkgrey;
}
</style>
