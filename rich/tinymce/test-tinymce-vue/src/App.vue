<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <tinymce-editor api-key="cubj8fxktog6r6e8f2gljp1ytaqrn3gf4fhjewqx6g3rgtbl" :init="{plugins: 'wordcount'}" v-model="content"></tinymce-editor>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data () {
    return {
      content: '<a>哈哈</a>'
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing:
