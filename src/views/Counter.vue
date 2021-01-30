<template>
    <div>
        <button @click="increment">加一</button> {{count}}
    </div>
</template>

<script>
    export default {
        name: "Counter",
        computed: {
            count() {
                return this.$store.state.count
            }
        },
        methods: {
            increment() {
                this.$store.commit('increment')
            }
        }
    }
</script>

<style scoped>

</style>
