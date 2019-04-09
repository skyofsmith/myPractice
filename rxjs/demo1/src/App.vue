<template>
  <el-container id="app">
    <el-aside width="200">
      <div id="nav">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>
      </div>
    </el-aside>
    <el-container>b</el-container>
  </el-container>

  <!-- <router-view class="" /> -->
</template>
<style lang="stylus">
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

#nav {
  height: 100%;
  padding: 30px;
  box-sizing: border-box;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
