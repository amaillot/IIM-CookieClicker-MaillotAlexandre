<template>
        <div class="cookie" @click="increment"></div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    export default {
        name: 'Cookie',
        data () {
            return {
                name : "okay"
            }
        },
        methods: {
            //...mapActions["incrementCount"],
            increment () {
                //this.count++;
                this.$emit('incrementCookie');
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
.cookie:active{
        height: 310px;
        width: 310px;
}
</style>