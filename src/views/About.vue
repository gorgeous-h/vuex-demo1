<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{$store.state.count}}
    <br/>
    {{doneTodos[0].text}}
    <br/>
    {{doneTodosCount}}
    <br/>
    {{getTodoById(2).text}}
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    computed: mapGetters(['doneTodos','doneTodosCount','getTodoById'])
  }
</script>
