<template>
  <section class="g-order-back-wrap g-back">
    <p class="g-order-back-wrap1"></p>
    <section class="g-box-main">
      <slot></slot>
    </section>
  </section>
</template>

<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.g-order-back-wrap{
	background-image: url($baseUrl+'order/back3.png');
	min-height: 114px;
	background-position: 0 top;
	position: relative;
	.g-order-back-wrap1{
		position: absolute;
		top: 26px;
		left: 50%;
		width: 355px;
		height: 10px;
		z-index: 50;
    background-repeat: no-repeat;
		background-image: url($baseUrl+'order/back1.png');
    background-position: center top;
    background-size: 100%;
		transform: translate(-50%,0);
	}
	.g-box-main{
		padding-top: 26px;
		padding:26px 10px 0;
	}
}
</style>
