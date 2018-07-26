<template>
    <div>
        <div @click="grandma" class="grandma"> Grandma : {{grandmaCount}}, cost : {{cost}} </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    export default {
        name: 'CookieGrandma',
        data () {
            return {
                grandmaCount : 0,
                cookieCount: 0,
                cost : 100,
                interval : undefined
            }
        },
        created() {
            this.interval = setInterval(this.countCookie, 1000);
        },
        methods: {
            //...mapActions["incrementCount"],
            countCookie() {
                let grandma = this.grandmaCount;
                this.$store.dispatch("incrementCountGrandma", grandma);
            },
            grandma () {
                this.$store.dispatch("buyItem", (this.cost));
                this.grandmaCount++;
                this.cost = this.cost + (15/100*this.cost);
                this.cost = Math.round(this.cost);
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
    .grandma{
        cursor: pointer;
    }
</style>