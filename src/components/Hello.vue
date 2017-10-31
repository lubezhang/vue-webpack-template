<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <button id="changeBtn" @click="toggleMsg">Change message</button>
    </div>
</template>

<script>
export default {
    name: 'hello',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    methods: {
        toggleMsg() {
            this.msg = "change msg!"
        }
    }
};
</script>

<style lang="less">
    .hello {
        width: 100%;
    }
</style>
