<template>
  <section class="login-wrap">
    <section class="login-main">
      <section class="login-form g-col-cen-cen-box">
        <h6 class="title">登录VIP项目管理后台</h6>
        <el-input class="input" v-model="phone" placeholder="请输入您的手机号" maxlength="11" />
        <el-input type="password" class="input" v-model="pwd" placeholder="请输入您的密码" maxlength="10" />
        <el-button class="btn" type="primary" :disabled="!pwd || !phone" @click="loginFn">登录</el-button>
      </section>
    </section>
  </section>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import headerBox from '$common/header.vue';
import {mapGetters} from 'vuex';
import api from '@/api';

@Component({
  components :{
    headerBox
  },
  computed :{
    ...mapGetters(['baseUrl'])
  }
})

export default class HeaderBox extends Vue {
  // win :any = window;
  phone :string = '';
  pwd :string = '';

  //登录
  loginFn ():any{
    sessionStorage.setItem('yy-vip-name',this.phone)
    this.$router.push('/')
  }

  mounted (){
  
  }

}
</script>
<style lang="scss" scoped>
.login-wrap{
  background: url($baseUrl+'/login.jpg') no-repeat center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  position: relative;
  min-width: 1200px;
  .login-main{
    width: 40%;
    min-width: 600px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background: rgba(0,0,0,0.2);
    .login-form{
      height: 100%;
      width: 460px;
      padding:0 0 100px 100px;
      .title{
        font-size: 30px;
        color: $col-f;
        padding-bottom: 40px;
      }
      .input{
        margin-bottom: 30px;
      }
      .btn{
        width: 100%;
      }
    }
  }
}
</style>
