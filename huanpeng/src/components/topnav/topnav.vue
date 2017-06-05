<template>
  <div class="topnav">
	<div class="logo left">
	  <i class="fa fa-video-camera"></i>
	  欢朋
	</div>
    <nav class="nav-right right">
	  <router-link to="/home">
	  	<i class="fa fa-home"></i>
	  </router-link>
	  <router-link to="/classify">
	  	<i class="fa fa-compass"></i>
	  </router-link>
	  <router-link to="/game">
	  	<i class="fa fa-gamepad"></i>
	  </router-link>
	  <router-link to="/search">
	  	<i class="fa fa-search"></i>
	  </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'topnav'
}
</script>

<style rel="stylesheet">
.topnav {
  position: fixed;
  width: 100%;
  height: 4.4rem;
  background: #ff7800;
  padding: 0 1rem;
  line-height: 4.4rem;
  z-index: 10000;
}
.topnav .logo {
  font-size: 2rem;
}
.topnav .nav-right a {
	margin: 0 .5rem;
}
.topnav .nav-right i{
  font-size: 1.8rem;
  color: #fff;
}
.topnav .active i{
  color: red;
}
</style>