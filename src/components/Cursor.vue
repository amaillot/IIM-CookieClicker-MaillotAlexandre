<template>
    <div>
        <button @click="cursor"></button>
    </div>
</template>

<script>
    export default {
        name: 'Cursor',
        data () {
            return {
                count: 0
            }
        },
        methods: {
            cursor () {
                this.count++
            }
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