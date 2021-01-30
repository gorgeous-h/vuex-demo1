<template>
    <div>
        <button @click="increment">加一</button> {{count}}
        <button @click="add">加一</button> {{count}}
        <!--<br/>-->
        <!--{{countAlias}}-->
        <!--<br/>-->
        <!--{{countPlusLocalState}}-->
        <!--<br/>-->
        <!--{{localComputed}}-->
        <!--<br/>-->
        <!--<button @click="incrementBy">加三</button> {{count}}-->
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex'

    export default {
        name: "Counter",
        data() {
            return {
                localCount: 2
            }
        },
        // computed: {
        //     count() {
        //         return this.$store.state.count
        //     }
        // },
        // computed: mapState({
        //     count: state => state.count,
        //     countAlias: 'count',
        //     countPlusLocalState(state) {
        //         return state.count + this.localCount
        //     },
        // }),
        // computed: mapState(['count']), // 这里通过名称匹配Vuex实例中的state数据
        computed: {
            localComputed () {
                return this.count + this.localCount
            },
            ...mapState(['count']),
        },
        // methods: {
        //     increment() {
        //         this.$store.commit('increment')
        //     },
        //     incrementBy() {
        //         // this.$store.commit('incrementBy', 3)
        //         // this.$store.commit('incrementBy', {amount: 3})
        //         this.$store.commit({type: 'incrementBy', amount: 10})
        //     }
        // }
        // methods: mapMutations(['increment'])
        methods: {
            ...mapMutations(['increment']),
            ...mapMutations({
                add: 'increment'
            })
        }
    }
</script>

<style scoped>

</style>
