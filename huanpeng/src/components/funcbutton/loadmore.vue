<template>
<div class="loadmore">
  <a href="##" @click="loadMore">加载更多</a>
</div>
</template>

<script>
export default {
  name: 'loadmore',
  props: {
  	loadMore: {
  	  type: Function
  	}
  }
}
</script>

<style>
.loadmore {
  height: 4rem;
  line-height: 4rem;
  text-align: center;
  font-size: 1.4rem;
  background: #fff;
  margin-top: 1rem;
}
</style>