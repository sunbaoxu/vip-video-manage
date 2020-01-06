
import { ActionTree } from 'vuex';




const actions: ActionTree<any,any> =  {
  async setMerOpenStatus({state,commit},status:any){
    commit('SET_TOKEN', status);
  }
};

export default actions;