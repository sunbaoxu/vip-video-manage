import {GetterTree} from 'vuex';

const getters: GetterTree<any,any> = {
  'token'(state: any,) : any {
    return state.merOpenStatus
  },
  'baseUrl' (state:any):any {
    return state.baseUrl
  }
}

export default getters