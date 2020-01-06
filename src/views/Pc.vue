<template>
  <div class="g-home-wrap">
    <!-- 头部 -->
    <header-box url="logo1" ></header-box>
    <div class="home-content">
      <div class="left-box">
        <img :src="baseUrl+'static/img/order/order-back.png'">
        <order-detail :obj="obj"></order-detail>
      </div>
      <div class="right-box">
        <div class="main-box">
          <h4 class="title">请确认订单信息并扫码完成贷款申请</h4>
          <dl class="g-dis">
            <dt class="g-cen-cen-box">
              <img v-if="obj.qrCodeAvailableFlag  ==1" :src="obj.qrCodeUrl" alt="">
              <span v-else>{{obj.qrCodeUrl}}</span>
            </dt>
            <dd>
              <p class="g-cen-y">使用微信 “扫一扫” 扫描二维码</p>
              <p class="g-cen-y">扫描成功后关注 “<span>蜡笔智学</span>” 公众号</p>
              <p class="g-cen-y">关注公众号后，点击对话框【立即申请】进入贷款申请流程</p>
              <p class="g-cen-y">“支付截止时间” 前二维码有效</p>
            </dd>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import api from '@/api';
import {mapGetters} from 'vuex';
import headerBox from '$common/header.vue';
import orderDetail from '$common/orderDetail.vue';

@Component({
  components :{
    headerBox,
    orderDetail
  },
  computed :{
    ...mapGetters(['baseUrl'])
  }
})


export default class Home extends Vue {

  obj : Object ={};

  //回显订单信息、二维码
  qrcodeSnap():void {
    api.onlineQrcode(this.$route.params.key).then((res:any)=>{
      this.obj = res.data;
    })
  }

  mounted (){
    this.qrcodeSnap();
  }
}
</script>
<style lang="scss" scoped>
.g-home-wrap {
  min-width: 1200px;
  .home-content{
    display: flex;
    width: 1200px;
    margin:0 auto;
    padding-top: 88px;
    .left-box{
      width: 334px;
      position: relative;
      &>img{
        display: block;
        width: 334px;
        max-height: 479px;
      }
    }
    .right-box{
      margin-left: 54px;
      margin-top:16px;
      .main-box{
        width: 807px;
        box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.24);
        border-radius: 10px;
        border: solid 1px #b3b3b3;
        padding: 49px  0px 0px 64px;
        background-image: linear-gradient(0deg,#fff 0%, #e8f6ff 100%);
        min-height: 444px;
        box-sizing: border-box;
        &>.title{
          color:#0084fd;
          font-size: 18px;
          padding-bottom: 57px;
          font-weight: bold;
          line-height: 26px;
        }
        dl{
          dt{
            width: 196px;
            height: 196px;
            background: #fff;
            margin-right: 49px;
            img{
              display: block;
              width: 100%;
            }
          }
          dd{
            p{
              font-size: 16px;
              color:#666;
              margin-bottom: 28px;
              line-height: 26px;
              span{
                color:#000;
              }
              &::before{
                content:'';
                width: 6px;
                height: 6px;
                background: #666;
                border-radius: 50%;
                margin-right: 12px;
              }
            }
          }
        }
      }
    }
  }
}
</style>

