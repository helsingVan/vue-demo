<template>
	<div class="ele-header">
		<figure class="header-content clearfix">
			<div class="avatar">
				<img :src="seller.avatar" width="64" height="64">
			</div>
			<div class="content">
				<p>
					<span class="name-logo"></span>
					{{seller.name}}
				</p>
				<p>{{seller.description}}/{{seller.deliveryTime}}分钟送达</p>
				<p>
					{{seller.supports[0].description}}
				</p>
			</div>
		</figure>
		<div class="notice">
			<span class="notice-logo"></span>
			<p class="text">{{seller.bulletin}}</p>
			
		</div>
		<aside></aside>
	</div>
</template>

<script>
export default {
	name: 'header',
	data () {
		return {
			seller: {}
		}
	},
	created: function() {
		var _this = this;
		_this.$axios.get('/api/seller')
		  .then(function(res) {
		  	var data = res.data.body;
		  	_this.seller = data;
		  	console.log(_this.seller);
		  }).catch(function(error) {
		  	console.log(error);
		  })
	}
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '../../assets/stylus/mixin.stylus'

.ele-header
  padding: 24px 24px 48px 24px
  position: relative
  .header-content 
    font-size: 12px
    .name-logo
      display: inline-block
      width: 30px
      height: 18px
      bg-image('../../assets/img/brand')
      background-size: 30px 18px
      vertical-align: middle
.header-content > div 
  float: left
.notice
  position: absolute
  left: 0
  bottom: 0
  width: 100%
  height: 28px
  .text
    overflow: hidden
    white-space: nowrap
    text-overflow: ellipsis
    font-size: 12px
    display: inline-block
    width:90%
  .notice-logo
    width: 22px
    height: 12px
    bg-image: ('../../assets/img/bulletin')
    background-size: 22px 12px
    display: inline-block
</style>