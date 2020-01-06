<template>
  <section class="order-detail-wrap">
    <!-- 头部 -->
    <lb-order-back>
      <section class="order-head-box">
        <section class="order-detail-box">
          <section class="order-head-list">
            <p class="g-cen-y bold">订单金额：<span>{{obj.orderAmt}}元</span></p>
            <p class="g-cen-y bold">支付截止时间：{{obj.tradeCloseTime}}</p>
            <p class="border">(请在截止时间完成支付，否则订单自动取消)</p>
            <div class="yuan-box" >
              <div>
                <span class="lef"></span>
                <span class="rig"></span>
              </div>
            </div>
          </section>
          <ul class="order-list-box">
            <li>订单编号：{{obj.orgOrderId}}</li>
            <li>课程名称：{{obj.goodsName}}</li>
            <li>商户名称：{{obj.merchantName}}</li>
          </ul>
        </section>
      </section>
    </lb-order-back>
    <section class="order-main">
      <h6 class="g-cen-y">请按照以下流程完成支付</h6>
      <div class="img-box">
        <img v-if="obj.qrCodeAvailableFlag  ==1" :src="obj.qrCodeUrl" alt="">
        <span v-else>{{obj.qrCodeUrl}}</span>
      </div>
      <ul>
        <li>• 保存该二维码图片到我的手机相册；</li>
        <li>• 使用微信“扫一扫”扫描二维码 </li>
        <li>• 扫描成功后关注“蜡笔智学”公众号 </li>
        <li>• 关注公众号后，点击对话框【立即申请】进入贷款申请流程</li>
        <li>• “支付截止时间”前二维码有效</li>
      </ul>
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import api  from '@/api';
import lbOrderBack from '$common/orderBack.vue'
import {mapActions} from 'vuex';
@Component({
  components :{
    lbOrderBack
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
.order-detail-wrap{
  padding-bottom: 30px;
  .order-head-box{
    box-shadow:4px 4px 12px 0px rgba(151,153,153,0.42);
    .order-detail-box{
      background-color: $col-f;
      .order-head-list{
        padding:12px 14px 0px;
        position: relative;
        p{
          font-size: 14px;
          color: $col-6; 
          line-height: 30px;
          &.bold{
            font-weight: bold;
          }
          span{
            color: $col-red;
            font-size: 18px;
          }
          &.border{
            padding-bottom: 16px;
            border-bottom: 1px dotted $col-e5;
          }
        }
        .yuan-box{
          position:absolute;
          bottom:-7px;
          left: 0;
          height: 14px;
          width: 100%;
          &>div{
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            span{
              position:absolute;
              top: 0;
              height: 100%;
              width: 14px;
              border-radius: 50%;
              background: $col-f;
              &.lef{
                left:-7px;
                background: rgb(235,237,236);
              }
              &.rig{
                right: -7px;
                box-shadow:inset 10px 0px 10px 10px rgb(211,211,211);
              }
            }
          }
        }
      }
      .order-list-box{
        padding: 13px 13px 18px;
        li{
          line-height: 29px;
          font-size: 14px;
          color: $col-6;
          display: flex;
          align-items: center;
        }
      }
    }
  }
  .order-main{
    padding:2px 15px 40px;
    h6{
      &::before{
        content: "";
        width: 4px;
        height: 15px;
        background-color: #3961C6;
        border-radius: 2px;
        margin-right: 7px;
      }
      font-size: 16px;
      font-weight: bold;
      line-height: 58px;
    }
    .img-box{
      width: 126px;
      height: 126px;
      margin: 0 auto;
      img{
        width: 100%;
        display: block;
      }
    }
    ul{
      padding-top: 20px;
      li{
        line-height: 24px;
        font-size: 12px;
        color: $col-6;
      }
    }
  }
}
</style>


