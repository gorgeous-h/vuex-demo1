<template>
    <div>
        <button @click="increment">加一</button> {{count}}
        <!--<br/>-->
        <!--{{countAlias}}-->
        <!--<br/>-->
        <!--{{countPlusLocalState}}-->
        <br/>
        {{localComputed}}
    </div>
</template>

<script>
    import {mapState} from 'vuex'

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
        methods: {
            increment() {
                this.$store.commit('increment')
            }
        }
    }
</script>

<style scoped>

</style>
