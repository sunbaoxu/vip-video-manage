<template>
  <div class="c-header-box g-back-cover g-fen-box" :class="async?'m-header':'pc-header'">
    <img :src="baseUrl+'static/img/header_logo.png'">
    <p>唯一官方热线：400-6528-321</p>
  </div>
</template>

<script lang="ts">
import {mapGetters} from 'vuex';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  computed:{
    ...mapGetters(['baseUrl'])
  }
})
export default class HeaderBox extends Vue {
  @Prop({default:false,type:Boolean})  async !: boolean;
}
</script>
<style lang="scss" scoped>
.c-header-box{
  background-image: url($baseUrl+'header_img.png');
	&.pc-header{
    height: 85px;
    padding: 18px 49px 0px 56px;
    img{
      width: 147px;
      height: 55px;
    }
    p{
      font-size: 20px;
      color: $col-f;
      line-height: 66px;
    }
  }
  &.m-header{
    height: 60px;
    padding: 13px 15px 0px 15px;
    img{
      width: 90px;
      height: 36px;
    }
    p{
      font-size: 14px;
      color: $col-f;
      line-height: 50px;
    }
  }
}
</style>
