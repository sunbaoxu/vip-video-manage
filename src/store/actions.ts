
import { ActionTree } from 'vuex';




const actions: ActionTree<any,any> =  {
  async setMerOpenStatus({state,commit},status:any){
    commit('SET_TOKEN', status);
  },
  async setIsCollapse({state,commit},isCollapse:any){
    commit('SET_ISCOLLAPSE', isCollapse);
  }
};


export default actions;