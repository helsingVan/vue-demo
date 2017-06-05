<template>
  <div id="app">
    <top-nav></top-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import TopNav from './components/topnav/topnav';

export default {
  name: 'app',
  components: { TopNav }
}
</script>

<style>

</style>
