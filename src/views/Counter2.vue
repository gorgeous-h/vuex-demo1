<template>
    <div>
        <button @click="increment">加一</button> {{count}}
        <!--<button @click="add">加一</button> {{count}}-->
        <!--<button @click="incrementAsync">异步加一</button> {{count}}-->
        <!--<button @click="incrementAsync">异步加十</button> {{count}}-->
    </div>
</template>

<script>
    import {
        mapState,
        // mapActions
    } from 'vuex'

    export default {
        name: "Counter2",
        computed: {
            ...mapState(['count']),
        },
        methods: {
            // increment() {
            //     this.$store.dispatch('increment')
            // },
            // incrementAsync() {
            //     // this.$store.dispatch('incrementAsync', {amount: 10})
            //     this.$store.dispatch({type: 'incrementAsync', amount: 10})
            // },
            // ...mapActions(['increment']),
            // ...mapActions({
            //     add: 'increment'
            // })
            increment() {
                this.$store.dispatch('actionB').then(() => {
                    console.log('执行成功！')
                })
            },
        }
    }
</script>

<style scoped>

</style>
