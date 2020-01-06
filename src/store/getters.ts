import {GetterTree} from 'vuex';

const getters: GetterTree<any,any> = {
  'token'(state: any,) : any {
    return state.merOpenStatus
  },
  'baseUrl' (state:any):any {
    return state.baseUrl
  },
  'isCollapse' (state:any):any {
    return state.isCollapse
  },
  'visitedViews' (state:any):any {
    return state.visitedViews
  }
}

export default getters