
import { ActionTree } from 'vuex';




const actions: ActionTree<any,any> =  {
  async setMerOpenStatus({state,commit},status:any){
    commit('SET_TOKEN', status);
  },
  async setIsCollapse({state,commit},isCollapse:any){
    commit('SET_ISCOLLAPSE', isCollapse);
  },
  async addVisitedViews({state,commit},visitedViews:any){
    console.log(visitedViews,'aaaaaaa')
    commit('ADD_VISITEDVIEWS', visitedViews);
  }
};


export default actions;