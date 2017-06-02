<template>
  <div id="app">
    <header>
      <my-header></my-header>
    </header>
    <nav class="ele-menu">
      <router-link to="/goods">商品</router-link>
      <router-link to="/ratings">评价</router-link>
      <router-link to="/seller">商家</router-link>
    </nav>
    <router-view></router-view>
    
  </div>
</template>

<script>
import myHeader from './components/header/header';

export default {
  name: 'app',
  mounted: function() {
    
  },
  components: { myHeader }
}

</script>

<style lang="stylus" rel="stylesheet/stylus">
@import './assets/stylus/mixin.stylus'

.ele-menu
  display: flex
  height: 40px
  line-height: 40px 
  borderbottom-1px(#ddd)
  > a
    flex: 1
    text-align: center
  > a.active
    color: #f01414
</style>
