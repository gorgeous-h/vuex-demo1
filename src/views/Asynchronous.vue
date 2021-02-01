<template>
    <div>
        <button @click="getData">加载数据</button>
        <br/>
        职业：{{career.name}}
        <br/>
        证件类型：{{certificateType.name}}

        <!--<br/>-->
        <!--职业：{{this.$store.state.career.name}}-->
        <!--<br/>-->
        <!--证件类型：{{this.$store.state.certificateType.name}}-->
    </div>
</template>

<script>
    import {
        mapState,
    } from 'vuex'

    export default {
        name: "Asynchronous",
        computed: {
            ...mapState(['career', 'certificateType']),
        },
        methods: {
            getData() {
                this.$store.dispatch('actionD', {id: 1}).then(() => {
                    console.log('加载成功！')
                })
            },
        },
    }
</script>

<style scoped>

</style>
