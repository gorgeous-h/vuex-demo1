<template>
  <div class="home">
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
  }
}
</script>
