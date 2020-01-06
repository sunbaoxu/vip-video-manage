
import { MutationTree } from 'vuex'

const mutations:MutationTree<any> =  {
  'SET_TOKEN'(state:any,data:any):void {
    state.merOpenStatus = data.status;
  },
  'SET_ISCOLLAPSE'(state:any,isCollapse:any):void {
    state.isCollapse = isCollapse;
  }
}


export default mutations;

