import axios from 'axios'
import {host} from './baseUrl';

// import utils from '$utils'
// import {
//   Toast,
//   Loading
// } from '$lbMoveUi';
axios.defaults.timeout = 30000;                        //响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';  //配置请求头
//配置接口地址
axios.defaults.baseURL = host;

//请求拦截
axios.interceptors.request.use((config)=>{
  // utils.setReHeader(config)
  return config
});

//请求后
axios.interceptors.response.use((res) => {
  // Loading.close();
  //未登录，跳转原生登陆页
  // if(res.data.code == -405){
  //   //这个可以关闭安卓系统的手机
  //  document.addEventListener("WeixinJSBridgeReady",()=>{WeixinJSBridge.call("closeWindow")},false);
  //   //这个可以关闭ios系统的手机
  //   WeixinJSBridge.call("closeWindow");
  // } 
  // else if(res.data.code == -200 || res.data.code == -403 || res.config.url.indexOf('https://ccdcapi.alipay.com') !=-1){

  // }
  // else if(res.data.code !=1){
  //   // Toast(res.data.message)
  // }

  return res
});

//请求前
export function fetch(url:string, params:void,type:string) {
  //有请求类型，显示loading
  // if(!loadingAsync){Loading.open();}


  return new Promise((resolve, reject) => {
    if(type=='post'){
      axios.post(url, params)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
    } else if(type == 'get'){
      axios.get(url,{params})
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
    }
  })
}

