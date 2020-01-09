<template>
  <div class="tags-view-container">
    <scroll-pane class='tags-view-wrapper' ref='scrollPane'>
      <router-link 
        ref='tag' 
        class="tags-view-item" 
        :class="isActive(tag)?'active':''"
        v-for="(tag,i) in visitedViews"
        :to="tag.path" 
        :key="i" 
        @contextmenu.prevent.native="openMenu(tag,$event)"
      >
        {{tag.title}}
        <span class='el-icon-close' @click.prevent.stop='closeSelectedTag(tag)'></span>
      </router-link>
    </scroll-pane>
  </div>
</template>

<script lang="ts">
import ScrollPane from "$view/home/ScrollPane.vue";
import { Component, Prop, Vue ,Watch} from 'vue-property-decorator';
import {State,Action,Getter} from 'vuex-class';

@Component({
  components :{
    ScrollPane
  }
})

export default class TagsViews extends Vue {

  @Getter('visitedViews')  visitedViews:any;
  @Action('addVisitedViews') private addVisitedViews: any;
  @Action('delVisitedViews') private delVisitedViews: any;

  @Watch('$route') private handleRouteChange(to:any):void{
    this.addVisitedViews(this.$route);
  }

  openMenu(tag:any, e:any) {
    this.$router.push(tag.path.path);
  }


  //关闭当前view
  closeSelectedTag(view:any) {
    this.delVisitedViews(view).then((views:any) => {
      if (this.isActive(view)) {
        const latestView = views[0];
        if (latestView) {
          this.$router.push(latestView.path);
        } else {
          this.$router.push('/')
        }
      }
    })
  }

  //是否选中当前页
  isActive(route:any) {
    if((route.name  == 'CheckDetail' || route.name  == 'UrgeDetail' )&& route.name === this.$route.name){
      return route.path.query.orderId === this.$route.query.orderId
    }else{
      return route.path.path === this.$route.path || route.name === this.$route.name
    }
    
  }



  mounted() {
    this.addVisitedViews(this.$route)
  }

  // isActive(route:any) {
  //   if((route.name  == 'CheckDetail' || route.name  == 'UrgeDetail' )&& route.name === this.$route.name){
  //     return route.path.query.orderId === this.$route.query.orderId
  //   }else{
  //     return route.path.path === this.$route.path || route.name === this.$route.name
  //   }
  // }
  
}
//   watch: {
//     $route() {
//       this.addVisitedViews(this.$route);
//     }
//   },
//   methods: {
//     ...mapActions(['addVisitedViews','delVisitedViews']),
//     //是否选中当前页
//     isActive(route) {
//       if((route.name  == 'CheckDetail' || route.name  == 'UrgeDetail' )&& route.name === this.$route.name){
//         return route.path.query.orderId === this.$route.query.orderId
//       }else{
//         return route.path.path === this.$route.path || route.name === this.$route.name
//       }
      
//     },
//     //关闭当前view
//     closeSelectedTag(view) {
//       this.delVisitedViews(view).then((views) => {
//         if (this.isActive(view)) {
//           const latestView = views[0];
//           if (latestView) {
//             this.$router.push(latestView.path);
//           } else {
//             this.$router.push('/')
//           }
//         }
//       })
//     },
//     //右键菜单 --执行点击操作
//     openMenu(tag, e) {
//       this.$router.push(tag.path.path);
//     }
//   },
//   mounted() {
//     this.addVisitedViews(this.$route)
//   }
// }
</script>

<style lang="scss" scoped>
  .tags-view-container {
    .tags-view-wrapper {
      .tags-view-item {
        display: inline-block;
        position: relative;
        height: 26px;
        line-height: 24px;
        border: 1px solid #bbdefe;
        color: #495060;
        background: #fff;
        padding: 0 8px;
        font-size: 12px;
        margin-left: 5px;
        // margin-top: 12px;
        &:first-of-type {
          margin-left: 15px;
        }
        &.active {
          background-color: #409EFF;
          color: #fff;
          &::before {
            content: '';
            background: #fff;
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            position: relative;
            margin-right: 2px;
          }
        }
      }
    }
    .contextmenu {
      margin: 0;
      background: #fff;
      z-index: 100;
      position: absolute;
      list-style-type: none;
      padding: 5px 0;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 400;
      color: #333;
      box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);
      li {
        margin: 0;
        padding: 7px 16px;
        cursor: pointer;
        &:hover {
          background: #eee;
        }
      }
    }
  }
</style>

<style lang="scss">
.tags-view-wrapper {
  .tags-view-item {
    .el-icon-close {
      width: 16px;
      height: 16px;
      line-height: 16px;
      border-radius: 50%;
      text-align: center;
      transition: all .3s cubic-bezier(.645, .045, .355, 1);
      transform-origin: 100% 50%;
      &:before {
        transform: scale(.6);
        display: inline-block;
      }
      &:hover {
        background-color: #b4bccc;
        color: #fff;
      }
    }
  }
}
</style>
