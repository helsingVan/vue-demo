<template>
	<div class="ele-header">
		<figure class="header-content">
			<div class="avatar">
				<img :src="seller.avatar" width="64" height="64">
			</div>
			<div class="content">
				<p>{{seller.name}}</p>
				<p>{{seller.description}}/{{seller.deliveryTime}}分钟送达</p>
				<p>
					{{seller.supports[0].description}}
				</p>
			</div>
		</figure>
		<div class="notice">
			{{seller.bulletin}}
		</div>
		<aside></aside>
	</div>
</template>

<script>
export default {
	name: 'header',
	props: function() {
		return {
			seller: {}
		};
	},
	mounted: function() {
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
.ele-header
  padding: 24px
  .header-content 
    font-size: 10px
    

</style>