<template>
  <div class="video-container">
  	<section class="video-item" v-for="n in 8">
	 <header class="clearfix" v-if="haveTitle">
	   <h2 class="left">
	  	 <i class="fa fa-gamepad"></i>
	  	 <span class="title">王者荣耀</span>
	   </h2>
	   <!-- <a href="##" class="more right" @click="toHomeMore">
	  	 <span>更多</span>
	  	 <i class="fa fa-chevron-circle-right"></i>
	   </a> -->
     <router-link class="more right" to="/home-more">
       <span>更多</span>
       <i class="fa fa-chevron-circle-right"></i>
     </router-link>
	 </header>
	 <ul class="home-video clearfix">
	   <li v-for="n in 4">
	     <div class="video-control">
	       <img src="./img/test.jpg" alt="">
	     </div>
	     <div class="video-info">
	       <p class="user">
	         <span class="icon"></span>
	         <span>username</span>
	       </p>
	       <p class="user-info">
	         <span>1.1万</span>
	         <span>王者荣耀直播间</span>
	       </p>
	       <p class="classify"></p>
	     </div>
	   </li>
	 </ul>
	</section>
  </div>
</template>

<script>
export default {
  name: 'video',
  props: {
  	haveTitle: {
  	  type: Boolean
  	}
  },
  methods: {
    toHomeMore: function() {
      alert(1);
      window.location.href = '/game';
    }
  }
}
</script>

<style>
.video-container .video-item header{
  margin-top: 2rem;
}
.video-item h2 {
  font-size: 2rem;
}
.video-item .title {
  font-size: 1.6rem;
}
.video-item .more {
  line-height: 2rem;
}
.video-item .more i {
  color: #ff7800;
}
.home-video {
  width: 100%;
}
.home-video > li {
  width: 48%;
  border-radius: 4px;
  overflow: hidden;
  float: left;
  margin: 1rem 1.2rem 0 0;
}
.home-video> li:nth-child(2n) {
  margin: 1rem 0 0 0;
}
.video-control img {
  width: 100%;
}
.video-info {
  background: #fff;
  padding-bottom: 1rem;
}
.video-info .user {
  position: relative;
  padding-left: 5rem;
}
.video-info .user .icon {
  position: absolute;
  left: 5px;
  bottom: 0;
  width: 4rem;
  height: 4rem;
  background: url("./img/test-user.jpg") no-repeat;
  background-size: 4rem 4rem;
  border-radius: 50%;
}
.video-info .user-info {
  margin-top: .4rem;
  padding-left: 1rem;
}
.video-info .user-info > span:first-child {
  display: inline-block;
  background: #ddd;
  border-radius: 2px;
  padding: .1rem .4rem;
}
</style>