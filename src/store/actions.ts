
import { ActionTree } from 'vuex';




const actions: ActionTree<any,any> =  {
  async setMerOpenStatus({state,commit},status:any){
    commit('SET_TOKEN', status);
  },
  async setIsCollapse({state,commit},isCollapse:any){
    commit('SET_ISCOLLAPSE', isCollapse);
  },
  async addVisitedViews({state,commit},visitedViews:any){
    commit('ADD_VISITEDVIEWS', visitedViews);
  },
  async delVisitedViews({state,commit},visitedViews:any){
    // commit('DEL_VISITEDVIEWS', visitedViews)
    // resolve([...state.visitedViews])
    return new Promise((resolve) => {
      commit('DEL_VISITEDVIEWS', visitedViews)
      resolve([...state.visitedViews])
    })
  }
};

// return new Promise((resolve) => {
//   commit('CHECK_VISITED_VIEWS', view)
//   resolve([...state.visitedViews])
// })


export default actions;