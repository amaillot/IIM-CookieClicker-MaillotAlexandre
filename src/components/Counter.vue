<template>
    <div>
        <span class="count">{{ count }}</span>
        <div class="cookie" @click="increment"></div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    export default {
        name: 'Counter',
        data () {
            return {
                name : "okay"
            }
        },
        methods: {
            //...mapActions["incrementCount"],
            increment () {
                //this.count++;
                this.$store.dispatch("incrementCount", (this.count + 1));
            }
        },
        computed: {
            ...mapGetters({
                count : 'count'
            })
        }
    }
</script>
<style>
    .cookie{
        height:300px;
        width:300px;
        background-image: url("../assets/PerfectCookie.png");
        background-size: contain;
        margin: 0 auto;
    }
</style>