<template>
    <div>
        <span class="count">{{ count }}</span>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Counter",
  data() {
    return {
      name: "okay"
    };
  },
  methods: {
    //...mapActions["incrementCount"],
    increment() {
      //this.count++;
      this.$store.dispatch("incrementCount", this.count + 1);
    }
  },
  computed: {
    ...mapGetters({
      count: "count"
    })
  }
};
</script>
