<template>
  <section class="user-list-wrap">
    <el-row class="user-head">
      <el-form :model="userInfo" label-width="136px">
        <el-row :gutter="24">
          <el-col :span="8">
            <el-form-item label="订单I：">
              <el-input size="small" v-model.trim="userInfo.realName" placeholder="请输入" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="电话号码：">
              <el-input size="small" v-model.trim="userInfo.phone" placeholder="请输入"/>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="VIP类型：">
              <el-select size="small" v-model="userInfo.blackType" class="g-el-width">
                <el-option label="体验卡" value="1"/>
                <el-option label="月卡" value="2"/>
                <el-option label="季度卡" value="3"/>
                <el-option label="半年卡" value="4"/>
                <el-option label="年卡" value="5"/>
                <el-option label="永久卡" value="6"/>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="24"  class="head-btn-row">
          <el-col :span="12">
            <el-form-item label="日期范围:">
              <el-date-picker
                size="small"
                v-model="time"
                type="daterange"
                range-separator="-"
                value-format="yyyy-MM-dd"
                :clearable="false"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12" class="head-btn-col g-end-cen">
            <el-form-item>
              <el-button 
                size="small" 
                type="primary" 
                @click="userInfoList('manual')"
              >查&nbsp;&nbsp;询</el-button>
              <el-button 
                size="small" 
                type="primary" 
                @click="userInfoInit"
              >重&nbsp;&nbsp;置</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-row>
    <el-row>
      <el-table :data="userArr" border max-height="500">
        <el-table-column label="订单ID" min-width="140"  >
          <template slot-scope="scope">
            <router-link :to="'/user/userDetail?pid='+scope.row.pid" class="lb-table-text">{{scope.row.pid}}</router-link>
          </template>
        </el-table-column>
        <el-table-column prop="phone" label="VIP类型" min-width="120" />
        <el-table-column prop="realName" label="订单金额" min-width="100" />
        <el-table-column prop="cerNo" label="手机号码" min-width="200" />
        <el-table-column prop="accStatus" label="下单日期" min-width="100" />
        <el-table-column prop="creditAuthStatusName" label="付款状态" min-width="110" />
        <el-table-column prop="registerTime" label="付款时间" min-width="200" />
      </el-table>
      <el-pagination
        class="lb-pagination-box"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-sizes="[10,20,50]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </el-row>
  </section>
</template>
<script lang="ts">
import api from '@/api';
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})

export default class UserList extends Vue {
  userInfo    :object = {} ;
  userArr     :any[]  = [] ;//列表数据
  currentPage :number = 1  ;  //当前页
  pageSize    :number = 10 ;//每页总数
  total       :number = 0  ;  //总页数
  time        :any[]  = []

  //重置
  userInfoInit () {
    this.userInfo = {};
    this.currentPage = 1;
    this.pageSize = 10;
    this.userInfoList('open');
  }

  //用户信息列表
  userInfoList (type:any) {
    if(type =='manual' && this.currentPage !=1){
      this.currentPage = 1;
    }

    let obj = {
      currentPage: this.currentPage, 
      pageSize   : this.pageSize,
      'data'     : this.userInfo
    }


    // api.userInfoListFn(obj).then((res:any)=>{
    //   if (res.code == 1) {
    //     this.total       = res.data.total;
    //     this.userArr     = res.data.list;

    //     if(this.userArr.length ==0 && this.currentPage !=1){
    //       this.userInfoList('open');
    //       return false;
    //     }
    //   } 
    // })
  }
  // 分页器
  handleSizeChange(val:any) {
    this.currentPage = 1;
    this.pageSize = val;
    this.userInfoList('open');
  }
  //页数
  handleCurrentChange(val:any) {
    this.currentPage = val;
    this.userInfoList('open');
  }

  mounted (){
    //用户信息列表
    this.userInfoList('open');
  }
}
</script>
<style lang="scss" scoped>
.user-list-wrap{
  background: $col-f;
}
</style>
