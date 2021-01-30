<template>
  <div class="home">
    {{this.$store.state.people}} <button @click="addAge">添加年龄</button>
    <br/>
    {{this.$store.getters.doneTodos[0].text}}
    <br/>
    {{this.$store.getters.doneTodosCount}}
    <br/>
    {{this.$store.getters.getTodoById(2).text}}
    <counter></counter>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Counter from '@/views/Counter.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Counter,
  },
  methods: {
    addAge() {
      this.$store.state.people = {...this.$store.state.people, age: 20}
    },
  },
}
</script>
