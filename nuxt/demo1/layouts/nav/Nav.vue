<style scoped>
.nav {
  width: 100%;
  background-color: mediumpurple;
}

.nav-item {
  height: 42px;
  line-height: 42px;
  text-decoration: none;
  background-color: rgba(0, 0, 0, 0.1);
}
</style>

<template>
  <div class="nav">
    <nuxt-link to="/">
      <div class="nav-item">
        首页
      </div>
    </nuxt-link>
    <nuxt-link to="/info">
      <div class="nav-item">
        新闻
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Nav'
}
</script>
