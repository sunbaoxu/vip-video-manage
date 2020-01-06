
import { MutationTree } from 'vuex'

const mutations:MutationTree<any> =  {
  'SET_TOKEN'(state:any,data:any):void {
    state.merOpenStatus = data.status;
  }
}


export default mutations;

