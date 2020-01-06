<template>
  <div class="error-wrap g-back-cover">
    <header-box :async="async"></header-box>
    <section class="bug-main" :class="async?'m-main':'pc-main'">
      <img :src="baseUrl+'/static/img/back404.png'" alt="">
    </section>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import headerBox from '$common/header.vue';
import {mapGetters} from 'vuex';

@Component({
  components :{
    headerBox
  },
  computed :{
    ...mapGetters(['baseUrl'])
  }
})

export default class HeaderBox extends Vue {
  win:any = window;
  async :boolean = false;

  userAgentType ():boolean {
    return /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
  }

  mounted (){
    this.async = this.userAgentType();
    
    this.win.onresize = ()=>{
      this.async = this.userAgentType();
    }

    console.log(process.env)
  }

  destroyed () {
    this.win.onresize = undefined;
  }
}
</script>
<style lang="scss" scoped>
.error-wrap{
  .bug-main{
    &.pc-main{
      padding-top:240px;
      img{
        display: block;
        margin:0 auto;
        width: 590px;
      }
    }
    &.m-main{
      padding-top:160px;
      img{
        display: block;
        margin:0 auto;
        width: 80%;
      }
    }
  }
}
</style>
