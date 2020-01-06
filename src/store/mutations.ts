
import { MutationTree } from 'vuex'

const mutations:MutationTree<any> =  {
  'SET_TOKEN'(state:any,data:any):void {
    state.merOpenStatus = data.status;
  },
  'SET_ISCOLLAPSE'(state:any,isCollapse:any):void {
    state.isCollapse = isCollapse;
  },
  'ADD_VISITEDVIEWS'(state:any,view:any):void {
    //检查arr是否有当前项
    let obj = {
      name: view.name,
      path: {path: view.path, query: view.query},
      title: view.query.userName || view.meta.title || 'no-name'
    };

    if(obj.name =='MerDetail'){
      if(view.query.merchantId){
        obj.title = '商户详情'
      }
    }
    
    let async = state.visitedViews.some((v:any,ind:any)=>{
        if((v.name =='RefundVoucher' || v.name =='RefundApply') &&(view.name == 'RefundVoucher' || view.name == 'RefundApply')){
          state.visitedViews.splice(ind,1,obj);
          return true;
        } else if(v.name == view.name && !(view.name=='CheckDetail' || view.name =='UrgeDetail')){
          state.visitedViews.splice(ind,1,obj);
          return true;
        }  else if((view.name  == 'CheckDetail' || view.name =='UrgeDetail') && v.name == view.name ){
          if(v.path.query.orderId === view.query.orderId){
            state.visitedViews.splice(ind,1,obj);
            return  true;
          }
          return false;
        }
        return false;
      });

    if (!async){
      state.visitedViews.unshift(obj);
    }
    sessionStorage.setItem('lb-jyfq-manage-visited-views',JSON.stringify(state.visitedViews));
  },
  //删除某个view
  'DEL_VISITEDVIEWS'(state:any,view:any):void {
    state.visitedViews.map((m:any,i:any)=>{
      let async = false;
      
      
      if(m.path.path =='/loan/checkDetail' || m.path.path =='/loan/urgeDetail'){
        if(m.path.path == view.path.path && m.path.query.orderId == view.path.query.orderId){
          async = true;
        }
      } else if(m.path.path == view.path.path){
        async = true;
      }
  
      if(async){
        state.visitedViews.splice(i,1);
        sessionStorage.setItem('lb-jyfq-manage-visited-views',JSON.stringify(state.visitedViews));
        return ;
      }
    });
  }
}


export default mutations;

