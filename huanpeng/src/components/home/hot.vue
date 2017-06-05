<template>
  <transition name="switch">
  	<div class="hot" v-show="isShow">
      <header class="header">
      	<a href="##" class="fa fa-chevron-left back" @click="hide"></a>
      </header>
      <section class="hot-content">
      	<h2 class="title">
      	  <span style="color:#ff7800">3276</span>
      	  <span>个主播正在直播</span>
      	</h2>
      	<div class="hot-video">
      	  <video-list :have-title="haveTitle"></video-list>
      	</div>
        
      </section>
      <div class="checkmore">
      	<a href="##">加载更多</a>
      </div>
  	</div>
  </transition>
  
</template>

<script>
import videoList from '../video/videolist';

export default {
  name: 'hot',
  components: { videoList },
  data() {
  	return {
  	  isShow: false,
  	  haveTitle: false
  	}
  },
  methods: {
  	show: function() {
  	  this.isShow = true;
  	},
  	hide: function() {
  	  this.isShow = false;
  	  this.$emit('back');
  	}
  }
}
</script>

<style>
.hot {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99999;
  min-height: 100%;
  height: auto;
  width: 100%;
  background: #f1f2f6;
  padding-top: 4.4rem;
}
.switch-enter-active,
.switch-leave-active {
  transition: all .3s ease;
}
.switch-enter,
.switch-leave-active {
  transform: translateX(100%);
}
.hot .header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4.4rem;
  line-height: 4.4rem;
  background: #ff7800;
  padding: 0 1rem;
  z-index: 1000;
}
.hot .back {
  color: #fff;
  font-size: 2rem;
}
.hot-content .title {
  height: 4rem;
  line-height: 4rem;
  color: #ccc;
  font-size: 1.2rem;
  padding: 0 1rem;
}
.hot-video {
  padding: 0 1rem;
}
.hot .checkmore {
  height: 4rem;
  line-height: 4rem;
  text-align: center;
  font-size: 1.4rem;
  background: #fff;
  margin-top: 1rem;
}
</style>