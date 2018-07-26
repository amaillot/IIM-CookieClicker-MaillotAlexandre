<template>
    <div class="pointer" @click="increment"></div>
</template>

<script>
    import {mapActions, mapGetters} from 'vuex';
    export default {
        name: 'CursorPointer',
        data () {
            return {
                name : "okay"
            }
        }
    }
</script>
<style>
    .pointer{
        height: 28px;
        width:20px;
        background-image: url("../assets/CursorIconTransparent.png");
        background-size: cover;
        margin: 0 auto;
    }
</style>