<template>
    <div>
        <!--模块A的count：{{this.$store.state.a.count}}-->
        <!--<br/>-->
        <!--模块B的count：{{this.$store.state.b.count}}-->
        <!--<br/>-->
        <!--Vuex实例的count：{{this.$store.state.count}}-->

        模块A的count：{{a}}
        <br/>
        模块B的count：{{b}}
        <br/>
        Vuex实例的count：{{this.$store.state.count}}
        <br/>
        模块A的count+Vuex实例的count={{sumWithRootCount}}
        <!--<button @click="increment">加一</button>-->
        <br/>
        <button @click="incrementIfOddOnRootSum">加一</button>
        <br/>
        <button @click="someAction2">加一</button>
    </div>
</template>

<script>
    import {
        mapState,
        mapGetters,
        mapActions,
    } from 'vuex'

    export default {
        name: "ModulesDemo",
        // computed: mapState({
        //     a: state => state.a.count,
        //     b: state => state.b.count,
        // }),
        computed: {
            ...mapState({
                a: state => state.a.count,
                b: state => state.b.count,
            }),
            ...mapGetters({
                sumWithRootCount: 'a/sumWithRootCount'
            })
        },
        // methods: {
        //     increment() {
        //         this.$store.dispatch('b/someAction')
        //     }
        // },
        // methods: mapActions([
        //     'b.someAction'
        // ]),
        methods: {
            ...mapActions({
                incrementIfOddOnRootSum: 'a/incrementIfOddOnRootSum',
                someAction2: 'someAction2'
            }),
        }
    }
</script>

<style scoped>

</style>
