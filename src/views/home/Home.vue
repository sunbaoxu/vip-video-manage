<template>
  <section class="home-wrap">
    <header class="home-head-box" id="navs">
      <div class="nav-lef g-cen-y">
        <!-- <img :src="urlPath+'logo.png'"> -->
        <h4>VIP项目管理后台</h4>
      </div>
      <div class="nav-right">
        <span>欢迎您{{username ?'，'+username:''}} !</span>
        <span @click="loginOut" class="login-out">退出</span>
      </div>
    </header>

    <section class="home-main-box">
      <div class="home-left-box" id="home-left-box">
        <p class="aside-btn-box">
          <el-button class="btn" size="small" @click="isCollapseFn" :icon="isCollapse ?'el-icon-d-arrow-right':'el-icon-d-arrow-left'" circle></el-button>
        </p>

        <el-menu
          :default-active="defaultActive"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          :unique-opened="true"
          background-color="#f6f7f9"
          active-text-color="#3489ff"
          router
        >
          
          <el-menu-item index="/">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu :index="m.id" v-for="(m,i) in menuArr" :key="i">
            <template slot="title">
              <i class="iconfont" :class="m.iconClass"></i>
              <span>{{m.text}}</span>
            </template>
            <el-menu-item-group v-for="(item,ind) in m.children" :key="ind">
              <el-menu-item :index="item.url">{{item.text}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>
      <div class="home-right-box">
        <tags-view></tags-view>
        <section class="app-main" id="app-main">
          <keep-alive>
            <router-view v-if="$route.meta.async"/>
          </keep-alive>
          <router-view v-if="!$route.meta.async" />
        </section>
      </div>
    </section>
  </section>
</template>
<script lang="ts">
import api from '@/api';
import TagsView from "@/views/home/TagsView";

import { Component, Prop, Vue } from 'vue-property-decorator';
import {State,Action,Getter} from 'vuex-class';

@Component({
  components :{
    TagsView
  }
})

export default class Home extends Vue {
  username :string = '';
  defaultActive :string = '/';
  menuArr :any[] =[
    {"id":"0-1","pid":"0","text":"用户中心","url":null,"iconClass":"icon-yonghu","sort":"1","children":[
      {"id":"0-1-1","pid":"0-1","text":"用户列表","url":"/user/userList","iconClass":null,"sort":"1","children":null},
      {"id":"0-1-2","pid":"0-1","text":"邀请好友查询","url":"/user/invitation","iconClass":null,"sort":"1","children":null}
      ]
    },
    {"id":"0-2","pid":"0","text":"订单中心","url":null,"iconClass":"icon-yonghu","sort":"1","children":[
      {"id":"0-2-1","pid":"0-2","text":"订单列表","url":"/order/orderList","iconClass":null,"sort":"1","children":null}
      ]
    },
    {"id":"0-3","pid":"0","text":"资金管理","url":null,"iconClass":"icon-yonghu","sort":"1","children":[
      {"id":"0-3-1","pid":"0-3","text":"提现列表","url":"/money/reflectList","iconClass":null,"sort":"1","children":null}
      ]
    },
    {"id":"0-4","pid":"0","text":"配置管理","url":null,"iconClass":"icon-yonghu","sort":"1","children":[
      {"id":"0-4-1","pid":"0-4","text":"账号管理","url":"/power/identityList","iconClass":null,"sort":"1","children":null}
      ]
    }
  ];

  @Getter('baseUrl')  baseUrl:any;
  @Getter('isCollapse')  isCollapse :any;

  @Action('setIsCollapse') private setIsCollapse: any;

  
  //登录
  loginOut ():any{
    this.$confirm("确定退出登录？", "提示", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning"
    }).then(() => {
      this.$router.push("/login");

    }).catch(() => {
      this.$message({type: "info",message: "已取消"});
    });
  }

  isCollapseFn (){
    this.setIsCollapse(!this.isCollapse);
  }

  //菜单默认选中
  activeFn () {
    let path = this.$route.path;
    this.defaultActive = path ;
  }

  mounted (){
    this.username = sessionStorage.getItem('yy-vip-name') || '';

    this.activeFn();
  }

}
</script>
<style lang="scss" scoped>
.home-wrap{
  min-width: 1200px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
.home-main-box {
  height: 90vh;
  width: 100%;
  overflow: hidden;
  .home-left-box {
    float: left;
    min-height: 90vh;
    background-color: #f6f7f9;
    padding-top: 4px;
    .aside-btn-box{
      overflow: hidden;
      .btn {
        float: right;
        margin-right: 15px;
        margin-top: 5px;
      }
    }
  }

  .home-right-box {
    height: 90vh;
    overflow: auto;
    padding-top: 4px;
    display: flex;
    flex-direction: column;
    .app-main{
      width: 100%;
      flex:1;
      position: relative;
      overflow: auto;
      padding:20px 30px;
    }
  }
}

.home-head-box{
  height: 10vh;
  background: #fff;
  box-shadow: 0px 3px 4px 0px #ccc;
  position: relative;
  min-height: 91px;
  .nav-lef{
    height: 100%;
    padding-left: 30px;
    img {
      width: 46px;
      margin-right: 20px;
    }
    h4{
      font-size: 24px;
    }
  }
  .nav-right {
    right: 20px;
    top: 50%;
    transform: translate(0px, -50%);
    position: absolute;
    color: #333;
    :nth-child(2) {
      margin-left: 20px;
    }
    .login-out{
      cursor: pointer;
    }
  }
}
</style>
<style lang="scss">
.home-wrap{
  .home-left-box{
    .el-menu{
      border-right: 0;
    }
  }
}
</style>
