<style scoped>
.infos {
  height: 100%;
}
</style>

<template>
  <div class="infos">
    <ul>
      <li v-for="(l, i) in list" :key="i">{{ l.title }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Info',
  async asyncData() {
    const list = await axios.post('/p').then(res => res.data)
    return {
      list
    }
  }
}
</script>
