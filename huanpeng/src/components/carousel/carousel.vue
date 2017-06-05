<template>
  <div class="carousel swiper-container" ref="carousel">
  	<ul class="swiper-wrapper">
  	  <li class="swiper-slide">
  	  	<a href="##">
  	  	  <img src="./img/banner01.jpg" alt="">
  	  	</a>
  	  </li>
  	  <li class="swiper-slide">
  	  	<a href="##">
  	  	  <img src="./img/banner02.jpg" alt="">
  	  	</a>
  	  </li>
  	  <li class="swiper-slide">
  	  	<a href="##">
  	  	  <img src="./img/banner03.jpg" alt="">
  	  	</a>
  	  </li>
  	</ul>
  	<div class="swiper-pagination" ref="pagination"></div>
  </div>
</template>

<script>
export default {
  name: 'carousel',
  mounted() {
  	var _this = this;
  	_this.$nextTick(function() {
      _this.swiperInit();
  	})
  },
  methods: {
    swiperInit: function() {
      var swiperDiv = this.$refs.carousel;
      var pagination = this.$refs.pagination;
      new Swiper(swiperDiv,{
      	autoplay: 1000,
      	loop: true,
      	autoplayDisableOnInteraction: false,
      	pagination: pagination
      });
    }
  }
}
</script>

<style rel="stylesheet">
.carousel {
  height: 15rem;
  line-height: 15rem;
  text-align: center;
  background: #fff;
  position: relative;
}
.carousel .swiper-slide img {
  height: 100%;
}
.carousel .swiper-pagination {
  /*position: absolute;
  right: 0;
  bottom: 0;
  width: 50px;*/
}
</style>
