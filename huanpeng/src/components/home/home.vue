<template>
  <div class="home">
    <div class="home-main" v-show="isHot===false">
	    <Carousel></Carousel>
	  	<section class="hot-menu">
	  	  <div class="wrapper">
	  	  	<a href="##" @click="toHot">热门</a>
	  	  	<a href="##">榜单</a>
	  	  </div>
	  	</section>
	  	<article class="home-content">
	  	  <video-list :have-title="haveTitle">
           <p>视频内容  </p>
        </video-list>
	  	  <div class="refresh">
	  	  	<div class="control">
	  	  	  <i class="fa fa-refresh"></i>
	  	  	  <span>召唤一组新主播</span>
	  	  	</div>
	  	  </div>
	  	</article>
    </div>
  	
    <Hot ref="hot" @back="getBack"></Hot>
     
  </div>
</template>

<script>
import Carousel from '../carousel/carousel';
import videoList from '../video/videolist';
import Hot from './hot';
// import store from '../../assets/js/store';

export default {
  name: 'home',
  components: { 
  	Carousel,
  	videoList,
  	Hot
  },
  data() {
  	return {
  	  isHot: false,
  	  haveTitle: true
  	}
  },
  mounted: function() {
    console.log(this.$store.state.info);
  },
  methods: {
  	toHot: function() {
      this.isHot = true;
      this.$refs.hot.show();
  	},
  	getBack: function() {
  	  this.isHot = false;
  	}
  }
}
</script>

<style rel="stylesheet">
.hide {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 99999;
}
.home {
  padding-top: 4.4rem;
  padding-bottom: 2rem;
  background: #f1f2f6;
}
.hot-menu {
  margin-top: 1.5rem;
}
.hot-menu .wrapper{
  display: flex;
  justify-content: space-between;
  padding: 0 1.5rem;
}
.hot-menu a {
  flex: 1;
  height: 4rem;
  line-height: 4rem;
  text-align: center;
  background: #ff7800;
  margin-right: 1.5rem;
  border-radius: 4px;
  font-size: 1.6rem;
  color: #fff;
}
.hot-menu a:last-child {
  margin-right: 0;
}
.home-content {
  padding: 0 1rem;
}
.refresh {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}
.refresh .control {
  padding: 1rem 2rem;
  border-radius: 1rem;
  background: #ccc;
  cursor: pointer;
}

</style>