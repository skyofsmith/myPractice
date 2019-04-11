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
  overflow-x: hidden;
  overflow-y: auto;

  .nav-menu {
    height: 100%;
  }

  a {
    text-decoration: none;
    color: #000;

    &.router-link-exact-active {
      // color: #42b983;
    }
  }
}

.view {
  width: 100%;
}
</style>
<template>
  <el-container id="app">
    <el-aside id="nav" width="200px">
      <el-menu default-active="1" class="nav-menu">
        <el-submenu index="1">
          <span slot="title">OVERVIEW</span>
          <router-link to="/overview/observable">
            <el-menu-item index="1-1">Observables</el-menu-item>
          </router-link>
          <router-link to="/overview/subscription">
            <el-menu-item index="1-2">Subscription</el-menu-item>
          </router-link>
          <router-link to="/overview/subject">
            <el-menu-item index="1-3">Subjects</el-menu-item>
          </router-link>
          <router-link to="/">
            <el-menu-item index="1-4">Scheduler</el-menu-item>
          </router-link>
          <el-submenu index="1-5">
            <span slot="title">Testing</span>
            <router-link to="/">
              <el-menu-item index="1-5-1">Marble Testing</el-menu-item>
            </router-link>
          </el-submenu>
        </el-submenu>
        <router-link to="/installation">
          <el-menu-item index="2">INSTALLATION</el-menu-item>
        </router-link>
        <el-submenu index="3">
          <span slot="title">REFERENCE</span>
          <el-menu-item index="3-1">
            <router-link to="/">API</router-link>
          </el-menu-item>
          <el-menu-item index="3-2">
            <router-link to="/">Operator Decision Tree</router-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <span slot="title">ABOUT VERSION 6</span>
          <el-menu-item index="4-1">
            <router-link to="/">Migration</router-link>
          </el-menu-item>
          <el-menu-item index="4-2">
            <router-link to="/">Pipeable Operators</router-link>
          </el-menu-item>
          <el-menu-item index="4-3">
            <router-link to="/">Deprecations</router-link>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="5">
          <span slot="title">
            <router-link to="/">EXTERNAL RESOURCES</router-link>
          </span>
        </el-submenu>
        <el-submenu index="6">
          <span slot="title">
            <router-link to="/">CODE OF CONDUCT</router-link>
          </span>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view class="view"></router-view>
    </el-main>
  </el-container>
</template>
