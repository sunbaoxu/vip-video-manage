<template>
  <div class="c-order-detail-wrap">
    <section>
      <h4 class="g-cen-y">订单信息</h4>
      <ul>
        <li>
          <span>订单编号：</span>
          <span class="g-text-ove1">{{obj.orgOrderId}}</span>
        </li>
        <li>
          <span>课程名称：</span>
          <span>{{obj.goodsName}}</span>
        </li>
        <li>
          <span>商户名称：</span>
          <span class="g-text-ove1">{{obj.merchantName}}</span>
        </li>
        <li>
          <span>交易日期：</span>
          <span>{{obj.orgOrderTime}}</span>
        </li>
        <li>
          <span>订单金额：</span>
          <span class="red">{{obj.orderAmt}}元</span>
        </li>
      </ul>
      <div class="tips">
        <p>支付截止日期：{{obj.tradeCloseTime}}</p>
        <p class="text">(请在截止时间完成支付，否则订单自动取消)</p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class OrderDetail extends Vue {
  @Prop({default:{},type:Object})  obj !: object;
}
</script>

<style lang="scss" scoped>
.c-order-detail-wrap{
  position: absolute;
  left:37px;
  top:13px;
  width: 260px;
  h4{
    border-bottom: 1px dashed #b3b3b3;
    color: $col-blue1;
    font-size: 18px;
    padding-bottom: 21px;
    padding-top:23px;
    &::before{
      content:"";
      width: 26px;
      height: 30px;
      background: url($baseUrl+'order/order-icon.png') center center no-repeat;
      background-size:cover;
      margin-right: 14px;
    }
  }
  ul{
    border-bottom: 1px dashed #b3b3b3;
    padding-bottom: 29px;
    padding-top:30px;
    li{
      height: 34px;
      line-height: 34px;
      span{
        font-size: 14px;
        &:first-child{
          color:$col-6;
          min-width: 60px;
        }
        &.red{
          color:$col-red;
        }
      }
    }
  }
  .tips{
    padding-top: 22px;
    p{
      line-height: 25px;
      font-size: 14px;
      color: $col-3;
      &.text{
        font-size: 13px;
      }
    }
  }
}
</style>
