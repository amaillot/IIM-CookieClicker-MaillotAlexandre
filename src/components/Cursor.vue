<template>
    <div>
        <div @click="cursor" class="cursor"> Cursor : {{cursorCount}}, cost : {{cost}} </div>
    </div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    export default {
        name: 'CookieCursor',
        data () {
            return {
                cursorCount : 0,
                cookieCount: 0,
                cost : 15,
                interval : undefined
            }
        },
        created() {
            this.interval = setInterval(this.countCookie, 10000);
        },
        methods: {
            //...mapActions["incrementCount"],
            countCookie() {
                let cursor = this.cursorCount;
                this.$store.dispatch("incrementCountCursor", cursor);
            },
            cursor () {
                this.$store.dispatch("buyItem", (this.cost));
                this.cursorCount++;
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
    .cursor{
        cursor: pointer;
    }
</style>